/**
 * ==================================================
 * NUOrder — AI-Driven Food Platform
 * Real Backend Order Management System (Task 4.0)
 * ==================================================
 */

const express = require('express');
const router = express.Router();
const path = require('path');
const crypto = require('crypto');

// Load Server Data Set
const dataPath = path.join(__dirname, '../../data.js');
const dataModule = require(dataPath);
const NU_FOOD_ITEMS = dataModule.NU_FOOD_ITEMS || global.NU_FOOD_ITEMS || [];
const NU_RESTAURANTS = dataModule.NU_RESTAURANTS || global.NU_RESTAURANTS || [];

const { OrderService } = require('../models/order.model');

/**
 * Helper: Extract & Validate Authenticated User
 */
function getAuthUser(req) {
    const authHeader = req.headers['authorization'];
    let userId = 'demo-user-123';

    if (authHeader && authHeader.startsWith('Bearer ')) {
        userId = authHeader.substring(7).trim();
    } else if (req.headers['x-user-id']) {
        userId = req.headers['x-user-id'].toString().trim();
    } else if (req.body && req.body.userId) {
        userId = req.body.userId.toString().trim();
    }

    if (!userId) {
        userId = 'demo-user-123';
    }

    return { userId };
}

/**
 * Helper: Recalculate Nutrition
 */
function calculateItemNutrition(food, qty) {
    const defaultNutr = {
        calories: 320,
        protein: 24,
        carbohydrates: 30,
        fat: 10,
        fiber: 3,
        sugar: 4,
        sodium: 450
    };

    const base = food.nutrition || defaultNutr;
    return {
        calories: Math.round((base.calories || 320) * qty),
        protein: Math.round((base.protein || 24) * qty),
        carbohydrates: Math.round((base.carbohydrates || 30) * qty),
        fat: Math.round((base.fat || 10) * qty),
        fiber: Math.round((base.fiber || 3) * qty),
        sugar: Math.round((base.sugar || 4) * qty),
        sodium: Math.round((base.sodium || 450) * qty)
    };
}

/**
 * POST /api/orders
 * Validate payload server-side & create order
 */
