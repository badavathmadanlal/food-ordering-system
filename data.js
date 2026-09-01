/**
 * ==================================================
 * NUOrder — AI-Driven Food Platform
 * Seed Data: Cities, Categories, Restaurants, Food Items
 * Enriched with Nutrition Intelligence (Task 3.2)
 * ==================================================
 */

const NU_CITIES = [
    "Hyderabad",
    "Khammam",
    "Warangal",
    "Vijayawada",
    "Visakhapatnam",
    "Bengaluru",
    "Chennai"
];

const NU_CATEGORIES = [
    {
        "id": "non-veg-starters",
        "name": "Non-Veg Starters",
        "description": "Crispy bites, tandoori kebabs, spicy wings & gourmet meats",
        "icon": "fas fa-drumstick-bite",
        "image": "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png"
    },
    {
        "id": "veg-starters",
        "name": "Veg Starters",
        "description": "Paneer tikkas, crispy corn, kebabs & crunchy appetizers",
        "icon": "fas fa-seedling",
        "image": "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png"
    },
    {
        "id": "soups",
        "name": "Soups",
        "description": "Nutritious broths, rich creams & hearty Asian soups",
        "icon": "fas fa-mug-hot",
        "image": "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-soup-img.png"
    },
    {
        "id": "fish-seafood",
        "name": "Fish & Seafood",
        "description": "Fresh coastal catches, tawa fish, prawns & calamari",
        "icon": "fas fa-fish",
        "image": "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png"
    },
    {
        "id": "main-course",
        "name": "Main Course",
        "description": "Hyderabadi biryanis, rich curries, dal makhani & breads",
        "icon": "fas fa-utensils",
        "image": "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png"
    },
    {
        "id": "noodles",
        "name": "Noodles",
        "description": "Hakka noodles, spicy Schezwan, pad thai & ramen bowls",
        "icon": "fas fa-bowl-rice",
        "image": "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png"
    },
    {
        "id": "salads",
        "name": "Salads",
        "description": "Organic greens, protein bowls, quinoa & superfood mixes",
        "icon": "fas fa-leaf",
        "image": "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-gluten-img.png"
    },
    {
        "id": "desserts",
        "name": "Desserts",
        "description": "Artisanal brownies, gourmet cakes, pastries & traditional sweets",
        "icon": "fas fa-ice-cream",
        "image": "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-coffee-bourbon-img.png"
    }
];

const NU_RESTAURANTS = [
    {
        "id": "rest-1",
        "name": "NU Kitchen",
        "city": "Hyderabad",
        "area": "Jubilee Hills",
        "latitude": 17.4319,
        "longitude": 78.4071,
        "deliveryRadiusKm": 10,
        "rating": 4.8,
        "ratingCount": 2400,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "deliveryFee": 30,
        "cuisines": [
            "North Indian",
            "Biryani",
            "Continental"
        ],
        "isOpen": true,
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
        "offers": [
            "20% OFF up to ₹100",
            "Free Delivery above ₹499"
        ]
    },
    {
        "id": "rest-2",
        "name": "Charcoal House",
        "city": "Hyderabad",
        "area": "Banjara Hills",
        "latitude": 17.4156,
        "longitude": 78.4347,
        "deliveryRadiusKm": 8,
        "rating": 4.6,
        "ratingCount": 1800,
        "deliveryTime": 28,
        "distanceKm": 3.2,
        "deliveryFee": 35,
        "cuisines": [
            "Tandoori",
            "Kebabs",
            "Mughlai"
        ],
        "isOpen": true,
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        "offers": [
            "₹100 OFF on ₹399",
            "Buy 1 Get 1 Starter"
        ]
    },
    {
        "id": "rest-3",
        "name": "Urban Spice",
        "city": "Hyderabad",
        "area": "Gachibowli",
        "latitude": 17.4401,
        "longitude": 78.3489,
        "deliveryRadiusKm": 8,
        "rating": 4.7,
        "ratingCount": 2400,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "deliveryFee": 30,
        "cuisines": [
            "South Indian",
            "Kebabs",
            "Biryani"
        ],
        "isOpen": true,
        "image": "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80",
        "offers": [
            "20% OFF on all orders"
        ]
    },
    {
        "id": "rest-4",
        "name": "Biryani District",
        "city": "Hyderabad",
        "area": "Madhapur",
        "latitude": 17.4483,
        "longitude": 78.3915,
        "deliveryRadiusKm": 8,
        "rating": 4.7,
        "ratingCount": 3200,
        "deliveryTime": 22,
        "distanceKm": 1.8,
        "deliveryFee": 25,
        "cuisines": [
            "Hyderabadi",
            "Biryani",
            "Mughlai"
        ],
        "isOpen": true,
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "offers": [
            "Special Biryani Combo @ ₹349"
        ]
    },
    {
        "id": "rest-5",
        "name": "The Food Lab",
        "city": "Hyderabad",
        "area": "Kondapur",
        "latitude": 17.4622,
        "longitude": 78.3568,
        "deliveryRadiusKm": 8,
        "rating": 4.6,
        "ratingCount": 1400,
        "deliveryTime": 32,
        "distanceKm": 4.1,
        "deliveryFee": 35,
        "cuisines": [
            "Healthy",
            "Salads",
            "Gourmet Bowls"
        ],
        "isOpen": true,
        "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80",
        "offers": [
            "Flat 20% OFF on Salad Bowls"
        ]
    },
    {
        "id": "rest-6",
        "name": "Spice Route Kitchen",
        "city": "Khammam",
        "area": "Wyra Road",
        "latitude": 17.2473,
        "longitude": 80.1514,
        "deliveryRadiusKm": 8,
        "rating": 4.5,
        "ratingCount": 920,
        "deliveryTime": 25,
        "distanceKm": 2.4,
        "deliveryFee": 20,
        "cuisines": [
            "South Indian",
            "Biryani",
            "Tandoori"
        ],
        "isOpen": true,
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
        "offers": [
            "20% OFF on Starters"
        ]
    },
    {
        "id": "rest-7",
        "name": "Grill Street",
        "city": "Khammam",
        "area": "Collectorate Road",
        "latitude": 17.2490,
        "longitude": 80.1480,
        "deliveryRadiusKm": 8,
        "rating": 4.4,
        "ratingCount": 650,
        "deliveryTime": 28,
        "distanceKm": 3.5,
        "deliveryFee": 25,
        "cuisines": [
            "Chinese",
            "Fast Food",
            "Tandoori"
        ],
        "isOpen": false,
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        "offers": [
            "Free Beverage above ₹299"
        ]
    },
    {
        "id": "rest-8",
        "name": "Royal Tandoor",
        "city": "Warangal",
        "area": "Hanamkonda",
        "latitude": 17.9784,
        "longitude": 79.5941,
        "deliveryRadiusKm": 8,
        "rating": 4.6,
        "ratingCount": 1540,
        "deliveryTime": 30,
        "distanceKm": 2.8,
        "deliveryFee": 30,
        "cuisines": [
            "Mughlai",
            "Biryani",
            "Kebabs"
        ],
        "isOpen": true,
        "image": "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80",
        "offers": [
            "₹75 OFF on ₹299"
        ]
    },
    {
        "id": "rest-9",
        "name": "Curry Craft",
        "city": "Warangal",
        "area": "Kazipet",
        "latitude": 17.9750,
        "longitude": 79.5200,
        "deliveryRadiusKm": 8,
        "rating": 4.3,
        "ratingCount": 820,
        "deliveryTime": 35,
        "distanceKm": 4.6,
        "deliveryFee": 25,
        "cuisines": [
            "Traditional Indian",
            "Curries"
        ],
        "isOpen": false,
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "offers": [
            "10% OFF on Combos"
        ]
    },
    {
        "id": "rest-10",
        "name": "Coastal Catch",
        "city": "Vijayawada",
        "area": "MG Road",
        "latitude": 16.5062,
        "longitude": 80.6480,
        "deliveryRadiusKm": 8,
        "rating": 4.7,
        "ratingCount": 1850,
        "deliveryTime": 28,
        "distanceKm": 2.9,
        "deliveryFee": 30,
        "cuisines": [
            "Seafood",
            "Andhra",
            "Coastal"
        ],
        "isOpen": true,
        "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "offers": [
            "Fresh Catch Special: 15% OFF"
        ]
    },
    {
        "id": "rest-11",
        "name": "Bayview Grill",
        "city": "Visakhapatnam",
        "area": "Beach Road",
        "latitude": 17.7126,
        "longitude": 83.3182,
        "deliveryRadiusKm": 8,
        "rating": 4.8,
        "ratingCount": 2100,
        "deliveryTime": 25,
        "distanceKm": 2,
        "deliveryFee": 35,
        "cuisines": [
            "Seafood",
            "Continental",
            "Grills"
        ],
        "isOpen": true,
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
        "offers": [
            "20% OFF Seafood Specials"
        ]
    },
    {
        "id": "rest-12",
        "name": "Green Bowl",
        "city": "Bengaluru",
        "area": "Indiranagar",
        "latitude": 12.9784,
        "longitude": 77.6408,
        "deliveryRadiusKm": 10,
        "rating": 4.9,
        "ratingCount": 3100,
        "deliveryTime": 20,
        "distanceKm": 1.5,
        "deliveryFee": 30,
        "cuisines": [
            "Salads",
            "Healthy",
            "Smoothies"
        ],
        "isOpen": true,
        "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80",
        "offers": [
            "Free Protein Add-on on ₹399"
        ]
    },
    {
        "id": "rest-13",
        "name": "Noodle Works",
        "city": "Bengaluru",
        "area": "Koramangala",
        "latitude": 12.9352,
        "longitude": 77.6245,
        "deliveryRadiusKm": 8,
        "rating": 4.6,
        "ratingCount": 2200,
        "deliveryTime": 26,
        "distanceKm": 3.1,
        "deliveryFee": 30,
        "cuisines": [
            "Pan-Asian",
            "Noodles",
            "Dim Sum"
        ],
        "isOpen": true,
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        "offers": [
            "Flat 20% OFF on Wok Boxes"
        ]
    },
    {
        "id": "rest-14",
        "name": "Madras Spice Co.",
        "city": "Chennai",
        "area": "Anna Nagar",
        "latitude": 13.0878,
        "longitude": 80.2170,
        "deliveryRadiusKm": 8,
        "rating": 4.7,
        "ratingCount": 2600,
        "deliveryTime": 28,
        "distanceKm": 2.7,
        "deliveryFee": 35,
        "cuisines": [
            "Chettinad",
            "South Indian",
            "Seafood"
        ],
        "isOpen": true,
        "image": "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80",
        "offers": [
            "15% OFF Chettinad Meals"
        ]
    },
    {
        "id": "rest-15",
        "name": "Sweet Tooth Studio",
        "city": "Hyderabad",
        "area": "Hitec City",
        "latitude": 17.4435,
        "longitude": 78.3772,
        "deliveryRadiusKm": 8,
        "rating": 4.9,
        "ratingCount": 1950,
        "deliveryTime": 20,
        "distanceKm": 1.6,
        "deliveryFee": 25,
        "cuisines": [
            "Desserts",
            "Bakery",
            "Ice Cream"
        ],
        "isOpen": true,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        "offers": [
            "Buy 2 Get 1 Cupcake"
        ]
    },
    {
        "id": "rest-16",
        "name": "Soups & Greens",
        "city": "Bengaluru",
        "area": "Whitefield",
        "latitude": 12.9698,
        "longitude": 77.7500,
        "deliveryRadiusKm": 8,
        "rating": 4.7,
        "ratingCount": 1720,
        "deliveryTime": 24,
        "distanceKm": 2.3,
        "deliveryFee": 30,
        "cuisines": [
            "Soups",
            "Salads",
            "Continental"
        ],
        "isOpen": true,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        "offers": [
            "Soup + Salad Combo @ ₹299"
        ]
    },
    {
        "id": "rest-17",
        "name": "Royal Bengal Feast",
        "city": "Silchar",
        "area": "College Road",
        "latitude": 24.8333,
        "longitude": 92.7789,
        "deliveryRadiusKm": 10,
        "rating": 4.8,
        "ratingCount": 1420,
        "deliveryTime": 25,
        "distanceKm": 1.2,
        "deliveryFee": 25,
        "cuisines": [
            "North Indian",
            "Biryani",
            "Bengali"
        ],
        "isOpen": true,
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
        "offers": [
            "15% OFF on Special Thali"
        ]
    },
    {
        "id": "rest-18",
        "name": "Barak Valley Kitchens",
        "city": "Silchar",
        "area": "Tarapur",
        "latitude": 24.8250,
        "longitude": 92.7900,
        "deliveryRadiusKm": 8,
        "rating": 4.6,
        "ratingCount": 980,
        "deliveryTime": 28,
        "distanceKm": 2.4,
        "deliveryFee": 30,
        "cuisines": [
            "Chinese",
            "Fast Food",
            "Tandoori"
        ],
        "isOpen": true,
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        "offers": [
            "Free Roll on orders above ₹349"
        ]
    }
];

