/**
 * ==================================================
 * NUOrder — AI-Driven Food Platform
 * Server-Side Application Tools (Task 4.4)
 * Authoritative tool execution engine for NU AI Copilot
 * ==================================================
 */

const { NU_FOOD_ITEMS, NU_RESTAURANTS, NU_CATEGORIES } = require('../../data');

/**
 * 1. get_food_item
 */
function get_food_item({ foodId }) {
    const food = NU_FOOD_ITEMS.find(f => f.id === foodId);
    if (!food) return { found: false, message: `Food item '${foodId}' not found.` };
    return { found: true, food };
}

/**
 * 2. search_food_items
 */
function search_food_items({ query = '', isVeg = null, maxPrice = null, minProtein = null, maxCalories = null, maxFiber = null, restaurantId = null, limit = 6 }) {
    const q = (query || '').toLowerCase().trim();
    let results = NU_FOOD_ITEMS.filter(f => {
        if (restaurantId && f.restaurantId !== restaurantId) return false;
        if (isVeg !== null && f.isVeg !== isVeg) return false;
        if (maxPrice !== null && f.price > maxPrice) return false;
        if (minProtein !== null && (f.nutrition?.protein || 0) < minProtein) return false;
        if (maxCalories !== null && (f.nutrition?.calories || 0) > maxCalories) return false;
        if (maxFiber !== null && (f.nutrition?.fiber || 0) < maxFiber) return false;

        if (!q) return true;

        const nameMatch = f.name.toLowerCase().includes(q);
        const cuisineMatch = f.cuisine.toLowerCase().includes(q);
        const tagMatch = (f.tags || []).some(t => t.toLowerCase().includes(q));
        const ingMatch = (f.ingredients || []).some(i => i.toLowerCase().includes(q));
        return nameMatch || cuisineMatch || tagMatch || ingMatch;
    });

    results = results.slice(0, limit);
    return {
        count: results.length,
        items: results.map(f => ({
            id: f.id,
            name: f.name,
            price: f.price,
            isVeg: f.isVeg,
            restaurantId: f.restaurantId,
            rating: f.rating,
            nutrition: f.nutrition
        }))
    };
}

/**
 * 3. search_restaurants
 */
function search_restaurants({ city = 'Hyderabad', query = '' }) {
    const q = (query || '').toLowerCase().trim();
    let restList = NU_RESTAURANTS.filter(r => {
        if (city && r.city.toLowerCase() !== city.toLowerCase()) return false;
        if (!q) return true;
        return r.name.toLowerCase().includes(q) || r.cuisines.some(c => c.toLowerCase().includes(q));
    });

    return {
        count: restList.length,
        restaurants: restList.map(r => ({
            id: r.id,
            name: r.name,
            city: r.city,
            area: r.area,
            rating: r.rating,
            deliveryTime: r.deliveryTime,
            cuisines: r.cuisines,
            offers: r.offers
        }))
    };
}

/**
 * 4. get_restaurant_menu
 */
function get_restaurant_menu({ restaurantId }) {
    const rest = NU_RESTAURANTS.find(r => r.id === restaurantId);
    if (!rest) return { found: false, message: `Restaurant '${restaurantId}' not found.` };

    const menu = NU_FOOD_ITEMS.filter(f => f.restaurantId === restaurantId);
    return {
        found: true,
        restaurant: { id: rest.id, name: rest.name, area: rest.area, rating: rest.rating },
        itemCount: menu.length,
        items: menu.map(f => ({ id: f.id, name: f.name, price: f.price, isVeg: f.isVeg, nutrition: f.nutrition }))
    };
}

/**
 * 5. get_cart
 */