router.post('/', async (req, res) => {
    try {
        const { userId } = getAuthUser(req);
        const {
            items,
            restaurantId,
            deliveryAddress,
            couponCode,
            deliveryType = 'standard',
            paymentMethod = 'UPI'
        } = req.body;

        // 1. Validate Items Array
        if (!Array.isArray(items) || items.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Order items cannot be empty.',
                code: 'EMPTY_ITEMS'
            });
        }

        // 2. Validate Restaurant ID
        if (!restaurantId) {
            return res.status(400).json({
                success: false,
                message: 'Restaurant ID is required.',
                code: 'MISSING_RESTAURANT'
            });
        }

        const restaurant = NU_RESTAURANTS.find(r => r.id === restaurantId);
        if (!restaurant) {
            return res.status(400).json({
                success: false,
                message: `Invalid restaurant ID: ${restaurantId}`,
                code: 'INVALID_RESTAURANT'
            });
        }

        // 3. Server-Side Recalculation & Validation of Food Items
        let subtotal = 0;
        const verifiedItems = [];
        const orderNutrition = {
            calories: 0,
            protein: 0,
            carbohydrates: 0,
            fat: 0,
            fiber: 0,
            sugar: 0,
            sodium: 0
        };

        for (const inputItem of items) {
            const foodId = inputItem.foodId || inputItem.id;
            const quantity = parseInt(inputItem.quantity, 10);

            if (!foodId) {
                return res.status(400).json({
                    success: false,
                    message: 'Missing food ID in item payload.',
                    code: 'INVALID_FOOD_ID'
                });
            }

            if (isNaN(quantity) || quantity <= 0) {
                return res.status(400).json({
                    success: false,
                    message: `Invalid quantity '${inputItem.quantity}' for food ID '${foodId}'.`,
                    code: 'INVALID_QUANTITY'
                });
            }

            const serverFood = NU_FOOD_ITEMS.find(f => f.id === foodId);
            if (!serverFood) {
                return res.status(400).json({
                    success: false,
                    message: `Food item '${foodId}' does not exist in food menu.`,
                    code: 'INVALID_FOOD_ID'
                });
            }

            if (serverFood.restaurantId !== restaurantId) {
                return res.status(400).json({
                    success: false,
                    message: `Food item '${serverFood.name}' does not belong to restaurant '${restaurant.name}'.`,
                    code: 'RESTAURANT_MISMATCH'
                });
            }

            // Recalculate price & nutrition with server data
            const unitPrice = serverFood.price;
            const totalPrice = unitPrice * quantity;
            subtotal += totalPrice;

            const itemNutr = calculateItemNutrition(serverFood, quantity);
            orderNutrition.calories += itemNutr.calories;
            orderNutrition.protein += itemNutr.protein;
            orderNutrition.carbohydrates += itemNutr.carbohydrates;
            orderNutrition.fat += itemNutr.fat;
            orderNutrition.fiber += itemNutr.fiber;
            orderNutrition.sugar += itemNutr.sugar;
            orderNutrition.sodium += itemNutr.sodium;

            verifiedItems.push({
                foodId: serverFood.id,
                restaurantId: serverFood.restaurantId,
                name: serverFood.name,
                quantity,
                unitPrice,
                totalPrice,
                nutrition: itemNutr
            });
        }

        // 4. Server-Side Coupon Recalculation
        let couponDiscount = 0;
        let appliedCouponCode = '';

        if (couponCode) {
            const cleanCode = couponCode.toString().trim().toUpperCase();
            if (cleanCode === 'NUPREMIUM') {
                if (subtotal >= 399) {
                    couponDiscount = 100;
                    appliedCouponCode = 'NUPREMIUM';
                }
            } else if (cleanCode === 'NUPARTY') {
                if (subtotal >= 599) {
                    couponDiscount = 150;
                    appliedCouponCode = 'NUPARTY';
                }
            } else if (cleanCode === 'NUFIRST') {
                couponDiscount = Math.min(Math.round(subtotal * 0.20), 100);
                appliedCouponCode = 'NUFIRST';
            }
        }

        // 5. Server-Side Delivery Fee & Taxes Calculation
        let deliveryFee = 25;
        if (deliveryType === 'express') {
            deliveryFee = 45;
        } else if (subtotal >= 500) {
            deliveryFee = 0;
        }

        const restaurantCharges = Math.round(subtotal * 0.05);

        // 6. Supported Payment Method Validation & COD Fee Calculation
        const validMethods = [
            'UPI_PHONEPE', 'UPI_PAYTM', 'UPI_GOOGLE_PAY', 'UPI_OTHER',
            'CARD_VISA', 'CARD_MASTERCARD', 'CARD_RUPAY', 'CARD_AMEX',
            'COD', 'UPI', 'Credit/Debit Card', 'Net Banking', 'Wallets', 'Cash on Delivery'
        ];

        if (!validMethods.includes(paymentMethod)) {
            return res.status(400).json({
                success: false,
                message: `Invalid payment method: '${paymentMethod}'.`,
                code: 'INVALID_PAYMENT_METHOD'
            });
        }

        const isCod = paymentMethod === 'COD' || paymentMethod === 'Cash on Delivery';
        const distanceKm = restaurant.distanceKm || 2.5;
        let codFee = 0;
        if (isCod) {
            if (distanceKm <= 2.0) codFee = 20;
            else if (distanceKm <= 5.0) codFee = 30;
            else if (distanceKm <= 8.0) codFee = 40;
            else codFee = 50;
        }

        const grandTotal = Math.max(0, subtotal - couponDiscount + deliveryFee + restaurantCharges + codFee);

        // 7. Generate Unique Order ID (NUO-XXXXXX)
        const randomHex = crypto.randomBytes(3).toString('hex').toUpperCase();
        const orderId = `NUO-${randomHex}`;

        // 8. Build Complete Order Record
        const orderRecord = {
            orderId,
            userId,
            items: verifiedItems,
            restaurantId,
            deliveryAddress: {
                fullName: deliveryAddress?.fullName || 'Valued Customer',
                phone: deliveryAddress?.phone || '9876543210',
                city: deliveryAddress?.city || restaurant.city || 'Hyderabad',
                area: deliveryAddress?.area || restaurant.area || 'Madhapur',
                street: deliveryAddress?.street || 'Road No. 36',
                landmark: deliveryAddress?.landmark || '',
                label: deliveryAddress?.label || 'Home'
            },
            pricing: {
                itemTotal: subtotal,
                couponCode: appliedCouponCode,
                couponDiscount,
                deliveryFee,
                restaurantCharges,
                codFee,
                grandTotal
            },
            delivery: {
                type: deliveryType,
                estimatedTime: deliveryType === 'express' ? '15–20 mins' : `${restaurant.deliveryTime || 25}–${(restaurant.deliveryTime || 25) + 10} mins`
            },
            payment: {
                method: paymentMethod,
                status: 'PENDING'
            },
            nutrition: orderNutrition,
            status: 'PLACED'
        };

        const createdOrder = await OrderService.create(orderRecord);

        return res.status(201).json({
            success: true,
            message: 'Order placed successfully.',
            data: createdOrder
        });
    } catch (err) {
        console.error('Order creation error:', err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error while placing order.',
            error: err.message,
            code: 'SERVER_ERROR'
        });
    }
});

/**
 * GET /api/orders
 * Retrieve orders for authenticated user
 */