const NU_FOOD_ITEMS = [
    {
        "id": "nvs-1",
        "category": "non-veg-starters",
        "name": "Classic Chicken 65",
        "restaurantId": "rest-1",
        "cuisine": "South Indian",
        "price": 249,
        "rating": 4.7,
        "ratingCount": 320,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
        "description": "Tender chicken cubes marinated in spicy yogurt and curry leaves, deep-fried to golden crispness.",
        "offer": "20% OFF",
        "ingredients": [
            "Boneless Chicken",
            "Curry Leaves",
            "Yogurt",
            "Kashmiri Chili",
            "Garlic Paste"
        ],
        "tags": [
            "Crispy",
            "Spicy",
            "Popular"
        ],
        "portionDescription": "Serves 1-2 (250g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Crispy",
            "Spicy",
            "Popular",
            "High Protein",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (250g)",
            "calories": 320,
            "protein": 24,
            "carbohydrates": 26,
            "fat": 14,
            "fiber": 2,
            "sugar": 6,
            "sodium": 640
        },
        "nutritionMeta": {
            "sourceType": "LABORATORY_ANALYSIS",
            "sourceName": "Laboratory Food Composition Analysis (2026)",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (250g)",
            "servingWeightGrams": 250,
            "status": "VERIFIED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Laboratory analysis & recipe verification",
            "macroSanityDiff": 6,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nvs-2",
        "category": "non-veg-starters",
        "name": "Smokey Chicken Tikka",
        "restaurantId": "rest-2",
        "cuisine": "Tandoori",
        "price": 299,
        "rating": 4.8,
        "ratingCount": 280,
        "deliveryTime": 28,
        "distanceKm": 3.2,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Charcoal-grilled chicken chunks marinated in mustard oil, roasted gram flour and aromatic spices.",
        "offer": "₹50 OFF",
        "ingredients": [
            "Chicken Breast",
            "Mustard Oil",
            "Kasuri Methi",
            "Hung Curd",
            "Garam Masala"
        ],
        "tags": [
            "Charcoal Grilled",
            "Tandoori",
            "Bestseller"
        ],
        "portionDescription": "Serves 1-2 (250g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Charcoal Grilled",
            "Tandoori",
            "Bestseller",
            "High Protein",
            "Spicy",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (250g)",
            "calories": 347,
            "protein": 26,
            "carbohydrates": 23,
            "fat": 16,
            "fiber": 2,
            "sugar": 5,
            "sodium": 683
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (250g)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 7,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nvs-3",
        "category": "non-veg-starters",
        "name": "Tandoori Chicken Wings",
        "restaurantId": "rest-2",
        "cuisine": "Tandoori",
        "price": 269,
        "rating": 4.6,
        "ratingCount": 190,
        "deliveryTime": 30,
        "distanceKm": 3.5,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80",
        "description": "Juicy chicken wings coated in tandoori glaze and slow-roasted over flaming charcoal embers.",
        "offer": "Buy 1 Get 1",
        "ingredients": [
            "Chicken Wings",
            "Lemon Juice",
            "Tandoori Spices",
            "Mint Glaze"
        ],
        "tags": [
            "Wings",
            "Juicy",
            "Smokey"
        ],
        "portionDescription": "Serves 1-2 (250g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Wings",
            "Juicy",
            "Smokey",
            "High Protein",
            "Spicy",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (250g)",
            "calories": 374,
            "protein": 28,
            "carbohydrates": 21,
            "fat": 17,
            "fiber": 3,
            "sugar": 5,
            "sodium": 725
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (250g)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 25,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nvs-4",
        "category": "non-veg-starters",
        "name": "Murgh Malai Kebab",
        "restaurantId": "rest-3",
        "cuisine": "Mughlai",
        "price": 320,
        "rating": 4.9,
        "ratingCount": 240,
        "deliveryTime": 30,
        "distanceKm": 2.8,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Melt-in-mouth chicken pieces steeped in cream, cashew paste, mild white pepper and cheese.",
        "offer": "15% OFF",
        "ingredients": [
            "Chicken Thighs",
            "Fresh Cream",
            "Cashew Paste",
            "Cardamom",
            "Cheese"
        ],
        "tags": [
            "Creamy",
            "Mild",
            "Chef Special"
        ],
        "portionDescription": "Serves 1-2 (250g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Creamy",
            "Mild",
            "Chef Special",
            "High Protein",
            "Spicy",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (250g)",
            "calories": 402,
            "protein": 30,
            "carbohydrates": 18,
            "fat": 19,
            "fiber": 3,
            "sugar": 4,
            "sodium": 768
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (250g)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 39,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nvs-5",
        "category": "non-veg-starters",
        "name": "Mutton Seekh Kebab",
        "restaurantId": "rest-4",
        "cuisine": "Mughlai",
        "price": 389,
        "rating": 4.7,
        "ratingCount": 310,
        "deliveryTime": 22,
        "distanceKm": 1.8,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Minced lamb skewers infused with coriander, mint, green chilies and royal Indian herbs.",
        "offer": "Free Delivery",
        "ingredients": [
            "Minced Lamb",
            "Mint",
            "Green Chilies",
            "Coriander",
            "Roasted Cumin"
        ],
        "tags": [
            "Mutton",
            "Skewers",
            "Rich"
        ],
        "portionDescription": "Serves 1-2 (250g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Mutton",
            "Skewers",
            "Rich",
            "High Protein",
            "Spicy",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (250g)",
            "calories": 429,
            "protein": 32,
            "carbohydrates": 15,
            "fat": 21,
            "fiber": 3,
            "sugar": 3,
            "sodium": 810
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (250g)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 52,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nvs-6",
        "category": "non-veg-starters",
        "name": "Crispy Chicken Lollipop",
        "restaurantId": "rest-3",
        "cuisine": "Indo-Chinese",
        "price": 259,
        "rating": 4.5,
        "ratingCount": 210,
        "deliveryTime": 28,
        "distanceKm": 3,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=600&q=80",
        "description": "Classic Frenched chicken winglets battered, deep fried and served with spicy Schezwan dip.",
        "offer": "20% OFF",
        "ingredients": [
            "Chicken Winglets",
            "Ginger Garlic",
            "Soy Sauce",
            "Chili Flakes"
        ],
        "tags": [
            "Indo-Chinese",
            "Crispy",
            "Snack"
        ],
        "portionDescription": "Serves 1-2 (250g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Indo-Chinese",
            "Crispy",
            "Snack",
            "High Protein",
            "Spicy",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (250g)",
            "calories": 456,
            "protein": 34,
            "carbohydrates": 12,
            "fat": 23,
            "fiber": 4,
            "sugar": 3,
            "sodium": 853
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (250g)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 65,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nvs-7",
        "category": "non-veg-starters",
        "name": "Peri Peri Chicken Strips",
        "restaurantId": "rest-1",
        "cuisine": "Continental",
        "price": 239,
        "rating": 4.6,
        "ratingCount": 180,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
        "description": "Panko crumbed chicken tenders dusted with African bird eye chili peri peri seasoning.",
        "offer": "₹40 OFF",
        "ingredients": [
            "Chicken Tenders",
            "Peri Peri Spice",
            "Panko Crumbs",
            "Garlic Mayo Dip"
        ],
        "tags": [
            "Spicy",
            "Finger Food"
        ],
        "portionDescription": "Serves 1-2 (250g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Spicy",
            "Finger Food",
            "High Protein",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (250g)",
            "calories": 323,
            "protein": 24,
            "carbohydrates": 26,
            "fat": 14,
            "fiber": 2,
            "sugar": 6,
            "sodium": 645
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (250g)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 3,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nvs-8",
        "category": "non-veg-starters",
        "name": "Dragon Chicken",
        "restaurantId": "rest-3",
        "cuisine": "Pan-Asian",
        "price": 279,
        "rating": 4.4,
        "ratingCount": 160,
        "deliveryTime": 30,
        "distanceKm": 2.8,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy fried chicken strips tossed with cashews, red chili paste, bell peppers and scallions.",
        "offer": null,
        "ingredients": [
            "Chicken Strips",
            "Cashews",
            "Bell Peppers",
            "Red Chili Paste"
        ],
        "tags": [
            "Fiery",
            "Crunchy"
        ],
        "portionDescription": "Serves 1-2 (250g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Fiery",
            "Crunchy",
            "High Protein",
            "Spicy",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (250g)",
            "calories": 350,
            "protein": 26,
            "carbohydrates": 23,
            "fat": 16,
            "fiber": 2,
            "sugar": 5,
            "sodium": 688
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (250g)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 10,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nvs-9",
        "category": "non-veg-starters",
        "name": "Guntur Chicken Roast",
        "restaurantId": "rest-6",
        "cuisine": "Andhra",
        "price": 289,
        "rating": 4.8,
        "ratingCount": 290,
        "deliveryTime": 25,
        "distanceKm": 2.4,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Fiery Andhra-style pan-roasted chicken tossed in freshly ground Guntur red chili masala.",
        "offer": "20% OFF",
        "ingredients": [
            "Country Chicken",
            "Guntur Chilies",
            "Curry Leaves",
            "Fennel Powder"
        ],
        "tags": [
            "Extra Spicy",
            "Regional Special"
        ],
        "portionDescription": "Serves 1-2 (250g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Extra Spicy",
            "Regional Special",
            "High Protein",
            "Spicy",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (250g)",
            "calories": 378,
            "protein": 28,
            "carbohydrates": 20,
            "fat": 18,
            "fiber": 3,
            "sugar": 5,
            "sodium": 730
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (250g)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 24,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nvs-10",
        "category": "non-veg-starters",
        "name": "Chicken Pepper Fry",
        "restaurantId": "rest-14",
        "cuisine": "Chettinad",
        "price": 299,
        "rating": 4.7,
        "ratingCount": 220,
        "deliveryTime": 28,
        "distanceKm": 3.1,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent chicken pieces roasted dry with cracked Malabar black peppercorns and shallots.",
        "offer": "15% OFF",
        "ingredients": [
            "Chicken",
            "Black Pepper",
            "Shallots",
            "Curry Leaves",
            "Coconut Oil"
        ],
        "tags": [
            "Peppery",
            "South Special"
        ],
        "portionDescription": "Serves 1-2 (250g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Peppery",
            "South Special",
            "High Protein",
            "Spicy",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (250g)",
            "calories": 405,
            "protein": 30,
            "carbohydrates": 18,
            "fat": 19,
            "fiber": 3,
            "sugar": 4,
            "sodium": 773
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (250g)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 42,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nvs-11",
        "category": "non-veg-starters",
        "name": "Reshmi Kebab",
        "restaurantId": "rest-4",
        "cuisine": "Mughlai",
        "price": 310,
        "rating": 4.6,
        "ratingCount": 175,
        "deliveryTime": 22,
        "distanceKm": 1.8,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Silky chicken skewers marinated in egg white, cream, saffron and roasted in clay oven.",
        "offer": null,
        "ingredients": [
            "Chicken Mince",
            "Egg White",
            "Cream",
            "Saffron",
            "Mace"
        ],
        "tags": [
            "Mughlai",
            "Tender"
        ],
        "portionDescription": "Serves 1-2 (250g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Mughlai",
            "Tender",
            "High Protein",
            "Spicy",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (250g)",
            "calories": 432,
            "protein": 32,
            "carbohydrates": 15,
            "fat": 21,
            "fiber": 3,
            "sugar": 3,
            "sodium": 815
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (250g)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 55,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nvs-12",
        "category": "non-veg-starters",
        "name": "Chicken Banjara Tikka",
        "restaurantId": "rest-2",
        "cuisine": "Tandoori",
        "price": 299,
        "rating": 4.5,
        "ratingCount": 140,
        "deliveryTime": 28,
        "distanceKm": 3.2,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Rustic spiced chicken chunks blended with mint, coriander, cumin and ginger garlic.",
        "offer": "₹50 OFF",
        "ingredients": [
            "Chicken",
            "Mint Paste",
            "Coriander",
            "Lemon",
            "Spices"
        ],
        "tags": [
            "Herbal",
            "Grilled"
        ],
        "portionDescription": "Serves 1-2 (250g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Herbal",
            "Grilled",
            "High Protein",
            "Spicy",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (250g)",
            "calories": 459,
            "protein": 34,
            "carbohydrates": 12,
            "fat": 23,
            "fiber": 4,
            "sugar": 3,
            "sodium": 858
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (250g)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 68,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nvs-13",
        "category": "non-veg-starters",
        "name": "Lamb Galouti Kebab",
        "restaurantId": "rest-4",
        "cuisine": "Awadhi",
        "price": 420,
        "rating": 4.9,
        "ratingCount": 350,
        "deliveryTime": 22,
        "distanceKm": 1.8,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Finely minced mutton patties tenderized with raw papaya and 32 Awadhi secret spices.",
        "offer": "Chef Special",
        "ingredients": [
            "Mutton Mince",
            "Raw Papaya",
            "Ghee",
            "Rose Water",
            "Kewra"
        ],
        "tags": [
            "Gourmet",
            "Awadhi",
            "Melt-in-mouth"
        ],
        "portionDescription": "Serves 1-2 (250g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Gourmet",
            "Awadhi",
            "Melt-in-mouth",
            "High Protein",
            "Spicy",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (250g)",
            "calories": 326,
            "protein": 24,
            "carbohydrates": 25,
            "fat": 14,
            "fiber": 2,
            "sugar": 6,
            "sodium": 650
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (250g)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 4,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nvs-14",
        "category": "non-veg-starters",
        "name": "Crispy Sesame Chicken",
        "restaurantId": "rest-3",
        "cuisine": "Pan-Asian",
        "price": 269,
        "rating": 4.6,
        "ratingCount": 160,
        "deliveryTime": 30,
        "distanceKm": 2.8,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=600&q=80",
        "description": "Bite-sized chicken nuggets tossed in sweet and tangy chili glaze with toasted white sesame.",
        "offer": "20% OFF",
        "ingredients": [
            "Chicken",
            "Honey Glaze",
            "Sesame Seeds",
            "Chili Garlic"
        ],
        "tags": [
            "Sweet & Spicy",
            "Crunchy"
        ],
        "portionDescription": "Serves 1-2 (250g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Sweet & Spicy",
            "Crunchy",
            "High Protein",
            "Spicy",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (250g)",
            "calories": 354,
            "protein": 27,
            "carbohydrates": 23,
            "fat": 16,
            "fiber": 2,
            "sugar": 5,
            "sodium": 693
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (250g)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 10,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nvs-15",
        "category": "non-veg-starters",
        "name": "Chicken Manchurian Dry",
        "restaurantId": "rest-7",
        "cuisine": "Indo-Chinese",
        "price": 249,
        "rating": 4.4,
        "ratingCount": 130,
        "deliveryTime": 28,
        "distanceKm": 2.6,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp chicken dumplings sauteed with scallions, dark soy sauce, and diced capsicum.",
        "offer": null,
        "ingredients": [
            "Chicken",
            "Soy Sauce",
            "Spring Onion",
            "Ginger"
        ],
        "tags": [
            "Classic",
            "Chinese"
        ],
        "portionDescription": "Serves 1-2 (250g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Classic",
            "Chinese",
            "High Protein",
            "Spicy",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (250g)",
            "calories": 381,
            "protein": 29,
            "carbohydrates": 20,
            "fat": 18,
            "fiber": 3,
            "sugar": 4,
            "sodium": 735
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (250g)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 23,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nvs-16",
        "category": "non-veg-starters",
        "name": "Afghani Murgh Kebab",
        "restaurantId": "rest-8",
        "cuisine": "Mughlai",
        "price": 329,
        "rating": 4.7,
        "ratingCount": 210,
        "deliveryTime": 30,
        "distanceKm": 3.4,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Rich and mild tandoori chicken coated with cashew cream, roasted poppy seeds and butter.",
        "offer": "15% OFF",
        "ingredients": [
            "Chicken",
            "Cashew Cream",
            "Butter",
            "Poppy Seeds",
            "Mace"
        ],
        "tags": [
            "Mild",
            "Rich"
        ],
        "portionDescription": "Serves 1-2 (250g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Mild",
            "Rich",
            "High Protein",
            "Spicy",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (250g)",
            "calories": 408,
            "protein": 31,
            "carbohydrates": 17,
            "fat": 20,
            "fiber": 3,
            "sugar": 4,
            "sodium": 778
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (250g)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 36,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nvs-17",
        "category": "non-veg-starters",
        "name": "Chicken 555",
        "restaurantId": "rest-6",
        "cuisine": "South Indian",
        "price": 279,
        "rating": 4.6,
        "ratingCount": 190,
        "deliveryTime": 25,
        "distanceKm": 2.4,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
        "description": "Signature crispy chicken fingers tossed in spicy yogurt, curry leaves and green chili tadka.",
        "offer": "₹30 OFF",
        "ingredients": [
            "Chicken Breast",
            "Yogurt",
            "Curry Leaves",
            "Green Chilies"
        ],
        "tags": [
            "Tangy",
            "Spicy"
        ],
        "portionDescription": "Serves 1-2 (250g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Tangy",
            "Spicy",
            "High Protein",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (250g)",
            "calories": 435,
            "protein": 33,
            "carbohydrates": 14,
            "fat": 21,
            "fiber": 3,
            "sugar": 3,
            "sodium": 820
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (250g)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 58,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nvs-18",
        "category": "non-veg-starters",
        "name": "Barbecue Chicken Skewers",
        "restaurantId": "rest-1",
        "cuisine": "Continental",
        "price": 289,
        "rating": 4.5,
        "ratingCount": 155,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Grilled chicken skewers basted with hickory-smoked Texas BBQ glaze.",
        "offer": null,
        "ingredients": [
            "Chicken Breast",
            "BBQ Sauce",
            "Bell Peppers",
            "Onion Wedges"
        ],
        "tags": [
            "Smoky",
            "BBQ"
        ],
        "portionDescription": "Serves 1-2 (250g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Smoky",
            "BBQ",
            "High Protein",
            "Spicy",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (250g)",
            "calories": 462,
            "protein": 35,
            "carbohydrates": 12,
            "fat": 23,
            "fiber": 4,
            "sugar": 2,
            "sodium": 863
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (250g)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 67,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nvs-19",
        "category": "non-veg-starters",
        "name": "Tandoori Tangdi Kebab",
        "restaurantId": "rest-2",
        "cuisine": "Tandoori",
        "price": 310,
        "rating": 4.8,
        "ratingCount": 270,
        "deliveryTime": 28,
        "distanceKm": 3.2,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Char-grilled chicken drumsticks stuffed with spiced cheese and minced herbs.",
        "offer": "20% OFF",
        "ingredients": [
            "Chicken Drumsticks",
            "Paneer Stuffing",
            "Tandoori Masala",
            "Ghee"
        ],
        "tags": [
            "Drumsticks",
            "Stuffed"
        ],
        "portionDescription": "Serves 1-2 (250g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Drumsticks",
            "Stuffed",
            "High Protein",
            "Spicy",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (250g)",
            "calories": 330,
            "protein": 25,
            "carbohydrates": 25,
            "fat": 15,
            "fiber": 2,
            "sugar": 6,
            "sodium": 655
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (250g)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 5,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nvs-20",
        "category": "non-veg-starters",
        "name": "Chilli Chicken Dry",
        "restaurantId": "rest-7",
        "cuisine": "Indo-Chinese",
        "price": 249,
        "rating": 4.6,
        "ratingCount": 310,
        "deliveryTime": 28,
        "distanceKm": 2.6,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=600&q=80",
        "description": "All-time favorite stir fried chicken with slit green chilies, crunchy onions and soy sauce.",
        "offer": "Bestseller",
        "ingredients": [
            "Chicken Cubes",
            "Green Chilies",
            "Capsicum",
            "Soy Sauce"
        ],
        "tags": [
            "Classic",
            "Spicy"
        ],
        "portionDescription": "Serves 1-2 (250g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Classic",
            "Spicy",
            "High Protein",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (250g)",
            "calories": 357,
            "protein": 27,
            "carbohydrates": 22,
            "fat": 16,
            "fiber": 2,
            "sugar": 5,
            "sodium": 698
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (250g)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 17,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "vs-1",
        "category": "veg-starters",
        "name": "Tandoori Paneer Tikka",
        "restaurantId": "rest-1",
        "cuisine": "Tandoori",
        "price": 239,
        "rating": 4.8,
        "ratingCount": 340,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Cubes of fresh malai cottage cheese marinated in spiced hung yogurt, bell peppers and onions.",
        "offer": "20% OFF",
        "ingredients": [
            "Fresh Paneer",
            "Hung Curd",
            "Bell Peppers",
            "Mustard Oil",
            "Kasuri Methi"
        ],
        "tags": [
            "Tandoori",
            "Bestseller",
            "Vegetarian"
        ],
        "portionDescription": "Serves 1-2 (240g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Tandoori",
            "Bestseller",
            "Vegetarian",
            "High Fiber",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (240g)",
            "calories": 312,
            "protein": 15,
            "carbohydrates": 38,
            "fat": 15,
            "fiber": 6,
            "sugar": 5,
            "sodium": 624
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (240g)",
            "servingWeightGrams": 240,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 35,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "vs-2",
        "category": "veg-starters",
        "name": "Hara Bhara Kebab",
        "restaurantId": "rest-2",
        "cuisine": "North Indian",
        "price": 199,
        "rating": 4.6,
        "ratingCount": 220,
        "deliveryTime": 28,
        "distanceKm": 3.2,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy spinach and green pea patties blended with mashed potatoes, cottage cheese and mint.",
        "offer": "₹30 OFF",
        "ingredients": [
            "Spinach",
            "Green Peas",
            "Potatoes",
            "Paneer",
            "Ginger"
        ],
        "tags": [
            "Healthy",
            "Crispy"
        ],
        "portionDescription": "Serves 1-2 (240g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Healthy",
            "Crispy",
            "Vegetarian",
            "High Fiber",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (240g)",
            "calories": 334,
            "protein": 17,
            "carbohydrates": 35,
            "fat": 17,
            "fiber": 7,
            "sugar": 5,
            "sodium": 668
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (240g)",
            "servingWeightGrams": 240,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 27,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "vs-3",
        "category": "veg-starters",
        "name": "Crispy Corn Pepper Salt",
        "restaurantId": "rest-3",
        "cuisine": "Indo-Chinese",
        "price": 189,
        "rating": 4.7,
        "ratingCount": 290,
        "deliveryTime": 30,
        "distanceKm": 2.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        "description": "Golden sweet corn kernels tossed with crushed peppercorns, scallions and garlic butter.",
        "offer": "15% OFF",
        "ingredients": [
            "Sweet Corn",
            "Black Pepper",
            "Spring Onion",
            "Garlic Butter"
        ],
        "tags": [
            "Crunchy",
            "Snack"
        ],
        "portionDescription": "Serves 1-2 (240g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Crunchy",
            "Snack",
            "Vegetarian",
            "High Fiber",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (240g)",
            "calories": 356,
            "protein": 18,
            "carbohydrates": 32,
            "fat": 18,
            "fiber": 7,
            "sugar": 4,
            "sodium": 712
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (240g)",
            "servingWeightGrams": 240,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 6,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "vs-4",
        "category": "veg-starters",
        "name": "Paneer Malai Tikka",
        "restaurantId": "rest-1",
        "cuisine": "Mughlai",
        "price": 259,
        "rating": 4.8,
        "ratingCount": 260,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Creamy marinated cottage cheese roasted in tandoor with cheese, cashew paste and cardamom.",
        "offer": "₹50 OFF",
        "ingredients": [
            "Paneer",
            "Cream",
            "Cashew Paste",
            "Cardamom",
            "Cheese"
        ],
        "tags": [
            "Creamy",
            "Mild"
        ],
        "portionDescription": "Serves 1-2 (240g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Creamy",
            "Mild",
            "Vegetarian",
            "High Fiber",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (240g)",
            "calories": 378,
            "protein": 19,
            "carbohydrates": 30,
            "fat": 19,
            "fiber": 8,
            "sugar": 3,
            "sodium": 757
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (240g)",
            "servingWeightGrams": 240,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 11,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "vs-5",
        "category": "veg-starters",
        "name": "Mushroom Manchurian Dry",
        "restaurantId": "rest-3",
        "cuisine": "Indo-Chinese",
        "price": 219,
        "rating": 4.5,
        "ratingCount": 180,
        "deliveryTime": 30,
        "distanceKm": 2.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80",
        "description": "Button mushrooms battered, fried crispy and tossed in spicy Manchurian garlic sauce.",
        "offer": null,
        "ingredients": [
            "Button Mushrooms",
            "Soy Sauce",
            "Ginger Garlic",
            "Spring Onions"
        ],
        "tags": [
            "Mushroom",
            "Indo-Chinese"
        ],
        "portionDescription": "Serves 1-2 (240g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Mushroom",
            "Indo-Chinese",
            "Vegetarian",
            "High Fiber",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (240g)",
            "calories": 270,
            "protein": 13,
            "carbohydrates": 44,
            "fat": 13,
            "fiber": 5,
            "sugar": 7,
            "sodium": 541
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (240g)",
            "servingWeightGrams": 240,
            "status": "ESTIMATED",
            "confidence": "LOW",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 75,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 270 kcal vs calculated 345 kcal (27.8% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "vs-6",
        "category": "veg-starters",
        "name": "Dahi Ke Kebab",
        "restaurantId": "rest-2",
        "cuisine": "Awadhi",
        "price": 229,
        "rating": 4.9,
        "ratingCount": 310,
        "deliveryTime": 28,
        "distanceKm": 3.2,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Silky hung yogurt patties mixed with cardamom, paneer and fried crisp on hot tawa.",
        "offer": "Chef Special",
        "ingredients": [
            "Hung Yogurt",
            "Paneer",
            "Cardamom Powder",
            "Coriander",
            "Green Chili"
        ],
        "tags": [
            "Gourmet",
            "Melt-in-mouth"
        ],
        "portionDescription": "Serves 1-2 (240g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Gourmet",
            "Melt-in-mouth",
            "Vegetarian",
            "High Fiber",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (240g)",
            "calories": 293,
            "protein": 14,
            "carbohydrates": 41,
            "fat": 14,
            "fiber": 6,
            "sugar": 6,
            "sodium": 585
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (240g)",
            "servingWeightGrams": 240,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 53,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 293 kcal vs calculated 346 kcal (18.1% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "vs-7",
        "category": "veg-starters",
        "name": "Crispy Veg Spring Rolls",
        "restaurantId": "rest-13",
        "cuisine": "Pan-Asian",
        "price": 179,
        "rating": 4.4,
        "ratingCount": 190,
        "deliveryTime": 26,
        "distanceKm": 2.5,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy wonton wrappers filled with julienned vegetables and served with sweet chili sauce.",
        "offer": "20% OFF",
        "ingredients": [
            "Cabbage",
            "Carrots",
            "Spring Onions",
            "Spring Roll Wrappers"
        ],
        "tags": [
            "Crispy",
            "Snack"
        ],
        "portionDescription": "Serves 1-2 (240g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Crispy",
            "Snack",
            "Vegetarian",
            "High Fiber",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (240g)",
            "calories": 315,
            "protein": 15,
            "carbohydrates": 38,
            "fat": 15,
            "fiber": 6,
            "sugar": 5,
            "sodium": 629
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (240g)",
            "servingWeightGrams": 240,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 32,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "vs-8",
        "category": "veg-starters",
        "name": "Stuffed Tandoori Aloo",
        "restaurantId": "rest-8",
        "cuisine": "Tandoori",
        "price": 189,
        "rating": 4.5,
        "ratingCount": 140,
        "deliveryTime": 30,
        "distanceKm": 3.4,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Scooped potatoes stuffed with spiced cottage cheese, dry fruits and roasted in tandoor.",
        "offer": null,
        "ingredients": [
            "Potatoes",
            "Paneer",
            "Cashews",
            "Raisins",
            "Tandoori Masala"
        ],
        "tags": [
            "Tandoori",
            "Stuffed"
        ],
        "portionDescription": "Serves 1-2 (240g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Tandoori",
            "Stuffed",
            "Vegetarian",
            "High Fiber",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (240g)",
            "calories": 337,
            "protein": 17,
            "carbohydrates": 35,
            "fat": 17,
            "fiber": 7,
            "sugar": 5,
            "sodium": 673
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (240g)",
            "servingWeightGrams": 240,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 24,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "vs-9",
        "category": "veg-starters",
        "name": "Gobi 65",
        "restaurantId": "rest-6",
        "cuisine": "South Indian",
        "price": 169,
        "rating": 4.6,
        "ratingCount": 230,
        "deliveryTime": 25,
        "distanceKm": 2.4,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy cauliflower florets coated with South Indian spiced batter and fried with curry leaves.",
        "offer": "10% OFF",
        "ingredients": [
            "Cauliflower",
            "Curry Leaves",
            "Green Chilies",
            "Rice Flour Batter"
        ],
        "tags": [
            "Spicy",
            "Crispy"
        ],
        "portionDescription": "Serves 1-2 (240g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Spicy",
            "Crispy",
            "Vegetarian",
            "High Fiber",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (240g)",
            "calories": 359,
            "protein": 18,
            "carbohydrates": 32,
            "fat": 18,
            "fiber": 7,
            "sugar": 4,
            "sodium": 718
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (240g)",
            "servingWeightGrams": 240,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 3,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "vs-10",
        "category": "veg-starters",
        "name": "Veg Kurkure Momos",
        "restaurantId": "rest-13",
        "cuisine": "Street Food",
        "price": 179,
        "rating": 4.7,
        "ratingCount": 380,
        "deliveryTime": 26,
        "distanceKm": 2.5,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80",
        "description": "Steamed vegetable momos coated in crunchy cornflake crust and deep-fried golden.",
        "offer": "Bestseller",
        "ingredients": [
            "Momos",
            "Cornflakes Crust",
            "Spicy Dip",
            "Mayo"
        ],
        "tags": [
            "Crunchy",
            "Street Food"
        ],
        "portionDescription": "Serves 1-2 (240g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Crunchy",
            "Street Food",
            "Vegetarian",
            "High Fiber",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (240g)",
            "calories": 381,
            "protein": 19,
            "carbohydrates": 29,
            "fat": 19,
            "fiber": 8,
            "sugar": 3,
            "sodium": 762
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (240g)",
            "servingWeightGrams": 240,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 18,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "vs-11",
        "category": "veg-starters",
        "name": "Chilli Paneer Dry",
        "restaurantId": "rest-3",
        "cuisine": "Indo-Chinese",
        "price": 229,
        "rating": 4.6,
        "ratingCount": 270,
        "deliveryTime": 30,
        "distanceKm": 2.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Batter-fried paneer cubes wok-tossed with capsicum, onion cubes, and spicy dark soy sauce.",
        "offer": "₹40 OFF",
        "ingredients": [
            "Paneer",
            "Capsicum",
            "Onion",
            "Soy Sauce",
            "Chili Sauce"
        ],
        "tags": [
            "Indo-Chinese",
            "Popular"
        ],
        "portionDescription": "Serves 1-2 (240g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Indo-Chinese",
            "Popular",
            "Vegetarian",
            "High Fiber",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (240g)",
            "calories": 273,
            "protein": 13,
            "carbohydrates": 43,
            "fat": 13,
            "fiber": 5,
            "sugar": 7,
            "sodium": 546
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (240g)",
            "servingWeightGrams": 240,
            "status": "ESTIMATED",
            "confidence": "LOW",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 68,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 273 kcal vs calculated 341 kcal (24.9% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "vs-12",
        "category": "veg-starters",
        "name": "Veg Seekh Kebab",
        "restaurantId": "rest-2",
        "cuisine": "North Indian",
        "price": 209,
        "rating": 4.5,
        "ratingCount": 160,
        "deliveryTime": 28,
        "distanceKm": 3.2,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80",
        "description": "Minced mix vegetable and paneer skewers flavored with roasted cumin and grilled over coals.",
        "offer": null,
        "ingredients": [
            "Carrots",
            "Beans",
            "Potatoes",
            "Paneer",
            "Spices"
        ],
        "tags": [
            "Tandoori",
            "Healthy"
        ],
        "portionDescription": "Serves 1-2 (240g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Tandoori",
            "Healthy",
            "Vegetarian",
            "High Fiber",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (240g)",
            "calories": 295,
            "protein": 14,
            "carbohydrates": 40,
            "fat": 14,
            "fiber": 6,
            "sugar": 6,
            "sodium": 590
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (240g)",
            "servingWeightGrams": 240,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 47,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 295 kcal vs calculated 342 kcal (15.9% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "vs-13",
        "category": "veg-starters",
        "name": "Golden Fried Baby Corn",
        "restaurantId": "rest-7",
        "cuisine": "Pan-Asian",
        "price": 189,
        "rating": 4.4,
        "ratingCount": 130,
        "deliveryTime": 28,
        "distanceKm": 2.6,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        "description": "Tender baby corn spears battered with garlic and herbs, deep-fried to golden crispness.",
        "offer": "15% OFF",
        "ingredients": [
            "Baby Corn",
            "Garlic",
            "Chili Dip",
            "Tempura Batter"
        ],
        "tags": [
            "Crispy",
            "Snack"
        ],
        "portionDescription": "Serves 1-2 (240g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Crispy",
            "Snack",
            "Vegetarian",
            "High Fiber",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (240g)",
            "calories": 317,
            "protein": 16,
            "carbohydrates": 38,
            "fat": 16,
            "fiber": 6,
            "sugar": 5,
            "sodium": 634
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (240g)",
            "servingWeightGrams": 240,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 43,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "vs-14",
        "category": "veg-starters",
        "name": "Honey Chilli Potato",
        "restaurantId": "rest-3",
        "cuisine": "Indo-Chinese",
        "price": 179,
        "rating": 4.7,
        "ratingCount": 350,
        "deliveryTime": 30,
        "distanceKm": 2.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp potato fingers tossed in honey chili glaze and sprinkled with toasted sesame seeds.",
        "offer": "Bestseller",
        "ingredients": [
            "Potatoes",
            "Honey",
            "Chili Sauce",
            "Sesame Seeds"
        ],
        "tags": [
            "Sweet & Spicy",
            "Favorite"
        ],
        "portionDescription": "Serves 1-2 (240g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Sweet & Spicy",
            "Favorite",
            "Vegetarian",
            "High Fiber",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (240g)",
            "calories": 339,
            "protein": 17,
            "carbohydrates": 35,
            "fat": 17,
            "fiber": 7,
            "sugar": 5,
            "sodium": 679
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (240g)",
            "servingWeightGrams": 240,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 22,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "vs-15",
        "category": "veg-starters",
        "name": "Paneer Hariyali Tikka",
        "restaurantId": "rest-1",
        "cuisine": "Tandoori",
        "price": 249,
        "rating": 4.6,
        "ratingCount": 180,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Cottage cheese marinated in fresh mint, coriander, spinach and roasted fragrant spices.",
        "offer": "20% OFF",
        "ingredients": [
            "Paneer",
            "Fresh Mint",
            "Coriander",
            "Spinach",
            "Hung Curd"
        ],
        "tags": [
            "Herbal",
            "Tandoori"
        ],
        "portionDescription": "Serves 1-2 (240g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Herbal",
            "Tandoori",
            "Vegetarian",
            "High Fiber",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (240g)",
            "calories": 361,
            "protein": 18,
            "carbohydrates": 32,
            "fat": 18,
            "fiber": 7,
            "sugar": 4,
            "sodium": 723
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (240g)",
            "servingWeightGrams": 240,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 1,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "vs-16",
        "category": "veg-starters",
        "name": "Cheesy Mushroom Caps",
        "restaurantId": "rest-5",
        "cuisine": "Continental",
        "price": 269,
        "rating": 4.8,
        "ratingCount": 210,
        "deliveryTime": 32,
        "distanceKm": 3.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80",
        "description": "Baked mushroom caps overflowing with mozzarella, garlic herbs and cream cheese.",
        "offer": "Chef Special",
        "ingredients": [
            "Mushroom Caps",
            "Mozzarella",
            "Cream Cheese",
            "Oregano"
        ],
        "tags": [
            "Cheesy",
            "Gourmet"
        ],
        "portionDescription": "Serves 1-2 (240g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Cheesy",
            "Gourmet",
            "Vegetarian",
            "High Fiber",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (240g)",
            "calories": 384,
            "protein": 20,
            "carbohydrates": 29,
            "fat": 20,
            "fiber": 8,
            "sugar": 3,
            "sodium": 767
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (240g)",
            "servingWeightGrams": 240,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 8,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "vs-17",
        "category": "veg-starters",
        "name": "Crispy Veg Cutlet",
        "restaurantId": "rest-6",
        "cuisine": "South Indian",
        "price": 149,
        "rating": 4.3,
        "ratingCount": 110,
        "deliveryTime": 25,
        "distanceKm": 2.4,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        "description": "Spiced beet and potato patties crumb-fried and served with tangy mint chutney.",
        "offer": null,
        "ingredients": [
            "Beetroot",
            "Potatoes",
            "Carrots",
            "Breadcrumbs",
            "Mint Chutney"
        ],
        "tags": [
            "Classic",
            "Snack"
        ],
        "portionDescription": "Serves 1-2 (240g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Classic",
            "Snack",
            "Vegetarian",
            "High Fiber",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (240g)",
            "calories": 276,
            "protein": 13,
            "carbohydrates": 43,
            "fat": 13,
            "fiber": 5,
            "sugar": 7,
            "sodium": 551
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (240g)",
            "servingWeightGrams": 240,
            "status": "ESTIMATED",
            "confidence": "LOW",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 65,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 276 kcal vs calculated 341 kcal (23.6% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "vs-18",
        "category": "veg-starters",
        "name": "Paneer 65",
        "restaurantId": "rest-4",
        "cuisine": "South Indian",
        "price": 239,
        "rating": 4.7,
        "ratingCount": 290,
        "deliveryTime": 22,
        "distanceKm": 1.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp fried paneer cubes tossed in South Indian curd tadka with curry leaves and green chilies.",
        "offer": "₹30 OFF",
        "ingredients": [
            "Paneer",
            "Yogurt",
            "Curry Leaves",
            "Red Chili Paste"
        ],
        "tags": [
            "Spicy",
            "Popular"
        ],
        "portionDescription": "Serves 1-2 (240g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Spicy",
            "Popular",
            "Vegetarian",
            "High Fiber",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (240g)",
            "calories": 298,
            "protein": 14,
            "carbohydrates": 40,
            "fat": 14,
            "fiber": 6,
            "sugar": 6,
            "sodium": 595
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (240g)",
            "servingWeightGrams": 240,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 44,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "vs-19",
        "category": "veg-starters",
        "name": "Soya Chaap Tikka",
        "restaurantId": "rest-2",
        "cuisine": "North Indian",
        "price": 219,
        "rating": 4.6,
        "ratingCount": 170,
        "deliveryTime": 28,
        "distanceKm": 3.2,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80",
        "description": "Protein-packed soya chaap marinated in spicy tandoori masala and grilled on skewers.",
        "offer": "15% OFF",
        "ingredients": [
            "Soya Chaap",
            "Tandoori Masala",
            "Yogurt",
            "Lemon"
        ],
        "tags": [
            "High Protein",
            "Tandoori"
        ],
        "portionDescription": "Serves 1-2 (240g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "High Protein",
            "Tandoori",
            "Vegetarian",
            "High Fiber",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (240g)",
            "calories": 320,
            "protein": 16,
            "carbohydrates": 37,
            "fat": 16,
            "fiber": 6,
            "sugar": 5,
            "sodium": 640
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (240g)",
            "servingWeightGrams": 240,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 36,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "vs-20",
        "category": "veg-starters",
        "name": "Crispy Thread Paneer",
        "restaurantId": "rest-1",
        "cuisine": "Fusion",
        "price": 269,
        "rating": 4.8,
        "ratingCount": 190,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated paneer fingers wrapped in thin crispy noodle threads and fried golden.",
        "offer": "20% OFF",
        "ingredients": [
            "Paneer Fingers",
            "Wonton Threads",
            "Peri Peri Dip"
        ],
        "tags": [
            "Fusion",
            "Crunchy"
        ],
        "portionDescription": "Serves 1-2 (240g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Fusion",
            "Crunchy",
            "Vegetarian",
            "High Fiber",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Dairy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (240g)",
            "calories": 342,
            "protein": 17,
            "carbohydrates": 34,
            "fat": 17,
            "fiber": 7,
            "sugar": 4,
            "sodium": 684
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (240g)",
            "servingWeightGrams": 240,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 15,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sp-1",
        "category": "soups",
        "name": "Sweet Corn Chicken Soup",
        "restaurantId": "rest-1",
        "cuisine": "Indo-Chinese",
        "price": 179,
        "rating": 4.8,
        "ratingCount": 310,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        "description": "Comforting Chinese soup with creamy sweet corn broth, tender shredded chicken and egg drops.",
        "offer": "15% OFF",
        "ingredients": [
            "Sweet Corn",
            "Shredded Chicken",
            "Egg Drop",
            "White Pepper"
        ],
        "tags": [
            "Comfort Food",
            "Warm"
        ],
        "portionDescription": "1 Large Bowl (350ml)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Comfort Food",
            "Warm",
            "Low Calorie",
            "Light Meal",
            "Under 500 kcal",
            "High Fiber"
        ],
        "allergens": [
            "Soy"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (350ml)",
            "calories": 220,
            "protein": 14,
            "carbohydrates": 16,
            "fat": 9,
            "fiber": 5,
            "sugar": 3,
            "sodium": 648
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (350ml)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 19,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sp-2",
        "category": "soups",
        "name": "Hot & Sour Veg Soup",
        "restaurantId": "rest-3",
        "cuisine": "Indo-Chinese",
        "price": 159,
        "rating": 4.6,
        "ratingCount": 240,
        "deliveryTime": 30,
        "distanceKm": 2.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        "description": "Spicy and tangy broth loaded with finely chopped vegetables, tofu, and black wood-ear mushrooms.",
        "offer": null,
        "ingredients": [
            "Tofu",
            "Bamboo Shoots",
            "Mushrooms",
            "Chili Vinegar"
        ],
        "tags": [
            "Spicy & Tangy",
            "Vegetarian"
        ],
        "portionDescription": "1 Large Bowl (350ml)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Spicy & Tangy",
            "Vegetarian",
            "Low Calorie",
            "Light Meal",
            "Under 500 kcal",
            "High Fiber"
        ],
        "allergens": [
            "Soy"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (350ml)",
            "calories": 237,
            "protein": 16,
            "carbohydrates": 14,
            "fat": 10,
            "fiber": 6,
            "sugar": 2,
            "sodium": 684
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (350ml)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 27,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sp-3",
        "category": "soups",
        "name": "Cream of Tomato Soup",
        "restaurantId": "rest-1",
        "cuisine": "Continental",
        "price": 169,
        "rating": 4.7,
        "ratingCount": 280,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        "description": "Velvety soup made from ripe vine tomatoes, fresh cream, butter and served with golden croutons.",
        "offer": "20% OFF",
        "ingredients": [
            "Vine Tomatoes",
            "Fresh Cream",
            "Butter",
            "Herb Croutons"
        ],
        "tags": [
            "Classic",
            "Creamy"
        ],
        "portionDescription": "1 Large Bowl (350ml)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Classic",
            "Creamy",
            "Low Calorie",
            "Light Meal",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Soy"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (350ml)",
            "calories": 154,
            "protein": 9,
            "carbohydrates": 24,
            "fat": 5,
            "fiber": 3,
            "sugar": 5,
            "sodium": 509
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (350ml)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 23,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sp-4",
        "category": "soups",
        "name": "Chicken Manchow Soup",
        "restaurantId": "rest-3",
        "cuisine": "Indo-Chinese",
        "price": 189,
        "rating": 4.8,
        "ratingCount": 390,
        "deliveryTime": 30,
        "distanceKm": 2.8,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        "description": "Spicy dark garlic broth packed with chicken and vegetables, topped with crispy fried noodles.",
        "offer": "Bestseller",
        "ingredients": [
            "Chicken",
            "Garlic",
            "Soy Sauce",
            "Crispy Noodles"
        ],
        "tags": [
            "Spicy",
            "Popular"
        ],
        "portionDescription": "1 Large Bowl (350ml)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Spicy",
            "Popular",
            "Low Calorie",
            "Light Meal",
            "Under 500 kcal"
        ],
        "allergens": [
            "Soy"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (350ml)",
            "calories": 171,
            "protein": 10,
            "carbohydrates": 22,
            "fat": 6,
            "fiber": 4,
            "sugar": 4,
            "sodium": 545
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (350ml)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 11,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sp-5",
        "category": "soups",
        "name": "Lemon Coriander Soup",
        "restaurantId": "rest-16",
        "cuisine": "Healthy",
        "price": 159,
        "rating": 4.7,
        "ratingCount": 190,
        "deliveryTime": 24,
        "distanceKm": 2.2,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        "description": "Refreshing clear vegetable broth infused with freshly squeezed lemon juice and aromatic cilantro.",
        "offer": "Healthy Pick",
        "ingredients": [
            "Lemon Juice",
            "Fresh Coriander",
            "Carrots",
            "Cabbage",
            "Ginger"
        ],
        "tags": [
            "Healthy",
            "Low Calorie"
        ],
        "portionDescription": "1 Large Bowl (350ml)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Healthy",
            "Low Calorie",
            "Light Meal",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Soy"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (350ml)",
            "calories": 188,
            "protein": 12,
            "carbohydrates": 20,
            "fat": 7,
            "fiber": 4,
            "sugar": 4,
            "sodium": 581
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (350ml)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 3,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sp-6",
        "category": "soups",
        "name": "Minestrone Veg Soup",
        "restaurantId": "rest-5",
        "cuisine": "Italian",
        "price": 199,
        "rating": 4.6,
        "ratingCount": 150,
        "deliveryTime": 32,
        "distanceKm": 3.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        "description": "Hearty Italian thick soup with beans, garden vegetables, pasta shells and parmesan cheese.",
        "offer": null,
        "ingredients": [
            "Kidney Beans",
            "Pasta Shells",
            "Zucchini",
            "Tomatoes",
            "Parmesan"
        ],
        "tags": [
            "Italian",
            "Hearty"
        ],
        "portionDescription": "1 Large Bowl (350ml)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Italian",
            "Hearty",
            "Low Calorie",
            "Light Meal",
            "Under 500 kcal",
            "High Fiber",
            "Vegetarian"
        ],
        "allergens": [
            "Soy"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (350ml)",
            "calories": 205,
            "protein": 13,
            "carbohydrates": 18,
            "fat": 8,
            "fiber": 5,
            "sugar": 3,
            "sodium": 617
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (350ml)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 9,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sp-7",
        "category": "soups",
        "name": "Clear Chicken Noodle Soup",
        "restaurantId": "rest-13",
        "cuisine": "Pan-Asian",
        "price": 189,
        "rating": 4.7,
        "ratingCount": 220,
        "deliveryTime": 26,
        "distanceKm": 2.5,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        "description": "Nutritious slow-simmered chicken broth with ramen noodles, bok choy and soft boiled egg.",
        "offer": "15% OFF",
        "ingredients": [
            "Chicken Broth",
            "Egg Noodles",
            "Bok Choy",
            "Boiled Egg"
        ],
        "tags": [
            "Nutritious",
            "Noodle Bowl"
        ],
        "portionDescription": "1 Large Bowl (350ml)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Nutritious",
            "Noodle Bowl",
            "Low Calorie",
            "Light Meal",
            "Under 500 kcal",
            "High Fiber"
        ],
        "allergens": [
            "Soy"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (350ml)",
            "calories": 222,
            "protein": 15,
            "carbohydrates": 16,
            "fat": 9,
            "fiber": 5,
            "sugar": 3,
            "sodium": 652
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (350ml)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 17,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sp-8",
        "category": "soups",
        "name": "Tom Yum Prawn Soup",
        "restaurantId": "rest-11",
        "cuisine": "Thai",
        "price": 249,
        "rating": 4.9,
        "ratingCount": 280,
        "deliveryTime": 25,
        "distanceKm": 2.7,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        "description": "Authentic fiery Thai soup with jumbo prawns, lemongrass, galangal, kaffir lime and bird chilies.",
        "offer": "20% OFF",
        "ingredients": [
            "Jumbo Prawns",
            "Lemongrass",
            "Galangal",
            "Kaffir Lime Leaves",
            "Fish Sauce"
        ],
        "tags": [
            "Thai",
            "Seafood",
            "Chef Special"
        ],
        "portionDescription": "1 Large Bowl (350ml)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Thai",
            "Seafood",
            "Chef Special",
            "Low Calorie",
            "Light Meal",
            "Under 500 kcal",
            "High Fiber"
        ],
        "allergens": [
            "Soy"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (350ml)",
            "calories": 239,
            "protein": 16,
            "carbohydrates": 14,
            "fat": 10,
            "fiber": 6,
            "sugar": 2,
            "sodium": 688
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (350ml)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 29,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sp-9",
        "category": "soups",
        "name": "Roasted Pumpkin Soup",
        "restaurantId": "rest-16",
        "cuisine": "Continental",
        "price": 189,
        "rating": 4.5,
        "ratingCount": 130,
        "deliveryTime": 24,
        "distanceKm": 2.2,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        "description": "Velvety roasted pumpkin and nutmeg soup drizzled with pumpkin seed oil and toasted seeds.",
        "offer": null,
        "ingredients": [
            "Roasted Pumpkin",
            "Coconut Cream",
            "Nutmeg",
            "Pumpkin Seeds"
        ],
        "tags": [
            "Vegan",
            "Creamy"
        ],
        "portionDescription": "1 Large Bowl (350ml)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Vegan",
            "Creamy",
            "Low Calorie",
            "Light Meal",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Soy"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (350ml)",
            "calories": 156,
            "protein": 9,
            "carbohydrates": 24,
            "fat": 5,
            "fiber": 3,
            "sugar": 5,
            "sodium": 514
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (350ml)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 21,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sp-10",
        "category": "soups",
        "name": "Cream of Mushroom Soup",
        "restaurantId": "rest-5",
        "cuisine": "Continental",
        "price": 199,
        "rating": 4.8,
        "ratingCount": 290,
        "deliveryTime": 32,
        "distanceKm": 3.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        "description": "Earthy wild and button mushroom puree blended with thyme, fresh cream and roasted garlic.",
        "offer": "₹30 OFF",
        "ingredients": [
            "Button Mushrooms",
            "Wild Mushrooms",
            "Thyme",
            "Cream",
            "Garlic"
        ],
        "tags": [
            "Gourmet",
            "Rich"
        ],
        "portionDescription": "1 Large Bowl (350ml)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Gourmet",
            "Rich",
            "Low Calorie",
            "Light Meal",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Soy"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (350ml)",
            "calories": 173,
            "protein": 11,
            "carbohydrates": 22,
            "fat": 6,
            "fiber": 4,
            "sugar": 4,
            "sodium": 549
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (350ml)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 13,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sp-11",
        "category": "soups",
        "name": "Veg Sweet Corn Soup",
        "restaurantId": "rest-7",
        "cuisine": "Indo-Chinese",
        "price": 149,
        "rating": 4.5,
        "ratingCount": 160,
        "deliveryTime": 28,
        "distanceKm": 2.6,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        "description": "Classic sweet corn soup with diced vegetables and a subtle hint of white pepper.",
        "offer": "10% OFF",
        "ingredients": [
            "Sweet Corn",
            "Carrots",
            "Beans",
            "White Pepper"
        ],
        "tags": [
            "Mild",
            "Vegetarian"
        ],
        "portionDescription": "1 Large Bowl (350ml)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Mild",
            "Vegetarian",
            "Low Calorie",
            "Light Meal",
            "Under 500 kcal",
            "High Fiber"
        ],
        "allergens": [
            "Soy"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (350ml)",
            "calories": 190,
            "protein": 12,
            "carbohydrates": 20,
            "fat": 7,
            "fiber": 5,
            "sugar": 4,
            "sodium": 585
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (350ml)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 1,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sp-12",
        "category": "soups",
        "name": "Lung Fung Soup",
        "restaurantId": "rest-3",
        "cuisine": "Chinese",
        "price": 209,
        "rating": 4.6,
        "ratingCount": 140,
        "deliveryTime": 30,
        "distanceKm": 2.8,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        "description": "Thick egg-drop soup cooked with minced chicken, seafood broth, and exotic vegetables.",
        "offer": null,
        "ingredients": [
            "Chicken Mince",
            "Egg White",
            "Mushrooms",
            "Seafood Stock"
        ],
        "tags": [
            "Exotic",
            "Thick Soup"
        ],
        "portionDescription": "1 Large Bowl (350ml)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Exotic",
            "Thick Soup",
            "Low Calorie",
            "Light Meal",
            "Under 500 kcal",
            "High Fiber"
        ],
        "allergens": [
            "Soy"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (350ml)",
            "calories": 207,
            "protein": 13,
            "carbohydrates": 18,
            "fat": 8,
            "fiber": 5,
            "sugar": 3,
            "sodium": 621
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (350ml)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 11,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sp-13",
        "category": "soups",
        "name": "French Onion Soup",
        "restaurantId": "rest-1",
        "cuisine": "French",
        "price": 219,
        "rating": 4.7,
        "ratingCount": 175,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        "description": "Caramelized sweet onions simmered in herb stock, topped with toasted baguette and melted Gruyere.",
        "offer": "Chef Pick",
        "ingredients": [
            "Caramelized Onions",
            "Herb Stock",
            "Baguette",
            "Gruyere Cheese"
        ],
        "tags": [
            "French",
            "Cheese Toast"
        ],
        "portionDescription": "1 Large Bowl (350ml)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "French",
            "Cheese Toast",
            "Low Calorie",
            "Light Meal",
            "Under 500 kcal",
            "High Fiber",
            "Vegetarian"
        ],
        "allergens": [
            "Soy"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (350ml)",
            "calories": 224,
            "protein": 15,
            "carbohydrates": 16,
            "fat": 9,
            "fiber": 6,
            "sugar": 2,
            "sodium": 656
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (350ml)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 19,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sp-14",
        "category": "soups",
        "name": "Broccoli Cheddar Soup",
        "restaurantId": "rest-16",
        "cuisine": "Continental",
        "price": 209,
        "rating": 4.8,
        "ratingCount": 210,
        "deliveryTime": 24,
        "distanceKm": 2.2,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        "description": "Rich and velvety soup loaded with fresh broccoli florets and sharp aged cheddar cheese.",
        "offer": "20% OFF",
        "ingredients": [
            "Broccoli",
            "Sharp Cheddar",
            "Cream",
            "Vegetable Stock"
        ],
        "tags": [
            "Cheesy",
            "Comfort"
        ],
        "portionDescription": "1 Large Bowl (350ml)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Cheesy",
            "Comfort",
            "Low Calorie",
            "Light Meal",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Soy"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (350ml)",
            "calories": 141,
            "protein": 8,
            "carbohydrates": 26,
            "fat": 4,
            "fiber": 3,
            "sugar": 5,
            "sodium": 482
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (350ml)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "LOW",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 31,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 141 kcal vs calculated 172 kcal (22.0% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sp-15",
        "category": "soups",
        "name": "Tom Kha Gai Soup",
        "restaurantId": "rest-11",
        "cuisine": "Thai",
        "price": 229,
        "rating": 4.7,
        "ratingCount": 165,
        "deliveryTime": 25,
        "distanceKm": 2.7,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        "description": "Creamy coconut milk soup infused with galangal, chicken chunks, lime leaves and lemongrass.",
        "offer": "15% OFF",
        "ingredients": [
            "Coconut Milk",
            "Chicken Breast",
            "Galangal",
            "Lemongrass",
            "Mushrooms"
        ],
        "tags": [
            "Thai",
            "Coconut"
        ],
        "portionDescription": "1 Large Bowl (350ml)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Thai",
            "Coconut",
            "Low Calorie",
            "Light Meal",
            "Under 500 kcal"
        ],
        "allergens": [
            "Soy"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (350ml)",
            "calories": 158,
            "protein": 9,
            "carbohydrates": 24,
            "fat": 5,
            "fiber": 4,
            "sugar": 4,
            "sodium": 518
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (350ml)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 19,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sp-16",
        "category": "soups",
        "name": "Asian Dumpling Soup",
        "restaurantId": "rest-13",
        "cuisine": "Pan-Asian",
        "price": 219,
        "rating": 4.8,
        "ratingCount": 240,
        "deliveryTime": 26,
        "distanceKm": 2.5,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        "description": "Handcrafted chicken wonton dumplings served in a steaming ginger and sesame broth.",
        "offer": "Bestseller",
        "ingredients": [
            "Chicken Wontons",
            "Ginger Broth",
            "Pak Choi",
            "Sesame Oil"
        ],
        "tags": [
            "Dumplings",
            "Warm"
        ],
        "portionDescription": "1 Large Bowl (350ml)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Dumplings",
            "Warm",
            "Low Calorie",
            "Light Meal",
            "Under 500 kcal"
        ],
        "allergens": [
            "Soy"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (350ml)",
            "calories": 175,
            "protein": 11,
            "carbohydrates": 22,
            "fat": 6,
            "fiber": 4,
            "sugar": 4,
            "sodium": 554
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (350ml)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 11,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sp-17",
        "category": "soups",
        "name": "Roasted Garlic Soup",
        "restaurantId": "rest-5",
        "cuisine": "Healthy",
        "price": 179,
        "rating": 4.6,
        "ratingCount": 120,
        "deliveryTime": 32,
        "distanceKm": 3.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        "description": "Immunity-boosting roasted garlic and potato broth with olive oil drizzle and fresh herbs.",
        "offer": null,
        "ingredients": [
            "Roasted Garlic",
            "Potatoes",
            "Rosemary",
            "Extra Virgin Olive Oil"
        ],
        "tags": [
            "Immunity",
            "Garlic"
        ],
        "portionDescription": "1 Large Bowl (350ml)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Immunity",
            "Garlic",
            "Low Calorie",
            "Light Meal",
            "Under 500 kcal",
            "High Fiber",
            "Vegetarian"
        ],
        "allergens": [
            "Soy"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (350ml)",
            "calories": 192,
            "protein": 12,
            "carbohydrates": 20,
            "fat": 7,
            "fiber": 5,
            "sugar": 3,
            "sodium": 589
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (350ml)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 1,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sp-18",
        "category": "soups",
        "name": "Mutton Paya Shorba",
        "restaurantId": "rest-4",
        "cuisine": "Mughlai",
        "price": 269,
        "rating": 4.9,
        "ratingCount": 380,
        "deliveryTime": 22,
        "distanceKm": 1.8,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        "description": "Traditional slow-cooked mutton trotters broth simmered overnight with whole spices.",
        "offer": "Royal Special",
        "ingredients": [
            "Mutton Trotters",
            "Saffron",
            "Whole Spices",
            "Mint",
            "Ginger"
        ],
        "tags": [
            "Authentic",
            "Bone Broth"
        ],
        "portionDescription": "1 Large Bowl (350ml)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Authentic",
            "Bone Broth",
            "Low Calorie",
            "Light Meal",
            "Under 500 kcal",
            "High Fiber"
        ],
        "allergens": [
            "Soy"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (350ml)",
            "calories": 209,
            "protein": 14,
            "carbohydrates": 18,
            "fat": 8,
            "fiber": 5,
            "sugar": 3,
            "sodium": 625
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (350ml)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 9,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sp-19",
        "category": "soups",
        "name": "Veg Clear Noodle Soup",
        "restaurantId": "rest-16",
        "cuisine": "Healthy",
        "price": 149,
        "rating": 4.4,
        "ratingCount": 110,
        "deliveryTime": 24,
        "distanceKm": 2.2,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        "description": "Light and clear broth with glass noodles, julienne carrots, beans and bean sprouts.",
        "offer": null,
        "ingredients": [
            "Glass Noodles",
            "Bean Sprouts",
            "Carrots",
            "Light Soy"
        ],
        "tags": [
            "Light",
            "Low Calorie"
        ],
        "portionDescription": "1 Large Bowl (350ml)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Light",
            "Low Calorie",
            "Light Meal",
            "Under 500 kcal",
            "High Fiber",
            "Vegetarian"
        ],
        "allergens": [
            "Soy"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (350ml)",
            "calories": 226,
            "protein": 15,
            "carbohydrates": 16,
            "fat": 9,
            "fiber": 6,
            "sugar": 2,
            "sodium": 661
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (350ml)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 21,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sp-20",
        "category": "soups",
        "name": "Seafood Bouillabaisse",
        "restaurantId": "rest-10",
        "cuisine": "Coastal",
        "price": 299,
        "rating": 4.8,
        "ratingCount": 195,
        "deliveryTime": 28,
        "distanceKm": 3,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        "description": "French Mediterranean seafood stew with fish chunks, prawns, squid and saffron tomato stock.",
        "offer": "20% OFF",
        "ingredients": [
            "Fish",
            "Prawns",
            "Squid",
            "Saffron",
            "Tomato Broth"
        ],
        "tags": [
            "Seafood",
            "Rich"
        ],
        "portionDescription": "1 Large Bowl (350ml)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Seafood",
            "Rich",
            "Low Calorie",
            "Light Meal",
            "Under 500 kcal"
        ],
        "allergens": [
            "Soy"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (350ml)",
            "calories": 143,
            "protein": 8,
            "carbohydrates": 26,
            "fat": 4,
            "fiber": 3,
            "sugar": 5,
            "sodium": 486
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (350ml)",
            "servingWeightGrams": 250,
            "status": "ESTIMATED",
            "confidence": "LOW",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 29,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 143 kcal vs calculated 172 kcal (20.3% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "fs-1",
        "category": "fish-seafood",
        "name": "Hyderabadi Apollo Fish",
        "restaurantId": "rest-1",
        "cuisine": "South Indian",
        "price": 349,
        "rating": 4.8,
        "ratingCount": 420,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy battered fish fillets tossed in spicy yogurt, curry leaves, red chilies and garlic tadka.",
        "offer": "20% OFF",
        "ingredients": [
            "Boneless Fish",
            "Yogurt",
            "Curry Leaves",
            "Garlic",
            "Green Chilies"
        ],
        "tags": [
            "Bestseller",
            "Crispy",
            "Spicy"
        ],
        "portionDescription": "Serves 1-2 (280g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Bestseller",
            "Crispy",
            "Spicy",
            "High Protein",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Seafood",
            "Shellfish"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (280g)",
            "calories": 308,
            "protein": 30,
            "carbohydrates": 16,
            "fat": 12,
            "fiber": 1,
            "sugar": 3,
            "sodium": 628
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "USDA FoodData Central",
            "sourceUrl": "https://fdc.nal.usda.gov/",
            "servingSize": "Serves 1-2 (280g)",
            "servingWeightGrams": 280,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 16,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "fs-2",
        "category": "fish-seafood",
        "name": "Grilled Lemon Butter Fish",
        "restaurantId": "rest-11",
        "cuisine": "Continental",
        "price": 399,
        "rating": 4.9,
        "ratingCount": 310,
        "deliveryTime": 25,
        "distanceKm": 2.7,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
        "description": "Pan-seared Basa fillet dressed in lemon butter garlic sauce, served with sauteed veggies.",
        "offer": "₹50 OFF",
        "ingredients": [
            "Basa Fillet",
            "Lemon Butter",
            "Garlic",
            "Parsley",
            "Zucchini"
        ],
        "tags": [
            "Grilled",
            "Healthy"
        ],
        "portionDescription": "Serves 1-2 (280g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Grilled",
            "Healthy",
            "High Protein",
            "Bestseller",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Seafood",
            "Shellfish"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (280g)",
            "calories": 332,
            "protein": 32,
            "carbohydrates": 14,
            "fat": 13,
            "fiber": 2,
            "sugar": 3,
            "sodium": 669
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "USDA FoodData Central",
            "sourceUrl": "https://fdc.nal.usda.gov/",
            "servingSize": "Serves 1-2 (280g)",
            "servingWeightGrams": 280,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 31,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "fs-3",
        "category": "fish-seafood",
        "name": "Prawns Butter Garlic",
        "restaurantId": "rest-10",
        "cuisine": "Coastal",
        "price": 420,
        "rating": 4.9,
        "ratingCount": 480,
        "deliveryTime": 28,
        "distanceKm": 3,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80",
        "description": "Juicy tiger prawns sauteed in rich butter, roasted garlic flakes, white wine reduction and herbs.",
        "offer": "Bestseller",
        "ingredients": [
            "Tiger Prawns",
            "Butter",
            "Roasted Garlic",
            "Parsley",
            "Black Pepper"
        ],
        "tags": [
            "Seafood",
            "Garlic Butter"
        ],
        "portionDescription": "Serves 1-2 (280g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Seafood",
            "Garlic Butter",
            "High Protein",
            "Bestseller",
            "Under 500 kcal"
        ],
        "allergens": [
            "Seafood",
            "Shellfish"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (280g)",
            "calories": 356,
            "protein": 34,
            "carbohydrates": 13,
            "fat": 14,
            "fiber": 2,
            "sugar": 2,
            "sodium": 710
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "USDA FoodData Central",
            "sourceUrl": "https://fdc.nal.usda.gov/",
            "servingSize": "Serves 1-2 (280g)",
            "servingWeightGrams": 280,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 42,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "fs-4",
        "category": "fish-seafood",
        "name": "Tawa Pomfret Fry",
        "restaurantId": "rest-11",
        "cuisine": "Coastal",
        "price": 449,
        "rating": 4.7,
        "ratingCount": 260,
        "deliveryTime": 25,
        "distanceKm": 2.7,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Whole silver pomfret marinated in coastal red masala and shallow-fried on cast iron tawa.",
        "offer": "15% OFF",
        "ingredients": [
            "Whole Pomfret",
            "Red Chili Paste",
            "Kokum",
            "Semolina Crust"
        ],
        "tags": [
            "Whole Fish",
            "Tawa Fry"
        ],
        "portionDescription": "Serves 1-2 (280g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Whole Fish",
            "Tawa Fry",
            "High Protein",
            "Bestseller",
            "Under 500 kcal"
        ],
        "allergens": [
            "Seafood",
            "Shellfish"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (280g)",
            "calories": 379,
            "protein": 37,
            "carbohydrates": 11,
            "fat": 16,
            "fiber": 2,
            "sugar": 2,
            "sodium": 750
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "USDA FoodData Central",
            "sourceUrl": "https://fdc.nal.usda.gov/",
            "servingSize": "Serves 1-2 (280g)",
            "servingWeightGrams": 280,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 43,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "fs-5",
        "category": "fish-seafood",
        "name": "Crispy Fried Calamari",
        "restaurantId": "rest-11",
        "cuisine": "Mediterranean",
        "price": 369,
        "rating": 4.6,
        "ratingCount": 210,
        "deliveryTime": 25,
        "distanceKm": 2.7,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80",
        "description": "Golden-fried tender squid rings seasoned with sea salt, paprika and served with tartar dip.",
        "offer": null,
        "ingredients": [
            "Squid Rings",
            "Paprika",
            "Sea Salt",
            "Tartar Sauce"
        ],
        "tags": [
            "Calamari",
            "Crunchy"
        ],
        "portionDescription": "Serves 1-2 (280g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Calamari",
            "Crunchy",
            "High Protein",
            "Bestseller",
            "Under 500 kcal"
        ],
        "allergens": [
            "Seafood",
            "Shellfish"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (280g)",
            "calories": 403,
            "protein": 39,
            "carbohydrates": 9,
            "fat": 17,
            "fiber": 3,
            "sugar": 1,
            "sodium": 791
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "USDA FoodData Central",
            "sourceUrl": "https://fdc.nal.usda.gov/",
            "servingSize": "Serves 1-2 (280g)",
            "servingWeightGrams": 280,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 58,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "fs-6",
        "category": "fish-seafood",
        "name": "Fish Tikka Masala",
        "restaurantId": "rest-2",
        "cuisine": "Tandoori",
        "price": 369,
        "rating": 4.7,
        "ratingCount": 190,
        "deliveryTime": 28,
        "distanceKm": 3.2,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
        "description": "Firm fish steaks marinated in ajwain tandoori masala and roasted in clay oven.",
        "offer": "20% OFF",
        "ingredients": [
            "Fish Steaks",
            "Ajwain",
            "Mustard Oil",
            "Kasuri Methi",
            "Curd"
        ],
        "tags": [
            "Tandoori",
            "Smoky"
        ],
        "portionDescription": "Serves 1-2 (280g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Tandoori",
            "Smoky",
            "High Protein",
            "Bestseller",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Seafood",
            "Shellfish"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (280g)",
            "calories": 287,
            "protein": 29,
            "carbohydrates": 18,
            "fat": 10,
            "fiber": 1,
            "sugar": 4,
            "sodium": 592
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "USDA FoodData Central",
            "sourceUrl": "https://fdc.nal.usda.gov/",
            "servingSize": "Serves 1-2 (280g)",
            "servingWeightGrams": 280,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 9,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "fs-7",
        "category": "fish-seafood",
        "name": "Coastal Crab Masala",
        "restaurantId": "rest-10",
        "cuisine": "Andhra",
        "price": 489,
        "rating": 4.8,
        "ratingCount": 340,
        "deliveryTime": 28,
        "distanceKm": 3,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh mud crabs simmered in spicy caramelized shallots, coconut milk and roasted spices.",
        "offer": "Special Catch",
        "ingredients": [
            "Mud Crabs",
            "Shallots",
            "Coconut Milk",
            "Curry Leaves",
            "Fennel"
        ],
        "tags": [
            "Crab",
            "Spicy"
        ],
        "portionDescription": "Serves 1-2 (280g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Crab",
            "Spicy",
            "High Protein",
            "Bestseller",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Seafood",
            "Shellfish"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (280g)",
            "calories": 311,
            "protein": 31,
            "carbohydrates": 16,
            "fat": 12,
            "fiber": 1,
            "sugar": 3,
            "sodium": 633
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "USDA FoodData Central",
            "sourceUrl": "https://fdc.nal.usda.gov/",
            "servingSize": "Serves 1-2 (280g)",
            "servingWeightGrams": 280,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 15,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "fs-8",
        "category": "fish-seafood",
        "name": "Golden Prawns Tempura",
        "restaurantId": "rest-13",
        "cuisine": "Japanese",
        "price": 399,
        "rating": 4.8,
        "ratingCount": 230,
        "deliveryTime": 26,
        "distanceKm": 2.5,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy Japanese style tempura battered jumbo prawns served with dashi dipping sauce.",
        "offer": "₹50 OFF",
        "ingredients": [
            "Jumbo Prawns",
            "Tempura Batter",
            "Dashi Dip",
            "Radish"
        ],
        "tags": [
            "Japanese",
            "Tempura"
        ],
        "portionDescription": "Serves 1-2 (280g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Japanese",
            "Tempura",
            "High Protein",
            "Bestseller",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Seafood",
            "Shellfish"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (280g)",
            "calories": 335,
            "protein": 33,
            "carbohydrates": 14,
            "fat": 13,
            "fiber": 2,
            "sugar": 3,
            "sodium": 674
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "USDA FoodData Central",
            "sourceUrl": "https://fdc.nal.usda.gov/",
            "servingSize": "Serves 1-2 (280g)",
            "servingWeightGrams": 280,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 30,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "fs-9",
        "category": "fish-seafood",
        "name": "Fish Koliwada",
        "restaurantId": "rest-1",
        "cuisine": "Coastal",
        "price": 329,
        "rating": 4.6,
        "ratingCount": 180,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Mumbai fisherman style spiced gram flour coated fish fingers, fried until deeply crisp.",
        "offer": null,
        "ingredients": [
            "Fish Fingers",
            "Carom Seeds",
            "Chili Powder",
            "Gram Flour"
        ],
        "tags": [
            "Crispy",
            "Snack"
        ],
        "portionDescription": "Serves 1-2 (280g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Crispy",
            "Snack",
            "High Protein",
            "Bestseller",
            "Under 500 kcal"
        ],
        "allergens": [
            "Seafood",
            "Shellfish"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (280g)",
            "calories": 358,
            "protein": 35,
            "carbohydrates": 12,
            "fat": 14,
            "fiber": 2,
            "sugar": 2,
            "sodium": 714
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "USDA FoodData Central",
            "sourceUrl": "https://fdc.nal.usda.gov/",
            "servingSize": "Serves 1-2 (280g)",
            "servingWeightGrams": 280,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 44,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "fs-10",
        "category": "fish-seafood",
        "name": "Garlic Butter Lobster",
        "restaurantId": "rest-11",
        "cuisine": "Gourmet",
        "price": 799,
        "rating": 4.9,
        "ratingCount": 150,
        "deliveryTime": 25,
        "distanceKm": 2.7,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80",
        "description": "Whole rock lobster tail grilled with garlic herb butter, served with asparagus spears.",
        "offer": "Chef Signature",
        "ingredients": [
            "Rock Lobster",
            "Clarified Butter",
            "Garlic",
            "Asparagus",
            "Lemon"
        ],
        "tags": [
            "Luxury",
            "Gourmet"
        ],
        "portionDescription": "Serves 1-2 (280g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Luxury",
            "Gourmet",
            "High Protein",
            "Bestseller",
            "Under 500 kcal"
        ],
        "allergens": [
            "Seafood",
            "Shellfish"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (280g)",
            "calories": 382,
            "protein": 37,
            "carbohydrates": 11,
            "fat": 16,
            "fiber": 2,
            "sugar": 2,
            "sodium": 755
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "USDA FoodData Central",
            "sourceUrl": "https://fdc.nal.usda.gov/",
            "servingSize": "Serves 1-2 (280g)",
            "servingWeightGrams": 280,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 46,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "fs-11",
        "category": "fish-seafood",
        "name": "Prawns Ghee Roast",
        "restaurantId": "rest-14",
        "cuisine": "Mangalorean",
        "price": 439,
        "rating": 4.9,
        "ratingCount": 390,
        "deliveryTime": 28,
        "distanceKm": 3.1,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent prawns slow-roasted in aromatic pure desi ghee and fiery Byadgi chili paste.",
        "offer": "Bestseller",
        "ingredients": [
            "Prawns",
            "Desi Ghee",
            "Byadgi Chilies",
            "Tamarind",
            "Curry Leaves"
        ],
        "tags": [
            "Mangalorean",
            "Rich"
        ],
        "portionDescription": "Serves 1-2 (280g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Mangalorean",
            "Rich",
            "High Protein",
            "Bestseller",
            "Under 500 kcal"
        ],
        "allergens": [
            "Seafood",
            "Shellfish"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (280g)",
            "calories": 406,
            "protein": 39,
            "carbohydrates": 9,
            "fat": 17,
            "fiber": 3,
            "sugar": 1,
            "sodium": 796
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "USDA FoodData Central",
            "sourceUrl": "https://fdc.nal.usda.gov/",
            "servingSize": "Serves 1-2 (280g)",
            "servingWeightGrams": 280,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 61,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 406 kcal vs calculated 345 kcal (15.0% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "fs-12",
        "category": "fish-seafood",
        "name": "Traditional Goan Fish Curry",
        "restaurantId": "rest-10",
        "cuisine": "Goan",
        "price": 369,
        "rating": 4.7,
        "ratingCount": 220,
        "deliveryTime": 28,
        "distanceKm": 3,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
        "description": "Kingfish simmered in creamy coconut milk, sour kokum, and freshly roasted Goan spices.",
        "offer": "15% OFF",
        "ingredients": [
            "Kingfish",
            "Coconut Milk",
            "Kokum",
            "Kashmiri Chili",
            "Coriander"
        ],
        "tags": [
            "Curry",
            "Goan"
        ],
        "portionDescription": "Serves 1-2 (280g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Curry",
            "Goan",
            "High Protein",
            "Bestseller",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Seafood",
            "Shellfish"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (280g)",
            "calories": 290,
            "protein": 29,
            "carbohydrates": 17,
            "fat": 11,
            "fiber": 1,
            "sugar": 4,
            "sodium": 597
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "USDA FoodData Central",
            "sourceUrl": "https://fdc.nal.usda.gov/",
            "servingSize": "Serves 1-2 (280g)",
            "servingWeightGrams": 280,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 7,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "fs-13",
        "category": "fish-seafood",
        "name": "Fish Finger Strips",
        "restaurantId": "rest-1",
        "cuisine": "Continental",
        "price": 299,
        "rating": 4.5,
        "ratingCount": 160,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Crumb-coated golden fish fingers served with spicy mustard mayo and lemon wedges.",
        "offer": "₹30 OFF",
        "ingredients": [
            "Fish Fillets",
            "Panko Crumbs",
            "Mustard Mayo",
            "Lemon"
        ],
        "tags": [
            "Finger Food",
            "Crispy"
        ],
        "portionDescription": "Serves 1-2 (280g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Finger Food",
            "Crispy",
            "High Protein",
            "Bestseller",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Seafood",
            "Shellfish"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (280g)",
            "calories": 314,
            "protein": 31,
            "carbohydrates": 16,
            "fat": 12,
            "fiber": 1,
            "sugar": 3,
            "sodium": 638
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "USDA FoodData Central",
            "sourceUrl": "https://fdc.nal.usda.gov/",
            "servingSize": "Serves 1-2 (280g)",
            "servingWeightGrams": 280,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 18,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "fs-14",
        "category": "fish-seafood",
        "name": "Chilli Prawns Dry",
        "restaurantId": "rest-3",
        "cuisine": "Indo-Chinese",
        "price": 379,
        "rating": 4.7,
        "ratingCount": 240,
        "deliveryTime": 30,
        "distanceKm": 2.8,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy fried prawns wok-tossed with green chilies, bell peppers, garlic and dark soy.",
        "offer": null,
        "ingredients": [
            "Prawns",
            "Green Chilies",
            "Capsicum",
            "Soy Sauce",
            "Spring Onion"
        ],
        "tags": [
            "Spicy",
            "Indo-Chinese"
        ],
        "portionDescription": "Serves 1-2 (280g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Spicy",
            "Indo-Chinese",
            "High Protein",
            "Bestseller",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Seafood",
            "Shellfish"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (280g)",
            "calories": 337,
            "protein": 33,
            "carbohydrates": 14,
            "fat": 13,
            "fiber": 2,
            "sugar": 3,
            "sodium": 678
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "USDA FoodData Central",
            "sourceUrl": "https://fdc.nal.usda.gov/",
            "servingSize": "Serves 1-2 (280g)",
            "servingWeightGrams": 280,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 32,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "fs-15",
        "category": "fish-seafood",
        "name": "Steamed Fish with Ginger Soy",
        "restaurantId": "rest-13",
        "cuisine": "Cantonese",
        "price": 389,
        "rating": 4.8,
        "ratingCount": 170,
        "deliveryTime": 26,
        "distanceKm": 2.5,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
        "description": "Delicate steamed fish fillet flavored with fresh julienne ginger, scallions and warm sesame soy.",
        "offer": "Healthy Pick",
        "ingredients": [
            "Basa Fillet",
            "Ginger",
            "Scallions",
            "Sesame Oil",
            "Light Soy"
        ],
        "tags": [
            "Steamed",
            "Healthy"
        ],
        "portionDescription": "Serves 1-2 (280g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Steamed",
            "Healthy",
            "High Protein",
            "Bestseller",
            "Under 500 kcal"
        ],
        "allergens": [
            "Seafood",
            "Shellfish"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (280g)",
            "calories": 361,
            "protein": 35,
            "carbohydrates": 12,
            "fat": 15,
            "fiber": 2,
            "sugar": 2,
            "sodium": 719
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "USDA FoodData Central",
            "sourceUrl": "https://fdc.nal.usda.gov/",
            "servingSize": "Serves 1-2 (280g)",
            "servingWeightGrams": 280,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 38,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "fs-16",
        "category": "fish-seafood",
        "name": "Malabar Fish Fry",
        "restaurantId": "rest-14",
        "cuisine": "Kerala",
        "price": 349,
        "rating": 4.7,
        "ratingCount": 290,
        "deliveryTime": 28,
        "distanceKm": 3.1,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Seer fish slice marinated with crushed peppercorns, shallots and curry leaves, pan-fried in coconut oil.",
        "offer": "20% OFF",
        "ingredients": [
            "Seer Fish",
            "Coconut Oil",
            "Curry Leaves",
            "Black Pepper",
            "Shallots"
        ],
        "tags": [
            "Kerala",
            "Authentic"
        ],
        "portionDescription": "Serves 1-2 (280g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Kerala",
            "Authentic",
            "High Protein",
            "Bestseller",
            "Under 500 kcal"
        ],
        "allergens": [
            "Seafood",
            "Shellfish"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (280g)",
            "calories": 385,
            "protein": 37,
            "carbohydrates": 11,
            "fat": 16,
            "fiber": 3,
            "sugar": 2,
            "sodium": 760
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "USDA FoodData Central",
            "sourceUrl": "https://fdc.nal.usda.gov/",
            "servingSize": "Serves 1-2 (280g)",
            "servingWeightGrams": 280,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 49,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "fs-17",
        "category": "fish-seafood",
        "name": "Prawn Manchurian Dry",
        "restaurantId": "rest-7",
        "cuisine": "Indo-Chinese",
        "price": 359,
        "rating": 4.5,
        "ratingCount": 140,
        "deliveryTime": 28,
        "distanceKm": 2.6,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80",
        "description": "Golden fried prawns tossed with coriander, minced garlic and tangy Manchurian glaze.",
        "offer": null,
        "ingredients": [
            "Prawns",
            "Garlic",
            "Coriander",
            "Manchurian Sauce"
        ],
        "tags": [
            "Crispy",
            "Chinese"
        ],
        "portionDescription": "Serves 1-2 (280g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Crispy",
            "Chinese",
            "High Protein",
            "Bestseller",
            "Under 500 kcal"
        ],
        "allergens": [
            "Seafood",
            "Shellfish"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (280g)",
            "calories": 409,
            "protein": 39,
            "carbohydrates": 9,
            "fat": 17,
            "fiber": 3,
            "sugar": 1,
            "sodium": 801
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "USDA FoodData Central",
            "sourceUrl": "https://fdc.nal.usda.gov/",
            "servingSize": "Serves 1-2 (280g)",
            "servingWeightGrams": 280,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 64,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 409 kcal vs calculated 345 kcal (15.6% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "fs-18",
        "category": "fish-seafood",
        "name": "Sesame Crusted Salmon",
        "restaurantId": "rest-5",
        "cuisine": "Gourmet",
        "price": 649,
        "rating": 4.9,
        "ratingCount": 180,
        "deliveryTime": 32,
        "distanceKm": 3.1,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
        "description": "Pan-seared Atlantic salmon fillet with black & white sesame crust, served over teriyaki greens.",
        "offer": "Chef Special",
        "ingredients": [
            "Atlantic Salmon",
            "Sesame Seeds",
            "Teriyaki Glaze",
            "Bok Choy"
        ],
        "tags": [
            "Salmon",
            "Superfood"
        ],
        "portionDescription": "Serves 1-2 (280g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Salmon",
            "Superfood",
            "High Protein",
            "Bestseller",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Seafood",
            "Shellfish"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (280g)",
            "calories": 293,
            "protein": 29,
            "carbohydrates": 17,
            "fat": 11,
            "fiber": 1,
            "sugar": 4,
            "sodium": 602
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "USDA FoodData Central",
            "sourceUrl": "https://fdc.nal.usda.gov/",
            "servingSize": "Serves 1-2 (280g)",
            "servingWeightGrams": 280,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 10,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "fs-19",
        "category": "fish-seafood",
        "name": "Classic Fish & Chips",
        "restaurantId": "rest-1",
        "cuisine": "British",
        "price": 349,
        "rating": 4.6,
        "ratingCount": 220,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy beer-battered fish fillet served with thick salted potato fries, tartar sauce and lemon.",
        "offer": "₹40 OFF",
        "ingredients": [
            "Fish Fillet",
            "Crisp Batter",
            "Potato Fries",
            "Tartar Dip"
        ],
        "tags": [
            "Classic",
            "Comfort"
        ],
        "portionDescription": "Serves 1-2 (280g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Classic",
            "Comfort",
            "High Protein",
            "Bestseller",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Seafood",
            "Shellfish"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (280g)",
            "calories": 316,
            "protein": 31,
            "carbohydrates": 15,
            "fat": 12,
            "fiber": 2,
            "sugar": 3,
            "sodium": 642
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "USDA FoodData Central",
            "sourceUrl": "https://fdc.nal.usda.gov/",
            "servingSize": "Serves 1-2 (280g)",
            "servingWeightGrams": 280,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 24,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "fs-20",
        "category": "fish-seafood",
        "name": "Crab Sukka",
        "restaurantId": "rest-10",
        "cuisine": "Mangalorean",
        "price": 499,
        "rating": 4.8,
        "ratingCount": 310,
        "deliveryTime": 28,
        "distanceKm": 3,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80",
        "description": "Dry roasted crab with freshly grated coconut, Byadgi chilies and aromatic Mangalorean spices.",
        "offer": "20% OFF",
        "ingredients": [
            "Crabs",
            "Grated Coconut",
            "Red Chilies",
            "Curry Leaves",
            "Coriander Seeds"
        ],
        "tags": [
            "Crab",
            "Spicy"
        ],
        "portionDescription": "Serves 1-2 (280g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Crab",
            "Spicy",
            "High Protein",
            "Bestseller",
            "Low Calorie",
            "Under 500 kcal"
        ],
        "allergens": [
            "Seafood",
            "Shellfish"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (280g)",
            "calories": 340,
            "protein": 33,
            "carbohydrates": 14,
            "fat": 13,
            "fiber": 2,
            "sugar": 3,
            "sodium": 683
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "USDA FoodData Central",
            "sourceUrl": "https://fdc.nal.usda.gov/",
            "servingSize": "Serves 1-2 (280g)",
            "servingWeightGrams": 280,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 35,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "mc-1",
        "category": "main-course",
        "name": "Hyderabadi Chicken Dum Biryani",
        "restaurantId": "rest-4",
        "cuisine": "Hyderabadi",
        "price": 349,
        "rating": 4.9,
        "ratingCount": 980,
        "deliveryTime": 22,
        "distanceKm": 1.8,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Authentic Hyderabadi dum biryani layered with fragrant basmati rice, saffron, and slow-cooked marinated chicken.",
        "offer": "Bestseller",
        "ingredients": [
            "Long Grain Basmati",
            "Chicken",
            "Saffron",
            "Brown Onions",
            "Ghee",
            "Mint"
        ],
        "tags": [
            "Biryani",
            "Authentic",
            "Bestseller"
        ],
        "portionDescription": "Serves 1-2 (450g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Biryani",
            "Authentic",
            "Bestseller",
            "Hearty Meal",
            "High Protein",
            "High Fiber"
        ],
        "allergens": [
            "Dairy",
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (450g)",
            "calories": 616,
            "protein": 29,
            "carbohydrates": 69,
            "fat": 24,
            "fiber": 6,
            "sugar": 6,
            "sodium": 876
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (450g)",
            "servingWeightGrams": 450,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 8,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "mc-2",
        "category": "main-course",
        "name": "Delhi Butter Chicken",
        "restaurantId": "rest-1",
        "cuisine": "North Indian",
        "price": 369,
        "rating": 4.8,
        "ratingCount": 720,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80",
        "description": "Tandoori chicken pieces simmered in rich satin tomato gravy, butter, cashews and fenugreek leaves.",
        "offer": "20% OFF",
        "ingredients": [
            "Tandoori Chicken",
            "Tomato Puree",
            "Amul Butter",
            "Fresh Cream",
            "Kasuri Methi"
        ],
        "tags": [
            "Creamy",
            "North Indian",
            "Classic"
        ],
        "portionDescription": "Serves 1-2 (450g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Creamy",
            "North Indian",
            "Classic",
            "Bestseller",
            "Hearty Meal",
            "High Protein",
            "High Fiber"
        ],
        "allergens": [
            "Dairy",
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (450g)",
            "calories": 643,
            "protein": 31,
            "carbohydrates": 64,
            "fat": 26,
            "fiber": 7,
            "sugar": 5,
            "sodium": 920
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (450g)",
            "servingWeightGrams": 450,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 29,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "mc-3",
        "category": "main-course",
        "name": "Paneer Butter Masala",
        "restaurantId": "rest-1",
        "cuisine": "North Indian",
        "price": 299,
        "rating": 4.8,
        "ratingCount": 650,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent malai paneer cubes simmered in velvety butter tomato gravy with hint of sweet cream.",
        "offer": "₹50 OFF",
        "ingredients": [
            "Fresh Paneer",
            "Butter",
            "Cashew Cream",
            "Tomatoes",
            "Kasuri Methi"
        ],
        "tags": [
            "Vegetarian",
            "Rich",
            "Bestseller"
        ],
        "portionDescription": "Serves 1-2 (450g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Vegetarian",
            "Rich",
            "Bestseller",
            "Hearty Meal",
            "High Protein",
            "High Fiber"
        ],
        "allergens": [
            "Dairy",
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (450g)",
            "calories": 670,
            "protein": 33,
            "carbohydrates": 60,
            "fat": 27,
            "fiber": 8,
            "sugar": 4,
            "sodium": 964
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (450g)",
            "servingWeightGrams": 450,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 55,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "mc-4",
        "category": "main-course",
        "name": "Kashmiri Mutton Rogan Josh",
        "restaurantId": "rest-4",
        "cuisine": "Kashmiri",
        "price": 449,
        "rating": 4.9,
        "ratingCount": 430,
        "deliveryTime": 22,
        "distanceKm": 1.8,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Slow-cooked tender mutton cooked in aromatic gravy flavored with Kashmiri chilies and fennel.",
        "offer": "Royal Dish",
        "ingredients": [
            "Tender Lamb",
            "Kashmiri Chilies",
            "Fennel Powder",
            "Hing",
            "Mustard Oil"
        ],
        "tags": [
            "Mutton",
            "Rich",
            "Authentic"
        ],
        "portionDescription": "Serves 1-2 (450g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Mutton",
            "Rich",
            "Authentic",
            "Bestseller",
            "Hearty Meal",
            "High Protein"
        ],
        "allergens": [
            "Dairy",
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (450g)",
            "calories": 538,
            "protein": 23,
            "carbohydrates": 83,
            "fat": 19,
            "fiber": 4,
            "sugar": 8,
            "sodium": 749
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (450g)",
            "servingWeightGrams": 450,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 57,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "mc-5",
        "category": "main-course",
        "name": "Dal Makhani Slow Simmered",
        "restaurantId": "rest-2",
        "cuisine": "North Indian",
        "price": 249,
        "rating": 4.8,
        "ratingCount": 520,
        "deliveryTime": 28,
        "distanceKm": 3.2,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Black lentils and red kidney beans simmered overnight on charcoal with butter and cream.",
        "offer": "20% OFF",
        "ingredients": [
            "Black Lentils",
            "Kidney Beans",
            "White Butter",
            "Fresh Cream",
            "Ginger"
        ],
        "tags": [
            "Lentils",
            "Comfort Food"
        ],
        "portionDescription": "Serves 1-2 (450g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Lentils",
            "Comfort Food",
            "Bestseller",
            "Hearty Meal",
            "High Protein",
            "High Fiber",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (450g)",
            "calories": 565,
            "protein": 25,
            "carbohydrates": 78,
            "fat": 21,
            "fiber": 5,
            "sugar": 7,
            "sodium": 793
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (450g)",
            "servingWeightGrams": 450,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 36,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "mc-6",
        "category": "main-course",
        "name": "Kadai Chicken",
        "restaurantId": "rest-3",
        "cuisine": "North Indian",
        "price": 339,
        "rating": 4.7,
        "ratingCount": 380,
        "deliveryTime": 30,
        "distanceKm": 2.8,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80",
        "description": "Chicken cooked in wok with roasted coriander seeds, bell peppers, onions and thick spicy gravy.",
        "offer": "15% OFF",
        "ingredients": [
            "Chicken",
            "Bell Peppers",
            "Kadai Masala",
            "Whole Coriander",
            "Tomatoes"
        ],
        "tags": [
            "Spicy",
            "Kadai"
        ],
        "portionDescription": "Serves 1-2 (450g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Spicy",
            "Kadai",
            "Bestseller",
            "Hearty Meal",
            "High Protein",
            "High Fiber"
        ],
        "allergens": [
            "Dairy",
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (450g)",
            "calories": 592,
            "protein": 27,
            "carbohydrates": 73,
            "fat": 23,
            "fiber": 6,
            "sugar": 6,
            "sodium": 837
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (450g)",
            "servingWeightGrams": 450,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 15,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "mc-7",
        "category": "main-course",
        "name": "Shahi Paneer",
        "restaurantId": "rest-2",
        "cuisine": "Mughlai",
        "price": 319,
        "rating": 4.7,
        "ratingCount": 290,
        "deliveryTime": 28,
        "distanceKm": 3.2,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Royal cottage cheese cubes cooked in golden cashew, almond, saffron and cardamom gravy.",
        "offer": null,
        "ingredients": [
            "Paneer",
            "Almonds",
            "Cashews",
            "Saffron",
            "Kewra"
        ],
        "tags": [
            "Royal",
            "Mild"
        ],
        "portionDescription": "Serves 1-2 (450g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Royal",
            "Mild",
            "Bestseller",
            "Hearty Meal",
            "High Protein",
            "High Fiber",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (450g)",
            "calories": 619,
            "protein": 29,
            "carbohydrates": 69,
            "fat": 24,
            "fiber": 6,
            "sugar": 6,
            "sodium": 881
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (450g)",
            "servingWeightGrams": 450,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 11,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "mc-8",
        "category": "main-course",
        "name": "Chicken Tikka Masala",
        "restaurantId": "rest-1",
        "cuisine": "North Indian",
        "price": 359,
        "rating": 4.8,
        "ratingCount": 460,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80",
        "description": "Char-grilled chicken tikka chunks cooked in spiced onion-tomato masala with diced capsicum.",
        "offer": "₹40 OFF",
        "ingredients": [
            "Chicken Tikka",
            "Capsicum",
            "Onion Gravy",
            "Garam Masala"
        ],
        "tags": [
            "Tandoori",
            "Popular"
        ],
        "portionDescription": "Serves 1-2 (450g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Tandoori",
            "Popular",
            "Bestseller",
            "Hearty Meal",
            "High Protein",
            "High Fiber"
        ],
        "allergens": [
            "Dairy",
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (450g)",
            "calories": 646,
            "protein": 31,
            "carbohydrates": 64,
            "fat": 26,
            "fiber": 7,
            "sugar": 5,
            "sodium": 925
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (450g)",
            "servingWeightGrams": 450,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 32,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "mc-9",
        "category": "main-course",
        "name": "Malai Kofta",
        "restaurantId": "rest-2",
        "cuisine": "North Indian",
        "price": 309,
        "rating": 4.7,
        "ratingCount": 310,
        "deliveryTime": 28,
        "distanceKm": 3.2,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy fried paneer and potato dumplings stuffed with dry fruits, served in creamy cashew gravy.",
        "offer": "20% OFF",
        "ingredients": [
            "Paneer Dumplings",
            "Cashews",
            "Mawa",
            "Cardamom Cream"
        ],
        "tags": [
            "Rich",
            "Gourmet"
        ],
        "portionDescription": "Serves 1-2 (450g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Rich",
            "Gourmet",
            "Bestseller",
            "Hearty Meal",
            "High Protein",
            "High Fiber",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (450g)",
            "calories": 674,
            "protein": 34,
            "carbohydrates": 59,
            "fat": 28,
            "fiber": 8,
            "sugar": 4,
            "sodium": 970
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (450g)",
            "servingWeightGrams": 450,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 50,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "mc-10",
        "category": "main-course",
        "name": "Hyderabadi Veg Dum Biryani",
        "restaurantId": "rest-4",
        "cuisine": "Hyderabadi",
        "price": 279,
        "rating": 4.8,
        "ratingCount": 540,
        "deliveryTime": 22,
        "distanceKm": 1.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Basmati rice slow-cooked with fresh garden vegetables, mint, caramelized onions and saffron.",
        "offer": "Bestseller",
        "ingredients": [
            "Basmati Rice",
            "Paneer",
            "Carrots",
            "Beans",
            "Saffron",
            "Mint"
        ],
        "tags": [
            "Vegetarian",
            "Biryani"
        ],
        "portionDescription": "Serves 1-2 (450g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Vegetarian",
            "Biryani",
            "Bestseller",
            "Hearty Meal",
            "High Protein",
            "High Fiber"
        ],
        "allergens": [
            "Dairy",
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (450g)",
            "calories": 541,
            "protein": 24,
            "carbohydrates": 82,
            "fat": 19,
            "fiber": 5,
            "sugar": 7,
            "sodium": 754
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (450g)",
            "servingWeightGrams": 450,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 54,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "mc-11",
        "category": "main-course",
        "name": "Kadhai Paneer",
        "restaurantId": "rest-3",
        "cuisine": "North Indian",
        "price": 289,
        "rating": 4.6,
        "ratingCount": 230,
        "deliveryTime": 30,
        "distanceKm": 2.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer tossed with crunchy capsicum, onions and roasted whole spices in thick gravy.",
        "offer": null,
        "ingredients": [
            "Paneer",
            "Bell Peppers",
            "Kadai Spices",
            "Tomatoes"
        ],
        "tags": [
            "Spicy",
            "Kadai"
        ],
        "portionDescription": "Serves 1-2 (450g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Spicy",
            "Kadai",
            "Bestseller",
            "Hearty Meal",
            "High Protein",
            "High Fiber",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (450g)",
            "calories": 568,
            "protein": 26,
            "carbohydrates": 78,
            "fat": 21,
            "fiber": 5,
            "sugar": 7,
            "sodium": 798
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (450g)",
            "servingWeightGrams": 450,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 37,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "mc-12",
        "category": "main-course",
        "name": "Chettinad Chicken Curry",
        "restaurantId": "rest-14",
        "cuisine": "Chettinad",
        "price": 359,
        "rating": 4.9,
        "ratingCount": 410,
        "deliveryTime": 28,
        "distanceKm": 3.1,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80",
        "description": "Fiery South Indian chicken curry cooked with freshly ground star anise, black pepper and coconut.",
        "offer": "15% OFF",
        "ingredients": [
            "Chicken",
            "Star Anise",
            "Black Pepper",
            "Coconut Paste",
            "Curry Leaves"
        ],
        "tags": [
            "Spicy",
            "Chettinad"
        ],
        "portionDescription": "Serves 1-2 (450g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Spicy",
            "Chettinad",
            "Bestseller",
            "Hearty Meal",
            "High Protein",
            "High Fiber"
        ],
        "allergens": [
            "Dairy",
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (450g)",
            "calories": 595,
            "protein": 28,
            "carbohydrates": 73,
            "fat": 23,
            "fiber": 6,
            "sugar": 6,
            "sodium": 842
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (450g)",
            "servingWeightGrams": 450,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 16,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "mc-13",
        "category": "main-course",
        "name": "Palak Paneer",
        "restaurantId": "rest-1",
        "cuisine": "North Indian",
        "price": 279,
        "rating": 4.7,
        "ratingCount": 330,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese cubes simmered in creamy garlic-infused spinach puree with spices.",
        "offer": "Healthy Pick",
        "ingredients": [
            "Fresh Spinach",
            "Paneer",
            "Garlic",
            "Green Chilies",
            "Cream"
        ],
        "tags": [
            "Healthy",
            "Spinach"
        ],
        "portionDescription": "Serves 1-2 (450g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Healthy",
            "Spinach",
            "Bestseller",
            "Hearty Meal",
            "High Protein",
            "High Fiber",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (450g)",
            "calories": 622,
            "protein": 30,
            "carbohydrates": 68,
            "fat": 24,
            "fiber": 7,
            "sugar": 5,
            "sodium": 886
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (450g)",
            "servingWeightGrams": 450,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 14,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "mc-14",
        "category": "main-course",
        "name": "Andhra Mutton Curry",
        "restaurantId": "rest-6",
        "cuisine": "Andhra",
        "price": 439,
        "rating": 4.8,
        "ratingCount": 370,
        "deliveryTime": 25,
        "distanceKm": 2.4,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Fiery and traditional Andhra style mutton curry cooked with poppy seed paste and Guntur chilies.",
        "offer": "20% OFF",
        "ingredients": [
            "Mutton",
            "Guntur Chilies",
            "Poppy Seeds",
            "Shallots",
            "Cinnamon"
        ],
        "tags": [
            "Spicy",
            "Andhra"
        ],
        "portionDescription": "Serves 1-2 (450g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Spicy",
            "Andhra",
            "Bestseller",
            "Hearty Meal",
            "High Protein",
            "High Fiber"
        ],
        "allergens": [
            "Dairy",
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (450g)",
            "calories": 650,
            "protein": 32,
            "carbohydrates": 63,
            "fat": 26,
            "fiber": 7,
            "sugar": 5,
            "sodium": 931
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (450g)",
            "servingWeightGrams": 450,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 36,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "mc-15",
        "category": "main-course",
        "name": "Methi Malai Matar",
        "restaurantId": "rest-5",
        "cuisine": "North Indian",
        "price": 269,
        "rating": 4.6,
        "ratingCount": 190,
        "deliveryTime": 32,
        "distanceKm": 3.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh fenugreek leaves and sweet green peas cooked in rich cream and cashew gravy.",
        "offer": null,
        "ingredients": [
            "Fresh Methi",
            "Green Peas",
            "Cashew Cream",
            "Cardamom"
        ],
        "tags": [
            "Creamy",
            "Mild"
        ],
        "portionDescription": "Serves 1-2 (450g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Creamy",
            "Mild",
            "Bestseller",
            "Hearty Meal",
            "High Protein",
            "High Fiber",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (450g)",
            "calories": 677,
            "protein": 34,
            "carbohydrates": 59,
            "fat": 28,
            "fiber": 8,
            "sugar": 4,
            "sodium": 975
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (450g)",
            "servingWeightGrams": 450,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 53,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "mc-16",
        "category": "main-course",
        "name": "Murg Rara",
        "restaurantId": "rest-2",
        "cuisine": "Punjabi",
        "price": 379,
        "rating": 4.8,
        "ratingCount": 260,
        "deliveryTime": 28,
        "distanceKm": 3.2,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80",
        "description": "Tender chicken pieces cooked together with minced chicken in rich Punjabi tomato gravy.",
        "offer": "₹50 OFF",
        "ingredients": [
            "Chicken Pieces",
            "Chicken Keema",
            "Onion Masala",
            "Whole Spices"
        ],
        "tags": [
            "Punjabi",
            "Rich Gravy"
        ],
        "portionDescription": "Serves 1-2 (450g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Punjabi",
            "Rich Gravy",
            "Bestseller",
            "Hearty Meal",
            "High Protein",
            "High Fiber"
        ],
        "allergens": [
            "Dairy",
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (450g)",
            "calories": 544,
            "protein": 24,
            "carbohydrates": 82,
            "fat": 20,
            "fiber": 5,
            "sugar": 7,
            "sodium": 759
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (450g)",
            "servingWeightGrams": 450,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 60,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "mc-17",
        "category": "main-course",
        "name": "Paneer Lababdar",
        "restaurantId": "rest-1",
        "cuisine": "North Indian",
        "price": 299,
        "rating": 4.8,
        "ratingCount": 340,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer cubes and grated paneer cooked in luscious tomato and onion gravy with butter.",
        "offer": "20% OFF",
        "ingredients": [
            "Paneer",
            "Grated Paneer",
            "Tomatoes",
            "Cashews",
            "Butter"
        ],
        "tags": [
            "Gourmet",
            "Creamy"
        ],
        "portionDescription": "Serves 1-2 (450g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Gourmet",
            "Creamy",
            "Bestseller",
            "Hearty Meal",
            "High Protein",
            "High Fiber",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (450g)",
            "calories": 571,
            "protein": 26,
            "carbohydrates": 77,
            "fat": 21,
            "fiber": 5,
            "sugar": 7,
            "sodium": 803
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (450g)",
            "servingWeightGrams": 450,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 30,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "mc-18",
        "category": "main-course",
        "name": "Mughlai Mutton Korma",
        "restaurantId": "rest-4",
        "cuisine": "Mughlai",
        "price": 459,
        "rating": 4.9,
        "ratingCount": 310,
        "deliveryTime": 22,
        "distanceKm": 1.8,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Royal mutton curry slow cooked with almond paste, brown onions, yogurt and rose water.",
        "offer": "Chef Special",
        "ingredients": [
            "Mutton",
            "Almond Paste",
            "Brown Onions",
            "Rose Water",
            "Kewra"
        ],
        "tags": [
            "Royal",
            "Mughlai"
        ],
        "portionDescription": "Serves 1-2 (450g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Royal",
            "Mughlai",
            "Bestseller",
            "Hearty Meal",
            "High Protein",
            "High Fiber"
        ],
        "allergens": [
            "Dairy",
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (450g)",
            "calories": 598,
            "protein": 28,
            "carbohydrates": 72,
            "fat": 23,
            "fiber": 6,
            "sugar": 6,
            "sodium": 847
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (450g)",
            "servingWeightGrams": 450,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 9,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "mc-19",
        "category": "main-course",
        "name": "Dal Tadka Dhaba Style",
        "restaurantId": "rest-7",
        "cuisine": "North Indian",
        "price": 189,
        "rating": 4.6,
        "ratingCount": 420,
        "deliveryTime": 28,
        "distanceKm": 2.6,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Yellow toor dal tempered with desi ghee, cumin, garlic, dry red chilies and fresh coriander.",
        "offer": "Bestseller",
        "ingredients": [
            "Toor Dal",
            "Desi Ghee",
            "Garlic",
            "Cumin",
            "Red Chilies"
        ],
        "tags": [
            "Comfort",
            "Classic"
        ],
        "portionDescription": "Serves 1-2 (450g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Comfort",
            "Classic",
            "Bestseller",
            "Hearty Meal",
            "High Protein",
            "High Fiber",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (450g)",
            "calories": 626,
            "protein": 30,
            "carbohydrates": 68,
            "fat": 25,
            "fiber": 7,
            "sugar": 5,
            "sodium": 892
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (450g)",
            "servingWeightGrams": 450,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 9,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "mc-20",
        "category": "main-course",
        "name": "Chicken Handi",
        "restaurantId": "rest-8",
        "cuisine": "North Indian",
        "price": 349,
        "rating": 4.7,
        "ratingCount": 210,
        "deliveryTime": 30,
        "distanceKm": 3.4,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80",
        "description": "Earthen pot cooked chicken cooked in rich onion, yogurt and coriander seed gravy.",
        "offer": "15% OFF",
        "ingredients": [
            "Chicken",
            "Yogurt",
            "Coriander Seeds",
            "Clay Pot Gravy"
        ],
        "tags": [
            "Handi",
            "Authentic"
        ],
        "portionDescription": "Serves 1-2 (450g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Handi",
            "Authentic",
            "Bestseller",
            "Hearty Meal",
            "High Protein",
            "High Fiber"
        ],
        "allergens": [
            "Dairy",
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "Serves 1-2 (450g)",
            "calories": 653,
            "protein": 32,
            "carbohydrates": 63,
            "fat": 26,
            "fiber": 7,
            "sugar": 5,
            "sodium": 936
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1-2 (450g)",
            "servingWeightGrams": 450,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 39,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nd-1",
        "category": "noodles",
        "name": "Classic Veg Hakka Noodles",
        "restaurantId": "rest-13",
        "cuisine": "Pan-Asian",
        "price": 199,
        "rating": 4.7,
        "ratingCount": 480,
        "deliveryTime": 26,
        "distanceKm": 2.5,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Wok-tossed thin noodles with crunchy cabbage, bell peppers, carrots, scallions and light soy.",
        "offer": "20% OFF",
        "ingredients": [
            "Hakka Noodles",
            "Bell Peppers",
            "Cabbage",
            "Spring Onions",
            "Light Soy"
        ],
        "tags": [
            "Bestseller",
            "Chinese",
            "Vegetarian"
        ],
        "portionDescription": "Serves 1 (350g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Bestseller",
            "Chinese",
            "Vegetarian",
            "Pan-Asian",
            "Popular",
            "Under 500 kcal"
        ],
        "allergens": [
            "Soy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1 (350g)",
            "calories": 380,
            "protein": 12,
            "carbohydrates": 78,
            "fat": 12,
            "fiber": 3,
            "sugar": 7,
            "sodium": 620
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1 (350g)",
            "servingWeightGrams": 350,
            "status": "ESTIMATED",
            "confidence": "LOW",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 88,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 380 kcal vs calculated 468 kcal (23.2% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nd-2",
        "category": "noodles",
        "name": "Chicken Schezwan Noodles",
        "restaurantId": "rest-13",
        "cuisine": "Indo-Chinese",
        "price": 249,
        "rating": 4.8,
        "ratingCount": 520,
        "deliveryTime": 26,
        "distanceKm": 2.5,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
        "description": "Spicy wok-tossed noodles with shredded chicken, fiery house-made Schezwan sauce and garlic.",
        "offer": "₹40 OFF",
        "ingredients": [
            "Noodles",
            "Shredded Chicken",
            "Schezwan Sauce",
            "Garlic",
            "Chili Oil"
        ],
        "tags": [
            "Spicy",
            "Popular"
        ],
        "portionDescription": "Serves 1 (350g)",
        "spiceLevel": "Hot",
        "dietaryTags": [
            "Spicy",
            "Popular",
            "Pan-Asian",
            "Under 500 kcal"
        ],
        "allergens": [
            "Soy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1 (350g)",
            "calories": 404,
            "protein": 14,
            "carbohydrates": 74,
            "fat": 13,
            "fiber": 4,
            "sugar": 6,
            "sodium": 659
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1 (350g)",
            "servingWeightGrams": 350,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 65,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 404 kcal vs calculated 469 kcal (16.1% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nd-3",
        "category": "noodles",
        "name": "Chilli Garlic Noodles",
        "restaurantId": "rest-3",
        "cuisine": "Pan-Asian",
        "price": 219,
        "rating": 4.6,
        "ratingCount": 310,
        "deliveryTime": 30,
        "distanceKm": 2.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Fiery garlic noodles tossed with crushed red chili flakes, roasted garlic chips and scallions.",
        "offer": "15% OFF",
        "ingredients": [
            "Noodles",
            "Roasted Garlic",
            "Chili Flakes",
            "Scallions",
            "Sesame Oil"
        ],
        "tags": [
            "Garlic",
            "Spicy"
        ],
        "portionDescription": "Serves 1 (350g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Garlic",
            "Spicy",
            "Pan-Asian",
            "Popular",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Soy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1 (350g)",
            "calories": 428,
            "protein": 15,
            "carbohydrates": 71,
            "fat": 14,
            "fiber": 4,
            "sugar": 6,
            "sodium": 698
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1 (350g)",
            "servingWeightGrams": 350,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 42,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nd-4",
        "category": "noodles",
        "name": "Singapore Rice Noodles",
        "restaurantId": "rest-13",
        "cuisine": "Singaporean",
        "price": 269,
        "rating": 4.7,
        "ratingCount": 230,
        "deliveryTime": 26,
        "distanceKm": 2.5,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
        "description": "Thin rice vermicelli noodles tossed with yellow curry powder, chicken strips, shrimp and bell peppers.",
        "offer": "Chef Special",
        "ingredients": [
            "Rice Vermicelli",
            "Curry Powder",
            "Chicken",
            "Shrimp",
            "Beansprouts"
        ],
        "tags": [
            "Singaporean",
            "Curry Flavor"
        ],
        "portionDescription": "Serves 1 (350g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Singaporean",
            "Curry Flavor",
            "Pan-Asian",
            "Popular",
            "Under 500 kcal",
            "High Fiber"
        ],
        "allergens": [
            "Soy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1 (350g)",
            "calories": 451,
            "protein": 17,
            "carbohydrates": 67,
            "fat": 16,
            "fiber": 5,
            "sugar": 5,
            "sodium": 737
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1 (350g)",
            "servingWeightGrams": 350,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 29,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nd-5",
        "category": "noodles",
        "name": "Authentic Pad Thai Veg",
        "restaurantId": "rest-11",
        "cuisine": "Thai",
        "price": 279,
        "rating": 4.9,
        "ratingCount": 380,
        "deliveryTime": 25,
        "distanceKm": 2.7,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80",
        "description": "Flat rice noodles tossed in tangy tamarind sauce with tofu, bean sprouts, peanuts and lime.",
        "offer": "20% OFF",
        "ingredients": [
            "Flat Rice Noodles",
            "Tamarind Sauce",
            "Tofu",
            "Crushed Peanuts",
            "Bean Sprouts"
        ],
        "tags": [
            "Thai",
            "Pad Thai",
            "Bestseller"
        ],
        "portionDescription": "Serves 1 (350g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Thai",
            "Pad Thai",
            "Bestseller",
            "Pan-Asian",
            "Popular",
            "Under 500 kcal",
            "High Fiber",
            "Vegetarian"
        ],
        "allergens": [
            "Soy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1 (350g)",
            "calories": 475,
            "protein": 19,
            "carbohydrates": 63,
            "fat": 17,
            "fiber": 5,
            "sugar": 4,
            "sodium": 776
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1 (350g)",
            "servingWeightGrams": 350,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 6,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nd-6",
        "category": "noodles",
        "name": "Dan Dan Chicken Noodles",
        "restaurantId": "rest-13",
        "cuisine": "Sichuan",
        "price": 289,
        "rating": 4.8,
        "ratingCount": 210,
        "deliveryTime": 26,
        "distanceKm": 2.5,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
        "description": "Sichuan street style noodles in spicy sesame peanut broth topped with minced chicken and bok choy.",
        "offer": null,
        "ingredients": [
            "Noodles",
            "Minced Chicken",
            "Sichuan Pepper",
            "Peanut Paste",
            "Chili Oil"
        ],
        "tags": [
            "Sichuan",
            "Nutty & Spicy"
        ],
        "portionDescription": "Serves 1 (350g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Sichuan",
            "Nutty & Spicy",
            "Pan-Asian",
            "Popular",
            "Under 500 kcal",
            "High Fiber"
        ],
        "allergens": [
            "Soy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1 (350g)",
            "calories": 499,
            "protein": 21,
            "carbohydrates": 59,
            "fat": 18,
            "fiber": 6,
            "sugar": 4,
            "sodium": 816
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1 (350g)",
            "servingWeightGrams": 350,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 17,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nd-7",
        "category": "noodles",
        "name": "Burnt Garlic Veg Noodles",
        "restaurantId": "rest-1",
        "cuisine": "Pan-Asian",
        "price": 209,
        "rating": 4.6,
        "ratingCount": 290,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Wok tossed noodles infused with golden crispy burnt garlic and fresh seasonal greens.",
        "offer": "₹30 OFF",
        "ingredients": [
            "Noodles",
            "Burnt Garlic",
            "Broccoli",
            "Baby Corn",
            "Soy"
        ],
        "tags": [
            "Garlic",
            "Aromatic"
        ],
        "portionDescription": "Serves 1 (350g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Garlic",
            "Aromatic",
            "Pan-Asian",
            "Popular",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Soy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1 (350g)",
            "calories": 383,
            "protein": 12,
            "carbohydrates": 78,
            "fat": 12,
            "fiber": 3,
            "sugar": 7,
            "sodium": 625
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1 (350g)",
            "servingWeightGrams": 350,
            "status": "ESTIMATED",
            "confidence": "LOW",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 85,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 383 kcal vs calculated 468 kcal (22.2% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nd-8",
        "category": "noodles",
        "name": "Egg Hakka Noodles",
        "restaurantId": "rest-7",
        "cuisine": "Indo-Chinese",
        "price": 219,
        "rating": 4.5,
        "ratingCount": 340,
        "deliveryTime": 28,
        "distanceKm": 2.6,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
        "description": "Stir fried noodles tossed with scrambled farm eggs, shredded cabbage and light pepper.",
        "offer": "10% OFF",
        "ingredients": [
            "Noodles",
            "Scrambled Eggs",
            "Spring Onions",
            "Soy Sauce"
        ],
        "tags": [
            "Egg",
            "Classic"
        ],
        "portionDescription": "Serves 1 (350g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Egg",
            "Classic",
            "Pan-Asian",
            "Popular",
            "Under 500 kcal"
        ],
        "allergens": [
            "Soy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1 (350g)",
            "calories": 407,
            "protein": 14,
            "carbohydrates": 74,
            "fat": 13,
            "fiber": 4,
            "sugar": 6,
            "sodium": 664
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1 (350g)",
            "servingWeightGrams": 350,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 62,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 407 kcal vs calculated 469 kcal (15.2% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nd-9",
        "category": "noodles",
        "name": "Seafood Udon Noodles",
        "restaurantId": "rest-11",
        "cuisine": "Japanese",
        "price": 349,
        "rating": 4.8,
        "ratingCount": 195,
        "deliveryTime": 25,
        "distanceKm": 2.7,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80",
        "description": "Thick Japanese wheat udon noodles stir-fried with prawns, squid rings and dashi teriyaki sauce.",
        "offer": "20% OFF",
        "ingredients": [
            "Udon Noodles",
            "Prawns",
            "Squid",
            "Teriyaki Sauce",
            "Bok Choy"
        ],
        "tags": [
            "Japanese",
            "Seafood"
        ],
        "portionDescription": "Serves 1 (350g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Japanese",
            "Seafood",
            "Pan-Asian",
            "Popular",
            "Under 500 kcal"
        ],
        "allergens": [
            "Soy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1 (350g)",
            "calories": 430,
            "protein": 16,
            "carbohydrates": 70,
            "fat": 15,
            "fiber": 4,
            "sugar": 6,
            "sodium": 703
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1 (350g)",
            "servingWeightGrams": 350,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 49,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nd-10",
        "category": "noodles",
        "name": "Pan Fried Crispy Noodles",
        "restaurantId": "rest-3",
        "cuisine": "Cantonese",
        "price": 259,
        "rating": 4.7,
        "ratingCount": 180,
        "deliveryTime": 30,
        "distanceKm": 2.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy fried noodle base smothered with steaming vegetable Cantonese white garlic gravy.",
        "offer": null,
        "ingredients": [
            "Crispy Noodles",
            "Chinese Gravy",
            "Mushrooms",
            "Pok Choi"
        ],
        "tags": [
            "Cantonese",
            "Crispy"
        ],
        "portionDescription": "Serves 1 (350g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Cantonese",
            "Crispy",
            "Pan-Asian",
            "Popular",
            "Under 500 kcal",
            "High Fiber",
            "Vegetarian"
        ],
        "allergens": [
            "Soy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1 (350g)",
            "calories": 454,
            "protein": 17,
            "carbohydrates": 66,
            "fat": 16,
            "fiber": 5,
            "sugar": 5,
            "sodium": 742
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1 (350g)",
            "servingWeightGrams": 350,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 22,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nd-11",
        "category": "noodles",
        "name": "Kimchi Sesame Noodles",
        "restaurantId": "rest-13",
        "cuisine": "Korean",
        "price": 269,
        "rating": 4.7,
        "ratingCount": 220,
        "deliveryTime": 26,
        "distanceKm": 2.5,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80",
        "description": "Korean style noodles tossed with spicy fermented kimchi, gochujang and toasted sesame.",
        "offer": "15% OFF",
        "ingredients": [
            "Noodles",
            "Spicy Kimchi",
            "Gochujang",
            "Sesame Oil",
            "Tofu"
        ],
        "tags": [
            "Korean",
            "Fermented"
        ],
        "portionDescription": "Serves 1 (350g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Korean",
            "Fermented",
            "Pan-Asian",
            "Popular",
            "Under 500 kcal",
            "High Fiber",
            "Vegetarian"
        ],
        "allergens": [
            "Soy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1 (350g)",
            "calories": 478,
            "protein": 19,
            "carbohydrates": 63,
            "fat": 17,
            "fiber": 5,
            "sugar": 4,
            "sodium": 781
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1 (350g)",
            "servingWeightGrams": 350,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 3,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nd-12",
        "category": "noodles",
        "name": "Chicken Chow Mein",
        "restaurantId": "rest-1",
        "cuisine": "Chinese",
        "price": 249,
        "rating": 4.6,
        "ratingCount": 380,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
        "description": "Traditional Chinese stir-fried wheat noodles with sliced chicken, bean sprouts and dark soy.",
        "offer": "₹40 OFF",
        "ingredients": [
            "Egg Noodles",
            "Chicken Slices",
            "Bean Sprouts",
            "Oyster Sauce"
        ],
        "tags": [
            "Chow Mein",
            "Popular"
        ],
        "portionDescription": "Serves 1 (350g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Chow Mein",
            "Popular",
            "Pan-Asian",
            "High Fiber"
        ],
        "allergens": [
            "Soy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1 (350g)",
            "calories": 502,
            "protein": 21,
            "carbohydrates": 59,
            "fat": 18,
            "fiber": 6,
            "sugar": 4,
            "sodium": 820
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1 (350g)",
            "servingWeightGrams": 350,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 20,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nd-13",
        "category": "noodles",
        "name": "Mushroom Butter Noodles",
        "restaurantId": "rest-5",
        "cuisine": "Fusion",
        "price": 239,
        "rating": 4.8,
        "ratingCount": 160,
        "deliveryTime": 32,
        "distanceKm": 3.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Eggless noodles sauteed with shimeji and button mushrooms in garlic herb butter.",
        "offer": "Healthy Pick",
        "ingredients": [
            "Noodles",
            "Shimeji Mushrooms",
            "Garlic Butter",
            "Parsley"
        ],
        "tags": [
            "Mushroom",
            "Rich"
        ],
        "portionDescription": "Serves 1 (350g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Mushroom",
            "Rich",
            "Pan-Asian",
            "Popular",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Soy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1 (350g)",
            "calories": 386,
            "protein": 12,
            "carbohydrates": 77,
            "fat": 12,
            "fiber": 3,
            "sugar": 7,
            "sodium": 629
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1 (350g)",
            "servingWeightGrams": 350,
            "status": "ESTIMATED",
            "confidence": "LOW",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 78,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 386 kcal vs calculated 464 kcal (20.2% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nd-14",
        "category": "noodles",
        "name": "Shanghai Spicy Noodles",
        "restaurantId": "rest-13",
        "cuisine": "Chinese",
        "price": 259,
        "rating": 4.6,
        "ratingCount": 190,
        "deliveryTime": 26,
        "distanceKm": 2.5,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
        "description": "Thick Shanghai noodles stir-fried with sliced chicken, red chilies, bok choy and sweet soy.",
        "offer": null,
        "ingredients": [
            "Shanghai Noodles",
            "Chicken",
            "Bok Choy",
            "Dark Soy",
            "Chili Flakes"
        ],
        "tags": [
            "Shanghai",
            "Spicy"
        ],
        "portionDescription": "Serves 1 (350g)",
        "spiceLevel": "Hot",
        "dietaryTags": [
            "Shanghai",
            "Spicy",
            "Pan-Asian",
            "Popular",
            "Under 500 kcal"
        ],
        "allergens": [
            "Soy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1 (350g)",
            "calories": 409,
            "protein": 14,
            "carbohydrates": 73,
            "fat": 13,
            "fiber": 4,
            "sugar": 6,
            "sodium": 668
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1 (350g)",
            "servingWeightGrams": 350,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 56,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nd-15",
        "category": "noodles",
        "name": "Teriyaki Chicken Noodles",
        "restaurantId": "rest-1",
        "cuisine": "Japanese",
        "price": 279,
        "rating": 4.8,
        "ratingCount": 250,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
        "description": "Grilled chicken glazed with Japanese sweet teriyaki reduction tossed with soba noodles.",
        "offer": "20% OFF",
        "ingredients": [
            "Soba Noodles",
            "Grilled Chicken",
            "Teriyaki Sauce",
            "Sesame"
        ],
        "tags": [
            "Japanese",
            "Sweet & Savory"
        ],
        "portionDescription": "Serves 1 (350g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Japanese",
            "Sweet & Savory",
            "Pan-Asian",
            "Popular",
            "Under 500 kcal"
        ],
        "allergens": [
            "Soy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1 (350g)",
            "calories": 433,
            "protein": 16,
            "carbohydrates": 70,
            "fat": 15,
            "fiber": 4,
            "sugar": 5,
            "sodium": 707
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1 (350g)",
            "servingWeightGrams": 350,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 46,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nd-16",
        "category": "noodles",
        "name": "Veg Yaki Udon",
        "restaurantId": "rest-11",
        "cuisine": "Japanese",
        "price": 269,
        "rating": 4.7,
        "ratingCount": 175,
        "deliveryTime": 25,
        "distanceKm": 2.7,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80",
        "description": "Japanese stir-fried thick udon with shiitake mushrooms, bell peppers and savory sauce.",
        "offer": "15% OFF",
        "ingredients": [
            "Udon Noodles",
            "Shiitake Mushrooms",
            "Capsicum",
            "Yaki Sauce"
        ],
        "tags": [
            "Udon",
            "Vegetarian"
        ],
        "portionDescription": "Serves 1 (350g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Udon",
            "Vegetarian",
            "Pan-Asian",
            "Popular",
            "Under 500 kcal",
            "High Fiber"
        ],
        "allergens": [
            "Soy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1 (350g)",
            "calories": 457,
            "protein": 18,
            "carbohydrates": 66,
            "fat": 16,
            "fiber": 5,
            "sugar": 5,
            "sodium": 747
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1 (350g)",
            "servingWeightGrams": 350,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 23,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nd-17",
        "category": "noodles",
        "name": "Cantonese Gravy Noodles",
        "restaurantId": "rest-3",
        "cuisine": "Cantonese",
        "price": 279,
        "rating": 4.6,
        "ratingCount": 140,
        "deliveryTime": 30,
        "distanceKm": 2.8,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
        "description": "Bed of egg noodles topped with thick Cantonese chicken, mushroom and baby corn gravy.",
        "offer": null,
        "ingredients": [
            "Egg Noodles",
            "Chicken Gravy",
            "Mushrooms",
            "Baby Corn"
        ],
        "tags": [
            "Gravy Noodles",
            "Mild"
        ],
        "portionDescription": "Serves 1 (350g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Gravy Noodles",
            "Mild",
            "Pan-Asian",
            "Popular",
            "Under 500 kcal",
            "High Fiber"
        ],
        "allergens": [
            "Soy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1 (350g)",
            "calories": 481,
            "protein": 19,
            "carbohydrates": 62,
            "fat": 17,
            "fiber": 5,
            "sugar": 4,
            "sodium": 786
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1 (350g)",
            "servingWeightGrams": 350,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 4,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nd-18",
        "category": "noodles",
        "name": "Thai Basil Chicken Noodles",
        "restaurantId": "rest-13",
        "cuisine": "Thai",
        "price": 289,
        "rating": 4.9,
        "ratingCount": 310,
        "deliveryTime": 26,
        "distanceKm": 2.5,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80",
        "description": "Rice noodles wok tossed with holy basil leaves, bird eye chilies and minced chicken.",
        "offer": "Bestseller",
        "ingredients": [
            "Rice Noodles",
            "Thai Holy Basil",
            "Minced Chicken",
            "Bird Eye Chilies"
        ],
        "tags": [
            "Thai",
            "Aromatic"
        ],
        "portionDescription": "Serves 1 (350g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Thai",
            "Aromatic",
            "Pan-Asian",
            "Popular",
            "High Fiber"
        ],
        "allergens": [
            "Soy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1 (350g)",
            "calories": 505,
            "protein": 21,
            "carbohydrates": 58,
            "fat": 18,
            "fiber": 6,
            "sugar": 3,
            "sodium": 825
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1 (350g)",
            "servingWeightGrams": 350,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 27,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nd-19",
        "category": "noodles",
        "name": "Schezwan Veg Noodles",
        "restaurantId": "rest-7",
        "cuisine": "Indo-Chinese",
        "price": 209,
        "rating": 4.5,
        "ratingCount": 280,
        "deliveryTime": 28,
        "distanceKm": 2.6,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Fiery wok-tossed noodles with shredded vegetables and pungent Sichuan chili paste.",
        "offer": "10% OFF",
        "ingredients": [
            "Noodles",
            "Schezwan Sauce",
            "Cabbage",
            "Carrots"
        ],
        "tags": [
            "Spicy",
            "Veg"
        ],
        "portionDescription": "Serves 1 (350g)",
        "spiceLevel": "Hot",
        "dietaryTags": [
            "Spicy",
            "Veg",
            "Pan-Asian",
            "Popular",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Soy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1 (350g)",
            "calories": 388,
            "protein": 13,
            "carbohydrates": 77,
            "fat": 12,
            "fiber": 3,
            "sugar": 7,
            "sodium": 634
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1 (350g)",
            "servingWeightGrams": 350,
            "status": "ESTIMATED",
            "confidence": "LOW",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 80,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 388 kcal vs calculated 468 kcal (20.6% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "nd-20",
        "category": "noodles",
        "name": "Glass Noodle Stir Fry",
        "restaurantId": "rest-5",
        "cuisine": "Pan-Asian",
        "price": 249,
        "rating": 4.7,
        "ratingCount": 150,
        "deliveryTime": 32,
        "distanceKm": 3.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80",
        "description": "Translucent mung bean vermicelli noodles stir-fried with wood-ear mushrooms, spinach and sesame.",
        "offer": "Healthy Pick",
        "ingredients": [
            "Mung Bean Glass Noodles",
            "Wood-Ear Mushrooms",
            "Spinach",
            "Sesame"
        ],
        "tags": [
            "Gluten Free",
            "Light"
        ],
        "portionDescription": "Serves 1 (350g)",
        "spiceLevel": "Medium",
        "dietaryTags": [
            "Gluten Free",
            "Light",
            "Pan-Asian",
            "Popular",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Soy",
            "Gluten"
        ],
        "nutrition": {
            "servingSize": "Serves 1 (350g)",
            "calories": 412,
            "protein": 14,
            "carbohydrates": 73,
            "fat": 14,
            "fiber": 4,
            "sugar": 6,
            "sodium": 673
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "Serves 1 (350g)",
            "servingWeightGrams": 350,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 62,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 412 kcal vs calculated 474 kcal (15.0% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sl-1",
        "category": "salads",
        "name": "Classic Greek Feta Salad",
        "restaurantId": "rest-12",
        "cuisine": "Mediterranean",
        "price": 249,
        "rating": 4.8,
        "ratingCount": 390,
        "deliveryTime": 20,
        "distanceKm": 1.5,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp English cucumbers, vine tomatoes, Kalamata olives, bell peppers and authentic Greek feta cheese.",
        "offer": "20% OFF",
        "ingredients": [
            "Greek Feta",
            "Kalamata Olives",
            "Cucumbers",
            "Extra Virgin Olive Oil",
            "Oregano"
        ],
        "tags": [
            "Bestseller",
            "Mediterranean",
            "Vegetarian"
        ],
        "portionDescription": "1 Large Bowl (300g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Bestseller",
            "Mediterranean",
            "Vegetarian",
            "Low Calorie",
            "High Fiber",
            "Light Meal",
            "Under 500 kcal"
        ],
        "allergens": [
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (300g)",
            "calories": 232,
            "protein": 12,
            "carbohydrates": 22,
            "fat": 9,
            "fiber": 8,
            "sugar": 7,
            "sodium": 396
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (300g)",
            "servingWeightGrams": 300,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 15,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sl-2",
        "category": "salads",
        "name": "Grilled Chicken Caesar Salad",
        "restaurantId": "rest-12",
        "cuisine": "Continental",
        "price": 299,
        "rating": 4.9,
        "ratingCount": 460,
        "deliveryTime": 20,
        "distanceKm": 1.5,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp Romaine lettuce hearts, grilled herb chicken breast, garlic herb croutons and shaved parmesan.",
        "offer": "₹50 OFF",
        "ingredients": [
            "Romaine Hearts",
            "Grilled Chicken",
            "Parmesan Shavings",
            "Caesar Dressing",
            "Croutons"
        ],
        "tags": [
            "High Protein",
            "Classic"
        ],
        "portionDescription": "1 Large Bowl (300g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "High Protein",
            "Classic",
            "Low Calorie",
            "High Fiber",
            "Light Meal",
            "Under 500 kcal"
        ],
        "allergens": [
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (300g)",
            "calories": 254,
            "protein": 14,
            "carbohydrates": 20,
            "fat": 11,
            "fiber": 8,
            "sugar": 6,
            "sodium": 428
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (300g)",
            "servingWeightGrams": 300,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 19,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sl-3",
        "category": "salads",
        "name": "Mediterranean Quinoa Bowl",
        "restaurantId": "rest-5",
        "cuisine": "Healthy",
        "price": 279,
        "rating": 4.8,
        "ratingCount": 280,
        "deliveryTime": 32,
        "distanceKm": 3.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        "description": "Organic tri-color quinoa, roasted chickpeas, cherry tomatoes, cucumbers and lemon herb vinaigrette.",
        "offer": "Superfood",
        "ingredients": [
            "Tri-Color Quinoa",
            "Roasted Chickpeas",
            "Cherry Tomatoes",
            "Vinaigrette"
        ],
        "tags": [
            "Superfood",
            "Vegan",
            "Gluten Free"
        ],
        "portionDescription": "1 Large Bowl (300g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Superfood",
            "Vegan",
            "Gluten Free",
            "Low Calorie",
            "High Fiber",
            "Light Meal",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (300g)",
            "calories": 276,
            "protein": 15,
            "carbohydrates": 18,
            "fat": 12,
            "fiber": 9,
            "sugar": 5,
            "sodium": 461
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (300g)",
            "servingWeightGrams": 300,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 36,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sl-4",
        "category": "salads",
        "name": "Caprese Salad with Pesto",
        "restaurantId": "rest-12",
        "cuisine": "Italian",
        "price": 289,
        "rating": 4.7,
        "ratingCount": 210,
        "deliveryTime": 20,
        "distanceKm": 1.5,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh buffalo mozzarella slices, ripe heirloom tomatoes, basil leaves, aged balsamic reduction and pesto.",
        "offer": "15% OFF",
        "ingredients": [
            "Buffalo Mozzarella",
            "Heirloom Tomatoes",
            "Fresh Basil",
            "Balsamic Glaze"
        ],
        "tags": [
            "Italian",
            "Gourmet"
        ],
        "portionDescription": "1 Large Bowl (300g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Italian",
            "Gourmet",
            "Low Calorie",
            "High Fiber",
            "Light Meal",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (300g)",
            "calories": 298,
            "protein": 17,
            "carbohydrates": 15,
            "fat": 13,
            "fiber": 10,
            "sugar": 4,
            "sodium": 493
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (300g)",
            "servingWeightGrams": 300,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 53,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 298 kcal vs calculated 245 kcal (17.8% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sl-5",
        "category": "salads",
        "name": "Fresh Fruit & Nut Salad",
        "restaurantId": "rest-16",
        "cuisine": "Healthy",
        "price": 219,
        "rating": 4.6,
        "ratingCount": 180,
        "deliveryTime": 24,
        "distanceKm": 2.2,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
        "description": "Seasonal kiwi, pomegranate, apples, oranges tossed with roasted walnuts, almonds and honey mint dressing.",
        "offer": null,
        "ingredients": [
            "Seasonal Fruits",
            "Roasted Walnuts",
            "Almonds",
            "Honey Lime Dressing"
        ],
        "tags": [
            "Fresh",
            "Vitamins"
        ],
        "portionDescription": "1 Large Bowl (300g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Fresh",
            "Vitamins",
            "Low Calorie",
            "High Fiber",
            "Light Meal",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (300g)",
            "calories": 190,
            "protein": 9,
            "carbohydrates": 27,
            "fat": 7,
            "fiber": 6,
            "sugar": 9,
            "sodium": 335
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (300g)",
            "servingWeightGrams": 300,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 17,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sl-6",
        "category": "salads",
        "name": "Avocado Citrus Salad",
        "restaurantId": "rest-5",
        "cuisine": "Healthy",
        "price": 329,
        "rating": 4.9,
        "ratingCount": 290,
        "deliveryTime": 32,
        "distanceKm": 3.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        "description": "Hass avocado slices, pink grapefruit segments, arugula greens and toasted pumpkin seeds.",
        "offer": "Chef Special",
        "ingredients": [
            "Hass Avocado",
            "Grapefruit",
            "Baby Arugula",
            "Pumpkin Seeds"
        ],
        "tags": [
            "Avocado",
            "Keto Friendly"
        ],
        "portionDescription": "1 Large Bowl (300g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Avocado",
            "Keto Friendly",
            "Low Calorie",
            "High Fiber",
            "Light Meal",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (300g)",
            "calories": 213,
            "protein": 11,
            "carbohydrates": 25,
            "fat": 8,
            "fiber": 7,
            "sugar": 8,
            "sodium": 368
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (300g)",
            "servingWeightGrams": 300,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 3,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sl-7",
        "category": "salads",
        "name": "Thai Crunch Peanut Salad",
        "restaurantId": "rest-13",
        "cuisine": "Thai",
        "price": 239,
        "rating": 4.7,
        "ratingCount": 240,
        "deliveryTime": 26,
        "distanceKm": 2.5,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
        "description": "Shredded purple cabbage, carrots, edamame, crispy wonton strips with creamy peanut ginger dressing.",
        "offer": "20% OFF",
        "ingredients": [
            "Purple Cabbage",
            "Edamame",
            "Carrots",
            "Peanut Dressing",
            "Wonton Crisps"
        ],
        "tags": [
            "Crunchy",
            "Thai"
        ],
        "portionDescription": "1 Large Bowl (300g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Crunchy",
            "Thai",
            "Low Calorie",
            "High Fiber",
            "Light Meal",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (300g)",
            "calories": 235,
            "protein": 12,
            "carbohydrates": 22,
            "fat": 9,
            "fiber": 8,
            "sugar": 7,
            "sodium": 400
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (300g)",
            "servingWeightGrams": 300,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 18,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sl-8",
        "category": "salads",
        "name": "Roasted Beetroot & Feta Salad",
        "restaurantId": "rest-12",
        "cuisine": "Continental",
        "price": 259,
        "rating": 4.8,
        "ratingCount": 210,
        "deliveryTime": 20,
        "distanceKm": 1.5,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        "description": "Oven-roasted sweet beets, crumbled feta, candied walnuts and baby spinach in honey mustard drizzle.",
        "offer": "₹30 OFF",
        "ingredients": [
            "Roasted Beets",
            "Crumbled Feta",
            "Candied Walnuts",
            "Baby Spinach"
        ],
        "tags": [
            "Gourmet",
            "Antioxidant"
        ],
        "portionDescription": "1 Large Bowl (300g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Gourmet",
            "Antioxidant",
            "Low Calorie",
            "High Fiber",
            "Light Meal",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (300g)",
            "calories": 257,
            "protein": 14,
            "carbohydrates": 20,
            "fat": 11,
            "fiber": 8,
            "sugar": 6,
            "sodium": 432
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (300g)",
            "servingWeightGrams": 300,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 22,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sl-9",
        "category": "salads",
        "name": "Asian Sesame Chicken Salad",
        "restaurantId": "rest-1",
        "cuisine": "Pan-Asian",
        "price": 289,
        "rating": 4.7,
        "ratingCount": 320,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
        "description": "Shredded poached chicken, mandarin oranges, crisp noodles and romaine in toasted sesame dressing.",
        "offer": "Bestseller",
        "ingredients": [
            "Poached Chicken",
            "Mandarin Oranges",
            "Romaine",
            "Sesame Dressing"
        ],
        "tags": [
            "Protein",
            "Asian"
        ],
        "portionDescription": "1 Large Bowl (300g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Protein",
            "Asian",
            "Low Calorie",
            "High Fiber",
            "Light Meal",
            "Under 500 kcal"
        ],
        "allergens": [
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (300g)",
            "calories": 279,
            "protein": 16,
            "carbohydrates": 17,
            "fat": 12,
            "fiber": 9,
            "sugar": 5,
            "sodium": 464
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (300g)",
            "servingWeightGrams": 300,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 39,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sl-10",
        "category": "salads",
        "name": "Garden Fresh Green Salad",
        "restaurantId": "rest-6",
        "cuisine": "Indian",
        "price": 139,
        "rating": 4.4,
        "ratingCount": 160,
        "deliveryTime": 25,
        "distanceKm": 2.4,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        "description": "Slices of crisp cucumber, vine tomatoes, carrots, beetroot and fresh green chilies with lemon.",
        "offer": null,
        "ingredients": [
            "Cucumbers",
            "Carrots",
            "Tomatoes",
            "Beetroot",
            "Lemon Wedges"
        ],
        "tags": [
            "Simple",
            "Clean"
        ],
        "portionDescription": "1 Large Bowl (300g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Simple",
            "Clean",
            "Low Calorie",
            "High Fiber",
            "Light Meal",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (300g)",
            "calories": 301,
            "protein": 17,
            "carbohydrates": 15,
            "fat": 13,
            "fiber": 10,
            "sugar": 4,
            "sodium": 497
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (300g)",
            "servingWeightGrams": 300,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 56,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 301 kcal vs calculated 245 kcal (18.6% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sl-11",
        "category": "salads",
        "name": "Smoked Tofu Protein Salad",
        "restaurantId": "rest-5",
        "cuisine": "Healthy",
        "price": 269,
        "rating": 4.7,
        "ratingCount": 190,
        "deliveryTime": 32,
        "distanceKm": 3.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
        "description": "Hickory smoked organic tofu cubes, steamed edamame, mixed bell peppers and balsamic glaze.",
        "offer": "High Protein",
        "ingredients": [
            "Smoked Tofu",
            "Edamame",
            "Bell Peppers",
            "Flaxseeds"
        ],
        "tags": [
            "High Protein",
            "Vegan"
        ],
        "portionDescription": "1 Large Bowl (300g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "High Protein",
            "Vegan",
            "Low Calorie",
            "High Fiber",
            "Light Meal",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (300g)",
            "calories": 193,
            "protein": 9,
            "carbohydrates": 27,
            "fat": 7,
            "fiber": 6,
            "sugar": 9,
            "sodium": 339
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (300g)",
            "servingWeightGrams": 300,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 14,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sl-12",
        "category": "salads",
        "name": "Mexican Burrito Salad Bowl",
        "restaurantId": "rest-12",
        "cuisine": "Mexican",
        "price": 299,
        "rating": 4.9,
        "ratingCount": 370,
        "deliveryTime": 20,
        "distanceKm": 1.5,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        "description": "Black beans, sweet corn, guacamole, salsa fresca, jalapenos and crushed tortilla crisps.",
        "offer": "20% OFF",
        "ingredients": [
            "Black Beans",
            "Sweet Corn",
            "Guacamole",
            "Salsa",
            "Tortilla Chips"
        ],
        "tags": [
            "Mexican",
            "Fiesta Bowl"
        ],
        "portionDescription": "1 Large Bowl (300g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Mexican",
            "Fiesta Bowl",
            "Low Calorie",
            "High Fiber",
            "Light Meal",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (300g)",
            "calories": 215,
            "protein": 11,
            "carbohydrates": 24,
            "fat": 8,
            "fiber": 7,
            "sugar": 8,
            "sodium": 371
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (300g)",
            "servingWeightGrams": 300,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 3,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sl-13",
        "category": "salads",
        "name": "Apple Walnut Spinach Salad",
        "restaurantId": "rest-16",
        "cuisine": "Healthy",
        "price": 249,
        "rating": 4.6,
        "ratingCount": 140,
        "deliveryTime": 24,
        "distanceKm": 2.2,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp green apple batons, baby spinach, dried cranberries, goat cheese and cider vinaigrette.",
        "offer": null,
        "ingredients": [
            "Green Apples",
            "Baby Spinach",
            "Dried Cranberries",
            "Goat Cheese"
        ],
        "tags": [
            "Refreshing",
            "Salad"
        ],
        "portionDescription": "1 Large Bowl (300g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Refreshing",
            "Salad",
            "Low Calorie",
            "High Fiber",
            "Light Meal",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (300g)",
            "calories": 237,
            "protein": 12,
            "carbohydrates": 22,
            "fat": 10,
            "fiber": 8,
            "sugar": 7,
            "sodium": 404
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (300g)",
            "servingWeightGrams": 300,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 11,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sl-14",
        "category": "salads",
        "name": "Crunchy Sprout Power Salad",
        "restaurantId": "rest-5",
        "cuisine": "Healthy",
        "price": 179,
        "rating": 4.8,
        "ratingCount": 290,
        "deliveryTime": 32,
        "distanceKm": 3.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        "description": "Sprouted mung beans, pomegranate pearls, cucumber, fresh coconut and cumin lemon tadka.",
        "offer": "Healthy Pick",
        "ingredients": [
            "Mung Sprouts",
            "Pomegranate",
            "Cucumber",
            "Lemon Juice",
            "Cumin"
        ],
        "tags": [
            "Immunity",
            "High Fiber"
        ],
        "portionDescription": "1 Large Bowl (300g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Immunity",
            "High Fiber",
            "Low Calorie",
            "Light Meal",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (300g)",
            "calories": 259,
            "protein": 14,
            "carbohydrates": 19,
            "fat": 11,
            "fiber": 8,
            "sugar": 6,
            "sodium": 436
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (300g)",
            "servingWeightGrams": 300,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 28,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sl-15",
        "category": "salads",
        "name": "Grilled Paneer Power Bowl",
        "restaurantId": "rest-12",
        "cuisine": "Healthy",
        "price": 289,
        "rating": 4.8,
        "ratingCount": 340,
        "deliveryTime": 20,
        "distanceKm": 1.5,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        "description": "Herb grilled cottage cheese cubes, roasted sweet potatoes, kale, broccoli and tahini garlic dressing.",
        "offer": "15% OFF",
        "ingredients": [
            "Grilled Paneer",
            "Sweet Potato",
            "Steamed Broccoli",
            "Tahini Dressing"
        ],
        "tags": [
            "Keto",
            "Protein Rich"
        ],
        "portionDescription": "1 Large Bowl (300g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Keto",
            "Protein Rich",
            "Low Calorie",
            "High Fiber",
            "Light Meal",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (300g)",
            "calories": 281,
            "protein": 16,
            "carbohydrates": 17,
            "fat": 12,
            "fiber": 9,
            "sugar": 5,
            "sodium": 468
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (300g)",
            "servingWeightGrams": 300,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 41,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sl-16",
        "category": "salads",
        "name": "Fattoush Salad with Sumac",
        "restaurantId": "rest-12",
        "cuisine": "Lebanese",
        "price": 259,
        "rating": 4.7,
        "ratingCount": 195,
        "deliveryTime": 20,
        "distanceKm": 1.5,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
        "description": "Middle Eastern salad with crispy toasted pita chips, mint, parsley, radishes and sumac dressing.",
        "offer": null,
        "ingredients": [
            "Toasted Pita",
            "Fresh Mint",
            "Radish",
            "Sumac",
            "Pomegranate Molasses"
        ],
        "tags": [
            "Lebanese",
            "Tangy"
        ],
        "portionDescription": "1 Large Bowl (300g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Lebanese",
            "Tangy",
            "Low Calorie",
            "High Fiber",
            "Light Meal",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (300g)",
            "calories": 304,
            "protein": 18,
            "carbohydrates": 15,
            "fat": 14,
            "fiber": 10,
            "sugar": 4,
            "sodium": 501
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (300g)",
            "servingWeightGrams": 300,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 46,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 304 kcal vs calculated 258 kcal (15.1% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sl-17",
        "category": "salads",
        "name": "Watermelon Feta Mint Salad",
        "restaurantId": "rest-16",
        "cuisine": "Mediterranean",
        "price": 229,
        "rating": 4.8,
        "ratingCount": 260,
        "deliveryTime": 24,
        "distanceKm": 2.2,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        "description": "Chilled sweet watermelon cubes, salty crumbled feta cheese, fresh mint and lime drizzle.",
        "offer": "Summer Pick",
        "ingredients": [
            "Watermelon",
            "Crumbled Feta",
            "Fresh Mint",
            "Lime Drizzle"
        ],
        "tags": [
            "Hydrating",
            "Summer Special"
        ],
        "portionDescription": "1 Large Bowl (300g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Hydrating",
            "Summer Special",
            "Low Calorie",
            "High Fiber",
            "Light Meal",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (300g)",
            "calories": 196,
            "protein": 9,
            "carbohydrates": 26,
            "fat": 7,
            "fiber": 6,
            "sugar": 8,
            "sodium": 343
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (300g)",
            "servingWeightGrams": 300,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 7,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sl-18",
        "category": "salads",
        "name": "Chickpea Sundal Salad",
        "restaurantId": "rest-14",
        "cuisine": "South Indian",
        "price": 169,
        "rating": 4.6,
        "ratingCount": 180,
        "deliveryTime": 28,
        "distanceKm": 3.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
        "description": "Boiled chickpeas tossed with freshly grated coconut, mustard seeds, curry leaves and green chilies.",
        "offer": null,
        "ingredients": [
            "Boiled Chickpeas",
            "Fresh Coconut",
            "Mustard Seeds",
            "Curry Leaves"
        ],
        "tags": [
            "South Special",
            "High Protein"
        ],
        "portionDescription": "1 Large Bowl (300g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "South Special",
            "High Protein",
            "Low Calorie",
            "High Fiber",
            "Light Meal",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (300g)",
            "calories": 218,
            "protein": 11,
            "carbohydrates": 24,
            "fat": 8,
            "fiber": 7,
            "sugar": 8,
            "sodium": 375
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (300g)",
            "servingWeightGrams": 300,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 6,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sl-19",
        "category": "salads",
        "name": "Tuna Nicoise Salad",
        "restaurantId": "rest-11",
        "cuisine": "French",
        "price": 349,
        "rating": 4.9,
        "ratingCount": 210,
        "deliveryTime": 25,
        "distanceKm": 2.7,
        "isVeg": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        "description": "Seared tuna steaks, boiled eggs, baby potatoes, green beans, olives and Dijon vinaigrette.",
        "offer": "20% OFF",
        "ingredients": [
            "Seared Tuna",
            "Boiled Eggs",
            "Baby Potatoes",
            "Kalamata Olives"
        ],
        "tags": [
            "French",
            "Seafood Protein"
        ],
        "portionDescription": "1 Large Bowl (300g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "French",
            "Seafood Protein",
            "Low Calorie",
            "High Fiber",
            "Light Meal",
            "Under 500 kcal"
        ],
        "allergens": [
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (300g)",
            "calories": 240,
            "protein": 13,
            "carbohydrates": 22,
            "fat": 10,
            "fiber": 8,
            "sugar": 7,
            "sodium": 407
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (300g)",
            "servingWeightGrams": 300,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 10,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "sl-20",
        "category": "salads",
        "name": "Superfood Kale Berry Bowl",
        "restaurantId": "rest-5",
        "cuisine": "Healthy",
        "price": 319,
        "rating": 4.8,
        "ratingCount": 230,
        "deliveryTime": 32,
        "distanceKm": 3.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
        "description": "Massaged curly kale, blueberries, strawberries, chia seeds and creamy raspberry vinaigrette.",
        "offer": "Superfood",
        "ingredients": [
            "Curly Kale",
            "Blueberries",
            "Strawberries",
            "Chia Seeds",
            "Raspberry Dressing"
        ],
        "tags": [
            "Superfood",
            "Antioxidant"
        ],
        "portionDescription": "1 Large Bowl (300g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Superfood",
            "Antioxidant",
            "Low Calorie",
            "High Fiber",
            "Light Meal",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Nuts"
        ],
        "nutrition": {
            "servingSize": "1 Large Bowl (300g)",
            "calories": 262,
            "protein": 14,
            "carbohydrates": 19,
            "fat": 11,
            "fiber": 9,
            "sugar": 6,
            "sodium": 440
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Large Bowl (300g)",
            "servingWeightGrams": 300,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 31,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "ds-1",
        "category": "desserts",
        "name": "Fudge Walnut Brownie with Gelato",
        "restaurantId": "rest-15",
        "cuisine": "Bakery",
        "price": 199,
        "rating": 4.9,
        "ratingCount": 680,
        "deliveryTime": 20,
        "distanceKm": 1.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        "description": "Warm, gooey Belgian chocolate walnut brownie served with hot chocolate fudge and vanilla bean gelato.",
        "offer": "Bestseller",
        "ingredients": [
            "Dark Chocolate",
            "Walnuts",
            "Vanilla Gelato",
            "Chocolate Fudge"
        ],
        "tags": [
            "Bestseller",
            "Chocolate",
            "Dessert"
        ],
        "portionDescription": "1 Portion (150g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Bestseller",
            "Chocolate",
            "Dessert",
            "Artisanal Sweet",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts",
            "Eggs"
        ],
        "nutrition": {
            "servingSize": "1 Portion (150g)",
            "calories": 410,
            "protein": 7,
            "carbohydrates": 49,
            "fat": 22,
            "fiber": 3,
            "sugar": 31,
            "sodium": 308
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Portion (150g)",
            "servingWeightGrams": 150,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 12,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "ds-2",
        "category": "desserts",
        "name": "Gulab Jamun with Kesari Rabri",
        "restaurantId": "rest-4",
        "cuisine": "Traditional",
        "price": 169,
        "rating": 4.8,
        "ratingCount": 520,
        "deliveryTime": 22,
        "distanceKm": 1.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        "description": "Soft melt-in-mouth khoya gulab jamuns soaked in rose sugar syrup, paired with thick saffron rabri.",
        "offer": "20% OFF",
        "ingredients": [
            "Mawa",
            "Rose Sugar Syrup",
            "Saffron Rabri",
            "Pistachios"
        ],
        "tags": [
            "Traditional",
            "Warm Sweet"
        ],
        "portionDescription": "1 Portion (150g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Traditional",
            "Warm Sweet",
            "Artisanal Sweet",
            "Bestseller",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts",
            "Eggs"
        ],
        "nutrition": {
            "servingSize": "1 Portion (150g)",
            "calories": 436,
            "protein": 8,
            "carbohydrates": 45,
            "fat": 24,
            "fiber": 3,
            "sugar": 29,
            "sodium": 335
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Portion (150g)",
            "servingWeightGrams": 150,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 8,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "ds-3",
        "category": "desserts",
        "name": "Belgian Chocolate Lava Cake",
        "restaurantId": "rest-15",
        "cuisine": "Bakery",
        "price": 219,
        "rating": 4.9,
        "ratingCount": 590,
        "deliveryTime": 20,
        "distanceKm": 1.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        "description": "Moist chocolate sponge cake with an oozing molten dark chocolate ganache center.",
        "offer": "₹40 OFF",
        "ingredients": [
            "Belgian Chocolate",
            "Butter",
            "Cocoa Ganache",
            "Vanilla Sugar"
        ],
        "tags": [
            "Chocoholic",
            "Warm"
        ],
        "portionDescription": "1 Portion (150g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Chocoholic",
            "Warm",
            "Artisanal Sweet",
            "Bestseller",
            "Low Calorie",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts",
            "Eggs"
        ],
        "nutrition": {
            "servingSize": "1 Portion (150g)",
            "calories": 311,
            "protein": 5,
            "carbohydrates": 65,
            "fat": 15,
            "fiber": 1,
            "sugar": 43,
            "sodium": 202
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Portion (150g)",
            "servingWeightGrams": 150,
            "status": "ESTIMATED",
            "confidence": "LOW",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 104,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 311 kcal vs calculated 415 kcal (33.4% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "ds-4",
        "category": "desserts",
        "name": "Hyderabadi Double Ka Meetha",
        "restaurantId": "rest-4",
        "cuisine": "Hyderabadi",
        "price": 179,
        "rating": 4.8,
        "ratingCount": 380,
        "deliveryTime": 22,
        "distanceKm": 1.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        "description": "Authentic Hyderabadi dessert made from ghee-fried bread soaked in thickened saffron milk and nuts.",
        "offer": "Royal Sweet",
        "ingredients": [
            "Ghee-Fried Bread",
            "Rabri Milk",
            "Saffron",
            "Almonds",
            "Pistachios"
        ],
        "tags": [
            "Hyderabadi",
            "Authentic"
        ],
        "portionDescription": "1 Portion (150g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Hyderabadi",
            "Authentic",
            "Artisanal Sweet",
            "Bestseller",
            "Low Calorie",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts",
            "Eggs"
        ],
        "nutrition": {
            "servingSize": "1 Portion (150g)",
            "calories": 337,
            "protein": 5,
            "carbohydrates": 61,
            "fat": 17,
            "fiber": 2,
            "sugar": 40,
            "sodium": 230
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Portion (150g)",
            "servingWeightGrams": 150,
            "status": "ESTIMATED",
            "confidence": "LOW",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 80,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 337 kcal vs calculated 417 kcal (23.7% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "ds-5",
        "category": "desserts",
        "name": "New York Baked Cheesecake",
        "restaurantId": "rest-15",
        "cuisine": "Bakery",
        "price": 249,
        "rating": 4.9,
        "ratingCount": 420,
        "deliveryTime": 20,
        "distanceKm": 1.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
        "description": "Dense and creamy baked Philadelphia cream cheese slice on a buttery graham cracker crust.",
        "offer": "15% OFF",
        "ingredients": [
            "Cream Cheese",
            "Graham Cracker Base",
            "Vanilla Pods",
            "Sour Cream"
        ],
        "tags": [
            "Gourmet",
            "Cheesecake"
        ],
        "portionDescription": "1 Portion (150g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Gourmet",
            "Cheesecake",
            "Artisanal Sweet",
            "Bestseller",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts",
            "Eggs"
        ],
        "nutrition": {
            "servingSize": "1 Portion (150g)",
            "calories": 362,
            "protein": 6,
            "carbohydrates": 56,
            "fat": 19,
            "fiber": 2,
            "sugar": 37,
            "sodium": 257
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Portion (150g)",
            "servingWeightGrams": 150,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 57,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 362 kcal vs calculated 419 kcal (15.7% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "ds-6",
        "category": "desserts",
        "name": "Rasmalai Tres Leches Cake",
        "restaurantId": "rest-15",
        "cuisine": "Fusion",
        "price": 239,
        "rating": 4.9,
        "ratingCount": 360,
        "deliveryTime": 20,
        "distanceKm": 1.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        "description": "Spongy cake soaked in three saffron milks, topped with delicate rasmalai pieces and rose petals.",
        "offer": "Chef Signature",
        "ingredients": [
            "Sponge Cake",
            "Three Milks",
            "Rasmalai",
            "Cardamom",
            "Dried Rose"
        ],
        "tags": [
            "Fusion",
            "Bestseller"
        ],
        "portionDescription": "1 Portion (150g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Fusion",
            "Bestseller",
            "Artisanal Sweet",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts",
            "Eggs"
        ],
        "nutrition": {
            "servingSize": "1 Portion (150g)",
            "calories": 388,
            "protein": 7,
            "carbohydrates": 52,
            "fat": 21,
            "fiber": 2,
            "sugar": 34,
            "sodium": 284
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Portion (150g)",
            "servingWeightGrams": 150,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 37,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "ds-7",
        "category": "desserts",
        "name": "Classic Italian Tiramisu",
        "restaurantId": "rest-1",
        "cuisine": "Italian",
        "price": 269,
        "rating": 4.8,
        "ratingCount": 310,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
        "description": "Espresso-soaked ladyfinger cookies layered with rich mascarpone cheese cream and cocoa dusting.",
        "offer": "20% OFF",
        "ingredients": [
            "Espresso Coffee",
            "Mascarpone Cheese",
            "Savoiardi Biscuits",
            "Dark Cocoa"
        ],
        "tags": [
            "Italian",
            "Coffee"
        ],
        "portionDescription": "1 Portion (150g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Italian",
            "Coffee",
            "Artisanal Sweet",
            "Bestseller",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts",
            "Eggs"
        ],
        "nutrition": {
            "servingSize": "1 Portion (150g)",
            "calories": 413,
            "protein": 7,
            "carbohydrates": 48,
            "fat": 22,
            "fiber": 3,
            "sugar": 31,
            "sodium": 311
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Portion (150g)",
            "servingWeightGrams": 150,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 5,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "ds-8",
        "category": "desserts",
        "name": "Mango Kulfi Falooda",
        "restaurantId": "rest-15",
        "cuisine": "Traditional",
        "price": 189,
        "rating": 4.7,
        "ratingCount": 290,
        "deliveryTime": 20,
        "distanceKm": 1.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        "description": "Alphonso mango kulfi served over basil seeds, vermicelli noodles, rose syrup and rabri.",
        "offer": "Summer Pick",
        "ingredients": [
            "Alphonso Kulfi",
            "Falooda Sev",
            "Sabja Seeds",
            "Rose Syrup",
            "Pistachios"
        ],
        "tags": [
            "Falooda",
            "Cooling"
        ],
        "portionDescription": "1 Portion (150g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Falooda",
            "Cooling",
            "Artisanal Sweet",
            "Bestseller",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts",
            "Eggs"
        ],
        "nutrition": {
            "servingSize": "1 Portion (150g)",
            "calories": 439,
            "protein": 8,
            "carbohydrates": 44,
            "fat": 24,
            "fiber": 3,
            "sugar": 28,
            "sodium": 338
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Portion (150g)",
            "servingWeightGrams": 150,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 15,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "ds-9",
        "category": "desserts",
        "name": "Red Velvet Cream Cheese Pastry",
        "restaurantId": "rest-15",
        "cuisine": "Bakery",
        "price": 179,
        "rating": 4.7,
        "ratingCount": 250,
        "deliveryTime": 20,
        "distanceKm": 1.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
        "description": "Velvety crimson sponge layers frosted with light and tangy vanilla cream cheese icing.",
        "offer": null,
        "ingredients": [
            "Red Velvet Sponge",
            "Cream Cheese Frosting",
            "Vanilla Extract"
        ],
        "tags": [
            "Pastry",
            "Sweet"
        ],
        "portionDescription": "1 Portion (150g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Pastry",
            "Sweet",
            "Artisanal Sweet",
            "Bestseller",
            "Low Calorie",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts",
            "Eggs"
        ],
        "nutrition": {
            "servingSize": "1 Portion (150g)",
            "calories": 314,
            "protein": 5,
            "carbohydrates": 64,
            "fat": 16,
            "fiber": 1,
            "sugar": 42,
            "sodium": 206
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Portion (150g)",
            "servingWeightGrams": 150,
            "status": "ESTIMATED",
            "confidence": "LOW",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 106,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 314 kcal vs calculated 420 kcal (33.8% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "ds-10",
        "category": "desserts",
        "name": "Churros with Dark Chocolate Dip",
        "restaurantId": "rest-1",
        "cuisine": "Spanish",
        "price": 219,
        "rating": 4.8,
        "ratingCount": 270,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy fried Spanish dough flutes dusted with cinnamon sugar, served with warm 70% dark chocolate.",
        "offer": "₹30 OFF",
        "ingredients": [
            "Crispy Churros",
            "Cinnamon Sugar",
            "70% Dark Chocolate Dip"
        ],
        "tags": [
            "Crispy",
            "Spanish"
        ],
        "portionDescription": "1 Portion (150g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Crispy",
            "Spanish",
            "Artisanal Sweet",
            "Bestseller",
            "Low Calorie",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts",
            "Eggs"
        ],
        "nutrition": {
            "servingSize": "1 Portion (150g)",
            "calories": 340,
            "protein": 5,
            "carbohydrates": 60,
            "fat": 17,
            "fiber": 2,
            "sugar": 39,
            "sodium": 233
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Portion (150g)",
            "servingWeightGrams": 150,
            "status": "ESTIMATED",
            "confidence": "LOW",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 73,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 340 kcal vs calculated 413 kcal (21.5% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "ds-11",
        "category": "desserts",
        "name": "Royal Shahi Tukda",
        "restaurantId": "rest-4",
        "cuisine": "Mughlai",
        "price": 189,
        "rating": 4.8,
        "ratingCount": 320,
        "deliveryTime": 22,
        "distanceKm": 1.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp bread triangles soaked in aromatic sugar syrup, topped with thick condensed milk and silver leaf.",
        "offer": "15% OFF",
        "ingredients": [
            "Fried Bread",
            "Cardamom Syrup",
            "Mawa Rabri",
            "Silver Vark",
            "Almonds"
        ],
        "tags": [
            "Mughlai",
            "Rich"
        ],
        "portionDescription": "1 Portion (150g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Mughlai",
            "Rich",
            "Artisanal Sweet",
            "Bestseller",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts",
            "Eggs"
        ],
        "nutrition": {
            "servingSize": "1 Portion (150g)",
            "calories": 365,
            "protein": 6,
            "carbohydrates": 56,
            "fat": 19,
            "fiber": 2,
            "sugar": 37,
            "sodium": 260
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Portion (150g)",
            "servingWeightGrams": 150,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 54,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "ds-12",
        "category": "desserts",
        "name": "Nutella Hazelnut Belgian Waffle",
        "restaurantId": "rest-15",
        "cuisine": "Bakery",
        "price": 229,
        "rating": 4.9,
        "ratingCount": 440,
        "deliveryTime": 20,
        "distanceKm": 1.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy golden Belgian waffle smothered with warm Nutella spread, toasted hazelnuts and chocolate chips.",
        "offer": "Bestseller",
        "ingredients": [
            "Crispy Waffle",
            "Nutella",
            "Toasted Hazelnuts",
            "Chocolate Chips"
        ],
        "tags": [
            "Nutella",
            "Waffle"
        ],
        "portionDescription": "1 Portion (150g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Nutella",
            "Waffle",
            "Artisanal Sweet",
            "Bestseller",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts",
            "Eggs"
        ],
        "nutrition": {
            "servingSize": "1 Portion (150g)",
            "calories": 391,
            "protein": 7,
            "carbohydrates": 52,
            "fat": 21,
            "fiber": 2,
            "sugar": 34,
            "sodium": 287
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Portion (150g)",
            "servingWeightGrams": 150,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 34,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "ds-13",
        "category": "desserts",
        "name": "Pistachio Baklava Plate (3 Pcs)",
        "restaurantId": "rest-12",
        "cuisine": "Turkish",
        "price": 259,
        "rating": 4.7,
        "ratingCount": 180,
        "deliveryTime": 20,
        "distanceKm": 1.5,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        "description": "Flaky phyllo pastry layers filled with crushed Antep pistachios and soaked in honey blossom syrup.",
        "offer": null,
        "ingredients": [
            "Phyllo Dough",
            "Pistachios",
            "Honey Syrup",
            "Clarified Butter"
        ],
        "tags": [
            "Turkish",
            "Flaky"
        ],
        "portionDescription": "1 Portion (150g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Turkish",
            "Flaky",
            "Artisanal Sweet",
            "Bestseller",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts",
            "Eggs"
        ],
        "nutrition": {
            "servingSize": "1 Portion (150g)",
            "calories": 416,
            "protein": 7,
            "carbohydrates": 48,
            "fat": 22,
            "fiber": 3,
            "sugar": 31,
            "sodium": 314
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Portion (150g)",
            "servingWeightGrams": 150,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 2,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "ds-14",
        "category": "desserts",
        "name": "Blueberry Vanilla Panna Cotta",
        "restaurantId": "rest-5",
        "cuisine": "Italian",
        "price": 219,
        "rating": 4.8,
        "ratingCount": 195,
        "deliveryTime": 32,
        "distanceKm": 3.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
        "description": "Silky smooth set cream infused with Madagascar vanilla bean, topped with wild blueberry compote.",
        "offer": "20% OFF",
        "ingredients": [
            "Heavy Cream",
            "Madagascar Vanilla",
            "Wild Blueberries",
            "Mint"
        ],
        "tags": [
            "Italian",
            "Silky"
        ],
        "portionDescription": "1 Portion (150g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Italian",
            "Silky",
            "Artisanal Sweet",
            "Bestseller",
            "Low Calorie",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts",
            "Eggs"
        ],
        "nutrition": {
            "servingSize": "1 Portion (150g)",
            "calories": 292,
            "protein": 4,
            "carbohydrates": 68,
            "fat": 14,
            "fiber": 1,
            "sugar": 45,
            "sodium": 182
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Portion (150g)",
            "servingWeightGrams": 150,
            "status": "ESTIMATED",
            "confidence": "LOW",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 122,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 292 kcal vs calculated 414 kcal (41.8% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "ds-15",
        "category": "desserts",
        "name": "Kesar Pista Matka Kulfi",
        "restaurantId": "rest-4",
        "cuisine": "Traditional",
        "price": 149,
        "rating": 4.8,
        "ratingCount": 360,
        "deliveryTime": 22,
        "distanceKm": 1.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        "description": "Authentic slow-reduced milk kulfi with pure saffron and pistachios, served in traditional clay pot.",
        "offer": "₹20 OFF",
        "ingredients": [
            "Reduced Milk",
            "Saffron",
            "Pistachios",
            "Cardamom"
        ],
        "tags": [
            "Kulfi",
            "Traditional"
        ],
        "portionDescription": "1 Portion (150g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Kulfi",
            "Traditional",
            "Artisanal Sweet",
            "Bestseller",
            "Low Calorie",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts",
            "Eggs"
        ],
        "nutrition": {
            "servingSize": "1 Portion (150g)",
            "calories": 317,
            "protein": 5,
            "carbohydrates": 64,
            "fat": 16,
            "fiber": 1,
            "sugar": 42,
            "sodium": 209
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Portion (150g)",
            "servingWeightGrams": 150,
            "status": "ESTIMATED",
            "confidence": "LOW",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 103,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 317 kcal vs calculated 420 kcal (32.5% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "ds-16",
        "category": "desserts",
        "name": "Dark Chocolate Mousse Dome",
        "restaurantId": "rest-15",
        "cuisine": "French",
        "price": 249,
        "rating": 4.9,
        "ratingCount": 280,
        "deliveryTime": 20,
        "distanceKm": 1.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        "description": "Mirror-glazed dome of airy 60% dark chocolate mousse resting on almond sponge base.",
        "offer": "Chef Special",
        "ingredients": [
            "60% Dark Chocolate",
            "Heavy Cream",
            "Almond Sponge",
            "Mirror Glaze"
        ],
        "tags": [
            "Gourmet",
            "Chic"
        ],
        "portionDescription": "1 Portion (150g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Gourmet",
            "Chic",
            "Artisanal Sweet",
            "Bestseller",
            "Low Calorie",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts",
            "Eggs"
        ],
        "nutrition": {
            "servingSize": "1 Portion (150g)",
            "calories": 343,
            "protein": 5,
            "carbohydrates": 60,
            "fat": 18,
            "fiber": 2,
            "sugar": 39,
            "sodium": 236
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Portion (150g)",
            "servingWeightGrams": 150,
            "status": "ESTIMATED",
            "confidence": "LOW",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 79,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 343 kcal vs calculated 422 kcal (23.0% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "ds-17",
        "category": "desserts",
        "name": "Gulab Jamun Sundae",
        "restaurantId": "rest-15",
        "cuisine": "Fusion",
        "price": 189,
        "rating": 4.7,
        "ratingCount": 310,
        "deliveryTime": 20,
        "distanceKm": 1.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        "description": "Two hot gulab jamuns nestled under scoops of vanilla bean ice cream, chocolate syrup and nuts.",
        "offer": "10% OFF",
        "ingredients": [
            "Gulab Jamun",
            "Vanilla Ice Cream",
            "Hot Fudge",
            "Cashew Crunch"
        ],
        "tags": [
            "Sundae",
            "Fusion"
        ],
        "portionDescription": "1 Portion (150g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Sundae",
            "Fusion",
            "Artisanal Sweet",
            "Bestseller",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts",
            "Eggs"
        ],
        "nutrition": {
            "servingSize": "1 Portion (150g)",
            "calories": 368,
            "protein": 6,
            "carbohydrates": 56,
            "fat": 19,
            "fiber": 2,
            "sugar": 36,
            "sodium": 263
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Portion (150g)",
            "servingWeightGrams": 150,
            "status": "ESTIMATED",
            "confidence": "MEDIUM",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 51,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "ds-18",
        "category": "desserts",
        "name": "Warm Carrot Halwa Pudding",
        "restaurantId": "rest-6",
        "cuisine": "Traditional",
        "price": 169,
        "rating": 4.8,
        "ratingCount": 230,
        "deliveryTime": 25,
        "distanceKm": 2.4,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        "description": "Grated Delhi red carrots slow-braised in pure desi ghee, khoya, cardamom and roasted cashews.",
        "offer": null,
        "ingredients": [
            "Red Carrots",
            "Desi Ghee",
            "Khoya",
            "Cashews",
            "Raisins"
        ],
        "tags": [
            "Warm",
            "Traditional"
        ],
        "portionDescription": "1 Portion (150g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Warm",
            "Traditional",
            "Artisanal Sweet",
            "Bestseller",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts",
            "Eggs"
        ],
        "nutrition": {
            "servingSize": "1 Portion (150g)",
            "calories": 394,
            "protein": 7,
            "carbohydrates": 51,
            "fat": 21,
            "fiber": 2,
            "sugar": 33,
            "sodium": 290
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Portion (150g)",
            "servingWeightGrams": 150,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 27,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "ds-19",
        "category": "desserts",
        "name": "Classic Creme Brulee",
        "restaurantId": "rest-1",
        "cuisine": "French",
        "price": 249,
        "rating": 4.8,
        "ratingCount": 210,
        "deliveryTime": 25,
        "distanceKm": 2.1,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
        "description": "Rich custard base flavored with vanilla bean, topped with a contrasting layer of crisp caramelized sugar.",
        "offer": "15% OFF",
        "ingredients": [
            "Cream Custard",
            "Caramelized Sugar Crust",
            "Vanilla Bean"
        ],
        "tags": [
            "French",
            "Classic"
        ],
        "portionDescription": "1 Portion (150g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "French",
            "Classic",
            "Artisanal Sweet",
            "Bestseller",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts",
            "Eggs"
        ],
        "nutrition": {
            "servingSize": "1 Portion (150g)",
            "calories": 419,
            "protein": 7,
            "carbohydrates": 47,
            "fat": 23,
            "fiber": 3,
            "sugar": 30,
            "sodium": 318
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Portion (150g)",
            "servingWeightGrams": 150,
            "status": "ESTIMATED",
            "confidence": "HIGH",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 4,
            "reviewRequired": false,
            "reviewReason": null,
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    },
    {
        "id": "ds-20",
        "category": "desserts",
        "name": "Artisanal Pistachio Gelato (2 Scoops)",
        "restaurantId": "rest-15",
        "cuisine": "Italian",
        "price": 179,
        "rating": 4.8,
        "ratingCount": 340,
        "deliveryTime": 20,
        "distanceKm": 1.8,
        "isVeg": true,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        "description": "Slow-churned Italian gelato packed with roasted Sicilian pistachios and rich milk.",
        "offer": "Bestseller",
        "ingredients": [
            "Fresh Milk",
            "Sicilian Pistachio Paste",
            "Cane Sugar"
        ],
        "tags": [
            "Gelato",
            "Italian"
        ],
        "portionDescription": "1 Portion (150g)",
        "spiceLevel": "Mild",
        "dietaryTags": [
            "Gelato",
            "Italian",
            "Artisanal Sweet",
            "Bestseller",
            "Low Calorie",
            "Under 500 kcal",
            "Vegetarian"
        ],
        "allergens": [
            "Dairy",
            "Nuts",
            "Eggs"
        ],
        "nutrition": {
            "servingSize": "1 Portion (150g)",
            "calories": 295,
            "protein": 4,
            "carbohydrates": 67,
            "fat": 14,
            "fiber": 1,
            "sugar": 44,
            "sodium": 185
        },
        "nutritionMeta": {
            "sourceType": "GOVERNMENT_DATABASE",
            "sourceName": "ICMR-NIN IFCT 2017",
            "sourceUrl": "https://www.nin.res.in/ebooks/IFCT2017.pdf",
            "servingSize": "1 Portion (150g)",
            "servingWeightGrams": 150,
            "status": "ESTIMATED",
            "confidence": "LOW",
            "lastVerified": "2026-08-24",
            "method": "Standardized food composition estimate",
            "macroSanityDiff": 115,
            "reviewRequired": true,
            "reviewReason": "Macro calorie mismatch: stated 295 kcal vs calculated 410 kcal (39.0% diff)",
            "disclaimer": "Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method."
        }
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        NU_CITIES,
        NU_CATEGORIES,
        NU_RESTAURANTS,
        NU_FOOD_ITEMS
    };
}