function get_cart({ cartItems = [] }) {
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
        return { empty: true, itemCount: 0, items: [], subtotal: 0 };
    }

    let subtotal = 0;
    let totalQty = 0;
    const items = cartItems.map(c => {
        const food = NU_FOOD_ITEMS.find(f => f.id === (c.foodId || c.id)) || c;
        const qty = c.quantity || 1;
        const price = food.price || 0;
        const itemTotal = price * qty;
        subtotal += itemTotal;
        totalQty += qty;
        return {
            id: food.id,
            name: food.name,
            price,
            quantity: qty,
            itemTotal,
            nutrition: food.nutrition
        };
    });

    return {
        empty: false,
        uniqueItemCount: items.length,
        totalQuantity: totalQty,
        items,
        subtotal
    };
}

/**
 * 6. get_cart_nutrition (Calculates exact serving x quantity)
 */
function get_cart_nutrition({ cartItems = [] }) {
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
        return {
            calories: 0,
            protein: 0,
            carbohydrates: 0,
            fat: 0,
            fiber: 0,
            sugar: 0,
            sodium: 0,
            itemCount: 0,
            highestCalorieItem: null,
            highestProteinItem: null
        };
    }

    let calories = 0;
    let protein = 0;
    let carbohydrates = 0;
    let fat = 0;
    let fiber = 0;
    let sugar = 0;
    let sodium = 0;

    let highestCal = { name: '', calories: 0 };
    let highestProt = { name: '', protein: 0 };

    cartItems.forEach(c => {
        const food = NU_FOOD_ITEMS.find(f => f.id === (c.foodId || c.id)) || c;
        const qty = c.quantity || 1;
        const n = food.nutrition || {};

        const itemCal = (n.calories || 0) * qty;
        const itemProt = (n.protein || 0) * qty;

        calories += itemCal;
        protein += itemProt;
        carbohydrates += (n.carbohydrates || 0) * qty;
        fat += (n.fat || 0) * qty;
        fiber += (n.fiber || 0) * qty;
        sugar += (n.sugar || 0) * qty;
        sodium += (n.sodium || 0) * qty;

        if (itemCal > highestCal.calories) {
            highestCal = { name: food.name, calories: itemCal };
        }
        if (itemProt > highestProt.protein) {
            highestProt = { name: food.name, protein: itemProt };
        }
    });

    return {
        calories,
        protein,
        carbohydrates,
        fat,
        fiber,
        sugar,
        sodium,
        itemCount: cartItems.length,
        highestCalorieItem: highestCal.name ? highestCal : null,
        highestProteinItem: highestProt.name ? highestProt : null
    };
}

/**
 * 7. calculate_cart_total
 */
function calculate_cart_total({ cartItems = [], couponCode = '', paymentMethod = 'UPI_PHONEPE', distanceKm = 2.5 }) {
    const cartInfo = get_cart({ cartItems });
    const subtotal = cartInfo.subtotal;

    let couponDiscount = 0;
    let appliedCoupon = '';

    if (couponCode) {
        const code = couponCode.toString().trim().toUpperCase();
        if (code === 'NUPREMIUM' && subtotal >= 399) {
            couponDiscount = 100;
            appliedCoupon = 'NUPREMIUM';
        } else if (code === 'NUPARTY' && subtotal >= 599) {
            couponDiscount = 150;
            appliedCoupon = 'NUPARTY';
        } else if (code === 'NUFIRST') {
            couponDiscount = Math.min(Math.round(subtotal * 0.20), 100);
            appliedCoupon = 'NUFIRST';
        }
    }

    const discountedSubtotal = Math.max(0, subtotal - couponDiscount);
    const deliveryFee = discountedSubtotal > 499 || subtotal === 0 ? 0 : 35;
    const taxes = Math.round(discountedSubtotal * 0.05);

    const isCod = paymentMethod === 'COD' || paymentMethod === 'Cash on Delivery';
    let codFee = 0;
    if (isCod && subtotal > 0) {
        const dist = typeof distanceKm === 'number' && !isNaN(distanceKm) ? distanceKm : 2.5;
        if (dist <= 2.0) codFee = 20;
        else if (dist <= 5.0) codFee = 30;
        else if (dist <= 8.0) codFee = 40;
        else codFee = 50;
    }

    const grandTotal = subtotal === 0 ? 0 : (discountedSubtotal + deliveryFee + taxes + codFee);

    return {
        subtotal,
        couponCode: appliedCoupon,
        couponDiscount,
        discountedSubtotal,
        deliveryFee,
        taxes,
        codFee,
        grandTotal
    };
}