router.get('/', async (req, res) => {
    try {
        const { userId } = getAuthUser(req);
        const userOrders = await OrderService.find({ userId });

        return res.json({
            success: true,
            message: 'Orders retrieved successfully.',
            data: userOrders
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Error fetching orders.',
            code: 'SERVER_ERROR'
        });
    }
});

/**
 * GET /api/orders/:orderId
 * Retrieve single order with ownership check
 */
router.get('/:orderId', async (req, res) => {
    try {
        const { userId } = getAuthUser(req);
        const { orderId } = req.params;

        const order = await OrderService.findOne({ orderId });

        if (!order) {
            return res.status(404).json({
                success: false,
                message: `Order '${orderId}' not found.`,
                code: 'NOT_FOUND'
            });
        }

        // Ownership Isolation Verification
        if (order.userId !== userId) {
            return res.status(403).json({
                success: false,
                message: 'Access denied. You do not own this order.',
                code: 'ACCESS_DENIED'
            });
        }

        return res.json({
            success: true,
            message: 'Order details retrieved successfully.',
            data: order
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Error fetching order details.',
            code: 'SERVER_ERROR'
        });
    }
});

/**
 * PATCH /api/orders/:orderId/cancel
 * Cancel order (allowed ONLY if PLACED or CONFIRMED)
 */
router.patch('/:orderId/cancel', async (req, res) => {
    try {
        const { userId } = getAuthUser(req);
        const { orderId } = req.params;

        const order = await OrderService.findOne({ orderId });

        if (!order) {
            return res.status(404).json({
                success: false,
                message: `Order '${orderId}' not found.`,
                code: 'NOT_FOUND'
            });
        }

        if (order.userId !== userId) {
            return res.status(403).json({
                success: false,
                message: 'Access denied. You cannot cancel another user\'s order.',
                code: 'ACCESS_DENIED'
            });
        }

        if (!['PLACED', 'CONFIRMED'].includes(order.status)) {
            return res.status(400).json({
                success: false,
                message: `Cannot cancel order at current status '${order.status}'. Cancellation allowed only for PLACED or CONFIRMED orders.`,
                code: 'CANCELLATION_REJECTED'
            });
        }

        order.status = 'CANCELLED';
        await order.save();

        return res.json({
            success: true,
            message: 'Order cancelled successfully.',
            data: order
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Error cancelling order.',
            code: 'SERVER_ERROR'
        });
    }
});

/**
 * POST /api/orders/:orderId/reorder
 * Prepare reorder payload from past order
 */
router.post('/:orderId/reorder', async (req, res) => {
    try {
        const { userId } = getAuthUser(req);
        const { orderId } = req.params;

        const oldOrder = await OrderService.findOne({ orderId });

        if (!oldOrder) {
            return res.status(404).json({
                success: false,
                message: `Original order '${orderId}' not found.`,
                code: 'NOT_FOUND'
            });
        }

        if (oldOrder.userId !== userId) {
            return res.status(403).json({
                success: false,
                message: 'Access denied. You cannot reorder from another user\'s history.',
                code: 'ACCESS_DENIED'
            });
        }

        const validReorderItems = [];
        for (const item of oldOrder.items) {
            const currentFood = NU_FOOD_ITEMS.find(f => f.id === item.foodId);
            if (currentFood) {
                validReorderItems.push({
                    foodId: currentFood.id,
                    name: currentFood.name,
                    price: currentFood.price,
                    quantity: item.quantity,
                    restaurantId: currentFood.restaurantId
                });
            }
        }

        if (validReorderItems.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'None of the items from this previous order are currently available.',
                code: 'ITEMS_UNAVAILABLE'
            });
        }

        return res.json({
            success: true,
            message: 'Items added to cart',
            data: {
                restaurantId: oldOrder.restaurantId,
                items: validReorderItems
            }
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Error processing reorder.',
            code: 'SERVER_ERROR'
        });
    }
});

/**
 * PATCH /api/orders/:orderId/status (Demo Status Progression Endpoint)
 */
router.patch('/:orderId/status', async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        const validStatuses = ['PLACED', 'CONFIRMED', 'PREPARING', 'OUT_FOR_DELIVERY', 'DELIVERED', 'CANCELLED'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: `Invalid status '${status}'. Must be one of: ${validStatuses.join(', ')}`,
                code: 'INVALID_STATUS'
            });
        }

        const order = await OrderService.findOne({ orderId });
        if (!order) {
            return res.status(404).json({
                success: false,
                message: `Order '${orderId}' not found.`,
                code: 'NOT_FOUND'
            });
        }

        order.status = status;
        await order.save();

        return res.json({
            success: true,
            message: `Order status updated to '${status}'.`,
            data: order
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Error updating order status.',
            code: 'SERVER_ERROR'
        });
    }
});

module.exports = router;
