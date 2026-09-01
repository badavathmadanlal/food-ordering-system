/**
 * ==================================================
 * NUOrder — AI-Driven Food Platform
 * MongoDB Order Model & In-Memory Store (Task 4.0)
 * ==================================================
 */

const mongoose = require('mongoose');
const { isMemoryStore } = require('../config/db');

// Schema Definition
const OrderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    userId: {
        type: String,
        required: true,
        index: true
    },
    items: [
        {
            foodId: { type: String, required: true },
            restaurantId: { type: String, required: true },
            name: { type: String, required: true },
            quantity: { type: Number, required: true, min: 1 },
            unitPrice: { type: Number, required: true },
            totalPrice: { type: Number, required: true },
            nutrition: {
                calories: { type: Number, default: 0 },
                protein: { type: Number, default: 0 },
                carbohydrates: { type: Number, default: 0 },
                fat: { type: Number, default: 0 },
                fiber: { type: Number, default: 0 },
                sugar: { type: Number, default: 0 },
                sodium: { type: Number, default: 0 }
            }
        }
    ],
    restaurantId: {
        type: String,
        required: true
    },
    deliveryAddress: {
        fullName: { type: String, default: 'Valued Customer' },
        phone: { type: String, default: '9876543210' },
        city: { type: String, default: 'Hyderabad' },
        area: { type: String, default: 'Madhapur' },
        street: { type: String, default: 'Road No. 36' },
        landmark: { type: String, default: '' },
        label: { type: String, default: 'Home' }
    },
    pricing: {
        itemTotal: { type: Number, required: true },
        couponCode: { type: String, default: '' },
        couponDiscount: { type: Number, default: 0 },
        deliveryFee: { type: Number, default: 0 },
        restaurantCharges: { type: Number, default: 0 },
        codFee: { type: Number, default: 0 },
        grandTotal: { type: Number, required: true }
    },
    delivery: {
        type: { type: String, default: 'standard' },
        estimatedTime: { type: String, default: '25–30 mins' }
    },
    payment: {
        method: { type: String, default: 'UPI' },
        status: { type: String, default: 'PENDING' }
    },
    nutrition: {
        calories: { type: Number, default: 0 },
        protein: { type: Number, default: 0 },
        carbohydrates: { type: Number, default: 0 },
        fat: { type: Number, default: 0 },
        fiber: { type: Number, default: 0 },
        sugar: { type: Number, default: 0 },
        sodium: { type: Number, default: 0 }
    },
    status: {
        type: String,
        enum: ['PLACED', 'CONFIRMED', 'PREPARING', 'OUT_FOR_DELIVERY', 'DELIVERED', 'CANCELLED'],
        default: 'PLACED',
        index: true
    }
}, {
    timestamps: true
});

// Indexes for performance
OrderSchema.index({ userId: 1, createdAt: -1 });
OrderSchema.index({ orderId: 1 });
OrderSchema.index({ status: 1 });

const MongooseOrderModel = mongoose.model('Order', OrderSchema);

// In-Memory Fallback Storage
const memoryStore = new Map();

class OrderService {
    static async create(orderData) {
        if (!isMemoryStore()) {
            const doc = new MongooseOrderModel(orderData);
            return await doc.save();
        } else {
            const now = new Date();
            const record = {
                ...orderData,
                _id: 'mem_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
                createdAt: now,
                updatedAt: now,
                save: async function() {
                    this.updatedAt = new Date();
                    memoryStore.set(this.orderId, { ...this });
                    return this;
                }
            };
            memoryStore.set(record.orderId, { ...record });
            return record;
        }
    }

    static async find(query = {}) {
        if (!isMemoryStore()) {
            return await MongooseOrderModel.find(query).sort({ createdAt: -1 }).lean();
        } else {
            let results = Array.from(memoryStore.values());
            if (query.userId) {
                results = results.filter(o => o.userId === query.userId);
            }
            if (query.status) {
                results = results.filter(o => o.status === query.status);
            }
            results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            return results;
        }
    }

    static async findOne(query = {}) {
        if (!isMemoryStore()) {
            return await MongooseOrderModel.findOne(query);
        } else {
            const all = Array.from(memoryStore.values());
            const match = all.find(o => {
                if (query.orderId && o.orderId !== query.orderId) return false;
                if (query.userId && o.userId !== query.userId) return false;
                return true;
            });
            if (!match) return null;
            return {
                ...match,
                save: async function() {
                    this.updatedAt = new Date();
                    memoryStore.set(this.orderId, { ...this });
                    return this;
                }
            };
        }
    }

    static async findOneAndUpdate(query, update, options = {}) {
        if (!isMemoryStore()) {
            return await MongooseOrderModel.findOneAndUpdate(query, update, { new: true, ...options });
        } else {
            const order = await this.findOne(query);
            if (!order) return null;
            if (update.$set) {
                Object.assign(order, update.$set);
            } else {
                Object.assign(order, update);
            }
            order.updatedAt = new Date();
            memoryStore.set(order.orderId, { ...order });
            return order;
        }
    }

    static clearMemoryStore() {
        memoryStore.clear();
    }
}

module.exports = {
    OrderModel: MongooseOrderModel,
    OrderService
};