/**
 * 8. get_available_coupons
 */
function get_available_coupons() {
    return {
        coupons: [
            { code: 'NUFIRST', description: '20% OFF up to ₹100', minOrder: 0, discountRule: '20% discount (max ₹100)' },
            { code: 'NUPREMIUM', description: '₹100 OFF on orders ₹399+', minOrder: 399, discountRule: 'Flat ₹100 discount' },
            { code: 'NUPARTY', description: '₹150 OFF on orders ₹599+', minOrder: 599, discountRule: 'Flat ₹150 discount' }
        ]
    };
}

/**
 * 9. validate_coupon
 */
function validate_coupon({ couponCode, subtotal = 0 }) {
    const code = (couponCode || '').toString().trim().toUpperCase();
    if (!code) return { valid: false, message: 'Please enter a coupon code.' };

    if (code === 'NUPREMIUM') {
        if (subtotal < 399) return { valid: false, message: 'Coupon NUPREMIUM requires a minimum order of ₹399.', code };
        return { valid: true, code, discount: 100, message: 'NUPREMIUM applied! You saved ₹100.' };
    } else if (code === 'NUPARTY') {
        if (subtotal < 599) return { valid: false, message: 'Coupon NUPARTY requires a minimum order of ₹599.', code };
        return { valid: true, code, discount: 150, message: 'NUPARTY applied! You saved ₹150.' };
    } else if (code === 'NUFIRST') {
        const discount = Math.min(Math.round(subtotal * 0.20), 100);
        return { valid: true, code, discount, message: `NUFIRST applied! You saved ₹${discount}.` };
    }

    return { valid: false, message: 'Invalid coupon code. Try NUFIRST, NUPREMIUM, or NUPARTY.', code };
}

/**
 * 10. get_delivery_options
 */
function get_delivery_options({ city = 'Hyderabad' }) {
    return {
        city,
        standardDelivery: { time: '25–35 mins', fee: '₹35 (FREE on orders ₹499+)' },
        expressDelivery: { time: '15–20 mins', fee: '₹55' }
    };
}

/**
 * 11. get_current_location
 */
function get_current_location({ context = {} }) {
    return {
        city: context.currentCity || 'Hyderabad',
        savedCities: ['Hyderabad', 'Khammam', 'Warangal', 'Vijayawada', 'Visakhapatnam', 'Bengaluru', 'Chennai']
    };
}

/**
 * 12. get_nutrition_details
 */
function get_nutrition_details({ foodId }) {
    const food = NU_FOOD_ITEMS.find(f => f.id === foodId);
    if (!food) return { found: false, message: `Food '${foodId}' not found.` };

    const n = food.nutrition || {};
    const meta = food.nutritionMeta || {
        sourceType: 'GOVERNMENT_DATABASE',
        sourceName: 'ICMR-NIN IFCT 2017',
        sourceUrl: 'https://www.nin.res.in/ebooks/IFCT2017.pdf',
        status: 'ESTIMATED',
        confidence: 'MEDIUM',
        lastVerified: '2026-08-24',
        method: 'Standardized food composition estimate (ICMR-NIN 2017)'
    };

    return {
        found: true,
        foodId: food.id,
        foodName: food.name,
        servingSize: n.servingSize || '1 Portion',
        nutrition: {
            calories: n.calories,
            protein: n.protein,
            carbohydrates: n.carbohydrates,
            fat: n.fat,
            fiber: n.fiber,
            sugar: n.sugar,
            sodium: n.sodium
        },
        meta
    };
}

module.exports = {
    get_food_item,
    search_food_items,
    search_restaurants,
    get_restaurant_menu,
    get_cart,
    get_cart_nutrition,
    calculate_cart_total,
    get_available_coupons,
    validate_coupon,
    get_delivery_options,
    get_current_location,
    get_nutrition_details
};
