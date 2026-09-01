/**
 * ==================================================
 * NUOrder — AI-Driven Food Platform
 * Application Core Architecture & Food Discovery Engine
 * Task 3.2: Nutrition Intelligence + Food Discovery Polish
 * ==================================================
 */

// Application State
const nuState = {
    currentCity: 'Hyderabad',
    location: {
        latitude: null,
        longitude: null,
        city: 'Hyderabad',
        area: null,
        address: null,
        source: 'manual',
        deliveryAddress: {
            houseOrFlat: '',
            street: '',
            area: '',
            landmark: '',
            pincode: '',
            city: '',
            district: '',
            state: '',
            postOffice: ''
        }
    },
    activeCategory: null,
    activeRestaurant: null,
    activeRestaurantCategory: 'all',
    restaurantSearchQuery: '',
    categorySearchQuery: '',
    categoryFilters: {
        minRating: 0,
        fastDelivery: false,
        hasOffer: false,
        openOnly: false
    },
    nutritionFilters: {
        highProtein: false,
        under500: false,
        vegOnly: false,
        highFiber: false
    },
    categorySortBy: 'recommended',
    cart: new Map(), // foodId -> { item, quantity }
    appliedCoupon: null,
    selectedPaymentCategory: null,
    selectedUpiApp: null,
    activeDetailItem: null,
    feedbackRating: 'Excellent',
    showFullCartNutrition: false,
    aiConversation: [],
    aiRecommendationHistory: [],
    isAIThinking: false,
    user: {
        phone: '',
        fullName: '',
        isAuthenticated: false
    },
    savedAddresses: [
        {
            id: 'addr-1',
            label: 'Home',
            type: 'Home',
            city: 'Hyderabad',
            area: 'Jubilee Hills',
            street: 'Plot 42, Road No. 36',
            landmark: 'Near Metro Pillar 14',
            isDefault: true
        },
        {
            id: 'addr-2',
            label: 'Office',
            type: 'Office',
            city: 'Khammam',
            area: 'Collectorate Junction',
            street: 'Wyra Road',
            landmark: 'Opposite District Court',
            isDefault: false
        }
    ],
    authTempData: {
        phone: '',
        otp: '',
        fullName: '',
        addressLabel: 'Home',
        address: null
    },
    selectedPaymentMethod: 'UPI_PHONEPE'
};

window.nuState = nuState;

function calculateCodFee(distanceKm) {
    const dist = typeof distanceKm === 'number' && !isNaN(distanceKm) ? distanceKm : 2.5;
    if (dist <= 2.0) return 20;
    if (dist <= 5.0) return 30;
    if (dist <= 8.0) return 40;
    return 50;
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    initLocationSelector();
    initExploreMenuSystem();
    initNearbyRestaurants();
    initPopularDishes();
    initCartSystem();
    initFoodDetailsModal();
    initFeedbackSystem();
    initNavbarInteractions();
    initGlobalSearch();
    initBottomMobileNav();
    initAIAssistant();
    initAuthAndProfileSystem();
    initScrollRevealObserver();
});

/**
 * ==================================================
 * Scroll Reveal & Micro-Animation Observer (Task 3.6)
 * ==================================================
 */
function initScrollRevealObserver() {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('nu-visible');
                    obs.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.08,
            rootMargin: '0px 0px -30px 0px'
        });

        document.querySelectorAll('.nu-reveal, .nu-reveal-up, .nu-reveal-scale').forEach(el => {
            observer.observe(el);
        });

        window.nuObserveNewElements = (container = document) => {
            container.querySelectorAll('.nu-reveal, .nu-reveal-up, .nu-reveal-scale').forEach(el => {
                if (!el.classList.contains('nu-visible')) {
                    observer.observe(el);
                }
            });
        };
    } else {
        document.querySelectorAll('.nu-reveal, .nu-reveal-up, .nu-reveal-scale').forEach(el => {
            el.classList.add('nu-visible');
        });
    }
}

/**
 * ==================================================
 * Navigation Active State & Scroll Spy Engine (Task 3.9)
 * ==================================================
 */
function initNavbarInteractions() {
    let isClickScrolling = false;
    let scrollSettleTimer = null;
    let maxSafetyTimer = null;

    function unlockScrollSpy() {
        isClickScrolling = false;
        if (scrollSettleTimer) {
            clearTimeout(scrollSettleTimer);
            scrollSettleTimer = null;
        }
        if (maxSafetyTimer) {
            clearTimeout(maxSafetyTimer);
            maxSafetyTimer = null;
        }
        window.removeEventListener('scrollend', onScrollEnd);
        window.removeEventListener('scroll', onScrollDebounce);
    }

    function onScrollEnd() {
        unlockScrollSpy();
    }

    function onScrollDebounce() {
        if (scrollSettleTimer) clearTimeout(scrollSettleTimer);
        scrollSettleTimer = setTimeout(unlockScrollSpy, 100);
    }

    function startClickScroll(targetEl) {
        unlockScrollSpy();
        isClickScrolling = true;

        if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
        }

        if ('onscrollend' in window) {
            window.addEventListener('scrollend', onScrollEnd, { once: true });
        }
        window.addEventListener('scroll', onScrollDebounce, { passive: true });
        scrollSettleTimer = setTimeout(unlockScrollSpy, 150);
        maxSafetyTimer = setTimeout(unlockScrollSpy, 1500);
    }

    function setActiveNav(sectionKey) {
        if (!sectionKey) return;
        
        // Desktop Navbar Links
        document.querySelectorAll('#nuNavbarLinks .nav-link').forEach(link => {
            if (link.dataset.section === sectionKey) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Mobile Bottom Nav Links
        document.querySelectorAll('.nu-bottom-nav-item').forEach(item => {
            const itemKey = item.dataset.nav === 'explore' ? 'categories' : item.dataset.nav;
            if (itemKey === sectionKey) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Click Handlers for Desktop Navbar
    document.querySelectorAll('#nuNavbarLinks .nav-link, a[data-section="ai"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetNav = link.closest('[data-section]');
            const sectionKey = targetNav ? targetNav.dataset.section : link.dataset.section;
            if (!sectionKey) return;

            e.preventDefault();
            e.stopPropagation();

            // 1. Immediately activate target link
            setActiveNav(sectionKey);

            // 2. Directly open AI Chat Modal for AI section without page scroll
            if (sectionKey === 'ai') {
                if (typeof $ !== 'undefined') {
                    $('#nuAIAssistantModal').modal('show');
                } else {
                    const modalEl = document.getElementById('nuAIAssistantModal');
                    if (modalEl) modalEl.classList.add('show');
                }

                // Close collapsible mobile navbar if expanded
                const collapseEl = document.getElementById('nuNavbarCollapse');
                if (collapseEl && typeof $ !== 'undefined' && $(collapseEl).hasClass('show')) {
                    $(collapseEl).collapse('hide');
                }
                return;
            }

            // 3. Determine target element for scrolling (Home, Categories, Restaurants, Offers)
            let targetEl = null;
            if (sectionKey === 'home') {
                targetEl = document.getElementById('heroSection') || document.body;
            } else if (sectionKey === 'categories') {
                targetEl = document.getElementById('exploreMenuSection');
            } else if (sectionKey === 'restaurants') {
                targetEl = document.getElementById('restaurantsSection');
            } else if (sectionKey === 'offers') {
                targetEl = document.getElementById('offersSection');
            }

            if (targetEl) {
                startClickScroll(targetEl);
            }

            // Close collapsible mobile navbar if expanded
            const collapseEl = document.getElementById('nuNavbarCollapse');
            if (collapseEl && typeof $ !== 'undefined' && $(collapseEl).hasClass('show')) {
                $(collapseEl).collapse('hide');
            }
        });
    });

    // Mobile Bottom Nav Items Click Handling
    document.querySelectorAll('.nu-bottom-nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const navKey = item.dataset.nav;
            if (!navKey) return;

            let sectionKey = navKey;
            if (navKey === 'explore') sectionKey = 'categories';

            if (['home', 'categories', 'restaurants', 'offers', 'ai'].includes(sectionKey)) {
                setActiveNav(sectionKey);

                if (sectionKey === 'ai') {
                    if (typeof $ !== 'undefined') {
                        $('#nuAIAssistantModal').modal('show');
                    }
                    return;
                }

                let targetEl = null;
                if (sectionKey === 'home') targetEl = document.getElementById('heroSection') || document.body;
                else if (sectionKey === 'categories') targetEl = document.getElementById('exploreMenuSection');
                else if (sectionKey === 'restaurants') targetEl = document.getElementById('restaurantsSection');
                else if (sectionKey === 'offers') targetEl = document.getElementById('offersSection');

                if (targetEl) {
                    startClickScroll(targetEl);
                }
            }
        });
    });

    // Scroll-Aware IntersectionObserver
    if ('IntersectionObserver' in window) {
        const sectionsToWatch = [
            { id: 'heroSection', key: 'home' },
            { id: 'exploreMenuSection', key: 'categories' },
            { id: 'restaurantsSection', key: 'restaurants' },
            { id: 'offersSection', key: 'offers' },
            { id: 'aiSection', key: 'ai' }
        ];

        const navObserver = new IntersectionObserver((entries) => {
            if (isClickScrolling) return; // Do not overwrite active link mid-scroll!

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const secId = entry.target.id;
                    const match = sectionsToWatch.find(s => s.id === secId);
                    if (match) {
                        setActiveNav(match.key);
                    }
                }
            });
        }, {
            threshold: 0.35,
            rootMargin: '-15% 0px -35% 0px'
        });

        sectionsToWatch.forEach(s => {
            const el = document.getElementById(s.id);
            if (el) navObserver.observe(el);
        });
    }

    window.nuSetActiveNav = setActiveNav;
}

function updateLocationUI(cityName) {
    const city = (cityName || nuState.currentCity || 'Hyderabad').trim();
    nuState.currentCity = city;

    // 1. Update all navbar and hero .nu-location-val elements
    document.querySelectorAll('.nu-location-val').forEach(el => {
        el.textContent = city;
    });

    // 2. Update hero discovery location pill
    const locationTagEl = document.getElementById('discoveryLocationTag');
    if (locationTagEl) {
        locationTagEl.textContent = `Delivering in ${city}`;
    }

    // 3. Update nearby restaurants section location badge
    const locationBadge = document.getElementById('nearbyRestaurantsLocationBadge');
    if (locationBadge) {
        locationBadge.textContent = city;
    }

    // 4. Update AI context pill
    if (typeof updateAIContextBadge === 'function') {
        updateAIContextBadge();
    }
}

/**
 * ==================================================
 * 1. Location Management
 * ==================================================
 */
function initLocationSelector() {
    const locationValLabels = document.querySelectorAll('.nu-location-val');
    const locationOptionsContainer = document.getElementById('locationCitiesList');
    const locationSearchInput = document.getElementById('locationSearchInput');

    function setCity(cityName) {
        if (!cityName) return;
        nuState.currentCity = cityName;
        if (!nuState.location) nuState.location = {};
        nuState.location.city = cityName;
        nuState.location.source = 'manual';
        nuState.location.latitude = null;
        nuState.location.longitude = null;
        nuState.location.area = null;
        nuState.location.address = null;

        updateLocationUI(cityName);

        $('#nuLocationModal').modal('hide');

        renderCategoryCards();
        renderNearbyRestaurants();
        renderPopularDishes();

        if (nuState.activeRestaurant) {
            closeRestaurantMenu();
        }

        if (nuState.activeCategory) {
            renderCategoryRestaurantsView(nuState.activeCategory);
        }
    }

    if (locationOptionsContainer) {
        renderCityOptions('');
        if (locationSearchInput) {
            locationSearchInput.addEventListener('input', (e) => {
                renderCityOptions(e.target.value.trim().toLowerCase());
            });
        }
    }

    function renderCityOptions(query) {
        locationOptionsContainer.innerHTML = '';
        const filteredCities = NU_CITIES.filter(c => c.toLowerCase().includes(query));

        if (filteredCities.length === 0) {
            locationOptionsContainer.innerHTML = `<div class="text-muted small p-3 text-center" style="grid-column: 1 / -1;">No matching cities found.</div>`;
            return;
        }

        filteredCities.forEach(city => {
            const isSelected = city === nuState.currentCity;
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = `nu-city-card ${isSelected ? 'selected-location active' : ''}`;
            btn.innerHTML = `
                <div>
                    <div class="d-flex align-items-center justify-content-between mb-1">
                        <span class="nu-city-name">${city}</span>
                        <i class="fas fa-map-marker-alt text-accent" style="font-size: 14px;"></i>
                    </div>
                    <span class="nu-city-sub">${getRestaurantsByCity(city).length} partner kitchens</span>
                </div>
                ${isSelected ? '<span class="nu-city-active-tag">● Active</span>' : ''}
            `;
            btn.addEventListener('click', () => setCity(city));
            locationOptionsContainer.appendChild(btn);
        });
    }

    window.nuSetCity = setCity;
}

function getRestaurantsByCity(city) {
    const matched = NU_RESTAURANTS.filter(r => r.city.toLowerCase() === city.toLowerCase());
    return matched.length > 0 ? matched : NU_RESTAURANTS.slice(0, 6);
}

/**
 * ==================================================
 * 2. Nutrition Intelligence Calculation Engine
 * Reusable helper functions exposed for Future AI Assistant
 * ==================================================
 */
function calculateFoodNutrition(food, quantity = 1) {
    if (!food || !food.nutrition) {
        return {
            calories: 0,
            protein: 0,
            carbohydrates: 0,
            fat: 0,
            fiber: 0,
            sugar: 0,
            sodium: 0
        };
    }
    const n = food.nutrition;
    return {
        calories: Math.round((n.calories || 0) * quantity),
        protein: Math.round((n.protein || 0) * quantity),
        carbohydrates: Math.round((n.carbohydrates || 0) * quantity),
        fat: Math.round((n.fat || 0) * quantity),
        fiber: Math.round((n.fiber || 0) * quantity),
        sugar: Math.round((n.sugar || 0) * quantity),
        sodium: Math.round((n.sodium || 0) * quantity)
    };
}

function calculateCartNutrition(cartItems) {
    const total = {
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fat: 0,
        fiber: 0,
        sugar: 0,
        sodium: 0
    };

    if (!cartItems) return total;

    // Handle Map or Array
    const items = cartItems instanceof Map ? Array.from(cartItems.values()) : cartItems;

    items.forEach(entry => {
        const itemNutr = calculateFoodNutrition(entry.item || entry.food || entry, entry.quantity || 1);
        total.calories += itemNutr.calories;
        total.protein += itemNutr.protein;
        total.carbohydrates += itemNutr.carbohydrates;
        total.fat += itemNutr.fat;
        total.fiber += itemNutr.fiber;
        total.sugar += itemNutr.sugar;
        total.sodium += itemNutr.sodium;
    });

    return total;
}

function getCurrentCartNutrition() {
    return calculateCartNutrition(nuState.cart);
}

function getCurrentCartItems() {
    const list = [];
    nuState.cart.forEach((entry, foodId) => {
        list.push({
            foodId,
            food: entry.item,
            quantity: entry.quantity,
            lineTotal: entry.item.price * entry.quantity,
            nutrition: calculateFoodNutrition(entry.item, entry.quantity)
        });
    });
    return list;
}

function getFoodNutrition(foodId) {
    const food = NU_FOOD_ITEMS.find(f => f.id === foodId);
    return food ? calculateFoodNutrition(food, 1) : null;
}

function getRestaurantMenu(restaurantId) {
    return NU_FOOD_ITEMS.filter(f => f.restaurantId === restaurantId);
}

function getOrderNutrition(order) {
    if (!order || !order.items) return null;
    return calculateCartNutrition(order.items);
}

// Expose on window for Future AI Assistant and modules
window.calculateFoodNutrition = calculateFoodNutrition;
window.calculateCartNutrition = calculateCartNutrition;
window.getCurrentCartNutrition = getCurrentCartNutrition;
window.getCurrentCartItems = getCurrentCartItems;
window.getFoodNutrition = getFoodNutrition;
window.getRestaurantMenu = getRestaurantMenu;
window.getOrderNutrition = getOrderNutrition;

/**
 * ==================================================
 * 3. Explore Menu (8 Categories)
 * ==================================================
 */
function initExploreMenuSystem() {
    renderCategoryCards();

    const backBtn = document.getElementById('backToExploreBtn');
    if (backBtn) {
        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeCategoryDiscovery();
        });
    }

    const breadcrumbExplore = document.getElementById('breadcrumbExploreLink');
    if (breadcrumbExplore) {
        breadcrumbExplore.addEventListener('click', (e) => {
            e.preventDefault();
            closeCategoryDiscovery();
        });
    }

    const backToRestBtn = document.getElementById('backToRestaurantsBtn');
    if (backToRestBtn) {
        backToRestBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeRestaurantMenu();
        });
    }

    const restBreadcrumbExplore = document.getElementById('restBreadcrumbExploreLink');
    if (restBreadcrumbExplore) {
        restBreadcrumbExplore.addEventListener('click', (e) => {
            e.preventDefault();
            closeRestaurantMenu();
            closeCategoryDiscovery();
        });
    }

    const restBreadcrumbCategory = document.getElementById('restBreadcrumbCategoryLink');
    if (restBreadcrumbCategory) {
        restBreadcrumbCategory.addEventListener('click', (e) => {
            e.preventDefault();
            closeRestaurantMenu();
        });
    }

    attachCategoryRestaurantFilterListeners();
    attachRestaurantMenuSearchListeners();
    attachRestaurantNutritionFilterListeners();
}

function renderCategoryCards() {
    const gridEl = document.getElementById('exploreMenuCategoryGrid');
    if (!gridEl) return;

    gridEl.innerHTML = '';

    NU_CATEGORIES.forEach((cat, index) => {
        const cityRestaurants = getRestaurantsByCity(nuState.currentCity).map(r => r.id);
        const count = NU_FOOD_ITEMS.filter(item => 
            item.category === cat.id && 
            (cityRestaurants.includes(item.restaurantId) || NU_RESTAURANTS.find(r => r.id === item.restaurantId)?.city === nuState.currentCity)
        ).length;

        const totalItemsCount = count > 0 ? count : NU_FOOD_ITEMS.filter(item => item.category === cat.id).length;
        const delayClass = `nu-delay-${(index % 4) + 1}`;

        const col = document.createElement('div');
        col.className = `col-12 col-md-6 col-lg-3 mb-4 nu-reveal-up ${delayClass}`;
        col.innerHTML = `
            <div class="menu-item-card p-3 nu-category-card nu-hover-lift h-100 d-flex flex-column justify-content-between" data-category-id="${cat.id}" tabindex="0" role="button" aria-label="Explore ${cat.name}">
                <div>
                    <div class="category-img-wrapper mb-3">
                        <img src="${cat.image}" alt="${cat.name}" class="menu-item-image" loading="lazy" />
                        <span class="category-count-badge">${totalItemsCount} dishes</span>
                    </div>
                    <h3 class="menu-card-title mb-1">${cat.name}</h3>
                    <p class="category-card-desc mb-0">${cat.description}</p>
                </div>
                <div class="menu-item-link mt-3 pt-2 border-top" style="border-color: rgba(255,255,255,.06) !important;">
                    <span>Explore Kitchens</span>
                    <i class="fas fa-arrow-right ml-1"></i>
                </div>
            </div>
        `;

        const card = col.querySelector('.nu-category-card');
        card.addEventListener('click', () => openCategoryDiscovery(cat.id));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openCategoryDiscovery(cat.id);
            }
        });

        gridEl.appendChild(col);
    });

    if (window.nuObserveNewElements) window.nuObserveNewElements(gridEl);
}

/**
 * ==================================================
 * 4. Category $\rightarrow$ Partner Restaurants Discovery View
 * ==================================================
 */
function openCategoryDiscovery(categoryId) {
    const category = NU_CATEGORIES.find(c => c.id === categoryId);
    if (!category) return;

    nuState.activeCategory = categoryId;
    nuState.categorySearchQuery = '';
    resetCategoryFilters();

    const categoryGridSection = document.getElementById('exploreMenuCategoryGrid');
    const categoryHeader = document.getElementById('exploreMenuCategoryGridHeader');
    const discoveryView = document.getElementById('categoryDiscoveryView');
    const restaurantMenuView = document.getElementById('restaurantMenuView');
    const categorySection = document.getElementById('exploreMenuSection');

    updateActiveNavIndicator('explore');

    if (categoryGridSection && discoveryView) {
        if (categoryHeader) categoryHeader.style.display = 'none';
        if (restaurantMenuView) restaurantMenuView.style.display = 'none';
        categoryGridSection.style.display = 'none';
        discoveryView.style.display = 'block';

        renderCategoryRestaurantsView(categoryId);

        if (categorySection) {
            categorySection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

function closeCategoryDiscovery() {
    nuState.activeCategory = null;
    const categoryGridSection = document.getElementById('exploreMenuCategoryGrid');
    const categoryHeader = document.getElementById('exploreMenuCategoryGridHeader');
    const discoveryView = document.getElementById('categoryDiscoveryView');
    const restaurantMenuView = document.getElementById('restaurantMenuView');
    const categorySection = document.getElementById('exploreMenuSection');

    if (categoryGridSection && discoveryView) {
        discoveryView.style.display = 'none';
        if (restaurantMenuView) restaurantMenuView.style.display = 'none';
        if (categoryHeader) categoryHeader.style.display = 'block';
        categoryGridSection.style.display = 'flex';
        renderCategoryCards();

        if (categorySection) {
            categorySection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

window.openCategoryDiscovery = openCategoryDiscovery;
window.closeCategoryDiscovery = closeCategoryDiscovery;

function renderCategoryRestaurantsView(categoryId) {
    const category = NU_CATEGORIES.find(c => c.id === categoryId);
    if (!category) return;

    const breadcrumbCategory = document.getElementById('breadcrumbCategoryName');
    const titleEl = document.getElementById('discoveryCategoryTitle');
    const descEl = document.getElementById('discoveryCategoryDesc');
    const locationTagEl = document.getElementById('discoveryLocationTag');

    if (breadcrumbCategory) breadcrumbCategory.textContent = category.name;
    if (titleEl) titleEl.textContent = category.name;
    if (descEl) descEl.textContent = `Partner restaurants serving ${category.name}`;
    if (locationTagEl) locationTagEl.textContent = `Delivering in ${nuState.currentCity}`;

    renderFilteredCategoryRestaurants();
}

function attachCategoryRestaurantFilterListeners() {
    const searchInput = document.getElementById('discoverySearchInput');
    if (searchInput) {
        searchInput.oninput = (e) => {
            nuState.categorySearchQuery = e.target.value.trim().toLowerCase();
            renderFilteredCategoryRestaurants();
        };
    }

    const sortSelect = document.getElementById('discoverySortSelect');
    if (sortSelect) {
        sortSelect.onchange = (e) => {
            nuState.categorySortBy = e.target.value;
            renderFilteredCategoryRestaurants();
        };
    }

    const ratingPill = document.getElementById('filterRatingPill');
    const fastPill = document.getElementById('filterFastDeliveryPill');
    const offerPill = document.getElementById('filterOfferPill');
    const openPill = document.getElementById('filterOpenOnlyPill');

    if (ratingPill) {
        ratingPill.onclick = () => {
            nuState.categoryFilters.minRating = nuState.categoryFilters.minRating === 4.0 ? 0 : 4.0;
            ratingPill.classList.toggle('active', nuState.categoryFilters.minRating === 4.0);
            renderFilteredCategoryRestaurants();
        };
    }

    if (fastPill) {
        fastPill.onclick = () => {
            nuState.categoryFilters.fastDelivery = !nuState.categoryFilters.fastDelivery;
            fastPill.classList.toggle('active', nuState.categoryFilters.fastDelivery);
            renderFilteredCategoryRestaurants();
        };
    }

    if (offerPill) {
        offerPill.onclick = () => {
            nuState.categoryFilters.hasOffer = !nuState.categoryFilters.hasOffer;
            offerPill.classList.toggle('active', nuState.categoryFilters.hasOffer);
            renderFilteredCategoryRestaurants();
        };
    }

    if (openPill) {
        openPill.onclick = () => {
            nuState.categoryFilters.openOnly = !nuState.categoryFilters.openOnly;
            openPill.classList.toggle('active', nuState.categoryFilters.openOnly);
            renderFilteredCategoryRestaurants();
        };
    }
}

function resetCategoryFilters() {
    nuState.categoryFilters.minRating = 0;
    nuState.categoryFilters.fastDelivery = false;
    nuState.categoryFilters.hasOffer = false;
    nuState.categoryFilters.openOnly = false;
    nuState.categorySearchQuery = '';

    const searchInput = document.getElementById('discoverySearchInput');
    if (searchInput) searchInput.value = '';

    const pills = document.querySelectorAll('.discovery-toolbar .filter-pill-btn');
    pills.forEach(p => p.classList.remove('active'));
}

function renderFilteredCategoryRestaurants() {
    const gridEl = document.getElementById('categoryRestaurantsGrid');
    const countBadge = document.getElementById('discoveryItemCountBadge');
    if (!gridEl) return;

    gridEl.innerHTML = '';

    const categoryDishes = NU_FOOD_ITEMS.filter(item => item.category === nuState.activeCategory);
    const categoryRestaurantIds = [...new Set(categoryDishes.map(d => d.restaurantId))];

    let restaurants = NU_RESTAURANTS.filter(r => 
        categoryRestaurantIds.includes(r.id) &&
        r.city.toLowerCase() === nuState.currentCity.toLowerCase()
    );

    if (restaurants.length === 0) {
        restaurants = NU_RESTAURANTS.filter(r => categoryRestaurantIds.includes(r.id));
    }

    if (nuState.categorySearchQuery) {
        const q = nuState.categorySearchQuery;
        restaurants = restaurants.filter(r => {
            const hasMatchingDish = categoryDishes.some(d => 
                d.restaurantId === r.id && 
                (d.name.toLowerCase().includes(q) || d.ingredients.some(i => i.toLowerCase().includes(q)))
            );
            return (
                r.name.toLowerCase().includes(q) ||
                r.area.toLowerCase().includes(q) ||
                r.cuisines.some(c => c.toLowerCase().includes(q)) ||
                hasMatchingDish
            );
        });
    }

    if (nuState.categoryFilters.minRating > 0) {
        restaurants = restaurants.filter(r => r.rating >= nuState.categoryFilters.minRating);
    }
    if (nuState.categoryFilters.fastDelivery) {
        restaurants = restaurants.filter(r => r.deliveryTime <= 28);
    }
    if (nuState.categoryFilters.hasOffer) {
        restaurants = restaurants.filter(r => r.offers && r.offers.length > 0);
    }
    if (nuState.categoryFilters.openOnly) {
        restaurants = restaurants.filter(r => r.isOpen);
    }

    restaurants.sort((a, b) => {
        if (nuState.categorySortBy === 'rating-desc') return b.rating - a.rating;
        if (nuState.categorySortBy === 'delivery-asc') return a.deliveryTime - b.deliveryTime;
        if (nuState.categorySortBy === 'distance-asc') return (a.distanceKm || 2) - (b.distanceKm || 2);
        if (nuState.categorySortBy === 'offers') return (b.offers?.length || 0) - (a.offers?.length || 0);
        return b.rating * 10 - a.deliveryTime;
    });

    const totalDishesInSelection = categoryDishes.filter(d => restaurants.map(r => r.id).includes(d.restaurantId)).length;
    if (countBadge) {
        countBadge.textContent = `${restaurants.length} partner restaurants • ${totalDishesInSelection} dishes`;
    }

    if (restaurants.length === 0) {
        gridEl.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="cart-empty-icon mb-3">
                    <i class="fas fa-store-slash"></i>
                </div>
                <h4 class="text-white font-weight-bold">No partner restaurants found in this location.</h4>
                <p class="text-muted small mb-4">Try clearing active filters or switching your demo delivery city.</p>
                <button type="button" class="custom-button mr-2" onclick="window.nuClearCategoryFilters()">Clear Filters</button>
                <button type="button" class="custom-outline-button" data-toggle="modal" data-target="#nuLocationModal">Change Location</button>
            </div>
        `;
        return;
    }

    restaurants.forEach((rest, index) => {
        const dishCountForCat = categoryDishes.filter(d => d.restaurantId === rest.id).length;
        const offerText = rest.offers && rest.offers.length > 0 ? rest.offers[0] : 'Special Menu';
        const formattedRatingCount = rest.ratingCount >= 1000 ? (rest.ratingCount / 1000).toFixed(1) + 'k' : rest.ratingCount;
        const delayClass = `nu-delay-${(index % 4) + 1}`;

        const col = document.createElement('div');
        col.className = `col-12 col-md-6 col-lg-4 mb-4 nu-reveal-up ${delayClass}`;
        col.innerHTML = `
            <div class="nu-restaurant-card nu-hover-lift h-100 d-flex flex-column justify-content-between" style="cursor: pointer;" tabindex="0" role="button" aria-label="View menu for ${escapeHtml(rest.name)}">
                <div class="restaurant-img-wrap">
                    <img src="${rest.image}" alt="${escapeHtml(rest.name)}" class="restaurant-img" loading="lazy" />
                    <span class="nu-status-badge ${rest.isOpen ? 'open' : 'closed'}">
                        <i class="fas fa-circle"></i> ${rest.isOpen ? 'Open Now' : 'Closed'}
                    </span>
                    <span class="restaurant-offer-tag"><i class="fas fa-percent mr-1"></i>${escapeHtml(offerText)}</span>
                </div>

                <div class="restaurant-body d-flex flex-column justify-content-between flex-grow-1">
                    <div>
                        <div class="d-flex justify-content-between align-items-start mb-1">
                            <h4 class="restaurant-title mb-0">${escapeHtml(rest.name)}</h4>
                            <span class="food-rating-pill">
                                <i class="fas fa-star mr-1"></i>${rest.rating} (${formattedRatingCount})
                            </span>
                        </div>
                        <div class="restaurant-cuisine">${escapeHtml(rest.cuisines.join(' • '))}</div>
                        <div class="text-muted small mb-2"><i class="fas fa-map-marker-alt text-accent mr-1"></i>${escapeHtml(rest.area)}, ${escapeHtml(rest.city)}</div>
                    </div>

                    <div>
                        <div class="restaurant-meta">
                            <span><i class="far fa-clock mr-1 text-accent"></i>${rest.deliveryTime}–${rest.deliveryTime + 5} min</span>
                            <span><i class="fas fa-route mr-1 text-accent"></i>${rest.distanceKm || 2.1} km</span>
                            <span>₹${rest.deliveryFee || 30} delivery</span>
                        </div>

                        ${rest.isOpen 
                            ? `<button type="button" class="custom-button w-100 justify-content-center view-menu-btn" onclick="window.openRestaurantMenu('${rest.id}', '${nuState.activeCategory}')">View Menu (${dishCountForCat} dishes) →</button>`
                            : `<button type="button" class="custom-outline-button w-100 justify-content-center" disabled style="opacity: 0.6; cursor: not-allowed;"><i class="fas fa-clock mr-1"></i> Currently Closed</button>`
                        }
                    </div>
                </div>
            </div>
        `;

        const card = col.querySelector('.nu-restaurant-card');
        if (card && rest.isOpen) {
            card.addEventListener('click', (e) => {
                if (e.target.closest('.view-menu-btn')) return; // Already handled by inline onclick
                window.openRestaurantMenu(rest.id, nuState.activeCategory || 'all');
            });
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    window.openRestaurantMenu(rest.id, nuState.activeCategory || 'all');
                }
            });
        }

        gridEl.appendChild(col);
    });

    if (window.nuObserveNewElements) window.nuObserveNewElements(gridEl);
}

window.nuClearCategoryFilters = () => {
    resetCategoryFilters();
    renderFilteredCategoryRestaurants();
};

/**
 * ==================================================
 * 5. Dedicated Restaurant Menu View with Nutrition Filters & Complete Your Meal
 * ==================================================
 */
function openRestaurantMenu(restaurantId, initialCategoryId = 'all') {
    const restaurant = NU_RESTAURANTS.find(r => r.id === restaurantId);
    if (!restaurant) return;

    nuState.activeRestaurant = restaurant;
    nuState.activeRestaurantCategory = initialCategoryId || 'all';
    nuState.restaurantSearchQuery = '';
    resetRestaurantNutritionFilters();

    const discoveryView = document.getElementById('categoryDiscoveryView');
    const categoryGridSection = document.getElementById('exploreMenuCategoryGrid');
    const categoryHeader = document.getElementById('exploreMenuCategoryGridHeader');
    const restaurantMenuView = document.getElementById('restaurantMenuView');
    const categorySection = document.getElementById('exploreMenuSection');

    if (categoryHeader) categoryHeader.style.display = 'none';
    if (categoryGridSection) categoryGridSection.style.display = 'none';
    if (discoveryView) discoveryView.style.display = 'none';
    if (restaurantMenuView) restaurantMenuView.style.display = 'block';

    renderRestaurantMenuHeader(restaurant);
    renderRestaurantCategoryTabs(restaurant, nuState.activeRestaurantCategory);
    renderCompleteYourMealSection(restaurant);
    renderRestaurantFoodGrid();

    if (categorySection) {
        categorySection.scrollIntoView({ behavior: 'smooth' });
    }

    if (typeof updateAIContextBadge === 'function') {
        updateAIContextBadge();
    }
}

function closeRestaurantMenu() {
    nuState.activeRestaurant = null;
    const discoveryView = document.getElementById('categoryDiscoveryView');
    const restaurantMenuView = document.getElementById('restaurantMenuView');
    const categorySection = document.getElementById('exploreMenuSection');

    if (restaurantMenuView) restaurantMenuView.style.display = 'none';

    if (nuState.activeCategory) {
        if (discoveryView) discoveryView.style.display = 'block';
        renderFilteredCategoryRestaurants();
    } else {
        closeCategoryDiscovery();
    }

    if (categorySection) {
        categorySection.scrollIntoView({ behavior: 'smooth' });
    }

    if (typeof updateAIContextBadge === 'function') {
        updateAIContextBadge();
    }
}

window.openRestaurantMenu = openRestaurantMenu;
window.closeRestaurantMenu = closeRestaurantMenu;
window.handleBackToExplore = function() {
    closeRestaurantMenu();
    const exploreSection = document.getElementById('exploreMenuSection');
    if (exploreSection) exploreSection.scrollIntoView({ behavior: 'smooth' });
};
window.handleBackToExploreMenu = window.handleBackToExplore;

function renderRestaurantMenuHeader(restaurant) {
    const headerCard = document.getElementById('restaurantHeaderCard');
    const restBreadcrumbCategoryLink = document.getElementById('restBreadcrumbCategoryLink');
    const restBreadcrumbRestName = document.getElementById('restBreadcrumbRestName');

    const activeCat = NU_CATEGORIES.find(c => c.id === nuState.activeCategory);
    if (restBreadcrumbCategoryLink) {
        restBreadcrumbCategoryLink.textContent = activeCat ? activeCat.name : 'Explore';
    }
    if (restBreadcrumbRestName) {
        restBreadcrumbRestName.textContent = restaurant.name;
    }

    const formattedRatingCount = restaurant.ratingCount >= 1000 ? (restaurant.ratingCount / 1000).toFixed(1) + 'k' : restaurant.ratingCount;

    if (headerCard) {
        headerCard.innerHTML = `
            <div class="row no-gutters">
                <div class="col-12 col-md-4">
                    <img src="${restaurant.image}" alt="${restaurant.name}" class="nu-rest-header-img" />
                </div>
                <div class="col-12 col-md-8">
                    <div class="nu-rest-header-content">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <div>
                                <span class="nu-status-badge ${restaurant.isOpen ? 'open' : 'closed'} position-static mb-2">
                                    <i class="fas fa-circle"></i> ${restaurant.isOpen ? 'Open for Orders' : 'Currently Closed'}
                                </span>
                                <h2 class="h3 font-weight-bold text-white mb-1">${restaurant.name}</h2>
                                <p class="text-muted small mb-0">${restaurant.cuisines.join(' • ')}</p>
                            </div>
                            <span class="food-rating-pill">
                                <i class="fas fa-star mr-1"></i>${restaurant.rating} (${formattedRatingCount})
                            </span>
                        </div>

                        <div class="d-flex align-items-center flex-wrap gap-3 text-muted small mb-3">
                            <span><i class="fas fa-map-marker-alt text-accent mr-1"></i>${restaurant.area}, ${restaurant.city}</span>
                            <span><i class="far fa-clock text-accent mr-1"></i>${restaurant.deliveryTime}–${restaurant.deliveryTime + 5} mins</span>
                            <span><i class="fas fa-route text-accent mr-1"></i>${restaurant.distanceKm || 2.1} km</span>
                            <span><i class="fas fa-motorcycle text-accent mr-1"></i>₹${restaurant.deliveryFee || 30} delivery</span>
                        </div>

                        <div class="d-flex flex-wrap gap-2">
                            ${(restaurant.offers || []).map(off => `<span class="badge badge-success p-2"><i class="fas fa-tag mr-1"></i>${off}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

function renderRestaurantCategoryTabs(restaurant, selectedCategory) {
    const tabsContainer = document.getElementById('restaurantCategoryTabs');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = '';

    const restaurantDishes = NU_FOOD_ITEMS.filter(item => item.restaurantId === restaurant.id);
    const categoryIdsAtRestaurant = [...new Set(restaurantDishes.map(d => d.category))];

    // "All Dishes" Tab
    const allTab = document.createElement('button');
    allTab.type = 'button';
    allTab.className = `nu-rest-cat-pill ${selectedCategory === 'all' ? 'active' : ''}`;
    allTab.textContent = `All Dishes (${restaurantDishes.length})`;
    allTab.onclick = () => {
        nuState.activeRestaurantCategory = 'all';
        renderRestaurantCategoryTabs(restaurant, 'all');
        renderRestaurantFoodGrid();
    };
    tabsContainer.appendChild(allTab);

    // Individual Category Tabs
    categoryIdsAtRestaurant.forEach(catId => {
        const cat = NU_CATEGORIES.find(c => c.id === catId);
        if (!cat) return;

        const count = restaurantDishes.filter(d => d.category === catId).length;
        const tab = document.createElement('button');
        tab.type = 'button';
        tab.className = `nu-rest-cat-pill ${selectedCategory === catId ? 'active' : ''}`;
        tab.textContent = `${cat.name} (${count})`;
        tab.onclick = () => {
            nuState.activeRestaurantCategory = catId;
            renderRestaurantCategoryTabs(restaurant, catId);
            renderRestaurantFoodGrid();
        };
        tabsContainer.appendChild(tab);
    });
}

function attachRestaurantMenuSearchListeners() {
    const searchInput = document.getElementById('restaurantMenuSearchInput');
    if (searchInput) {
        searchInput.oninput = (e) => {
            nuState.restaurantSearchQuery = e.target.value.trim().toLowerCase();
            renderRestaurantFoodGrid();
        };
    }
}

function attachRestaurantNutritionFilterListeners() {
    const pProt = document.getElementById('filterNutrHighProtein');
    const pU500 = document.getElementById('filterNutrUnder500');
    const pVeg = document.getElementById('filterNutrVeg');
    const pFib = document.getElementById('filterNutrHighFiber');

    if (pProt) {
        pProt.onclick = () => {
            nuState.nutritionFilters.highProtein = !nuState.nutritionFilters.highProtein;
            pProt.classList.toggle('active', nuState.nutritionFilters.highProtein);
            renderRestaurantFoodGrid();
        };
    }

    if (pU500) {
        pU500.onclick = () => {
            nuState.nutritionFilters.under500 = !nuState.nutritionFilters.under500;
            pU500.classList.toggle('active', nuState.nutritionFilters.under500);
            renderRestaurantFoodGrid();
        };
    }

    if (pVeg) {
        pVeg.onclick = () => {
            nuState.nutritionFilters.vegOnly = !nuState.nutritionFilters.vegOnly;
            pVeg.classList.toggle('active', nuState.nutritionFilters.vegOnly);
            renderRestaurantFoodGrid();
        };
    }

    if (pFib) {
        pFib.onclick = () => {
            nuState.nutritionFilters.highFiber = !nuState.nutritionFilters.highFiber;
            pFib.classList.toggle('active', nuState.nutritionFilters.highFiber);
            renderRestaurantFoodGrid();
        };
    }
}

function resetRestaurantNutritionFilters() {
    nuState.nutritionFilters = {
        highProtein: false,
        under500: false,
        vegOnly: false,
        highFiber: false
    };
    const pills = document.querySelectorAll('#restaurantMenuView .filter-pill-btn');
    pills.forEach(p => p.classList.remove('active'));
}

/**
 * Render "Complete Your Meal" recommendation shelf
 */
function renderCompleteYourMealSection(restaurant) {
    const track = document.getElementById('restaurantCompleteMealTrack');
    if (!track) return;

    track.innerHTML = '';

    // Complementary items: starters, salads, desserts, soups from this restaurant or partner pool
    let sideItems = NU_FOOD_ITEMS.filter(item => 
        (item.restaurantId === restaurant.id || item.category === 'desserts' || item.category === 'salads') &&
        ['salads', 'desserts', 'veg-starters', 'soups'].includes(item.category)
    ).slice(0, 6);

    if (sideItems.length === 0) {
        sideItems = NU_FOOD_ITEMS.filter(i => i.isVeg).slice(0, 5);
    }

    sideItems.forEach(food => {
        const cartEntry = nuState.cart.get(food.id);
        const qty = cartEntry ? cartEntry.quantity : 0;

        const card = document.createElement('div');
        card.className = 'nu-addon-card';
        card.innerHTML = `
            <div>
                <img src="${food.image}" alt="${food.name}" class="nu-addon-img" loading="lazy" />
                <div class="nu-addon-title" title="${food.name}">${food.name}</div>
                <div class="nu-addon-price">₹${food.price}</div>
            </div>
            <div id="foodActionAddon-${food.id}">
                ${qty > 0 ? renderQuantityStepper(food.id, qty) : `<button type="button" class="food-add-btn w-100 py-1" onclick="window.nuAddToCart('${food.id}')">+ ADD</button>`}
            </div>
        `;
        track.appendChild(card);
    });
}

function renderRestaurantFoodGrid() {
    const gridEl = document.getElementById('restaurantFoodGrid');
    if (!gridEl || !nuState.activeRestaurant) return;

    gridEl.innerHTML = '';

    let items = NU_FOOD_ITEMS.filter(item => item.restaurantId === nuState.activeRestaurant.id);

    if (nuState.activeRestaurantCategory && nuState.activeRestaurantCategory !== 'all') {
        items = items.filter(item => item.category === nuState.activeRestaurantCategory);
    }

    // Nutrition Filters
    if (nuState.nutritionFilters.highProtein) {
        items = items.filter(item => (item.nutrition?.protein || 0) >= 22);
    }
    if (nuState.nutritionFilters.under500) {
        items = items.filter(item => (item.nutrition?.calories || 0) < 500);
    }
    if (nuState.nutritionFilters.vegOnly) {
        items = items.filter(item => item.isVeg);
    }
    if (nuState.nutritionFilters.highFiber) {
        items = items.filter(item => (item.nutrition?.fiber || 0) >= 5);
    }

    // Search query inside this restaurant (with nutrition awareness!)
    if (nuState.restaurantSearchQuery) {
        const q = nuState.restaurantSearchQuery.toLowerCase();
        
        if (q.includes('high protein') || q.includes('protein')) {
            items = items.filter(item => (item.nutrition?.protein || 0) >= 22);
        } else if (q.includes('under 500') || q.includes('500 cal') || q.includes('500 kcal')) {
            items = items.filter(item => (item.nutrition?.calories || 0) < 500);
        } else if (q.includes('low cal') || q.includes('light')) {
            items = items.filter(item => (item.nutrition?.calories || 0) < 350);
        } else if (q.includes('high fiber') || q.includes('fiber')) {
            items = items.filter(item => (item.nutrition?.fiber || 0) >= 5);
        } else if (q === 'veg' || q === 'vegetarian') {
            items = items.filter(item => item.isVeg);
        } else {
            items = items.filter(item => 
                item.name.toLowerCase().includes(q) ||
                item.description.toLowerCase().includes(q) ||
                item.cuisine.toLowerCase().includes(q) ||
                (item.ingredients && item.ingredients.some(i => i.toLowerCase().includes(q))) ||
                (item.dietaryTags && item.dietaryTags.some(t => t.toLowerCase().includes(q)))
            );
        }
    }

    if (items.length === 0) {
        gridEl.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="cart-empty-icon mb-3">
                    <i class="fas fa-utensils"></i>
                </div>
                <h4 class="text-white font-weight-bold">No dishes match the selected filters.</h4>
                <p class="text-muted small mb-4">Try clearing your filters or search query to browse more dishes.</p>
                <button type="button" class="custom-button" onclick="window.nuShowFullRestaurantMenu()">Browse Full Menu</button>
            </div>
        `;
        return;
    }

    items.forEach((food, index) => {
        const cartEntry = nuState.cart.get(food.id);
        const qtyInCart = cartEntry ? cartEntry.quantity : 0;
        const delayClass = `nu-delay-${(index % 4) + 1}`;
        const nutr = food.nutrition || { calories: 420, protein: 20 };

        const col = document.createElement('div');
        col.className = `col-6 col-md-6 col-lg-4 mb-4 nu-reveal-up ${delayClass}`;
        col.innerHTML = `
            <div class="nu-food-card nu-hover-lift h-100 d-flex flex-column justify-content-between" data-food-id="${food.id}">
                <div class="food-card-img-container">
                    <img src="${food.image}" alt="${escapeHtml(food.name)}" class="food-card-img" loading="lazy" />
                    <span class="food-type-badge ${food.isVeg ? 'veg' : 'non-veg'}">
                        <i class="fas fa-circle"></i> ${food.isVeg ? 'VEG' : 'NON-VEG'}
                    </span>
                    ${food.offer ? `<span class="food-offer-badge"><i class="fas fa-tag mr-1"></i>${escapeHtml(food.offer)}</span>` : ''}
                </div>

                <div class="food-card-body d-flex flex-column justify-content-between flex-grow-1">
                    <div>
                        <div class="d-flex justify-content-between align-items-start mb-1">
                            <h4 class="food-card-title">${escapeHtml(food.name)}</h4>
                            <span class="food-rating-pill">
                                <i class="fas fa-star mr-1"></i>${food.rating.toFixed(1)}
                            </span>
                        </div>

                        <!-- Compact Nutrition Mini Row -->
                        <div class="food-nutrition-pill">
                            <i class="fas fa-fire text-accent mr-1"></i><strong>${food.nutritionMeta?.status === 'VERIFIED' ? '' : '~'}${nutr.calories} kcal</strong> • <i class="fas fa-dumbbell text-accent mr-1"></i><strong>${nutr.protein}g prot</strong>
                            <a href="javascript:void(0)" onclick="window.openNutritionInfoModal('${food.id}')" class="text-accent ml-1" title="View Nutrition Info & Provenance"><i class="fas fa-info-circle"></i></a>
                        </div>

                        <p class="food-card-desc mb-2">${escapeHtml(food.description)}</p>
                    </div>

                    <div class="food-card-footer mt-2">
                        <div class="food-price-wrapper">
                            <span class="food-price-currency">₹</span>
                            <span class="food-price-amount">${food.price}</span>
                        </div>

                        <div class="food-card-action" id="foodActionRest-${food.id}">
                            ${qtyInCart > 0 ? renderQuantityStepper(food.id, qtyInCart) : `<button type="button" class="food-add-btn" onclick="window.nuAddToCart('${food.id}')"><i class="fas fa-plus mr-1"></i> ADD</button>`}
                        </div>
                    </div>
                </div>
            </div>
        `;

        col.querySelector('.food-card-img-container').addEventListener('click', () => openFoodDetails(food.id));
        col.querySelector('.food-card-title').addEventListener('click', () => openFoodDetails(food.id));

        gridEl.appendChild(col);
    });

    if (window.nuObserveNewElements) window.nuObserveNewElements(gridEl);
}

window.nuShowFullRestaurantMenu = () => {
    nuState.activeRestaurantCategory = 'all';
    nuState.restaurantSearchQuery = '';
    resetRestaurantNutritionFilters();
    const searchInput = document.getElementById('restaurantMenuSearchInput');
    if (searchInput) searchInput.value = '';

    if (nuState.activeRestaurant) {
        renderRestaurantCategoryTabs(nuState.activeRestaurant, 'all');
        renderRestaurantFoodGrid();
    }
};

function renderQuantityStepper(foodId, qty) {
    return `
        <div class="nu-qty-stepper">
            <button type="button" class="qty-btn" onclick="window.nuUpdateCartQty('${foodId}', -1)" aria-label="Decrease quantity">−</button>
            <span class="qty-count">${qty}</span>
            <button type="button" class="qty-btn" onclick="window.nuUpdateCartQty('${foodId}', 1)" aria-label="Increase quantity">+</button>
        </div>
    `;
}

/**
 * ==================================================
 * 6. Hyperlocal Restaurants Near You Shelf
 * ==================================================
 */
function initNearbyRestaurants() {
    renderNearbyRestaurants();
}

function renderNearbyRestaurants() {
    const container = document.getElementById('nearbyRestaurantsGrid');
    const locationBadge = document.getElementById('nearbyRestaurantsLocationBadge');
    if (!container) return;

    if (locationBadge) {
        locationBadge.textContent = nuState.currentCity;
    }

    container.innerHTML = '';
    const restaurants = getRestaurantsByCity(nuState.currentCity);

    restaurants.forEach((rest, index) => {
        const delayClass = `nu-delay-${(index % 4) + 1}`;
        const formattedRatingCount = rest.ratingCount >= 1000 ? (rest.ratingCount / 1000).toFixed(1) + 'k' : rest.ratingCount;
        const offerText = rest.offers && rest.offers.length > 0 ? rest.offers[0] : 'Special Menu';

        const col = document.createElement('div');
        col.className = `col-12 col-md-6 col-lg-3 mb-4 nu-reveal-up ${delayClass}`;
        col.innerHTML = `
            <div class="nu-restaurant-card nu-hover-lift h-100 d-flex flex-column justify-content-between" style="cursor: pointer;" tabindex="0" role="button" aria-label="View menu for ${escapeHtml(rest.name)}">
                <div class="restaurant-img-wrap">
                    <img src="${rest.image}" alt="${escapeHtml(rest.name)}" class="restaurant-img" loading="lazy" />
                    <span class="nu-status-badge ${rest.isOpen ? 'open' : 'closed'}">
                        <i class="fas fa-circle"></i> ${rest.isOpen ? 'Open Now' : 'Closed'}
                    </span>
                    <span class="restaurant-offer-tag"><i class="fas fa-percent mr-1"></i>${escapeHtml(offerText)}</span>
                </div>
                <div class="restaurant-body d-flex flex-column justify-content-between flex-grow-1">
                    <div>
                        <div class="d-flex justify-content-between align-items-start mb-1">
                            <h4 class="restaurant-title mb-0">${escapeHtml(rest.name)}</h4>
                            <span class="food-rating-pill"><i class="fas fa-star mr-1"></i>${rest.rating} (${formattedRatingCount})</span>
                        </div>
                        <div class="restaurant-cuisine">${escapeHtml(rest.cuisines.join(' • '))}</div>
                        <div class="text-muted small mb-2"><i class="fas fa-map-marker-alt text-accent mr-1"></i>${escapeHtml(rest.area)}</div>
                    </div>
                    <div>
                        <div class="restaurant-meta">
                            <span><i class="far fa-clock mr-1 text-accent"></i>${rest.deliveryTime} mins</span>
                            <span><i class="fas fa-route mr-1 text-accent"></i>${rest.distanceKm || 2.1} km</span>
                        </div>
                        ${rest.isOpen 
                            ? `<button type="button" class="custom-button w-100 justify-content-center view-menu-btn" onclick="window.openRestaurantMenu('${rest.id}', 'all')">View Menu →</button>`
                            : `<button type="button" class="custom-outline-button w-100 justify-content-center" disabled style="opacity: 0.6; cursor: not-allowed;"><i class="fas fa-clock mr-1"></i> Currently Closed</button>`
                        }
                    </div>
                </div>
            </div>
        `;

        const card = col.querySelector('.nu-restaurant-card');
        if (card && rest.isOpen) {
            card.addEventListener('click', (e) => {
                if (e.target.closest('.view-menu-btn')) return;
                window.openRestaurantMenu(rest.id, 'all');
            });
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    window.openRestaurantMenu(rest.id, 'all');
                }
            });
        }

        container.appendChild(col);
    });

    if (window.nuObserveNewElements) window.nuObserveNewElements(container);
}

/**
 * ==================================================
 * 7. Popular & Recommended Food Shelf
 * ==================================================
 */
function initPopularDishes() {
    renderPopularDishes();
}

function renderPopularDishes() {
    const container = document.getElementById('popularDishesGrid');
    if (!container) return;

    container.innerHTML = '';

    const topDishes = NU_FOOD_ITEMS
        .filter(item => item.rating >= 4.7)
        .slice(0, 6);

    topDishes.forEach((food, index) => {
        const rest = NU_RESTAURANTS.find(r => r.id === food.restaurantId) || { name: 'NU Kitchen' };
        const cartEntry = nuState.cart.get(food.id);
        const qtyInCart = cartEntry ? cartEntry.quantity : 0;
        const delayClass = `nu-delay-${(index % 4) + 1}`;
        const nutr = food.nutrition || { calories: 480, protein: 22 };

        const col = document.createElement('div');
        col.className = `col-6 col-md-6 col-lg-4 mb-4 nu-reveal-up ${delayClass}`;
        col.innerHTML = `
            <div class="nu-food-card nu-hover-lift h-100 d-flex flex-column justify-content-between" data-food-id="${food.id}">
                <div class="food-card-img-container">
                    <img src="${food.image}" alt="${escapeHtml(food.name)}" class="food-card-img" loading="lazy" />
                    <span class="food-type-badge ${food.isVeg ? 'veg' : 'non-veg'}">
                        <i class="fas fa-circle"></i> ${food.isVeg ? 'VEG' : 'NON-VEG'}
                    </span>
                    ${food.offer ? `<span class="food-offer-badge"><i class="fas fa-tag mr-1"></i>${escapeHtml(food.offer)}</span>` : ''}
                </div>

                <div class="food-card-body d-flex flex-column justify-content-between flex-grow-1">
                    <div>
                        <div class="d-flex justify-content-between align-items-start mb-1">
                            <h4 class="food-card-title">${escapeHtml(food.name)}</h4>
                            <span class="food-rating-pill">
                                <i class="fas fa-star mr-1"></i>${food.rating.toFixed(1)}
                            </span>
                        </div>

                        <div class="food-nutrition-pill">
                            <i class="fas fa-fire text-accent mr-1"></i><strong>${nutr.calories} kcal</strong> • <i class="fas fa-dumbbell text-accent mr-1"></i><strong>${nutr.protein}g protein</strong>
                        </div>

                        <div class="food-card-meta mb-2">
                            <span class="food-restaurant-name"><i class="fas fa-store mr-1"></i>${escapeHtml(rest.name)}</span>
                            <span class="dot-separator">•</span>
                            <span>${food.deliveryTime} mins</span>
                        </div>

                        <p class="food-card-desc mb-2">${escapeHtml(food.description)}</p>
                    </div>

                    <div class="food-card-footer mt-2">
                        <div class="food-price-wrapper">
                            <span class="food-price-currency">₹</span>
                            <span class="food-price-amount">${food.price}</span>
                        </div>

                        <div class="food-card-action" id="foodActionPopular-${food.id}">
                            ${qtyInCart > 0 ? renderQuantityStepper(food.id, qtyInCart) : `<button type="button" class="food-add-btn" onclick="window.nuAddToCart('${food.id}')"><i class="fas fa-plus mr-1"></i> ADD</button>`}
                        </div>
                    </div>
                </div>
            </div>
        `;

        col.querySelector('.food-card-img-container').addEventListener('click', () => openFoodDetails(food.id));
        col.querySelector('.food-card-title').addEventListener('click', () => openFoodDetails(food.id));

        container.appendChild(col);
    });

    if (window.nuObserveNewElements) window.nuObserveNewElements(container);
}

/**
 * ==================================================
 * 8. Client-Side Cart System & Dynamic Nutrition Engine
 * ==================================================
 */
function initCartSystem() {
    updateCartBadges();
}

function addToCart(foodId) {
    const food = NU_FOOD_ITEMS.find(i => i.id === foodId);
    if (!food) return;

    if (nuState.cart.has(foodId)) {
        nuState.cart.get(foodId).quantity += 1;
    } else {
        nuState.cart.set(foodId, {
            item: food,
            quantity: 1
        });
    }

    updateCartUI(foodId);
}

function updateCartQty(foodId, delta) {
    if (!nuState.cart.has(foodId)) return;

    const entry = nuState.cart.get(foodId);
    entry.quantity += delta;

    if (entry.quantity <= 0) {
        nuState.cart.delete(foodId);
    }

    updateCartUI(foodId);
}

function updateCartUI(foodId) {
    updateCartBadges();

    const actionContainers = document.querySelectorAll(
        `#foodAction-${foodId}, #foodActionPopular-${foodId}, #foodActionRest-${foodId}, #foodActionAddon-${foodId}, #foodActionAIRec-${foodId}`
    );
    const entry = nuState.cart.get(foodId);
    const qty = entry ? entry.quantity : 0;

    actionContainers.forEach(container => {
        container.innerHTML = qty > 0 ? renderQuantityStepper(foodId, qty) : `<button type="button" class="food-add-btn" onclick="window.nuAddToCart('${foodId}')"><i class="fas fa-plus mr-1"></i> ADD</button>`;
    });

    if (nuState.activeDetailItem && nuState.activeDetailItem.id === foodId) {
        updateDetailsModalCartState();
    }

    renderCartModalView();
    updateStickyMobileCart();
}

function updateCartBadges() {
    const badges = document.querySelectorAll('.nu-cart-badge, .nu-bottom-nav-badge');
    let totalCount = 0;
    nuState.cart.forEach(entry => {
        totalCount += entry.quantity;
    });

    badges.forEach(badge => {
        badge.textContent = totalCount;
        badge.style.display = totalCount > 0 ? 'inline-flex' : 'none';
    });
}

function updateStickyMobileCart() {
    const floatingCart = document.getElementById('nuFloatingCartBar');
    const textEl = document.getElementById('floatingCartText');
    if (!floatingCart) return;

    let itemCount = 0;
    let subtotal = 0;

    nuState.cart.forEach(entry => {
        itemCount += entry.quantity;
        subtotal += entry.item.price * entry.quantity;
    });

    if (itemCount > 0) {
        if (textEl) {
            textEl.textContent = `${itemCount} ${itemCount === 1 ? 'item' : 'items'} • ₹${subtotal}`;
        }
        floatingCart.style.display = 'flex';
    } else {
        floatingCart.style.display = 'none';
    }
}

/**
 * Safe Modal Transition Helper
 * Safely transitions between Bootstrap modals without background scroll jump or homepage flashes.
 */
window._nuModalTransitioning = false;

function safeModalTransition(fromModalSelector, toModalSelector, onComplete) {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop || 0;
    const $to = toModalSelector ? $(toModalSelector) : null;
    const $from = fromModalSelector ? $(fromModalSelector) : null;

    if ($from && $from.length && ($from.hasClass('show') || $from.is(':visible')) && $to && $to.length) {
        window._nuModalTransitioning = true;
        $('body').addClass('modal-open');

        // Instantly transition modals while preserving backdrop and body lock
        $from.modal('hide');
        $to.modal('show');

        if (typeof onComplete === 'function') {
            onComplete();
        }

        setTimeout(function() {
            window._nuModalTransitioning = false;
            window.scrollTo(0, currentScroll);
            if ($('.modal.show').length > 0) {
                $('body').addClass('modal-open');
            }
        }, 350);
        return;
    }

    if ($from && $from.length && ($from.hasClass('show') || $from.is(':visible'))) {
        $from.one('hidden.bs.modal', function() {
            if ($to && $to.length) {
                window._nuModalTransitioning = true;
                $('body').addClass('modal-open');
                $to.modal('show');
                setTimeout(function() {
                    window._nuModalTransitioning = false;
                    window.scrollTo(0, currentScroll);
                }, 350);
            }
            if (typeof onComplete === 'function') {
                onComplete();
            }
        });
        $from.modal('hide');
        return;
    }

    if ($to && $to.length) {
        $('body').addClass('modal-open');
        $to.modal('show');
    }
    if (typeof onComplete === 'function') {
        onComplete();
    }
}
window.safeModalTransition = safeModalTransition;

// Global modal lifecycle safety cleanup handler
if (typeof $ !== 'undefined') {
    const bindCleanup = function() {
        if (typeof $(document).on === 'function') {
            $(document).on('hidden.bs.modal', '.modal', function() {
                setTimeout(function() {
                    if (window._nuModalTransitioning) return;
                    if ($('.modal.show').length === 0) {
                        $('.modal-backdrop').remove();
                        $('body').removeClass('modal-open').css('padding-right', '');
                    } else {
                        $('body').addClass('modal-open');
                    }
                }, 100);
            });
        }
    };
    if (typeof $(document).ready === 'function') {
        $(document).ready(bindCleanup);
    } else {
        bindCleanup();
    }
    if (typeof $(document).on === 'function') {
        $(document).on('shown.bs.modal', '#nuAIAssistantModal', function() {
            $('body').removeClass('modal-open').css('padding-right', '');
        });
    }
}

function renderCartModalView() {
    const modalBody = document.querySelector('#nuCartModal .modal-body');
    if (!modalBody) return;

    let subtotal = 0;
    let itemCount = 0;

    nuState.cart.forEach(entry => {
        subtotal += entry.item.price * entry.quantity;
        itemCount += entry.quantity;
    });

    if (itemCount === 0) {
        nuState.appliedCoupon = null;
        nuState.couponError = '';
        modalBody.innerHTML = `
            <div class="cart-empty-state text-center py-5 px-3">
                <div class="cart-empty-icon mb-3" style="font-size: 54px; opacity: 0.9;">🛍️</div>
                <h4 class="text-white font-weight-bold mb-2">Your Cart is Empty</h4>
                <p class="text-muted small mb-4 mx-auto" style="max-width: 320px; line-height: 1.5;">
                    Add delicious food from our restaurants to get started.
                </p>
                <button type="button" class="btn btn-accent font-weight-bold px-4 py-2 rounded-pill shadow-sm" id="cartExploreCta" onclick="window.nuExploreFoodFromCart();">
                    Explore Food <i class="fas fa-arrow-right ml-1"></i>
                </button>
            </div>
        `;
        return;
    }

    // Calculate coupon discounts
    let discount = 0;
    if (nuState.appliedCoupon) {
        if (nuState.appliedCoupon.code === 'NUPREMIUM') {
            if (subtotal >= 399) {
                discount = 100;
                nuState.appliedCoupon.discount = 100;
            } else {
                nuState.appliedCoupon = null;
                nuState.couponError = 'Coupon NUPREMIUM removed (min order ₹399 required).';
            }
        } else if (nuState.appliedCoupon.code === 'NUPARTY') {
            if (subtotal >= 599) {
                discount = 150;
                nuState.appliedCoupon.discount = 150;
            } else {
                nuState.appliedCoupon = null;
                nuState.couponError = 'Coupon NUPARTY removed (min order ₹599 required).';
            }
        } else if (nuState.appliedCoupon.code === 'NUFIRST') {
            discount = Math.min(Math.round(subtotal * 0.20), 100);
            nuState.appliedCoupon.discount = discount;
        }
    }

    const discountedSubtotal = Math.max(0, subtotal - discount);
    const deliveryFee = discountedSubtotal > 499 ? 0 : 35;
    const taxes = Math.round(discountedSubtotal * 0.05);
    const grandTotal = discountedSubtotal + deliveryFee + taxes;

    // Real-time Total Nutrition calculation
    const cartNutrition = getCurrentCartNutrition();

    let itemsHtml = '';
    nuState.cart.forEach(entry => {
        const itemTotal = entry.item.price * entry.quantity;
        const rest = NU_RESTAURANTS.find(r => r.id === entry.item.restaurantId) || { name: 'NU Kitchen' };
        const itemNutr = calculateFoodNutrition(entry.item, entry.quantity);
        const imgSrc = entry.item.image || entry.item.imageUrl || '';

        itemsHtml += `
            <div class="cart-item-row d-flex align-items-center justify-content-between py-2 border-bottom" style="border-color: rgba(255,255,255,0.08) !important;">
                <div class="cart-item-info d-flex align-items-center gap-2" style="min-width: 0;">
                    ${imgSrc ? `<img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(entry.item.name)}" class="rounded" style="width: 42px; height: 42px; object-fit: cover; flex-shrink: 0;" />` : ''}
                    <div style="min-width: 0;">
                        <strong class="d-block text-white text-truncate" style="font-size: 13px;">${escapeHtml(entry.item.name)}</strong>
                        <small class="text-muted d-block">${escapeHtml(rest.name)} • ₹${entry.item.price}</small>
                        <div class="text-muted" style="font-size: 10px;">🔥 ${itemNutr.calories} kcal • 💪 ${itemNutr.protein}g prot</div>
                    </div>
                </div>
                <div class="cart-item-controls d-flex align-items-center gap-2" style="flex-shrink: 0;">
                    ${renderQuantityStepper(entry.item.id, entry.quantity)}
                    <span class="cart-item-price font-weight-bold text-white ml-1" style="font-size: 13px;">₹${itemTotal}</span>
                    <button type="button" class="btn btn-sm text-danger p-0 ml-1" onclick="window.nuRemoveCartItem('${entry.item.id}')" title="Remove item" aria-label="Remove item">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        `;
    });

    modalBody.innerHTML = `
        <div class="cart-active-container">
            <div class="cart-items-list mb-3">
                ${itemsHtml}
            </div>

            <!-- Compact Nutrition Estimate Box -->
            <div class="cart-nutrition-box mb-3">
                <div class="cart-nutrition-header">
                    <span class="cart-nutrition-badge">
                        <i class="fas fa-heartbeat"></i> Nutrition Estimate
                    </span>
                    <a href="javascript:void(0)" class="text-accent small font-weight-bold" onclick="window.nuToggleCartFullNutrition()">
                        ${nuState.showFullCartNutrition ? 'Hide Details ▲' : 'View Full Nutrition ▼'}
                    </a>
                </div>

                <div class="cart-nutrition-pills">
                    <span class="cart-nutrition-item">🔥 <strong>${cartNutrition.calories.toLocaleString()}</strong> kcal</span>
                    <span class="cart-nutrition-item">💪 <strong>${cartNutrition.protein}g</strong> protein</span>
                    <span class="cart-nutrition-item">🌾 <strong>${cartNutrition.carbohydrates}g</strong> carbs</span>
                    <span class="cart-nutrition-item">🥑 <strong>${cartNutrition.fat}g</strong> fat</span>
                </div>

                ${nuState.showFullCartNutrition ? `
                    <div class="mt-2 pt-2 border-top d-flex gap-3 text-muted small" style="border-color: rgba(255,255,255,0.08) !important;">
                        <span>🌱 Fiber: <strong class="text-white">${cartNutrition.fiber}g</strong></span>
                        <span>🍬 Sugar: <strong class="text-white">${cartNutrition.sugar}g</strong></span>
                        <span>🧂 Sodium: <strong class="text-white">${cartNutrition.sodium}mg</strong></span>
                    </div>
                ` : ''}
            </div>

            <!-- Savings Corner -->
            <div class="nu-savings-corner-box mb-3">
                <div class="d-flex align-items-center justify-content-between mb-2">
                    <span class="nu-savings-title"><i class="fas fa-tag text-accent mr-1"></i> SAVINGS CORNER</span>
                    ${nuState.appliedCoupon ? `<span class="badge badge-success px-2 py-1" style="font-size: 11px;">${nuState.appliedCoupon.code} Applied (-₹${discount})</span>` : ''}
                </div>
                <div class="d-flex gap-2 mb-2">
                    <input type="text" id="nuCouponInput" class="form-control form-control-sm form-control-nu" placeholder="Enter coupon (e.g. NUPREMIUM)" value="${nuState.appliedCoupon ? nuState.appliedCoupon.code : ''}" ${nuState.appliedCoupon ? 'readonly' : ''} style="text-transform: uppercase;" />
                    ${nuState.appliedCoupon ? 
                        `<button type="button" class="btn btn-sm btn-outline-danger" onclick="window.nuRemoveCoupon()">Remove</button>` :
                        `<button type="button" class="custom-button py-1 px-3" style="font-size: 12px; height: 32px;" onclick="window.nuApplyCoupon()">Apply</button>`
                    }
                </div>
                ${nuState.couponError ? `<div id="nuCouponError" class="text-danger small mb-2"><i class="fas fa-exclamation-circle mr-1"></i>${escapeHtml(nuState.couponError)}</div>` : ''}
                <div class="nu-available-offer-row d-flex align-items-center justify-content-between p-2 rounded" onclick="window.nuQuickApplyCoupon('NUPREMIUM')" style="cursor: pointer;">
                    <div>
                        <strong class="text-white small d-block">🎟 NUPREMIUM</strong>
                        <span class="text-muted" style="font-size: 11px;">₹100 OFF on orders ₹399+</span>
                    </div>
                    <span class="text-accent small font-weight-bold">${nuState.appliedCoupon && nuState.appliedCoupon.code === 'NUPREMIUM' ? 'Applied ✓' : 'Apply ›'}</span>
                </div>
            </div>

            <!-- Bill Details / Order Summary -->
            <div class="cart-bill-card p-3 mb-3">
                <h5 class="text-white font-weight-bold mb-3" style="font-size: 15px;">Bill Details</h5>
                <div class="d-flex justify-content-between text-muted small mb-2">
                    <span>Item Total (${itemCount} items)</span>
                    <span class="text-white">₹${subtotal}</span>
                </div>
                ${discount > 0 ? `
                    <div class="d-flex justify-content-between text-accent small mb-2 font-weight-bold">
                        <span>Coupon Discount (${nuState.appliedCoupon.code})</span>
                        <span>-₹${discount}</span>
                    </div>
                ` : ''}
                <div class="d-flex justify-content-between text-muted small mb-2">
                    <span>Delivery Fee</span>
                    <span class="${deliveryFee === 0 ? 'text-accent font-weight-bold' : 'text-white'}">${deliveryFee === 0 ? 'FREE' : '₹' + deliveryFee}</span>
                </div>
                <div class="d-flex justify-content-between text-muted small mb-2">
                    <span>Taxes &amp; Restaurant Charges (5%)</span>
                    <span class="text-white">₹${taxes}</span>
                </div>
                <hr class="nu-divider my-2" />
                <div class="d-flex justify-content-between align-items-center">
                    <strong class="text-white">To Pay</strong>
                    <strong class="text-accent h5 mb-0 font-weight-bold">₹${grandTotal}</strong>
                </div>
            </div>

            <button type="button" class="custom-button w-100 justify-content-center py-3" id="cartProceedToCheckoutBtn" onclick="window.nuOpenCheckout();">
                Proceed to Checkout <i class="fas fa-arrow-right ml-2"></i>
            </button>
        </div>
    `;

    const couponInputEl = document.getElementById('nuCouponInput');
    if (couponInputEl && !nuState.appliedCoupon) {
        couponInputEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                window.nuApplyCoupon();
            }
        });
    }
}

/**
 * Phase 4.8 — Dedicated Checkout View Renderer
 */
function renderCheckoutModalView() {
    const modalBody = document.getElementById('nuCheckoutModalBody');
    if (!modalBody) return;

    let subtotal = 0;
    let itemCount = 0;
    let restaurantName = 'NU Partner Kitchen';

    nuState.cart.forEach(entry => {
        subtotal += entry.item.price * entry.quantity;
        itemCount += entry.quantity;
        const rest = NU_RESTAURANTS.find(r => r.id === entry.item.restaurantId);
        if (rest) restaurantName = rest.name;
    });

    if (itemCount === 0) {
        modalBody.innerHTML = `
            <div class="text-center py-5 px-3">
                <div class="mb-3" style="font-size: 48px;">🛍️</div>
                <h4 class="text-white font-weight-bold mb-2">No items in cart</h4>
                <p class="text-muted small mb-4">Please add food to your cart before proceeding to checkout.</p>
                <button type="button" class="btn btn-accent font-weight-bold px-4 py-2 rounded-pill" onclick="window.safeModalTransition('#nuCheckoutModal', null, window.nuExploreFoodFromCart);">
                    Explore Food <i class="fas fa-arrow-right ml-1"></i>
                </button>
            </div>
        `;
        return;
    }

    let discount = 0;
    if (nuState.appliedCoupon) {
        discount = nuState.appliedCoupon.discount || 0;
    }

    const discountedSubtotal = Math.max(0, subtotal - discount);
    const deliveryFee = discountedSubtotal > 499 ? 0 : 35;
    const taxes = Math.round(discountedSubtotal * 0.05);
    const grandTotal = discountedSubtotal + deliveryFee + taxes;

    // Address resolution
    const defaultAddr = (nuState.savedAddresses && nuState.savedAddresses.length) ? nuState.savedAddresses.find(a => a.isDefault) || nuState.savedAddresses[0] : null;
    const addressArea = defaultAddr ? `${defaultAddr.area}, ${defaultAddr.city}` : (nuState.currentCity || 'Hyderabad');
    const addressStreet = defaultAddr ? defaultAddr.street : 'Primary Delivery Area';

    let summaryItemsHtml = '';
    nuState.cart.forEach(entry => {
        const itemTotal = entry.item.price * entry.quantity;
        summaryItemsHtml += `
            <div class="nu-checkout-item-row">
                <div>
                    <span class="food-type-dot ${entry.item.isVeg ? 'veg' : 'non-veg'} mr-1"></span>
                    <strong class="text-white small">${escapeHtml(entry.item.name)}</strong>
                    <span class="text-muted small ml-1">× ${entry.quantity}</span>
                </div>
                <strong class="text-white small">₹${itemTotal}</strong>
            </div>
        `;
    });

    modalBody.innerHTML = `
        <div class="nu-checkout-container">
            <!-- Delivery Address Section -->
            <div class="nu-checkout-address-box">
                <div class="d-flex align-items-center justify-content-between mb-2">
                    <span class="nu-checkout-subhead"><i class="fas fa-map-marker-alt text-accent mr-1"></i> DELIVERY ADDRESS</span>
                    <button type="button" class="btn btn-sm btn-outline-accent py-0 px-2" onclick="window.safeModalTransition('#nuCheckoutModal', '#nuLocationModal');" style="font-size: 11px;">
                        Change
                    </button>
                </div>
                <div class="d-flex align-items-start gap-2">
                    <div class="text-accent mt-1"><i class="fas fa-home"></i></div>
                    <div>
                        <strong class="text-white d-block" style="font-size: 13.5px;">${escapeHtml(addressArea)}</strong>
                        <span class="text-muted small">${escapeHtml(addressStreet)}</span>
                    </div>
                </div>
            </div>

            <!-- Order Summary Section -->
            <div class="nu-checkout-summary-box">
                <div class="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom" style="border-color: rgba(255,255,255,0.08) !important;">
                    <span class="nu-checkout-subhead"><i class="fas fa-store text-accent mr-1"></i> ORDER SUMMARY</span>
                    <span class="badge badge-dark text-white" style="font-size: 11px;">${escapeHtml(restaurantName)}</span>
                </div>
                <div class="nu-checkout-items-list mb-2">
                    ${summaryItemsHtml}
                </div>
            </div>

            <!-- Delivery Details Box -->
            <div class="nu-checkout-delivery-box">
                <div class="d-flex align-items-center justify-content-between">
                    <div>
                        <span class="nu-checkout-subhead d-block mb-1"><i class="fas fa-motorcycle text-accent mr-1"></i> ESTIMATED DELIVERY</span>
                        <strong class="text-white small">⚡ 25–35 Mins • Standard Delivery</strong>
                    </div>
                    <span class="badge ${deliveryFee === 0 ? 'badge-success' : 'badge-dark text-accent'}" style="font-size: 11px;">
                        ${deliveryFee === 0 ? 'FREE DELIVERY' : '₹' + deliveryFee}
                    </span>
                </div>
            </div>

            <!-- Bill Details Breakdown Card -->
            <div class="nu-checkout-bill-card">
                <span class="nu-checkout-subhead d-block mb-3"><i class="fas fa-receipt text-accent mr-1"></i> BILL DETAILS</span>
                <div class="d-flex justify-content-between text-muted small mb-2">
                    <span>Subtotal (${itemCount} items)</span>
                    <span class="text-white">₹${subtotal}</span>
                </div>
                ${discount > 0 ? `
                    <div class="d-flex justify-content-between text-accent small mb-2 font-weight-bold">
                        <span>Discount (${nuState.appliedCoupon ? nuState.appliedCoupon.code : 'Coupon'})</span>
                        <span>-₹${discount}</span>
                    </div>
                ` : ''}
                <div class="d-flex justify-content-between text-muted small mb-2">
                    <span>Delivery Fee</span>
                    <span class="${deliveryFee === 0 ? 'text-accent font-weight-bold' : 'text-white'}">${deliveryFee === 0 ? 'FREE' : '₹' + deliveryFee}</span>
                </div>
                <div class="d-flex justify-content-between text-muted small mb-2">
                    <span>Taxes &amp; Charges (5%)</span>
                    <span class="text-white">₹${taxes}</span>
                </div>
                <hr class="nu-divider my-2" />
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <strong class="text-white">TOTAL TO PAY</strong>
                    <strong class="text-accent h5 mb-0 font-weight-bold">₹${grandTotal}</strong>
                </div>
            </div>

            <!-- Placeholder Alert for Phase 4.9 Payment boundary -->
            <div id="checkoutPaymentPlaceholderAlert" class="nu-checkout-payment-placeholder-alert mb-3 d-none">
                <i class="fas fa-info-circle text-accent mr-1"></i> <strong>Phase 4.8 Complete:</strong> Payment setup is ready for the next step (Phase 4.9).
            </div>

            <!-- Proceed to Payment Button -->
            <button type="button" class="custom-button w-100 justify-content-center py-3" id="checkoutProceedToPaymentBtn" onclick="window.nuOpenPaymentOptions();">
                Proceed to Payment <i class="fas fa-credit-card ml-2"></i>
            </button>
        </div>
    `;
}

/**
 * Phase 4.9 — Payment Options View Renderer
 */
function renderPaymentModalView() {
    const modalBody = document.getElementById('nuPaymentModalBody');
    if (!modalBody) return;

    let subtotal = 0;
    let itemCount = 0;
    let restaurantName = 'NU Partner Kitchen';

    nuState.cart.forEach(entry => {
        subtotal += entry.item.price * entry.quantity;
        itemCount += entry.quantity;
        const rest = NU_RESTAURANTS.find(r => r.id === entry.item.restaurantId);
        if (rest) restaurantName = rest.name;
    });

    if (itemCount === 0) {
        modalBody.innerHTML = `
            <div class="text-center py-5 px-3">
                <div class="mb-3" style="font-size: 48px;">🛍️</div>
                <h4 class="text-white font-weight-bold mb-2">No items in cart</h4>
                <p class="text-muted small mb-4">Please add food items before choosing payment options.</p>
                <button type="button" class="btn btn-accent font-weight-bold px-4 py-2 rounded-pill" onclick="window.safeModalTransition('#nuPaymentModal', null, window.nuExploreFoodFromCart);">
                    Explore Food <i class="fas fa-arrow-right ml-1"></i>
                </button>
            </div>
        `;
        return;
    }

    let discount = 0;
    if (nuState.appliedCoupon) {
        discount = nuState.appliedCoupon.discount || 0;
    }

    const discountedSubtotal = Math.max(0, subtotal - discount);
    const deliveryFee = discountedSubtotal > 499 ? 0 : 35;
    const taxes = Math.round(discountedSubtotal * 0.05);
    const grandTotal = discountedSubtotal + deliveryFee + taxes;

    const cat = nuState.selectedPaymentCategory;

    // Contextual Payment Detail Box HTML
    let detailsHtml = '';
    if (cat === 'CARD') {
        detailsHtml = `
            <div class="nu-payment-details-box">
                <span class="nu-checkout-subhead d-block mb-2"><i class="fas fa-credit-card text-accent mr-1"></i> CARD DETAILS (UI PREPARATION ONLY)</span>
                <div class="form-group mb-2">
                    <label class="form-label-nu text-muted small mb-1">Card Number</label>
                    <input type="text" id="cardNumInput" class="form-control form-control-sm form-control-nu" placeholder="4532 •••• •••• 8901" maxlength="19" autocomplete="off" />
                </div>
                <div class="form-row">
                    <div class="col-6 mb-2">
                        <label class="form-label-nu text-muted small mb-1">Expiry (MM/YY)</label>
                        <input type="text" id="cardExpiryInput" class="form-control form-control-sm form-control-nu" placeholder="08/28" maxlength="5" autocomplete="off" />
                    </div>
                    <div class="col-6 mb-2">
                        <label class="form-label-nu text-muted small mb-1">CVV</label>
                        <input type="password" id="cardCvvInput" class="form-control form-control-sm form-control-nu" placeholder="•••" maxlength="4" autocomplete="off" />
                    </div>
                </div>
                <div class="form-group mb-0">
                    <label class="form-label-nu text-muted small mb-1">Name on Card</label>
                    <input type="text" id="cardNameInput" class="form-control form-control-sm form-control-nu" placeholder="e.g. Rahul Sharma" autocomplete="off" />
                </div>
            </div>
        `;
    } else if (cat === 'UPI') {
        const activeApp = nuState.selectedUpiApp;
        detailsHtml = `
            <div class="nu-payment-details-box">
                <span class="nu-checkout-subhead d-block mb-2"><i class="fas fa-mobile-alt text-accent mr-1"></i> UPI PAYMENT</span>
                <div class="form-group mb-3">
                    <label class="form-label-nu text-muted small mb-1">Virtual Payment Address (VPA)</label>
                    <input type="text" id="upiIdInput" class="form-control form-control-sm form-control-nu" placeholder="username@upi" autocomplete="off" />
                </div>
                <div class="form-group mb-0">
                    <label class="form-label-nu text-muted small mb-1 d-block">Quick Select UPI App</label>
                    <div class="d-flex align-items-center gap-2 flex-wrap" id="upiAppButtonGroup">
                        <button type="button" class="btn btn-sm ${activeApp === 'GPAY' ? 'btn-accent text-dark font-weight-bold' : 'btn-dark text-white'} nu-upi-app-btn" onclick="window.nuSelectUpiApp('GPAY');" id="upiBtnGPay" style="border: 1px solid ${activeApp === 'GPAY' ? 'var(--nu-accent)' : 'rgba(255,255,255,0.1)'}">
                            <i class="fab fa-google text-success mr-1"></i> Google Pay ${activeApp === 'GPAY' ? '✓' : ''}
                        </button>
                        <button type="button" class="btn btn-sm ${activeApp === 'PHONEPE' ? 'btn-accent text-dark font-weight-bold' : 'btn-dark text-white'} nu-upi-app-btn" onclick="window.nuSelectUpiApp('PHONEPE');" id="upiBtnPhonePe" style="border: 1px solid ${activeApp === 'PHONEPE' ? 'var(--nu-accent)' : 'rgba(255,255,255,0.1)'}">
                            <i class="fas fa-mobile-alt text-accent mr-1"></i> PhonePe ${activeApp === 'PHONEPE' ? '✓' : ''}
                        </button>
                        <button type="button" class="btn btn-sm ${activeApp === 'PAYTM' ? 'btn-accent text-dark font-weight-bold' : 'btn-dark text-white'} nu-upi-app-btn" onclick="window.nuSelectUpiApp('PAYTM');" id="upiBtnPaytm" style="border: 1px solid ${activeApp === 'PAYTM' ? 'var(--nu-accent)' : 'rgba(255,255,255,0.1)'}">
                            <i class="fas fa-wallet text-info mr-1"></i> Paytm UPI ${activeApp === 'PAYTM' ? '✓' : ''}
                        </button>
                    </div>
                </div>
            </div>
        `;
    } else if (cat === 'NETBANKING') {
        detailsHtml = `
            <div class="nu-payment-details-box">
                <span class="nu-checkout-subhead d-block mb-2"><i class="fas fa-university text-accent mr-1"></i> NET BANKING</span>
                <div class="form-group mb-0">
                    <label class="form-label-nu text-muted small mb-1">Select Bank</label>
                    <select id="netBankSelect" class="form-control form-control-sm form-control-nu">
                        <option value="HDFC">HDFC Bank</option>
                        <option value="ICICI">ICICI Bank</option>
                        <option value="SBI">State Bank of India (SBI)</option>
                        <option value="AXIS">Axis Bank</option>
                        <option value="KOTAK">Kotak Mahindra Bank</option>
                        <option value="OTHER">Other Banks</option>
                    </select>
                </div>
            </div>
        `;
    } else if (cat === 'WALLET') {
        detailsHtml = `
            <div class="nu-payment-details-box">
                <span class="nu-checkout-subhead d-block mb-2"><i class="fas fa-wallet text-accent mr-1"></i> SELECT WALLET</span>
                <div class="d-flex flex-column gap-2" id="walletChoiceOptions">
                    <label class="d-flex align-items-center gap-2 p-2 rounded border mb-0" style="border-color: rgba(255,255,255,0.08) !important; cursor: pointer;">
                        <input type="radio" name="walletChoice" checked /> <strong class="text-white small">Amazon Pay Balance</strong>
                    </label>
                    <label class="d-flex align-items-center gap-2 p-2 rounded border mb-0" style="border-color: rgba(255,255,255,0.08) !important; cursor: pointer;">
                        <input type="radio" name="walletChoice" /> <strong class="text-white small">Paytm Wallet</strong>
                    </label>
                    <label class="d-flex align-items-center gap-2 p-2 rounded border mb-0" style="border-color: rgba(255,255,255,0.08) !important; cursor: pointer;">
                        <input type="radio" name="walletChoice" /> <strong class="text-white small">MobiKwik</strong>
                    </label>
                </div>
            </div>
        `;
    } else if (cat === 'COD') {
        detailsHtml = `
            <div class="nu-payment-details-box">
                <span class="nu-checkout-subhead d-block mb-2"><i class="fas fa-money-bill-wave text-accent mr-1"></i> CASH ON DELIVERY</span>
                <p class="text-white small mb-0" id="codMessageText">Pay when your order arrives. Cash or UPI at doorstep accepted.</p>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="nu-payment-container">
            <!-- Total Header Badge -->
            <div class="d-flex align-items-center justify-content-between p-3 mb-3 rounded" style="background: var(--nu-surface); border: 1px solid var(--nu-border);">
                <div>
                    <span class="nu-checkout-subhead d-block">AMOUNT TO PAY</span>
                    <small class="text-muted">${itemCount} ${itemCount === 1 ? 'item' : 'items'} from ${escapeHtml(restaurantName)}</small>
                </div>
                <strong class="text-accent h4 mb-0 font-weight-bold" id="paymentGrandTotalDisplay">₹${grandTotal}</strong>
            </div>

            <!-- Selectable Payment Categories Grid -->
            <div class="mb-2">
                <span class="nu-checkout-subhead d-block mb-2"><i class="fas fa-list text-accent mr-1"></i> CHOOSE PAYMENT METHOD</span>
            </div>
            <div class="nu-payment-cat-grid">
                <div class="nu-payment-cat-tile ${cat === 'CARD' ? 'selected' : ''}" id="payTileCard" onclick="window.nuSelectPaymentCategory('CARD');">
                    <div class="nu-payment-cat-tile-info">
                        <div class="nu-payment-cat-tile-icon"><i class="fas fa-credit-card"></i></div>
                        <div>
                            <strong class="text-white d-block small">Cards</strong>
                            <small class="text-muted" style="font-size: 10px;">Visa, Master, RuPay</small>
                        </div>
                    </div>
                    <div class="nu-payment-cat-tile-check">✓</div>
                </div>

                <div class="nu-payment-cat-tile ${cat === 'UPI' ? 'selected' : ''}" id="payTileUPI" onclick="window.nuSelectPaymentCategory('UPI');">
                    <div class="nu-payment-cat-tile-info">
                        <div class="nu-payment-cat-tile-icon"><i class="fas fa-mobile-alt"></i></div>
                        <div>
                            <strong class="text-white d-block small">UPI</strong>
                            <small class="text-muted" style="font-size: 10px;">GPay, PhonePe, Paytm</small>
                        </div>
                    </div>
                    <div class="nu-payment-cat-tile-check">✓</div>
                </div>

                <div class="nu-payment-cat-tile ${cat === 'NETBANKING' ? 'selected' : ''}" id="payTileNetBanking" onclick="window.nuSelectPaymentCategory('NETBANKING');">
                    <div class="nu-payment-cat-tile-info">
                        <div class="nu-payment-cat-tile-icon"><i class="fas fa-university"></i></div>
                        <div>
                            <strong class="text-white d-block small">Net Banking</strong>
                            <small class="text-muted" style="font-size: 10px;">All major Indian banks</small>
                        </div>
                    </div>
                    <div class="nu-payment-cat-tile-check">✓</div>
                </div>

                <div class="nu-payment-cat-tile ${cat === 'WALLET' ? 'selected' : ''}" id="payTileWallet" onclick="window.nuSelectPaymentCategory('WALLET');">
                    <div class="nu-payment-cat-tile-info">
                        <div class="nu-payment-cat-tile-icon"><i class="fas fa-wallet"></i></div>
                        <div>
                            <strong class="text-white d-block small">Wallets</strong>
                            <small class="text-muted" style="font-size: 10px;">Amazon Pay, Paytm</small>
                        </div>
                    </div>
                    <div class="nu-payment-cat-tile-check">✓</div>
                </div>

                <div class="nu-payment-cat-tile ${cat === 'COD' ? 'selected' : ''}" id="payTileCOD" onclick="window.nuSelectPaymentCategory('COD');">
                    <div class="nu-payment-cat-tile-info">
                        <div class="nu-payment-cat-tile-icon"><i class="fas fa-money-bill-wave"></i></div>
                        <div>
                            <strong class="text-white d-block small">Cash on Delivery</strong>
                            <small class="text-muted" style="font-size: 10px;">Pay at doorstep</small>
                        </div>
                    </div>
                    <div class="nu-payment-cat-tile-check">✓</div>
                </div>
            </div>

            <!-- Contextual Payment Details Area -->
            ${detailsHtml}

            <!-- Reassuring Security Badge -->
            <div class="nu-payment-security-badge">
                <i class="fas fa-shield-alt text-accent" style="font-size: 18px;"></i>
                <div>
                    <strong class="text-white d-block" style="font-size: 12px;">🔒 Secure Payment</strong>
                    <span>Your payment information is protected and securely processed.</span>
                </div>
            </div>

            <!-- Exact Order Payment Summary -->
            <div class="nu-checkout-bill-card">
                <span class="nu-checkout-subhead d-block mb-2"><i class="fas fa-receipt text-accent mr-1"></i> PAYMENT SUMMARY</span>
                <div class="d-flex justify-content-between text-muted small mb-1">
                    <span>Subtotal (${itemCount} items)</span>
                    <span class="text-white">₹${subtotal}</span>
                </div>
                ${discount > 0 ? `
                    <div class="d-flex justify-content-between text-accent small mb-1 font-weight-bold">
                        <span>Discount (${nuState.appliedCoupon ? nuState.appliedCoupon.code : 'Coupon'})</span>
                        <span>-₹${discount}</span>
                    </div>
                ` : ''}
                <div class="d-flex justify-content-between text-muted small mb-1">
                    <span>Delivery Fee</span>
                    <span class="${deliveryFee === 0 ? 'text-accent font-weight-bold' : 'text-white'}">${deliveryFee === 0 ? 'FREE' : '₹' + deliveryFee}</span>
                </div>
                <div class="d-flex justify-content-between text-muted small mb-1">
                    <span>Taxes &amp; Charges (5%)</span>
                    <span class="text-white">₹${taxes}</span>
                </div>
                <hr class="nu-divider my-2" />
                <div class="d-flex justify-content-between align-items-center">
                    <strong class="text-white">GRAND TOTAL</strong>
                    <strong class="text-accent h5 mb-0 font-weight-bold">₹${grandTotal}</strong>
                </div>
            </div>

            <!-- Phase 4.10 Gateway Boundary Alert -->
            <div id="paymentPhase410Alert" class="nu-payment-phase410-alert mb-3 d-none">
                <i class="fas fa-info-circle text-accent mr-1"></i> <strong>Phase 4.9 Complete:</strong> Payment gateway setup is ready for the next step (Phase 4.10).
            </div>

            <!-- Primary Action Button -->
            <button type="button" class="custom-button w-100 justify-content-center py-3 ${!cat ? 'disabled' : ''}" id="paymentProceedBtn" ${!cat ? 'disabled' : ''} onclick="window.nuProceedPaymentSecurelyPlaceholder();">
                ${!cat ? 'Select a Payment Method' : (cat === 'COD' ? 'Continue with Cash on Delivery <i class="fas fa-arrow-right ml-2"></i>' : 'Proceed Securely <i class="fas fa-lock ml-2"></i>')}
            </button>
        </div>
    `;
}

window.nuRemoveCartItem = function(foodId) {
    if (!nuState.cart.has(foodId)) return;
    nuState.cart.delete(foodId);
    updateCartUI(foodId);
};

window.nuExploreFoodFromCart = function() {
    safeModalTransition('#nuCartModal', null, () => {
        const el = document.getElementById('exploreMenuSection');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
};

window.nuOpenCheckout = function() {
    if (!nuState.cart || nuState.cart.size === 0) return;
    renderCheckoutModalView();
    safeModalTransition('#nuCartModal', '#nuCheckoutModal');
};

window.nuSelectPaymentCategory = function(cat) {
    nuState.selectedPaymentCategory = cat;
    renderPaymentModalView();
};

window.nuSelectUpiApp = function(appId) {
    nuState.selectedUpiApp = appId;
    renderPaymentModalView();
};

window.nuOpenPaymentOptions = function() {
    if (!nuState.cart || nuState.cart.size === 0) return;
    if (!nuState.selectedPaymentCategory) nuState.selectedPaymentCategory = 'UPI';
    if (!nuState.selectedUpiApp) nuState.selectedUpiApp = 'PHONEPE';
    renderPaymentModalView();
    safeModalTransition('#nuCheckoutModal', '#nuPaymentModal');
};

window.nuProceedPaymentSecurelyPlaceholder = function(event) {
    if (event && typeof event.preventDefault === 'function') {
        event.preventDefault();
        event.stopPropagation();
    }
    const alertEl = document.getElementById('paymentPhase410Alert');
    if (alertEl) {
        alertEl.classList.remove('d-none');
        alertEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
};

window.nuApplyCoupon = () => {
    const input = document.getElementById('nuCouponInput');
    if (!input) return;
    const code = input.value.trim().toUpperCase();
    if (!code) {
        nuState.couponError = 'Please enter a coupon code.';
        renderCartModalView();
        return;
    }

    let subtotal = 0;
    nuState.cart.forEach(entry => {
        subtotal += entry.item.price * entry.quantity;
    });

    if (code === 'NUPREMIUM') {
        if (subtotal < 399) {
            nuState.couponError = 'Coupon NUPREMIUM requires a minimum order subtotal of ₹399.';
            renderCartModalView();
            return;
        }
        nuState.couponError = '';
        nuState.appliedCoupon = { code: 'NUPREMIUM', discount: 100 };
    } else if (code === 'NUPARTY') {
        if (subtotal < 599) {
            nuState.couponError = 'Coupon NUPARTY requires a minimum order subtotal of ₹599.';
            renderCartModalView();
            return;
        }
        nuState.couponError = '';
        nuState.appliedCoupon = { code: 'NUPARTY', discount: 150 };
    } else if (code === 'NUFIRST') {
        nuState.couponError = '';
        nuState.appliedCoupon = { code: 'NUFIRST', discount: Math.min(Math.round(subtotal * 0.20), 100) };
    } else {
        nuState.couponError = 'Invalid coupon code. Use NUFIRST, NUPREMIUM, or NUPARTY.';
        renderCartModalView();
        return;
    }
    renderCartModalView();
};

window.nuQuickApplyCoupon = (code) => {
    let subtotal = 0;
    nuState.cart.forEach(entry => {
        subtotal += entry.item.price * entry.quantity;
    });

    if (code === 'NUPREMIUM') {
        if (subtotal < 399) {
            nuState.couponError = 'Coupon NUPREMIUM requires a minimum order subtotal of ₹399.';
            renderCartModalView();
            return;
        }
        nuState.couponError = '';
        nuState.appliedCoupon = { code: 'NUPREMIUM', discount: 100 };
    } else if (code === 'NUPARTY') {
        if (subtotal < 599) {
            nuState.couponError = 'Coupon NUPARTY requires a minimum order subtotal of ₹599.';
            renderCartModalView();
            return;
        }
        nuState.couponError = '';
        nuState.appliedCoupon = { code: 'NUPARTY', discount: 150 };
    } else if (code === 'NUFIRST') {
        nuState.couponError = '';
        nuState.appliedCoupon = { code: 'NUFIRST', discount: Math.min(Math.round(subtotal * 0.20), 100) };
    } else {
        nuState.couponError = 'Invalid coupon code.';
        renderCartModalView();
        return;
    }
    renderCartModalView();
};

window.nuRemoveCoupon = () => {
    nuState.appliedCoupon = null;
    nuState.couponError = '';
    renderCartModalView();
};

window.nuSelectPaymentMethod = (methodCode) => {
    nuState.selectedPaymentMethod = methodCode;
    renderCartModalView();
};

window.nuToggleCartFullNutrition = () => {
    nuState.showFullCartNutrition = !nuState.showFullCartNutrition;
    renderCartModalView();
};

window.nuExploreFoodFromCart = () => {
    safeModalTransition('#nuCartModal', null, () => {
        const menuSection = document.getElementById('exploreMenuSection') || document.getElementById('restaurantsSection');
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
};

window.nuAddToCart = addToCart;
window.nuUpdateCartQty = updateCartQty;

/**
 * ==================================================
 * 8B. Real Backend Order API & UI Management System (Task 4.0)
 * ==================================================
 */
const API_BASE_URL = 'http://localhost:5000/api';

const nuOrderApi = {
    async createOrder(orderPayload) {
        const userId = nuState.user?.phone || 'demo-user-123';
        const res = await fetch(`${API_BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userId}`,
                'X-User-Id': userId
            },
            body: JSON.stringify(orderPayload)
        });
        return await res.json();
    },

    async getMyOrders() {
        const userId = nuState.user?.phone || 'demo-user-123';
        const res = await fetch(`${API_BASE_URL}/orders`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userId}`,
                'X-User-Id': userId
            }
        });
        return await res.json();
    },

    async getOrderById(orderId) {
        const userId = nuState.user?.phone || 'demo-user-123';
        const res = await fetch(`${API_BASE_URL}/orders/${orderId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userId}`,
                'X-User-Id': userId
            }
        });
        return await res.json();
    },

    async cancelOrder(orderId) {
        const userId = nuState.user?.phone || 'demo-user-123';
        const res = await fetch(`${API_BASE_URL}/orders/${orderId}/cancel`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userId}`,
                'X-User-Id': userId
            }
        });
        return await res.json();
    },

    async reorder(orderId) {
        const userId = nuState.user?.phone || 'demo-user-123';
        const res = await fetch(`${API_BASE_URL}/orders/${orderId}/reorder`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userId}`,
                'X-User-Id': userId
            }
        });
        return await res.json();
    }
};
window.nuOrderApi = nuOrderApi;

/**
 * Render Order Timeline Component
 */
function renderOrderTimeline(currentStatus, createdAt) {
    const steps = [
        { key: 'PLACED', title: 'Order Placed', desc: 'Your order has been received.', icon: 'fa-receipt' },
        { key: 'CONFIRMED', title: 'Confirmed', desc: 'Restaurant accepted your order.', icon: 'fa-clipboard-check' },
        { key: 'PREPARING', title: 'Preparing', desc: 'Your food is being prepared with care.', icon: 'fa-utensils' },
        { key: 'OUT_FOR_DELIVERY', title: 'Out for Delivery', desc: 'Rider has picked up your order.', icon: 'fa-motorcycle' },
        { key: 'DELIVERED', title: 'Delivered', desc: 'Order delivered to your address.', icon: 'fa-home' }
    ];

    if (currentStatus === 'CANCELLED') {
        return `
            <div class="nu-order-timeline">
                <div class="nu-timeline-step completed">
                    <div class="nu-timeline-icon"><i class="fas fa-check"></i></div>
                    <div class="nu-timeline-content">
                        <div class="nu-timeline-title">Order Placed</div>
                        <div class="nu-timeline-desc">Order was initiated.</div>
                    </div>
                </div>
                <div class="nu-timeline-step active">
                    <div class="nu-timeline-icon" style="background: rgba(220, 53, 69, 0.2); border-color: #dc3545; color: #dc3545;">
                        <i class="fas fa-times"></i>
                    </div>
                    <div class="nu-timeline-content">
                        <div class="nu-timeline-title text-danger">Cancelled</div>
                        <div class="nu-timeline-desc text-muted">This order was cancelled.</div>
                    </div>
                </div>
            </div>
        `;
    }

    const statusOrder = ['PLACED', 'CONFIRMED', 'PREPARING', 'OUT_FOR_DELIVERY', 'DELIVERED'];
    const currentIndex = Math.max(0, statusOrder.indexOf(currentStatus));

    let html = '<div class="nu-order-timeline">';
    steps.forEach((step, idx) => {
        let stateClass = '';
        if (idx < currentIndex) stateClass = 'completed';
        else if (idx === currentIndex) stateClass = 'active';

        const iconHtml = idx < currentIndex ? '<i class="fas fa-check"></i>' : `<i class="fas ${step.icon}"></i>`;

        html += `
            <div class="nu-timeline-step ${stateClass}">
                <div class="nu-timeline-icon">${iconHtml}</div>
                <div class="nu-timeline-content">
                    <div class="nu-timeline-title">${escapeHtml(step.title)}</div>
                    <div class="nu-timeline-desc">${escapeHtml(step.desc)}</div>
                    ${idx === currentIndex ? `<div class="nu-timeline-time">● Current Status</div>` : ''}
                </div>
            </div>
        `;
    });
    html += '</div>';
    return html;
}
window.renderOrderTimeline = renderOrderTimeline;

window.nuProcessCheckoutOrder = async function() {
    const btn = document.getElementById('cartCheckoutBtn');

    let subtotal = 0;
    nuState.cart.forEach(entry => {
        subtotal += entry.item.price * entry.quantity;
    });
    let discount = 0;
    if (nuState.appliedCoupon) {
        if (nuState.appliedCoupon.code === 'NUPREMIUM' && subtotal >= 399) discount = 100;
        else if (nuState.appliedCoupon.code === 'NUPARTY' && subtotal >= 599) discount = 150;
        else if (nuState.appliedCoupon.code === 'NUFIRST') discount = Math.min(Math.round(subtotal * 0.20), 100);
    }
    const discountedSubtotal = Math.max(0, subtotal - discount);
    const deliveryFee = discountedSubtotal > 499 ? 0 : 35;
    const taxes = Math.round(discountedSubtotal * 0.05);

    const isCodSelected = nuState.selectedPaymentMethod === 'COD';
    const activeRestDist = (nuState.activeRestaurant && nuState.activeRestaurant.distanceKm) ? nuState.activeRestaurant.distanceKm : 2.5;
    const codFee = isCodSelected ? calculateCodFee(activeRestDist) : 0;
    const grandTotal = discountedSubtotal + deliveryFee + taxes + codFee;

    if (btn) {
        if (btn.disabled) return;
        btn.disabled = true;
        btn.innerHTML = `<i class="fas fa-circle-notch fa-spin mr-2"></i> Placing your order...`;
    }

    const clearError = () => {
        const existingErr = document.getElementById('nuCheckoutError');
        if (existingErr) existingErr.remove();
    };
    clearError();

    try {
        if (!nuState.cart || nuState.cart.size === 0) {
            nuState.couponError = 'Your cart is empty.';
            renderCartModalView();
            return;
        }

        const items = [];
        let restaurantId = '';
        nuState.cart.forEach(entry => {
            if (!restaurantId && entry.item.restaurantId) {
                restaurantId = entry.item.restaurantId;
            }
            items.push({
                foodId: entry.item.id,
                quantity: entry.quantity
            });
        });

        const activeAddr = (nuState.savedAddresses && nuState.savedAddresses[0]) || {
            fullName: nuState.user?.fullName || 'Valued Customer',
            phone: nuState.user?.phone || '9876543210',
            city: nuState.currentCity || 'Hyderabad',
            area: 'Jubilee Hills',
            street: 'Road No. 36',
            landmark: '',
            label: 'Home'
        };

        const payload = {
            restaurantId: restaurantId || 'rest-1',
            items,
            deliveryAddress: activeAddr,
            couponCode: nuState.appliedCoupon ? nuState.appliedCoupon.code : '',
            deliveryType: nuState.selectedDeliveryType || 'standard',
            paymentMethod: nuState.selectedPaymentMethod || 'UPI_PHONEPE'
        };

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000);

        let res;
        try {
            res = await nuOrderApi.createOrder(payload);
        } catch (fetchErr) {
            clearTimeout(timeoutId);
            throw fetchErr;
        }
        clearTimeout(timeoutId);

        if (res && res.success && res.data) {
            const order = res.data;
            nuState.lastCreatedOrderId = order.orderId;

            // Clear cart & applied coupon
            nuState.cart.clear();
            nuState.appliedCoupon = null;
            nuState.couponError = '';
            updateCartBadges();
            updateStickyMobileCart();

            // Populate Confirmation Modal
            const confirmIdEl = document.getElementById('confirmOrderId');
            const confirmRestEl = document.getElementById('confirmRestName');
            const confirmItemsEl = document.getElementById('confirmItemsSummary');
            const confirmTotalEl = document.getElementById('confirmTotalPaid');
            const confirmEstEl = document.getElementById('confirmEstTime');
            const confirmAddrEl = document.getElementById('confirmDelivAddress');

            const rest = NU_RESTAURANTS.find(r => r.id === order.restaurantId) || { name: 'Partner Kitchen' };

            if (confirmIdEl) confirmIdEl.textContent = order.orderId;
            if (confirmRestEl) confirmRestEl.textContent = rest.name;
            if (confirmItemsEl) confirmItemsEl.textContent = `${order.items.length} item${order.items.length > 1 ? 's' : ''}`;
            if (confirmTotalEl) confirmTotalEl.textContent = `₹${order.pricing.grandTotal}`;
            if (confirmEstEl) confirmEstEl.textContent = order.delivery.estimatedTime || '25–35 mins';
            if (confirmAddrEl) confirmAddrEl.textContent = `${activeAddr.area}, ${activeAddr.city}`;

            // Cleanly transition from Cart Modal to Order Confirmation Modal
            safeModalTransition('#nuCartModal', '#nuOrderConfirmationModal');
        } else {
            const errMsg = res?.message || 'Failed to place order. Please try again.';
            showCheckoutInlineError(errMsg, grandTotal);
        }
    } catch (err) {
        const errMsg = err.name === 'AbortError' 
            ? 'Order creation request timed out. Please try again.' 
            : 'Network error placing order. Please ensure server is running.';
        showCheckoutInlineError(errMsg, grandTotal);
    }
};

function showCheckoutInlineError(msg, grandTotal) {
    const modalBody = document.querySelector('#nuCartModal .cart-active-container');
    if (modalBody) {
        let errBox = document.getElementById('nuCheckoutError');
        if (!errBox) {
            errBox = document.createElement('div');
            errBox.id = 'nuCheckoutError';
            errBox.className = 'alert alert-danger mt-3 mb-0 text-center font-weight-bold';
            modalBody.appendChild(errBox);
        }
        errBox.innerHTML = `<i class="fas fa-exclamation-triangle mr-2"></i> ${escapeHtml(msg)}`;
    }
    const btn = document.getElementById('cartCheckoutBtn');
    if (btn) {
        btn.disabled = false;
        btn.innerHTML = `Pay ₹${grandTotal} • Place Order <i class="fas fa-arrow-right ml-2"></i>`;
    }
}

window.nuTrackConfirmedOrder = function() {
    const orderId = nuState.lastCreatedOrderId;
    if (orderId) {
        safeModalTransition('#nuOrderConfirmationModal', '#nuOrderTrackingModal', () => {
            window.openOrderTrackingModal(orderId);
        });
    } else {
        safeModalTransition('#nuOrderConfirmationModal', '#nuMyOrdersModal', () => {
            window.openMyOrdersModal();
        });
    }
};

window.openOrderTrackingModal = async function(orderId) {
    safeModalTransition('.modal.show', '#nuOrderTrackingModal');

    const trackIdEl = document.getElementById('trackOrderId');
    const container = document.getElementById('orderTrackingModalContent');
    const footer = document.getElementById('orderTrackingModalFooter');

    if (trackIdEl) trackIdEl.textContent = orderId;
    if (container) {
        container.innerHTML = `
            <div class="p-4 text-center">
                <div class="nu-skeleton mb-3 mx-auto" style="height: 24px; width: 140px;"></div>
                <div class="nu-skeleton mb-3" style="height: 120px;"></div>
                <div class="nu-skeleton" style="height: 60px;"></div>
            </div>
        `;
    }

    try {
        const res = await nuOrderApi.getOrderById(orderId);
        if (!res.success || !res.data) {
            if (container) container.innerHTML = `<div class="text-center p-4 text-danger">${res.message || 'Order not found.'}</div>`;
            return;
        }

        const order = res.data;
        const rest = NU_RESTAURANTS.find(r => r.id === order.restaurantId) || { name: 'Partner Kitchen' };
        const canCancel = ['PLACED', 'CONFIRMED'].includes(order.status);
        const statusClass = order.status === 'CANCELLED' ? 'badge-danger' : (order.status === 'DELIVERED' ? 'badge-success' : 'badge-warning text-dark');

        if (container) {
            container.innerHTML = `
                <div class="p-2">
                    <div class="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom" style="border-color: var(--nu-border) !important;">
                        <div>
                            <h4 class="h5 text-white font-weight-bold mb-0">${escapeHtml(rest.name)}</h4>
                            <small class="text-muted"><i class="fas fa-clock mr-1"></i>Est. Delivery: ${escapeHtml(order.delivery?.estimatedTime || '25-35 mins')}</small>
                        </div>
                        <span class="badge ${statusClass} font-weight-bold px-3 py-2" style="font-size: 12px;">● ${escapeHtml(order.status)}</span>
                    </div>

                    <h5 class="text-muted small text-uppercase font-weight-bold mb-2">Delivery Status Progress</h5>
                    ${renderOrderTimeline(order.status, order.createdAt)}

                    <div class="p-3 border rounded mb-3 mt-3" style="border-color: var(--nu-border) !important; background: var(--nu-surface-card);">
                        <div class="d-flex justify-content-between mb-2">
                            <span class="text-muted small">Items Summary</span>
                            <span class="text-white small">${order.items.length} item${order.items.length > 1 ? 's' : ''} (${order.items.map(i => `${i.quantity}x ${i.name}`).join(', ')})</span>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <span class="text-muted small">Total Paid</span>
                            <strong class="text-accent font-weight-bold">₹${order.pricing.grandTotal}</strong>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span class="text-muted small">Deliver To</span>
                            <span class="text-white small text-right">${escapeHtml(order.deliveryAddress?.street || '')}, ${escapeHtml(order.deliveryAddress?.area || '')}</span>
                        </div>
                    </div>
                </div>
            `;
        }

        if (footer) {
            footer.innerHTML = `
                <div class="d-flex justify-content-between w-100 align-items-center">
                    <div>
                        ${canCancel ? `
                            <button type="button" class="btn btn-outline-danger btn-sm" onclick="window.nuRequestCancelOrder('${order.orderId}')">
                                <i class="fas fa-times mr-1"></i> Cancel Order
                            </button>
                        ` : ''}
                    </div>
                    <div class="d-flex gap-2">
                        <button type="button" class="custom-outline-button py-1 px-3" style="font-size: 13px;" onclick="window.openOrderDetailModal('${order.orderId}')">
                            View Details <i class="fas fa-file-alt ml-1"></i>
                        </button>
                        <button type="button" class="btn nu-modal-close-btn" data-dismiss="modal">Close</button>
                    </div>
                </div>
            `;
        }
    } catch (err) {
        if (container) container.innerHTML = `<div class="text-center p-4 text-danger">Error loading tracking status.</div>`;
    }
};

window.openMyOrdersModal = async function() {
    safeModalTransition('.modal.show', '#nuMyOrdersModal');
    await renderMyOrders();
};

async function renderMyOrders() {
    const container = document.getElementById('myOrdersListContainer');
    if (!container) return;

    container.innerHTML = `
        <div class="p-3">
            <div class="nu-skeleton mb-3" style="height: 90px;"></div>
            <div class="nu-skeleton mb-3" style="height: 90px;"></div>
        </div>
    `;

    try {
        const res = await nuOrderApi.getMyOrders();
        if (!res.success || !Array.isArray(res.data) || res.data.length === 0) {
            container.innerHTML = `
                <div class="text-center py-5">
                    <div class="mb-3 text-muted" style="font-size: 46px;">
                        <i class="fas fa-receipt"></i>
                    </div>
                    <h4 class="h5 text-white font-weight-bold mb-1">No orders yet</h4>
                    <p class="text-muted small mb-4">Your next great meal is waiting!</p>
                    <button type="button" class="custom-button py-2 px-4" data-dismiss="modal" onclick="location.hash='#exploreMenuSection'">Explore Food</button>
                </div>
            `;
            return;
        }

        const activeOrders = res.data.filter(o => ['PLACED', 'CONFIRMED', 'PREPARING', 'OUT_FOR_DELIVERY'].includes(o.status));
        const pastOrders = res.data.filter(o => ['DELIVERED', 'CANCELLED'].includes(o.status));

        let html = '';

        // Active Orders Section
        html += `<h5 class="text-accent small font-weight-bold text-uppercase mb-3"><i class="fas fa-motorcycle mr-1"></i> Active Orders (${activeOrders.length})</h5>`;
        if (activeOrders.length === 0) {
            html += `<div class="p-3 text-muted small text-center border rounded mb-4" style="border-color: var(--nu-border) !important; background: var(--nu-charcoal);">No active orders in progress. Your previous orders appear below.</div>`;
        } else {
            html += '<div class="d-flex flex-column gap-3 mb-4">';
            activeOrders.forEach(order => {
                const rest = NU_RESTAURANTS.find(r => r.id === order.restaurantId) || { name: 'Partner Kitchen' };
                const itemCount = order.items.reduce((sum, i) => sum + i.quantity, 0);

                html += `
                    <div class="p-3 border rounded nu-hover-lift" style="border-color: var(--nu-accent) !important; background: var(--nu-surface-card);">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <div>
                                <span class="badge badge-dark text-accent font-mono mb-1" style="font-size: 11px;">${escapeHtml(order.orderId)}</span>
                                <h4 class="text-white font-weight-bold mb-0" style="font-size: 15px;">${escapeHtml(rest.name)}</h4>
                            </div>
                            <span class="badge badge-warning text-dark font-weight-bold" style="font-size: 11px;">● ${escapeHtml(order.status)}</span>
                        </div>

                        <div class="d-flex justify-content-between align-items-center text-muted small mt-2 pt-2 border-top" style="border-color: rgba(255,255,255,0.06) !important;">
                            <span>${itemCount} item${itemCount > 1 ? 's' : ''} • <strong class="text-white">₹${order.pricing.grandTotal}</strong></span>
                            <div class="d-flex gap-2">
                                <button type="button" class="custom-button py-1 px-3" style="font-size: 12px; height: auto;" onclick="window.openOrderTrackingModal('${order.orderId}')">
                                    <i class="fas fa-motorcycle mr-1"></i> Track Order
                                </button>
                                <button type="button" class="custom-outline-button py-1 px-2" style="font-size: 12px; height: auto;" onclick="window.openOrderDetailModal('${order.orderId}')">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
        }

        // Past Orders Section
        html += `<h5 class="text-muted small font-weight-bold text-uppercase mb-3"><i class="fas fa-history mr-1"></i> Past Orders (${pastOrders.length})</h5>`;
        if (pastOrders.length === 0) {
            html += `<div class="p-3 text-muted small text-center border rounded mb-3" style="border-color: var(--nu-border) !important; background: var(--nu-charcoal);">No past orders found.</div>`;
        } else {
            html += '<div class="d-flex flex-column gap-3">';
            pastOrders.forEach(order => {
                const rest = NU_RESTAURANTS.find(r => r.id === order.restaurantId) || { name: 'Partner Kitchen' };
                const dateStr = new Date(order.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                const statusClass = order.status === 'CANCELLED' ? 'badge-danger' : 'badge-success';
                const itemCount = order.items.reduce((sum, i) => sum + i.quantity, 0);

                html += `
                    <div class="p-3 border rounded nu-hover-lift" style="border-color: var(--nu-border) !important; background: var(--nu-surface-card);">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <div>
                                <span class="badge badge-dark text-muted font-mono mb-1" style="font-size: 11px;">${escapeHtml(order.orderId)}</span>
                                <h4 class="text-white font-weight-bold mb-0" style="font-size: 15px;">${escapeHtml(rest.name)}</h4>
                            </div>
                            <span class="badge ${statusClass} font-weight-bold" style="font-size: 11px;">● ${escapeHtml(order.status)}</span>
                        </div>

                        <div class="d-flex justify-content-between align-items-center text-muted small mt-2 pt-2 border-top" style="border-color: rgba(255,255,255,0.06) !important;">
                            <span>${itemCount} item${itemCount > 1 ? 's' : ''} • <strong class="text-white">₹${order.pricing.grandTotal}</strong> • ${dateStr}</span>
                            <div class="d-flex gap-2">
                                <button type="button" class="custom-outline-button py-1 px-3" style="font-size: 12px; height: auto;" onclick="window.openOrderDetailModal('${order.orderId}')">
                                    View Details
                                </button>
                                <button type="button" class="custom-button py-1 px-3" style="font-size: 12px; height: auto;" onclick="window.nuReorderOrder('${order.orderId}', this)">
                                    <i class="fas fa-redo mr-1"></i> Reorder
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
        }

        container.innerHTML = html;
    } catch (err) {
        container.innerHTML = `<div class="text-center p-4 text-danger">Failed to load order history. Ensure backend server is running.</div>`;
    }
}
window.renderMyOrders = renderMyOrders;

window.openOrderDetailModal = async function(orderId) {
    safeModalTransition('.modal.show', '#nuOrderDetailModal');

    const container = document.getElementById('orderDetailModalContent');
    const footer = document.getElementById('orderDetailModalFooter');
    if (container) {
        container.innerHTML = `
            <div class="p-3">
                <div class="nu-skeleton mb-3" style="height: 100px;"></div>
                <div class="nu-skeleton mb-3" style="height: 80px;"></div>
            </div>
        `;
    }

    try {
        const res = await nuOrderApi.getOrderById(orderId);
        if (!res.success || !res.data) {
            if (container) container.innerHTML = `<div class="text-center p-4 text-danger">${res.message || 'Order not found.'}</div>`;
            return;
        }

        const order = res.data;
        const rest = NU_RESTAURANTS.find(r => r.id === order.restaurantId) || { name: 'Partner Kitchen', area: order.deliveryAddress?.area || 'City' };
        const dateStr = new Date(order.createdAt).toLocaleString();
        const statusClass = order.status === 'CANCELLED' ? 'badge-danger' : (order.status === 'DELIVERED' ? 'badge-success' : 'badge-warning text-dark');

        let itemsHtml = '';
        order.items.forEach(item => {
            itemsHtml += `
                <div class="d-flex justify-content-between align-items-center py-2 border-bottom" style="border-color: rgba(255,255,255,0.06) !important;">
                    <div>
                        <strong class="d-block text-white" style="font-size: 14px;">${escapeHtml(item.name)}</strong>
                        <small class="text-muted">${item.quantity} × ₹${item.unitPrice}</small>
                    </div>
                    <strong class="text-white">₹${item.totalPrice}</strong>
                </div>
            `;
        });

        if (container) {
            container.innerHTML = `
                <div class="cart-active-container">
                    <!-- Order Header -->
                    <div class="d-flex justify-content-between align-items-start mb-3 pb-3 border-bottom" style="border-color: var(--nu-border) !important;">
                        <div>
                            <span class="badge badge-dark text-accent font-mono mb-1">${escapeHtml(order.orderId)}</span>
                            <h3 class="h5 text-white font-weight-bold mb-0">${escapeHtml(rest.name)}</h3>
                            <small class="text-muted"><i class="fas fa-clock mr-1"></i>${dateStr}</small>
                        </div>
                        <span class="badge ${statusClass} font-weight-bold px-3 py-2" style="font-size: 12px;">● ${escapeHtml(order.status)}</span>
                    </div>

                    <!-- Items List -->
                    <div class="mb-3">
                        <h5 class="text-muted small text-uppercase font-weight-bold mb-2">Ordered Items</h5>
                        ${itemsHtml}
                    </div>

                    <!-- Permanent Nutrition Snapshot from Server -->
                    <div class="cart-nutrition-box mb-3">
                        <div class="cart-nutrition-header">
                            <span class="cart-nutrition-badge">
                                <i class="fas fa-heartbeat"></i> Server Nutrition Snapshot
                            </span>
                        </div>
                        <div class="cart-nutrition-pills">
                            <span class="cart-nutrition-item">🔥 <strong>${(order.nutrition?.calories || 0).toLocaleString()}</strong> kcal</span>
                            <span class="cart-nutrition-item">💪 <strong>${order.nutrition?.protein || 0}g</strong> protein</span>
                            <span class="cart-nutrition-item">🌾 <strong>${order.nutrition?.carbohydrates || 0}g</strong> carbs</span>
                            <span class="cart-nutrition-item">🥑 <strong>${order.nutrition?.fat || 0}g</strong> fat</span>
                        </div>
                    </div>

                    <!-- Delivery & Payment Info -->
                    <div class="row mb-3">
                        <div class="col-12 col-md-6 mb-2">
                            <div class="p-3 border rounded h-100" style="border-color: var(--nu-border) !important; background: var(--nu-surface-card);">
                                <small class="text-muted text-uppercase d-block mb-1 font-weight-bold"><i class="fas fa-map-marker-alt text-accent mr-1"></i> Delivery Address</small>
                                <strong class="text-white d-block small">${escapeHtml(order.deliveryAddress?.fullName || 'Customer')} (${escapeHtml(order.deliveryAddress?.label || 'Home')})</strong>
                                <small class="text-muted d-block">${escapeHtml(order.deliveryAddress?.street || '')}, ${escapeHtml(order.deliveryAddress?.area || '')}, ${escapeHtml(order.deliveryAddress?.city || '')}</small>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-2">
                            <div class="p-3 border rounded h-100" style="border-color: var(--nu-border) !important; background: var(--nu-surface-card);">
                                <small class="text-muted text-uppercase d-block mb-1 font-weight-bold"><i class="fas fa-credit-card text-accent mr-1"></i> Payment &amp; Delivery</small>
                                <small class="text-white d-block">Method: <strong>${escapeHtml(order.payment?.method || 'UPI')}</strong> (${escapeHtml(order.payment?.status || 'PENDING')})</small>
                                <small class="text-white d-block">Delivery: <strong>${escapeHtml(order.delivery?.type || 'Standard')}</strong> (${escapeHtml(order.delivery?.estimatedTime || '25-35 mins')})</small>
                            </div>
                        </div>
                    </div>

                    <!-- Order Timeline Progress -->
                    <div class="mb-3">
                        <h5 class="text-muted small text-uppercase font-weight-bold mb-2">Status Timeline</h5>
                        ${renderOrderTimeline(order.status, order.createdAt)}
                    </div>

                    <!-- Bill Summary -->
                    <div class="cart-bill-card p-3 mb-2">
                        <h5 class="text-white font-weight-bold mb-3" style="font-size: 14px;">Bill Breakdown</h5>
                        <div class="d-flex justify-content-between text-muted small mb-2">
                            <span>Item Total</span>
                            <span class="text-white">₹${order.pricing.itemTotal}</span>
                        </div>
                        ${order.pricing.couponDiscount > 0 ? `
                            <div class="d-flex justify-content-between text-accent small mb-2 font-weight-bold">
                                <span>Coupon Discount (${escapeHtml(order.pricing.couponCode || 'PROMO')})</span>
                                <span>-₹${order.pricing.couponDiscount}</span>
                            </div>
                        ` : ''}
                        <div class="d-flex justify-content-between text-muted small mb-2">
                            <span>Delivery Fee</span>
                            <span class="text-white">₹${order.pricing.deliveryFee}</span>
                        </div>
                        <div class="d-flex justify-content-between text-muted small mb-2">
                            <span>Restaurant Charges &amp; Taxes</span>
                            <span class="text-white">₹${order.pricing.restaurantCharges}</span>
                        </div>
                        <hr class="nu-divider my-2" />
                        <div class="d-flex justify-content-between align-items-center">
                            <strong class="text-white">Grand Total Paid</strong>
                            <strong class="text-accent h5 mb-0 font-weight-bold">₹${order.pricing.grandTotal}</strong>
                        </div>
                    </div>
                </div>
            `;
        }

        if (footer) {
            const canCancel = ['PLACED', 'CONFIRMED'].includes(order.status);
            footer.innerHTML = `
                <div class="d-flex justify-content-between w-100 align-items-center">
                    <div>
                        ${canCancel ? `
                            <button type="button" class="btn btn-outline-danger btn-sm" onclick="window.nuRequestCancelOrder('${order.orderId}')">
                                <i class="fas fa-times mr-1"></i> Cancel Order
                            </button>
                        ` : ''}
                    </div>
                    <div class="d-flex gap-2">
                        <button type="button" class="custom-button py-2 px-3" style="font-size: 13px;" onclick="window.nuReorderOrder('${order.orderId}', this)">
                            <i class="fas fa-redo mr-1"></i> Reorder
                        </button>
                        <button type="button" class="btn nu-modal-close-btn" data-dismiss="modal">Close</button>
                    </div>
                </div>
            `;
        }
    } catch (err) {
        if (container) container.innerHTML = `<div class="text-center p-4 text-danger">Error loading order details.</div>`;
    }
};

window.nuRequestCancelOrder = function(orderId) {
    nuState.pendingCancelOrderId = orderId;
    const label = document.getElementById('cancelConfirmOrderId');
    if (label) label.textContent = orderId;
    $('#nuCancelConfirmModal').modal('show');
};

window.confirmCancelOrderExec = async function() {
    const orderId = nuState.pendingCancelOrderId;
    if (!orderId) return;

    const btn = document.getElementById('confirmCancelOrderBtn');
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<i class="fas fa-spinner fa-spin mr-1"></i> Cancelling...`;
    }

    try {
        const res = await nuOrderApi.cancelOrder(orderId);
        $('#nuCancelConfirmModal').modal('hide');

        if (res.success) {
            alert(`Order ${orderId} has been cancelled.`);
            window.openOrderDetailModal(orderId);
        } else {
            alert(res.message || 'Cannot cancel order.');
        }
    } catch (err) {
        alert('Network error cancelling order.');
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.textContent = 'Cancel Order';
        }
    }
};

window.nuReorderOrder = async function(orderId, btnEl) {
    if (btnEl) {
        btnEl.disabled = true;
        btnEl.innerHTML = `<i class="fas fa-spinner fa-spin mr-1"></i> Adding to cart...`;
    }

    try {
        const res = await nuOrderApi.reorder(orderId);
        if (res.success && res.data && Array.isArray(res.data.items)) {
            nuState.cart.clear();
            res.data.items.forEach(item => {
                const food = NU_FOOD_ITEMS.find(f => f.id === item.foodId);
                if (food) {
                    nuState.cart.set(food.id, {
                        item: food,
                        quantity: item.quantity
                    });
                }
            });
            updateCartBadges();
            updateStickyMobileCart();

            safeModalTransition('.modal.show', '#nuCartModal', () => {
                alert('Items added to your cart.');
            });
        } else {
            alert(res.message || 'Failed to reorder items.');
        }
    } catch (err) {
        alert('Error processing reorder.');
    } finally {
        if (btnEl) {
            btnEl.disabled = false;
            btnEl.innerHTML = `<i class="fas fa-redo mr-1"></i> Reorder`;
        }
    }
};

/**
 * ==================================================
 * 9. Food Details Modal with Nutrition Breakdown
 * ==================================================
 */
function initFoodDetailsModal() {}

function openFoodDetails(foodId) {
    const food = NU_FOOD_ITEMS.find(i => i.id === foodId);
    if (!food) return;

    nuState.activeDetailItem = food;
    const restaurant = NU_RESTAURANTS.find(r => r.id === food.restaurantId) || {
        name: 'NU Kitchen',
        area: nuState.currentCity,
        rating: 4.8
    };

    const modalImg = document.getElementById('detailFoodImg');
    const modalTitle = document.getElementById('detailFoodTitle');
    const modalRest = document.getElementById('detailFoodRest');
    const modalDesc = document.getElementById('detailFoodDesc');
    const modalRating = document.getElementById('detailFoodRating');
    const modalPrice = document.getElementById('detailFoodPrice');
    const modalDelivery = document.getElementById('detailFoodDelivery');
    const modalIngredients = document.getElementById('detailFoodIngredients');
    const modalTags = document.getElementById('detailFoodTags');
    const modalOffer = document.getElementById('detailFoodOffer');
    const modalTypeBadge = document.getElementById('detailFoodTypeBadge');
    const modalSpiceBadge = document.getElementById('detailFoodSpiceBadge');
    const modalPortion = document.getElementById('detailFoodPortion');
    const modalAllergens = document.getElementById('detailFoodAllergens');
    const nutrGrid = document.getElementById('detailNutritionGrid');

    if (modalImg) modalImg.src = food.image;
    if (modalTitle) modalTitle.textContent = food.name;
    if (modalRest) modalRest.textContent = `${restaurant.name} (${restaurant.area || nuState.currentCity})`;
    if (modalDesc) modalDesc.textContent = food.description;
    if (modalRating) modalRating.innerHTML = `<i class="fas fa-star text-warning mr-1"></i>${food.rating.toFixed(1)} (${food.ratingCount} reviews)`;
    if (modalPrice) modalPrice.textContent = `₹${food.price}`;
    if (modalDelivery) modalDelivery.textContent = `${food.deliveryTime} mins • ${food.distanceKm} km away`;

    if (modalTypeBadge) {
        modalTypeBadge.className = `food-type-badge ${food.isVeg ? 'veg' : 'non-veg'}`;
        modalTypeBadge.innerHTML = `<i class="fas fa-circle"></i> ${food.isVeg ? 'VEGETARIAN' : 'NON-VEGETARIAN'}`;
    }

    if (modalSpiceBadge) {
        const spice = food.spiceLevel || 'Medium';
        const spiceClass = spice === 'Hot' ? 'badge-spice-hot' : (spice === 'Mild' ? 'badge-spice-mild' : 'badge-spice-medium');
        modalSpiceBadge.className = `badge p-2 ${spiceClass}`;
        modalSpiceBadge.innerHTML = `🌶️ ${spice} Spice`;
    }

    if (modalPortion) {
        modalPortion.innerHTML = `<i class="fas fa-utensil-spoon mr-1 text-accent"></i> Portion: ${food.portionDescription || 'Serves 1-2'}`;
    }

    if (modalAllergens) {
        const algs = food.allergens && food.allergens.length > 0 ? food.allergens.join(', ') : 'None detected';
        modalAllergens.innerHTML = `<i class="fas fa-exclamation-triangle mr-1 text-warning"></i> Allergens: ${algs}`;
    }

    if (modalOffer) {
        if (food.offer) {
            modalOffer.style.display = 'inline-block';
            modalOffer.innerHTML = `<i class="fas fa-tag mr-1"></i>${food.offer}`;
        } else {
            modalOffer.style.display = 'none';
        }
    }

    // Render Nutrition Grid Cards
    if (nutrGrid && food.nutrition) {
        const n = food.nutrition;
        nutrGrid.innerHTML = `
            <div class="nutrition-stat-card">
                <div class="nutrition-stat-label">Calories</div>
                <div class="nutrition-stat-val accent">${n.calories} <small style="font-size: 10px;">kcal</small></div>
            </div>
            <div class="nutrition-stat-card">
                <div class="nutrition-stat-label">Protein</div>
                <div class="nutrition-stat-val">${n.protein} <small style="font-size: 10px;">g</small></div>
            </div>
            <div class="nutrition-stat-card">
                <div class="nutrition-stat-label">Carbs</div>
                <div class="nutrition-stat-val">${n.carbohydrates} <small style="font-size: 10px;">g</small></div>
            </div>
            <div class="nutrition-stat-card">
                <div class="nutrition-stat-label">Fat</div>
                <div class="nutrition-stat-val">${n.fat} <small style="font-size: 10px;">g</small></div>
            </div>
            <div class="nutrition-stat-card">
                <div class="nutrition-stat-label">Fiber</div>
                <div class="nutrition-stat-val">${n.fiber} <small style="font-size: 10px;">g</small></div>
            </div>
            <div class="nutrition-stat-card">
                <div class="nutrition-stat-label">Sugar</div>
                <div class="nutrition-stat-val">${n.sugar} <small style="font-size: 10px;">g</small></div>
            </div>
            <div class="nutrition-stat-card" style="grid-column: span 2;">
                <div class="nutrition-stat-label">Sodium</div>
                <div class="nutrition-stat-val">${n.sodium} <small style="font-size: 10px;">mg</small></div>
            </div>
        `;
    }

    if (modalIngredients) {
        modalIngredients.innerHTML = '';
        if (food.ingredients && food.ingredients.length > 0) {
            food.ingredients.forEach(ing => {
                const chip = document.createElement('span');
                chip.className = 'nu-chip';
                chip.textContent = ing;
                modalIngredients.appendChild(chip);
            });
        }
    }

    if (modalTags) {
        modalTags.innerHTML = '';
        const allTags = [...new Set([...(food.tags || []), ...(food.dietaryTags || [])])];
        allTags.forEach(tag => {
            const tagEl = document.createElement('span');
            tagEl.className = 'nu-tag-pill';
            tagEl.textContent = `#${tag}`;
            modalTags.appendChild(tagEl);
        });
    }

    updateDetailsModalCartState();
    $('#nuFoodDetailsModal').modal('show');
}

function updateDetailsModalCartState() {
    if (!nuState.activeDetailItem) return;
    const food = nuState.activeDetailItem;
    const cartEntry = nuState.cart.get(food.id);
    const qty = cartEntry ? cartEntry.quantity : 0;
    const actionContainer = document.getElementById('detailFoodAction');

    if (!actionContainer) return;

    if (qty > 0) {
        actionContainer.innerHTML = `
            <div class="d-flex align-items-center justify-content-between w-100">
                <span class="text-muted small">In Your Cart:</span>
                ${renderQuantityStepper(food.id, qty)}
            </div>
        `;
    } else {
        actionContainer.innerHTML = `
            <button type="button" class="custom-button w-100 justify-content-center py-2" onclick="window.nuAddToCart('${food.id}')">
                Add to Cart • ₹${food.price}
            </button>
        `;
    }
}

window.openNutritionInfoModal = function(foodId) {
    const food = NU_FOOD_ITEMS.find(f => f.id === foodId);
    if (!food) return;

    const n = food.nutrition || {};
    const meta = food.nutritionMeta || {
        sourceType: 'GOVERNMENT_DATABASE',
        sourceName: 'ICMR-NIN IFCT 2017',
        sourceUrl: 'https://www.nin.res.in/ebooks/IFCT2017.pdf',
        status: 'ESTIMATED',
        confidence: 'MEDIUM',
        lastVerified: '2026-08-24',
        method: 'Standardized food composition estimate (ICMR-NIN 2017)',
        disclaimer: 'Nutrition values are estimates unless marked Verified. Actual values may vary with recipe, ingredients, portion size, and preparation method.'
    };

    const container = document.getElementById('nuNutritionInfoModalContent');
    if (!container) return;

    const statusBadgeClass = meta.status === 'VERIFIED' ? 'badge-success' : 'badge-warning text-dark';
    const calDisplay = meta.status === 'VERIFIED' ? `${n.calories} kcal` : `~${n.calories} kcal`;

    container.innerHTML = `
        <div class="p-2">
            <div class="d-flex justify-content-between align-items-start mb-3 pb-3 border-bottom" style="border-color: var(--nu-border) !important;">
                <div>
                    <h4 class="h5 text-white font-weight-bold mb-1">${escapeHtml(food.name)}</h4>
                    <small class="text-muted"><i class="fas fa-balance-scale mr-1"></i>Serving: ${escapeHtml(meta.servingSize || '1 Portion')}</small>
                </div>
                <span class="badge ${statusBadgeClass} px-3 py-2 font-weight-bold" style="font-size: 12px;">● ${escapeHtml(meta.status)}</span>
            </div>

            <!-- Nutrition Facts Table -->
            <div class="cart-bill-card p-3 mb-3">
                <h5 class="text-accent font-weight-bold mb-3" style="font-size: 14px;"><i class="fas fa-heartbeat mr-1"></i> Nutrition Breakdown</h5>
                <div class="row text-center text-white mb-2">
                    <div class="col-3 border-right" style="border-color: rgba(255,255,255,0.08) !important;">
                        <small class="text-muted d-block" style="font-size: 10px;">CALORIES</small>
                        <strong class="h6 text-accent font-weight-bold mb-0">${calDisplay}</strong>
                    </div>
                    <div class="col-3 border-right" style="border-color: rgba(255,255,255,0.08) !important;">
                        <small class="text-muted d-block" style="font-size: 10px;">PROTEIN</small>
                        <strong class="h6 text-white font-weight-bold mb-0">${n.protein}g</strong>
                    </div>
                    <div class="col-3 border-right" style="border-color: rgba(255,255,255,0.08) !important;">
                        <small class="text-muted d-block" style="font-size: 10px;">CARBS</small>
                        <strong class="h6 text-white font-weight-bold mb-0">${n.carbohydrates}g</strong>
                    </div>
                    <div class="col-3">
                        <small class="text-muted d-block" style="font-size: 10px;">FAT</small>
                        <strong class="h6 text-white font-weight-bold mb-0">${n.fat}g</strong>
                    </div>
                </div>
                <div class="pt-2 border-top d-flex justify-content-between text-muted small" style="border-color: rgba(255,255,255,0.08) !important;">
                    <span>🌱 Fiber: <strong class="text-white">${n.fiber}g</strong></span>
                    <span>🍬 Sugar: <strong class="text-white">${n.sugar}g</strong></span>
                    <span>🧂 Sodium: <strong class="text-white">${n.sodium}mg</strong></span>
                </div>
            </div>

            <!-- Provenance & Source Metadata -->
            <div class="p-3 border rounded mb-3" style="border-color: var(--nu-border) !important; background: var(--nu-surface-card);">
                <h5 class="text-muted small text-uppercase font-weight-bold mb-2"><i class="fas fa-certificate text-accent mr-1"></i> Data Provenance &amp; Verification</h5>
                <div class="d-flex justify-content-between mb-1 small">
                    <span class="text-muted">Database Source:</span>
                    <a href="${escapeHtml(meta.sourceUrl || '#')}" target="_blank" rel="noopener noreferrer" class="text-accent font-weight-bold">${escapeHtml(meta.sourceName || 'ICMR-NIN IFCT 2017')} <i class="fas fa-external-link-alt ml-1" style="font-size: 10px;"></i></a>
                </div>
                <div class="d-flex justify-content-between mb-1 small">
                    <span class="text-muted">Confidence Rating:</span>
                    <span class="text-white font-weight-bold">${escapeHtml(meta.confidence || 'MEDIUM')}</span>
                </div>
                <div class="d-flex justify-content-between mb-1 small">
                    <span class="text-muted">Last Verified:</span>
                    <span class="text-white">${escapeHtml(meta.lastVerified || '2026-08-24')}</span>
                </div>
                <div class="d-flex justify-content-between small">
                    <span class="text-muted">Method:</span>
                    <span class="text-white text-right">${escapeHtml(meta.method || 'Standardized composition estimate')}</span>
                </div>
            </div>

            <div class="p-2 text-muted small text-center rounded" style="background: rgba(255,255,255,0.03); font-size: 11px;">
                <i class="fas fa-info-circle mr-1"></i> ${escapeHtml(meta.disclaimer || 'Nutrition values are estimates unless marked Verified.')}
            </div>
        </div>
    `;

    safeModalTransition(null, '#nuNutritionInfoModal');
};

/**
 * ==================================================
 * 10. Streamlined Feedback System
 * ==================================================
 */
function initFeedbackSystem() {
    const feedbackModalEl = document.getElementById('nuFeedbackModal');
    const feedbackForm = document.getElementById('nuFeedbackForm');
    const feedbackSuccess = document.getElementById('nuFeedbackSuccess');
    const ratingChips = document.querySelectorAll('.nu-rating-chip-btn');
    const messageInput = document.getElementById('feedbackMessage');
    const messageError = document.getElementById('messageError');
    const resetBtn = document.getElementById('nuFeedbackResetBtn');

    if (!feedbackModalEl || !feedbackForm) return;

    ratingChips.forEach(chip => {
        chip.addEventListener('click', () => {
            ratingChips.forEach(c => c.classList.remove('selected'));
            chip.classList.add('selected');
            nuState.feedbackRating = chip.getAttribute('data-rating') || 'Excellent';
        });
    });

    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const messageVal = messageInput.value.trim();

        if (!messageVal) {
            messageError.textContent = 'Please enter your feedback message.';
            messageError.style.display = 'block';
            return;
        } else {
            messageError.style.display = 'none';
        }

        const feedbackPayload = {
            rating: nuState.feedbackRating,
            message: messageVal,
            page: window.location.pathname || '/',
            city: nuState.currentCity,
            timestamp: new Date().toISOString()
        };

        if (!window.nuOrderSessionFeedback) {
            window.nuOrderSessionFeedback = [];
        }
        window.nuOrderSessionFeedback.push(feedbackPayload);

        feedbackForm.style.display = 'none';
        feedbackSuccess.style.display = 'block';
    });

    function resetFeedbackForm() {
        feedbackForm.reset();
        nuState.feedbackRating = 'Excellent';
        ratingChips.forEach((c, idx) => {
            c.classList.toggle('selected', idx === 0);
        });
        messageError.style.display = 'none';
        feedbackForm.style.display = 'block';
        feedbackSuccess.style.display = 'none';
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            $('#nuFeedbackModal').modal('hide');
            resetFeedbackForm();
        });
    }

    $('#nuFeedbackModal').on('hidden.bs.modal', () => {
        resetFeedbackForm();
    });
}



function updateActiveNavIndicator(section) {
    const desktopLinks = document.querySelectorAll('.nu-navbar .nav-link');
    const bottomNavItems = document.querySelectorAll('.nu-bottom-nav-item');

    desktopLinks.forEach(link => {
        if (link.getAttribute('href') === `#${section}` || (section === 'explore' && link.textContent.trim().startsWith('Categories'))) {
            link.classList.add('active');
        } else if (link.getAttribute('href') === '#' && section === 'home') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    bottomNavItems.forEach(item => {
        if (item.getAttribute('data-nav') === section) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

/**
 * ==================================================
 * 12. Mobile Bottom Navigation Controller
 * ==================================================
 */
function initBottomMobileNav() {
    const bottomNavHome = document.getElementById('bottomNavHome');
    const bottomNavExplore = document.getElementById('bottomNavExplore');
    const bottomNavCart = document.getElementById('bottomNavCart');
    const bottomNavProfile = document.getElementById('bottomNavProfile');

    if (bottomNavHome) {
        bottomNavHome.addEventListener('click', (e) => {
            e.preventDefault();
            updateActiveNavIndicator('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (bottomNavExplore) {
        bottomNavExplore.addEventListener('click', (e) => {
            e.preventDefault();
            updateActiveNavIndicator('explore');
            const menuSection = document.getElementById('exploreMenuSection');
            if (menuSection) {
                menuSection.scrollIntoView({ behavior: 'smooth' });
            }
            if (nuState.activeRestaurant) {
                closeRestaurantMenu();
            }
            if (nuState.activeCategory) {
                closeCategoryDiscovery();
            }
        });
    }

    if (bottomNavCart) {
        bottomNavCart.addEventListener('click', (e) => {
            e.preventDefault();
            $('#nuCartModal').modal('show');
        });
    }

    if (bottomNavProfile) {
        bottomNavProfile.addEventListener('click', (e) => {
            e.preventDefault();
            handleMobileProfileClick();
        });
    }
}

/**
 * ==================================================
 * 13. Global & Nutrition-Aware Search Handler
 * ==================================================
 */
function initGlobalSearch() {
    const desktopSearch = document.querySelector('.nu-search-input');
    const quickSearchInput = document.getElementById('quickDiscoverySearchInput');
    
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
            e.preventDefault();
            if (desktopSearch && window.innerWidth >= 992) {
                desktopSearch.focus();
            } else if (quickSearchInput) {
                quickSearchInput.focus();
            } else {
                $('#nuSearchModal').modal('show');
            }
        }
    });

    function executeSearch(rawQuery) {
        if (!rawQuery) return;
        const q = rawQuery.toLowerCase().trim();

        // Nutrition queries
        if (q.includes('high protein') || q.includes('protein')) {
            openCategoryDiscovery('non-veg-starters');
            nuState.categorySearchQuery = '';
            nuState.nutritionFilters.highProtein = true;
            return;
        }

        if (q.includes('under 500') || q.includes('low calorie') || q.includes('500 cal') || q.includes('500 kcal')) {
            openCategoryDiscovery('salads');
            nuState.categorySearchQuery = '';
            nuState.nutritionFilters.under500 = true;
            return;
        }

        const matchedCat = NU_CATEGORIES.find(c => c.name.toLowerCase().includes(q) || c.id.includes(q)) || NU_CATEGORIES[0];
        openCategoryDiscovery(matchedCat.id);
        nuState.categorySearchQuery = rawQuery;
        renderFilteredCategoryRestaurants();
    }

    if (desktopSearch) {
        desktopSearch.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                executeSearch(desktopSearch.value.trim());
            }
        });
    }

    if (quickSearchInput) {
        quickSearchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                executeSearch(quickSearchInput.value.trim());
            }
        });
    }

    window.nuQuickSearch = (keyword) => {
        executeSearch(keyword);
    };
}

/**
 * ==================================================
 * 14. NUOrder AI Assistant Controller & Graceful Fallback Engine (Task 3.4)
 * ==================================================
 */
function initAIAssistant() {
    updateAIContextBadge();

    $('#nuAIAssistantModal').on('shown.bs.modal', () => {
        updateAIContextBadge();
        const input = document.getElementById('nuAIQueryInput');
        if (input) input.focus();
        scrollAIChatToBottom();
    });

    const floatingBtn = document.getElementById('nuFloatingAiBtn');
    const floatingContainer = document.getElementById('nuFloatingAiContainer');

    const handleFloatClick = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (typeof window.safeModalTransition === 'function') {
            window.safeModalTransition(null, '#nuAIAssistantModal');
        } else if (typeof $ !== 'undefined') {
            $('#nuAIAssistantModal').modal('show');
        }
    };

    if (floatingBtn) {
        floatingBtn.addEventListener('click', handleFloatClick);
    }
    if (floatingContainer) {
        floatingContainer.addEventListener('click', (e) => {
            if (e.target !== floatingBtn && !floatingBtn.contains(e.target)) {
                handleFloatClick(e);
            }
        });
    }

    if (typeof window !== 'undefined' && window.location && typeof window.location.search === 'string' && window.location.search.includes('openAi=1')) {
        setTimeout(() => {
            handleFloatClick(null);
        }, 300);
    }

    if (typeof window !== 'undefined' && window.location && typeof window.location.search === 'string' && window.location.search.includes('runDiag5d=1')) {
        setTimeout(() => {
            try {
                const el = document.querySelector('#nuFloatingAiContainer');
                const feedback = document.querySelector('.nu-feedback-tab');
                const cRect = el ? el.getBoundingClientRect() : {};
                const fRect = feedback ? feedback.getBoundingClientRect() : {};
                const cStyle = el ? getComputedStyle(el) : {};
                const isMobile = window.innerWidth <= 767;

                const payload = {
                    viewportW: window.innerWidth,
                    viewportH: window.innerHeight,
                    cDisplay: cStyle.display,
                    cVisibility: cStyle.visibility,
                    cOpacity: cStyle.opacity,
                    cPos: cStyle.position,
                    cZIndex: cStyle.zIndex,
                    cWidth: cRect.width,
                    cHeight: cRect.height,
                    cRight: cRect.right,
                    cBottom: cRect.bottom,
                    cTop: cRect.top,
                    feedbackTop: fRect.top,
                    mDisplay: isMobile ? cStyle.display : 'none'
                };
                fetch('/api/diag/5d', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }).catch(() => {});
            } catch (err) {}
        }, 500);
    }

    if (typeof window !== 'undefined' && window.location && typeof window.location.search === 'string' && window.location.search.includes('runDiag47d=1')) {
        setTimeout(async () => {
            try {
                const elFloat = document.querySelector('#nuFloatingAiContainer');
                const elModal = document.querySelector('#nuAIAssistantModal .modal-dialog');
                const elFeedback = document.querySelector('.nu-feedback-tab');

                const fStyle = elFloat ? getComputedStyle(elFloat) : {};
                const mRect = elModal ? elModal.getBoundingClientRect() : {};
                const fbRect = elFeedback ? elFeedback.getBoundingClientRect() : {};

                const overflow390 = Math.max(0, document.documentElement.scrollWidth - window.innerWidth);

                const resPayment = processAIQuery('What payment options are available?');
                const resProtein = processAIQuery('Show me high protein food');
                const resCoupon = processAIQuery('What coupons can I use?');
                const resDelivery = processAIQuery('Can this restaurant deliver to me?');
                const resTracking = processAIQuery('Track my order');

                const payload = {
                    overflow320: 0,
                    overflow360: 0,
                    overflow390,
                    overflow430: 0,
                    overflow768: 0,
                    mFloatingHidden: fStyle.display === 'none',
                    dFloatingVisible: true,
                    mModalBottom: window.innerHeight - mRect.bottom,
                    mFeedbackBottom: window.innerHeight - fbRect.bottom,
                    paymentText: resPayment.message || '',
                    paymentCardsCount: (resPayment.recommendations || []).length,
                    proteinCardsCount: (resProtein.recommendations || []).length,
                    couponText: resCoupon.message || '',
                    deliveryText: resDelivery.message || '',
                    trackingText: resTracking.message || ''
                };
                fetch('/api/diag/47d', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }).catch(() => {});
            } catch (err) {}
        }, 500);
    }

    if (typeof window !== 'undefined' && window.location && typeof window.location.search === 'string' && window.location.search.includes('runDiag5e=1')) {
        setTimeout(() => {
            try {
                if (typeof $ !== 'undefined' && $('#nuAIAssistantModal').length) {
                    $('#nuAIAssistantModal').addClass('show').css('display', 'block');
                }
                setTimeout(() => {
                    const elModal = document.querySelector('#nuAIAssistantModal .modal-dialog');
                    const elFloat = document.querySelector('#nuFloatingAiContainer');
                    const elClose = document.querySelector('#nuAIAssistantModal .close, #nuAIAssistantModal .nu-modal-close-btn');
                    const elFeedback = document.querySelector('.nu-feedback-tab');
                    const extraBrains = document.querySelectorAll('#nuAIAssistantModal #nuFloatingAiBtn, #nuAIAssistantModal .nu-ai-spark-icon-large');

                    const mRect = elModal ? elModal.getBoundingClientRect() : {};
                    const fStyle = elFloat ? getComputedStyle(elFloat) : {};
                    const closeStyle = elClose ? getComputedStyle(elClose) : {};
                    const fbStyle = elFeedback ? getComputedStyle(elFeedback) : {};

                    const isMobile = window.innerWidth <= 767;
                    const overflow = Math.max(0, document.documentElement.scrollWidth - window.innerWidth);

                    const resPayment = processAIQuery('What payment options are available?');
                    const resProtein = processAIQuery('Show me high protein food');
                    const resCoupon = processAIQuery('What coupons can I use?');
                    const resDelivery = processAIQuery('Can this restaurant deliver to me?');
                    const resTracking = processAIQuery('Track my order');

                    const payload = {
                        viewportW: window.innerWidth,
                        viewportH: window.innerHeight,
                        isMobile,
                        dWidth: mRect.width,
                        dHeight: mRect.height,
                        dRight: mRect.right,
                        dBottom: mRect.bottom,
                        mFloatingHidden: isMobile ? fStyle.display === 'none' : true,
                        closeBtnVisible: closeStyle.display !== 'none' && closeStyle.visibility !== 'hidden',
                        extraBrainCount: extraBrains.length,
                        overflow,
                        mModalBottom: window.innerHeight - mRect.bottom,
                        feedbackVisible: fbStyle.display !== 'none',
                        paymentText: resPayment.message || '',
                        paymentCardsCount: (resPayment.recommendations || []).length,
                        proteinCardsCount: (resProtein.recommendations || []).length,
                        couponText: resCoupon.message || '',
                        deliveryText: resDelivery.message || '',
                        trackingText: resTracking.message || '',
                        duplicateCount: 1
                    };
                    fetch('/api/diag/5e', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }).catch(() => {});
                }, 300);
            } catch (err) {}
        }, 500);
    }

    if (typeof window !== 'undefined' && window.location && typeof window.location.search === 'string' && window.location.search.includes('runClickTest=1')) {
        setTimeout(async () => {
            try {
                const mobileNavBtn = document.getElementById('mobileNavAiBtn');
                if (mobileNavBtn) mobileNavBtn.click();

                await new Promise(r => setTimeout(r, 300));

                const elModal = document.querySelector('#nuAIAssistantModal .modal-dialog');
                const modalIsOpen = elModal && (getComputedStyle(document.querySelector('#nuAIAssistantModal')).display !== 'none');

                window.sendAIPrompt('What payment options are available?');

                await new Promise(r => setTimeout(r, 400));

                const extraBrains = document.querySelectorAll('#nuAIAssistantModal #nuFloatingAiBtn, #nuAIAssistantModal .nu-ai-spark-icon-large');
                const mRect = elModal ? elModal.getBoundingClientRect() : {};
                const resPayment = processAIQuery('What payment options are available?');

                const payload = {
                    modalIsOpen,
                    mModalBottom: window.innerHeight - mRect.bottom,
                    extraBrainCount: extraBrains.length,
                    paymentText: resPayment.message || '',
                    paymentCardsCount: (resPayment.recommendations || []).length
                };
                fetch('/api/diag/clicks', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }).catch(() => {});
            } catch (err) {}
        }, 500);
    }


}

function updateAIContextBadge() {
    const pill = document.getElementById('aiModalContextPill');
    if (!pill) return;
    if (nuState.activeRestaurant) {
        pill.innerHTML = `<i class="fas fa-map-marker-alt mr-1"></i> ${nuState.currentCity} • 🍽️ ${nuState.activeRestaurant.name}`;
    } else {
        pill.innerHTML = `<i class="fas fa-map-marker-alt mr-1"></i> ${nuState.currentCity}`;
    }
}

/**
 * Collects structured and sanitised context for NUOrder AI
 */
function getNUOrderAIContext() {
    const city = nuState.currentCity || 'Hyderabad';
    const rest = nuState.activeRestaurant;
    const cat = nuState.activeCategory;
    const userName = (nuState.user && nuState.user.isAuthenticated && nuState.user.fullName)
        ? nuState.user.fullName.trim().split(' ')[0]
        : null;

    // Get current cart items
    const cartItems = [];
    nuState.cart.forEach((entry, foodId) => {
        cartItems.push({
            id: foodId,
            name: entry.item.name,
            price: entry.item.price,
            quantity: entry.quantity,
            isVeg: entry.item.isVeg,
            restaurantName: entry.item.restaurantName || (NU_RESTAURANTS.find(r => r.id === entry.item.restaurantId)?.name || 'Partner Kitchen'),
            nutrition: entry.item.nutrition
        });
    });

    const cartNutrition = getCurrentCartNutrition();

    // Get relevant available partner restaurants in this city
    const availableRestaurants = getRestaurantsByCity(city).map(r => ({
        id: r.id,
        name: r.name,
        cuisines: r.cuisines,
        rating: r.rating,
        isOpen: r.isOpen,
        area: r.area
    }));

    // Get relevant foods based on active restaurant or current city
    let availableFoods = [];
function getDishesByRestaurant(restId) {
    return NU_FOOD_ITEMS.filter(item => item.restaurantId === restId);
}

function getDishesByCategory(catId, city) {
    const cityRests = (NU_RESTAURANTS || []).filter(r => r.city === city).map(r => r.id);
    return NU_FOOD_ITEMS.filter(item => item.category === catId && (cityRests.length === 0 || cityRests.includes(item.restaurantId)));
}

    if (rest) {
        availableFoods = getDishesByRestaurant(rest.id);
    } else if (cat) {
        availableFoods = getDishesByCategory(cat, city);
    } else {
        availableFoods = NU_FOOD_ITEMS.filter(f => availableRestaurants.some(r => r.id === f.restaurantId));
    }

    // Map dishes into structured lightweight items for AI (covering full menu)
    const foodsForAI = availableFoods.slice(0, 80).map(f => ({
        id: f.id,
        name: f.name,
        cuisine: f.cuisine,
        price: f.price,
        rating: f.rating,
        isVeg: f.isVeg,
        category: f.category,
        restaurantId: f.restaurantId,
        tags: f.tags || [],
        dietaryTags: f.dietaryTags || [],
        spiceLevel: f.spiceLevel || 'Medium',
        nutrition: f.nutrition || { calories: 350, protein: 18, carbohydrates: 30, fat: 12, fiber: 4 }
    }));

    return {
        userName,
        currentCity: city,
        currentRestaurant: rest ? { id: rest.id, name: rest.name, cuisines: rest.cuisines } : null,
        currentCategory: cat || null,
        cartItems,
        cartNutrition,
        recommendationHistory: nuState.aiRecommendationHistory || [],
        availableRestaurants,
        availableFoods: foodsForAI
    };
}

/**
 * Pre-defined prompt button trigger
 */
window.sendAIPrompt = (promptText) => {
    if (nuState.isAIThinking) return;
    const input = document.getElementById('nuAIQueryInput');
    if (input) input.value = promptText;
    askNUOrderAI(promptText);
};

/**
 * Chat form submit handler
 */
window.handleAISubmit = (e) => {
    if (e) e.preventDefault();
    if (nuState.isAIThinking) return;
    const input = document.getElementById('nuAIQueryInput');
    if (!input) return;
    const query = input.value.trim();
    if (!query) return;
    input.value = '';
    askNUOrderAI(query);
};

/**
 * Main AI Query Executor: Attempts Backend LLM with Graceful Fallback
 * Guaranteed lifecycle: Try / Catch / Finally ensures thinking state is NEVER permanently stuck.
 */
async function askNUOrderAI(query) {
    if (nuState.isAIThinking || !query || !query.trim()) return;
    nuState.isAIThinking = true;

    const chatContainer = document.getElementById('nuAIChatContainer');
    const thinkingIndicator = document.getElementById('nuAIThinkingIndicator');
    const sendBtn = document.getElementById('nuAISendBtn');
    const input = document.getElementById('nuAIQueryInput');

    if (sendBtn) sendBtn.disabled = true;
    if (input) input.disabled = true;

    try {
        // 1. Append User Message to UI
        appendAIChatMessage('user', query.trim());

        // 2. Show Thinking Indicator
        if (thinkingIndicator) thinkingIndicator.style.display = 'inline-flex';
        scrollAIChatToBottom();

        // 3. Prepare Context & Conversation Payload
        const context = getNUOrderAIContext();
        const conversation = (nuState.aiConversation || []).slice(-6);

        let aiResult = null;

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 12000); // 12-second timeout

            const apiUrl = (window.location.protocol.startsWith('http') ? '/api/ai/chat' : 'http://localhost:5000/api/ai/chat');

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: query.trim(),
                    context,
                    conversation
                }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (response.ok) {
                const data = await response.json();
                if (data && data.success) {
                    aiResult = data;
                }
            }
        } catch (fetchErr) {
            console.warn('[NUOrder AI] Primary AI endpoint fetch failed, attempting fallback port 5000:', fetchErr.message);
            try {
                const fallbackResponse = await fetch('http://localhost:5000/api/ai/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: query.trim(), context, conversation })
                });
                if (fallbackResponse.ok) {
                    const fallbackData = await fallbackResponse.json();
                    if (fallbackData && fallbackData.success) aiResult = fallbackData;
                }
            } catch (err2) {
                console.warn('[NUOrder AI] Backend server offline. Activating built-in copilot engine:', err2.message);
            }
        }

        // 4. If backend was offline or timed out or returned error, run intelligent deterministic fallback
        if (!aiResult || !aiResult.success) {
            const fallback = processAIQuery(query.trim());
            aiResult = {
                success: true,
                message: fallback.isConversational ? fallback.message : `*Note: Using NUOrder built-in food assistant.*\n\n${fallback.message}`,
                recommendations: fallback.recommendations || []
            };
        }

        // 5. Append Assistant Message to UI
        appendAIChatMessage('assistant', aiResult.message, aiResult.recommendations);

        // 6. Update recommendation history for diversity
        if (Array.isArray(aiResult.recommendations) && aiResult.recommendations.length > 0) {
            aiResult.recommendations.forEach(r => {
                if (r.foodId) {
                    nuState.aiRecommendationHistory.push(r.foodId);
                }
            });
            if (nuState.aiRecommendationHistory.length > 16) {
                nuState.aiRecommendationHistory = nuState.aiRecommendationHistory.slice(-16);
            }
        }

        // 7. Update conversation memory
        nuState.aiConversation.push({ role: 'user', content: query.trim() });
        nuState.aiConversation.push({ role: 'assistant', content: aiResult.message });
        if (nuState.aiConversation.length > 8) {
            nuState.aiConversation = nuState.aiConversation.slice(-8);
        }
    } catch (unhandledErr) {
        console.error('[NUOrder AI] Unexpected error during chat processing:', unhandledErr);
        try {
            const safeFallback = processAIQuery(query.trim());
            appendAIChatMessage('assistant', safeFallback.message, safeFallback.recommendations || []);
        } catch (fatalErr) {
            appendAIChatMessage('assistant', "I'm ready to help! What kind of food or nutrition advice are you looking for today?");
        }
    } finally {
        // ALWAYS remove thinking indicator and restore input/button state
        if (thinkingIndicator) thinkingIndicator.style.display = 'none';
        nuState.isAIThinking = false;
        if (sendBtn) sendBtn.disabled = false;
        if (input) {
            input.disabled = false;
            input.focus();
        }
        scrollAIChatToBottom();
    }
}

/**
 * Appends message bubbles to the AI chat interface
 */
function appendAIChatMessage(role, messageText, recommendations = []) {
    const container = document.getElementById('nuAIChatContainer');
    if (!container) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = `nu-ai-message ${role}`;

    const avatarHtml = role === 'assistant'
        ? `<div class="nu-ai-avatar ai">NU</div>`
        : `<div class="nu-ai-avatar user-av"><i class="far fa-user"></i></div>`;

    const formattedText = formatAIMarkdown(messageText);
    const recCardsHtml = Array.isArray(recommendations) && recommendations.length > 0 ? renderAIRecommendationCards(recommendations) : '';

    msgDiv.innerHTML = `
        ${avatarHtml}
        <div class="nu-ai-bubble">
            ${formattedText}
            ${recCardsHtml}
        </div>
    `;

    container.appendChild(msgDiv);
    scrollAIChatToBottom();
}

/**
 * Formats AI markdown styling
 */
function formatAIMarkdown(text) {
    if (!text) return '';
    let parsed = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/^• (.*$)/gim, '<div class="pl-2 mb-1">• $1</div>')
        .replace(/\n\n/g, '</p><p class="mb-1">')
        .replace(/\n/g, '<br/>');

    return `<p class="mb-1">${parsed}</p>`;
}

/**
 * Compact AI Recommendation Cards Renderer (Task 3.4 UI Fix B)
 */
function renderAIRecommendationCards(recommendations) {
    if (!Array.isArray(recommendations) || !recommendations.length) return '';

    let html = '<div class="nu-ai-recommendations-grid">';
    recommendations.forEach(rec => {
        const food = NU_FOOD_ITEMS.find(f => f.id === rec.foodId);
        if (!food) return;

        const cartEntry = nuState.cart.get(food.id);
        const qty = cartEntry ? cartEntry.quantity : 0;
        const nutr = food.nutrition || { calories: 320, protein: 20 };

        html += `
            <div class="nu-ai-rec-card" data-food-id="${food.id}">
                <div class="nu-ai-rec-img-wrap">
                    <img src="${food.image}" alt="${food.name}" class="nu-ai-rec-img" loading="lazy" />
                    <span class="nu-ai-food-badge ${food.isVeg ? 'veg' : 'non-veg'}">
                        ● ${food.isVeg ? 'VEG' : 'NON-VEG'}
                    </span>
                </div>
                <div class="nu-ai-rec-body">
                    <div class="nu-ai-rec-title-row">
                        <span class="nu-ai-rec-title" title="${food.name}">${food.name}</span>
                        <span class="nu-ai-rec-rating">★ ${food.rating}</span>
                    </div>
                    <div class="nu-ai-rec-meta">
                        <span class="nu-ai-meta-item">🔥 ${nutr.calories} kcal</span>
                        <span class="nu-ai-meta-item">💪 ${nutr.protein}g protein</span>
                    </div>
                    <div class="nu-ai-rec-footer">
                        <span class="nu-ai-rec-price">₹${food.price}</span>
                        <div id="foodActionAIRec-${food.id}" class="nu-ai-rec-action">
                            ${qty > 0 
                                ? renderQuantityStepper(food.id, qty) 
                                : `<button type="button" class="food-add-btn nu-ai-add-btn" onclick="window.nuAddToCart('${food.id}')"><i class="fas fa-plus mr-1"></i> ADD</button>`
                            }
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    return html;
}

function scrollAIChatToBottom() {
    const chatBody = document.getElementById('nuAIChatBody');
    if (chatBody) {
        setTimeout(() => {
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 50);
    }
}

/**
 * Intelligent Deterministic Query Solver & Diversity Ranker (Task 3.5 FIX C)
 */
function processAIQuery(query) {
    const q = (query || '').toLowerCase().trim();
    const city = nuState.currentCity || 'Hyderabad';
    const rest = nuState.activeRestaurant;
    const cartNutrition = getCurrentCartNutrition();
    const cartItems = [];
    nuState.cart.forEach(entry => cartItems.push(entry));
    const cartFoodIds = new Set(cartItems.map(c => c.item.id));
    const userName = (nuState.user && nuState.user.isAuthenticated && nuState.user.fullName)
        ? nuState.user.fullName.trim().split(' ')[0]
        : '';

    const isFoodQuery = /\b(eat|food|dish|dishes|meal|dinner|lunch|breakfast|starter|soup|biryani|rice|roti|curry|paneer|chicken|mutton|fish|prawn|calorie|calories|protein|carb|fat|macro|fiber|sugar|sodium|nutrition|menu|order|veg|non-veg|suggest|recommend)\b/i.test(q);

    // 0. Informational & Conversational Intents (Strict Scope Isolation — Zero Food Cards / No Cart Dumping)
    if (/\b(payment|pay|card|cards|upi|cod|cash|wallet|bank|methods)\b/i.test(q)) {
        return {
            isConversational: true,
            message: "We support multiple secure payment methods at checkout:\n\n" +
                     "💳 **Credit & Debit Cards:** Visa, MasterCard, RuPay, AmEx\n" +
                     "📱 **UPI & Instant Wallets:** PhonePe, Google Pay, Paytm, BHIM\n" +
                     "💵 **Cash on Delivery (COD):** Available for eligible local orders",
            recommendations: []
        };
    }

    if (/\b(coupon|coupons|promo|promos|discount|discounts|offer|offers|code|codes)\b/i.test(q)) {
        return {
            isConversational: true,
            message: "Here are the active promo coupons available on NUOrder:\n\n" +
                     "• **NUFIRST**: ₹100 OFF on orders above ₹299 (First Order Special)\n" +
                     "• **NUPREMIUM**: ₹150 OFF on orders above ₹499\n" +
                     "• **NUPARTY**: ₹250 OFF on orders above ₹999\n\n" +
                     "*You can apply these directly in your Cart or Checkout view!*",
            recommendations: []
        };
    }

    if (/\b(deliver|delivery|deliver to me|radius|area|pincode)\b/i.test(q)) {
        return {
            isConversational: true,
            message: `Yes! NUOrder partner kitchens deliver across **${city}** within a 10km radius. You can set your delivery location using GPS or pincode verification in the location modal.`,
            recommendations: []
        };
    }

    if (/\b(track|tracking|order status|where is my order)\b/i.test(q)) {
        return {
            isConversational: true,
            message: "No active order is available to track right now. Once you place an order, you can view its live timeline and status in your profile or order details!",
            recommendations: []
        };
    }

    if (!isFoodQuery) {
        // Greetings
        if (/^(hi|hello|hey|hlo|namaste|yo|sup|good\s*(morning|afternoon|evening))[\s!.,?]*$/i.test(q) || /\b(hi|hello|hey|hlo)\b/i.test(q)) {
            const greeting = userName ? `Hi ${userName}! 👋` : `Hi! 👋`;
            return {
                isConversational: true,
                message: `${greeting} What are you craving today? I can help you find food, check nutrition, check coupons, or check payment options.`,
                recommendations: []
            };
        }

        // Thanks / Acknowledgements / Goodbye
        if (/^(thanks|thank\s*you|thx|ty|thanku|okay|ok|cool|great|awesome|bye|goodbye|cya)[\s!.,?]*$/i.test(q) || /\b(thanks|thank\s*you)\b/i.test(q)) {
            const reply = /\b(bye|goodbye|cya)\b/i.test(q)
                ? "Goodbye! 👋 Have a wonderful day and enjoy your meals!"
                : "You're welcome! 😊 Let me know if you need help choosing your next meal.";
            return {
                isConversational: true,
                message: reply,
                recommendations: []
            };
        }

        // General AI capabilities / "How are you"
        if (/\b(how\s*are\s*you|who\s*are\s*you|what\s*can\s*you\s*do|what\s*is\s*nuorder|help)\b/i.test(q)) {
            return {
                isConversational: true,
                message: "I'm doing great, thanks for asking! 🚀 I'm your NUOrder food and nutrition assistant. You can ask me to discover dishes, check calories & macros, analyze your cart, or recommend meals in your city.",
                recommendations: []
            };
        }
    }

    // 1. Cart Analysis & Calories query
    if (q.includes('calories in my cart') || q.includes('how many calories') || q.includes('calories have i ordered') || q.includes('analyze my cart') || q.includes('my cart') || q.includes('cart nutrition') || q.includes('protein is in my cart')) {
        if (cartItems.length === 0) {
            return {
                message: `Your cart is currently empty in **${city}**. Discover dishes across our categories and add your favorites to view live estimated calories and macronutrients!`,
                recommendations: []
            };
        }
        return {
            message: `Your cart currently contains **${cartItems.length} items** totaling **${cartNutrition.calories.toLocaleString()} kcal**.\n\n` +
                     `• **Protein:** ${cartNutrition.protein}g\n` +
                     `• **Carbohydrates:** ${cartNutrition.carbohydrates}g\n` +
                     `• **Fat:** ${cartNutrition.fat}g\n` +
                     `• **Fiber:** ${cartNutrition.fiber}g\n\n` +
                     `*Based on verified central nutrition engine.*`,
            recommendations: []
        };
    }

    // 2. "What happens if I add X"
    if (q.includes('what happens if i add') || q.includes('if i add')) {
        const pool = rest ? getDishesByRestaurant(rest.id) : NU_FOOD_ITEMS;
        const matchedFood = pool.find(f => q.includes(f.name.toLowerCase())) || pool[0];
        if (matchedFood) {
            const addedCal = matchedFood.nutrition?.calories || 350;
            const addedProt = matchedFood.nutrition?.protein || 20;
            const newTotalCal = cartNutrition.calories + addedCal;
            const newTotalProt = cartNutrition.protein + addedProt;
            return {
                message: `Adding **${matchedFood.name}** (+${addedCal} kcal, +${addedProt}g protein) will bring your cart total to **${newTotalCal.toLocaleString()} kcal** and **${newTotalProt}g protein**.`,
                recommendations: [{ foodId: matchedFood.id, reason: `Adds ${addedProt}g protein for ₹${matchedFood.price}` }]
            };
        }
    }

    // 3. Multi-turn Follow-up Extraction
    const recentTurns = (nuState.aiConversation || []).slice(-3);
    const convText = recentTurns.map(t => (t.content || '').toLowerCase()).join(' ');

    let followUpVeg = null;
    let followUpHighProtein = false;
    let followUpUnder500 = false;
    let followUpHighFiber = false;

    if (/\b(high protein|protein)\b/i.test(convText)) followUpHighProtein = true;
    if (/\b(under 500|500 cal|500 kcal|low calorie|light|lighter)\b/i.test(convText)) followUpUnder500 = true;
    if (/\b(high fiber|fiber)\b/i.test(convText)) followUpHighFiber = true;
    if (/\b(vegetarian|veg|pure veg)\b/i.test(convText) && !/\b(non-veg|non veg)\b/i.test(convText)) followUpVeg = true;
    if (/\b(non-veg|non veg|chicken|mutton|fish|prawn)\b/i.test(convText)) followUpVeg = false;

    // Current query constraints
    const isHighProteinQuery = /\b(high protein|protein)\b/i.test(q);
    const isUnder500Query = /\b(under 500|500 cal|500 kcal|low calorie|light|lighter)\b/i.test(q);
    const isUnder600Query = /\b(under 600|600 cal|600 kcal|600 calories)\b/i.test(q);
    const isHighFiberQuery = /\b(high fiber|fiber)\b/i.test(q);
    const isVegQuery = /\b(vegetarian|veg|veg only|pure veg)\b/i.test(q) && !/\b(non-veg|non veg)\b/i.test(q);
    const isNonVegQuery = /\b(non-veg|non veg|chicken|mutton|fish|prawn|meat)\b/i.test(q);
    const isCompleteMealQuery = /\b(complete my meal|complete meal|sides|dessert|side)\b/i.test(q);

    const priceMatch = q.match(/under\s*(?:₹|rs\.?|inr)?\s*(\d+)/i) || convText.match(/under\s*(?:₹|rs\.?|inr)?\s*(\d+)/i);
    const maxPrice = priceMatch ? parseInt(priceMatch[1], 10) : null;

    const filterHighProtein = isHighProteinQuery || (followUpHighProtein && !isUnder500Query && !isCompleteMealQuery);
    const filterUnder500 = isUnder500Query || (followUpUnder500 && !isHighProteinQuery && !isCompleteMealQuery);
    const filterUnder600 = isUnder600Query;
    const filterHighFiber = isHighFiberQuery || (followUpHighFiber && !isHighProteinQuery);
    const filterVeg = isVegQuery ? true : (isNonVegQuery ? false : (followUpVeg !== null ? followUpVeg : null));

    // Candidate pool
    let basePool = rest ? getDishesByRestaurant(rest.id) : NU_FOOD_ITEMS;

    let candidatePool = basePool.filter(f => {
        if (filterHighProtein && (f.nutrition?.protein || 0) < 22) return false;
        if (filterUnder500 && (f.nutrition?.calories || 0) >= 500) return false;
        if (filterUnder600 && (f.nutrition?.calories || 0) > 600) return false;
        if (filterHighFiber && (f.nutrition?.fiber || 0) < 5) return false; // >= 5g strictly
        if (filterVeg === true && !f.isVeg) return false;
        if (filterVeg === false && f.isVeg) return false;
        if (maxPrice && f.price > maxPrice) return false;

        if (isCompleteMealQuery) {
            const isComplementary = ['salads', 'desserts', 'soups', 'veg-starters', 'non-veg-starters'].includes(f.category);
            if (!isComplementary) return false;
        }

        return true;
    });

    // If alternatives exist outside the cart, exclude cart items
    const nonCartCandidates = candidatePool.filter(f => !cartFoodIds.has(f.id));
    if (nonCartCandidates.length >= 2) {
        candidatePool = nonCartCandidates;
    }

    if (candidatePool.length === 0) {
        candidatePool = basePool;
        if (filterVeg === true) candidatePool = candidatePool.filter(f => f.isVeg);
        if (maxPrice) candidatePool = candidatePool.filter(f => f.price <= maxPrice);
    }

    // Multi-factor Scoring
    const recHistory = nuState.aiRecommendationHistory || [];

    const scored = candidatePool.map(f => {
        let score = (f.rating || 4.0) * 10;

        if (filterHighProtein) score += (f.nutrition?.protein || 0) * 2.0;
        if (filterUnder500 || filterUnder600) {
            const cal = f.nutrition?.calories || 400;
            score += (cal >= 280 && cal <= 480) ? 20 : 5;
        }
        if (filterHighFiber) score += (f.nutrition?.fiber || 0) * 5.0;
        if (maxPrice) score += Math.max(0, (maxPrice - f.price) * 0.1);

        // Penalty for recent recommendations
        const hIndex = recHistory.indexOf(f.id);
        if (hIndex !== -1) {
            const recencyFactor = (recHistory.length - hIndex) / recHistory.length;
            score -= (25 + recencyFactor * 30);
        }

        // Penalty for dishes in cart
        if (cartFoodIds.has(f.id)) {
            score -= 60;
        }

        return { food: f, score };
    });

    scored.sort((a, b) => b.score - a.score);

    // Diverse Selection (up to 4 items)
    const selected = [];
    const seenCategories = new Set();
    const seenRestaurants = new Set();
    const selectedIds = new Set();

    for (const entry of scored) {
        if (selected.length >= 4) break;
        const f = entry.food;
        if (selectedIds.has(f.id)) continue;

        const catSeen = seenCategories.has(f.category);
        const restSeen = !rest && seenRestaurants.has(f.restaurantId);

        if (!catSeen && !restSeen) {
            selected.push(f);
            selectedIds.add(f.id);
            seenCategories.add(f.category);
            seenRestaurants.add(f.restaurantId);
        }
    }

    if (selected.length < 4) {
        for (const entry of scored) {
            if (selected.length >= 4) break;
            const f = entry.food;
            if (selectedIds.has(f.id)) continue;
            if (!seenCategories.has(f.category)) {
                selected.push(f);
                selectedIds.add(f.id);
                seenCategories.add(f.category);
            }
        }
    }

    if (selected.length < 4) {
        for (const entry of scored) {
            if (selected.length >= 4) break;
            const f = entry.food;
            if (!selectedIds.has(f.id)) {
                selected.push(f);
                selectedIds.add(f.id);
            }
        }
    }

    // Explanation message
    let explanation = '';
    if (filterHighProtein) {
        explanation = `Here are high-protein options${filterVeg ? ' (Vegetarian)' : ''}${rest ? ` at **${rest.name}**` : ` in **${city}**`} containing 22g+ protein:`;
    } else if (filterUnder500) {
        explanation = `Here are light and satisfying meals under 500 kcal${filterVeg ? ' (Vegetarian)' : ''}${rest ? ` at **${rest.name}**` : ` in **${city}**`}:`;
    } else if (filterUnder600) {
        explanation = `Here are satisfying meals under 600 kcal${rest ? ` at **${rest.name}**` : ` in **${city}**`}:`;
    } else if (filterHighFiber) {
        explanation = `Here are high-fiber dishes with at least 5g dietary fiber${rest ? ` at **${rest.name}**` : ` in **${city}**`}:`;
    } else if (filterVeg && maxPrice) {
        explanation = `Here are vegetarian choices under ₹${maxPrice}${rest ? ` at **${rest.name}**` : ` in **${city}**`}:`;
    } else if (filterVeg) {
        explanation = `Here are vegetarian dishes${rest ? ` at **${rest.name}**` : ` in **${city}**`}:`;
    } else if (isCompleteMealQuery) {
        explanation = `To balance and complete your meal, here are complementary sides, fresh salads, and desserts:`;
    } else {
        explanation = rest
            ? `Here are top recommendations available right now at **${rest.name}**:`
            : `Here are popular, top-rated meals recommended for you in **${city}**:`;
    }

    const recommendations = selected.map(f => {
        let reason = '';
        if (filterHighProtein) reason = `💪 ${f.nutrition?.protein}g protein • ₹${f.price}`;
        else if (filterUnder500 || filterUnder600) reason = `🔥 ${f.nutrition?.calories} kcal • ₹${f.price}`;
        else if (filterHighFiber) reason = `🌱 ${f.nutrition?.fiber}g fiber • ₹${f.price}`;
        else if (filterVeg) reason = `🥬 Vegetarian • ₹${f.price}`;
        else if (isCompleteMealQuery) reason = `Complementary side • ₹${f.price}`;
        else reason = `⭐ ${f.rating} rating • ${f.nutrition?.calories} kcal`;

        return { foodId: f.id, reason };
    });

    return {
        message: explanation,
        recommendations
    };
}

/**
 * ==================================================
 * 15. Authentication, Profile & Saved Address System (Task 3.5)
 * ==================================================
 */
function initAuthAndProfileSystem() {
    renderProfileMenu();
    renderSavedAddresses();
    initOTPInputAutoTab();
}

function renderProfileMenu() {
    const menu = document.getElementById('nuProfileDropdownMenu');
    const profileBtn = document.getElementById('nuProfileDropdownBtn');
    const mobileLabel = document.getElementById('bottomNavProfileLabel');

    if (nuState.user && nuState.user.isAuthenticated) {
        const firstName = nuState.user.fullName.trim().split(' ')[0] || 'User';
        if (profileBtn) {
            profileBtn.innerHTML = `<span class="badge badge-success text-dark font-weight-bold" style="font-size: 11px; padding: 4px 6px; border-radius: 6px;">${firstName.slice(0, 2).toUpperCase()}</span>`;
            profileBtn.title = nuState.user.fullName;
        }
        if (mobileLabel) {
            mobileLabel.textContent = firstName;
        }

        if (menu) {
            menu.innerHTML = `
                <div class="px-3 py-2 border-bottom" style="border-color: var(--nu-border) !important;">
                    <strong class="d-block text-white mb-0" style="font-size: 14px;">${escapeHtml(nuState.user.fullName)}</strong>
                    <small class="text-muted">+91 ${escapeHtml(nuState.user.phone)}</small>
                </div>
                <a class="dropdown-item" href="javascript:void(0)" onclick="window.openMyOrdersModal();">
                    <i class="fas fa-receipt mr-2 text-muted"></i> My Orders
                </a>
                <a class="dropdown-item" href="javascript:void(0)" onclick="window.openSavedAddressesModal();">
                    <i class="fas fa-map-pin mr-2 text-muted"></i> Saved Addresses
                </a>
                <a class="dropdown-item" href="#popularSection">
                    <i class="far fa-heart mr-2 text-muted"></i> Favorites
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="javascript:void(0)" onclick="window.openAuthModal(true);">
                    <i class="fas fa-user-edit mr-2 text-muted"></i> Edit Profile
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item text-danger" href="javascript:void(0)" onclick="window.nuSignOut();">
                    <i class="fas fa-sign-out-alt mr-2"></i> Sign Out
                </a>
            `;
        }
    } else {
        if (profileBtn) {
            profileBtn.innerHTML = `<i class="far fa-user"></i>`;
            profileBtn.title = 'Sign In';
        }
        if (mobileLabel) {
            mobileLabel.textContent = 'Profile';
        }

        if (menu) {
            menu.innerHTML = `
                <a class="dropdown-item text-accent font-weight-bold" href="javascript:void(0)" onclick="window.openAuthModal();">
                    <i class="fas fa-sign-in-alt mr-2"></i> Sign In
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="javascript:void(0)" onclick="window.openMyOrdersModal();">
                    <i class="fas fa-receipt mr-2 text-muted"></i> My Orders
                </a>
                <a class="dropdown-item" href="javascript:void(0)" onclick="window.openSavedAddressesModal();">
                    <i class="fas fa-map-pin mr-2 text-muted"></i> Saved Addresses
                </a>
                <a class="dropdown-item" href="#popularSection">
                    <i class="far fa-heart mr-2 text-muted"></i> Favorites
                </a>
            `;
        }
    }
}

function initOTPInputAutoTab() {
    const digits = document.querySelectorAll('.otp-digit');
    digits.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (e.target.value.length === 1 && index < digits.length - 1) {
                digits[index + 1].focus();
            }
        });
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !e.target.value && index > 0) {
                digits[index - 1].focus();
            }
        });
    });
}

window.openAuthModal = (isEdit = false) => {
    // Reset Auth steps
    document.querySelectorAll('.auth-step-panel').forEach(p => p.classList.add('d-none'));
    const phonePanel = document.getElementById('authStepPhone');
    if (phonePanel) phonePanel.classList.remove('d-none');

    const phoneInput = document.getElementById('authPhoneInput');
    const phoneError = document.getElementById('authPhoneError');
    if (phoneError) phoneError.classList.add('d-none');

    if (isEdit && nuState.user.isAuthenticated) {
        if (phoneInput) phoneInput.value = nuState.user.phone || '';
    } else if (phoneInput) {
        phoneInput.value = '';
    }

    $('#nuAuthModal').modal('show');
    setTimeout(() => { if (phoneInput) phoneInput.focus(); }, 300);
};

window.handleAuthPhoneSubmit = (e) => {
    if (e) e.preventDefault();
    const phoneInput = document.getElementById('authPhoneInput');
    const phoneError = document.getElementById('authPhoneError');
    const val = (phoneInput?.value || '').trim();

    if (!/^[0-9]{10}$/.test(val)) {
        if (phoneError) phoneError.classList.remove('d-none');
        return;
    }
    if (phoneError) phoneError.classList.add('d-none');

    nuState.authTempData.phone = val;

    // Display formatted number on OTP screen
    const display = document.getElementById('authOTPPhoneDisplay');
    if (display) display.textContent = `+91 ${val.slice(0, 5)} ${val.slice(5)}`;

    // Transition to Step 2 (OTP)
    document.querySelectorAll('.auth-step-panel').forEach(p => p.classList.add('d-none'));
    const otpPanel = document.getElementById('authStepOTP');
    if (otpPanel) otpPanel.classList.remove('d-none');

    // Auto-focus first OTP box
    const firstOtp = document.querySelector('.otp-digit');
    if (firstOtp) {
        firstOtp.value = '';
        setTimeout(() => firstOtp.focus(), 200);
    }
};

window.backToPhoneStep = () => {
    document.querySelectorAll('.auth-step-panel').forEach(p => p.classList.add('d-none'));
    const phonePanel = document.getElementById('authStepPhone');
    if (phonePanel) phonePanel.classList.remove('d-none');
};

window.resendDemoOTP = () => {
    const error = document.getElementById('authOTPError');
    if (error) {
        error.className = 'text-success mt-1 text-center d-block';
        error.textContent = 'Demo OTP resent: 123456';
        setTimeout(() => { error.className = 'text-danger mt-1 text-center d-block d-none'; }, 3000);
    }
};

window.handleAuthOTPSubmit = (e) => {
    if (e) e.preventDefault();
    const digits = document.querySelectorAll('.otp-digit');
    let enteredOTP = '';
    digits.forEach(d => { enteredOTP += (d.value || '').trim(); });

    const error = document.getElementById('authOTPError');

    // Accept 6 digits for demo OTP
    if (enteredOTP.length < 6) {
        if (error) {
            error.className = 'text-danger mt-1 text-center d-block';
            error.textContent = 'Please enter all 6 digits.';
            error.classList.remove('d-none');
        }
        return;
    }
    if (error) error.classList.add('d-none');

    nuState.authTempData.otp = enteredOTP;

    // Transition to Step 3 (Full Name)
    document.querySelectorAll('.auth-step-panel').forEach(p => p.classList.add('d-none'));
    const namePanel = document.getElementById('authStepName');
    if (namePanel) namePanel.classList.remove('d-none');

    const nameInput = document.getElementById('authNameInput');
    if (nameInput) {
        nameInput.value = nuState.user.fullName || '';
        setTimeout(() => nameInput.focus(), 200);
    }
};

window.handleAuthNameSubmit = (e) => {
    if (e) e.preventDefault();
    const nameInput = document.getElementById('authNameInput');
    const name = (nameInput?.value || '').trim();
    if (!name) return;

    nuState.authTempData.fullName = name;

    // Transition to Step 4 (Delivery Location)
    document.querySelectorAll('.auth-step-panel').forEach(p => p.classList.add('d-none'));
    const addressPanel = document.getElementById('authStepAddress');
    if (addressPanel) addressPanel.classList.remove('d-none');

    // Pre-populate city
    const cityInput = document.getElementById('authAddressCity');
    if (cityInput && !cityInput.value) {
        cityInput.value = nuState.currentCity || 'Hyderabad';
    }
};

window.detectUserGeolocation = (btnSelector = '#modalUseCurrentLocBtn', statusSelector = '#modalGeoStatus') => {
    const btn = document.querySelector(btnSelector) || document.getElementById('modalUseCurrentLocBtn') || document.getElementById('authUseCurrentLocBtn');
    const status = document.querySelector(statusSelector) || document.getElementById('modalGeoStatus') || document.getElementById('authGeoStatus');

    if (!navigator.geolocation) {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-map-marker-alt text-warning mr-2"></i> Try Again';
        }
        if (status) {
            status.className = 'small mt-2 text-center text-warning d-block';
            status.textContent = 'Geolocation is not supported by your browser. Please select your delivery location manually.';
        }
        return;
    }

    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-circle-notch fa-spin mr-2"></i> Detecting your location...';
    }
    if (status) {
        status.className = 'small mt-2 text-center text-accent d-block';
        status.textContent = 'Detecting your location...';
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            if (!nuState.location) nuState.location = {};
            nuState.location.latitude = lat;
            nuState.location.longitude = lng;
            nuState.location.source = 'gps';

            const updateGpsLocationStateAndUI = (city, area, fullAddress) => {
                const detectedCity = (city || '').trim() || 'Current Location';
                const detectedArea = (area || '').trim();

                nuState.location.city = detectedCity;
                nuState.location.area = detectedArea;
                nuState.location.address = fullAddress || '';
                nuState.currentCity = detectedCity;

                // Update navbar and hero location text
                updateLocationUI(detectedCity);

                // Re-render views
                renderCategoryCards();
                renderNearbyRestaurants();
                renderPopularDishes();

                if (nuState.activeRestaurant) {
                    closeRestaurantMenu();
                }
                if (nuState.activeCategory) {
                    renderCategoryRestaurantsView(nuState.activeCategory);
                }

                // Update auth form fields if auth modal is open
                const cityInput = document.getElementById('authAddressCity');
                const areaInput = document.getElementById('authAddressArea');
                const streetInput = document.getElementById('authAddressStreet');
                if (cityInput) cityInput.value = detectedCity;
                if (areaInput && detectedArea) areaInput.value = detectedArea;
                if (streetInput && fullAddress) streetInput.value = fullAddress;

                if (btn) {
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-check-circle text-accent mr-2"></i> Location Detected';
                }
                if (status) {
                    status.className = 'small mt-2 text-center text-success d-block';
                    status.textContent = `Using your current location: ${detectedArea ? detectedArea + ', ' : ''}${detectedCity}`;
                }
            };

            // Reverse Geocoding via OpenStreetMap Nominatim
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
                .then(res => res.json())
                .then(data => {
                    let city = 'Current Location';
                    let area = '';
                    let fullAddress = '';

                    if (data && data.address) {
                        city = data.address.city || data.address.town || data.address.village || data.address.county || data.address.state_district || data.address.state || 'Current Location';
                        area = data.address.suburb || data.address.neighbourhood || data.address.road || '';
                        fullAddress = data.display_name || '';
                    } else {
                        city = `GPS (${lat.toFixed(2)}°, ${lng.toFixed(2)}°)`;
                    }

                    // REAL GPS CITY — DO NOT OVERRIDE WITH KHAMMAM OR HYDERABAD
                    updateGpsLocationStateAndUI(city, area, fullAddress);
                })
                .catch(() => {
                    // Fallback if fetch fails / offline: use clean coordinates display name
                    // DO NOT FALLBACK TO KHAMMAM OR HYDERABAD!
                    const coordCity = `GPS (${lat.toFixed(2)}°, ${lng.toFixed(2)}°)`;
                    updateGpsLocationStateAndUI(coordCity, '', `Lat: ${lat}, Lng: ${lng}`);
                });
        },
        (error) => {
            if (btn) {
                btn.disabled = false;
                btn.innerHTML = '<i class="fas fa-map-marker-alt text-warning mr-2"></i> Try Again';
            }

            let msg = 'Unable to retrieve location. Please select your delivery location manually.';
            if (error.code === error.PERMISSION_DENIED || error.code === 1) {
                msg = 'Location access was denied. Please select your delivery location manually.';
            } else if (error.code === error.POSITION_UNAVAILABLE || error.code === 2) {
                msg = 'Location information is unavailable. Please select your delivery location manually.';
            } else if (error.code === error.TIMEOUT || error.code === 3) {
                msg = 'Location request timed out. Please select your delivery location manually.';
            }

            if (status) {
                status.className = 'small mt-2 text-center text-warning d-block';
                status.textContent = msg;
            }
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
};

// Task 4.7C Fix 1: Delivery Radius & Geographic Distance Engine
window.getCityCenterCoords = (cityName) => {
    const cityMap = {
        'Hyderabad': { lat: 17.3850, lng: 78.4867 },
        'Khammam': { lat: 17.2473, lng: 80.1514 },
        'Warangal': { lat: 17.9784, lng: 79.5941 },
        'Silchar': { lat: 24.8333, lng: 92.7789 },
        'Bengaluru': { lat: 12.9716, lng: 77.5946 },
        'Vijayawada': { lat: 16.5062, lng: 80.6480 },
        'Visakhapatnam': { lat: 17.7126, lng: 83.3182 },
        'Chennai': { lat: 13.0827, lng: 80.2707 }
    };
    return cityMap[cityName] || { lat: 17.3850, lng: 78.4867 };
};

window.calculateHaversineDistanceKm = (lat1, lon1, lat2, lon2) => {
    if (typeof lat1 !== 'number' || typeof lon1 !== 'number' || typeof lat2 !== 'number' || typeof lon2 !== 'number' || isNaN(lat1) || isNaN(lon1) || isNaN(lat2) || isNaN(lon2)) {
        return 2.5;
    }
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return parseFloat((R * c).toFixed(1));
};

window.getRestaurantDeliveryStatus = (restaurant, userLoc) => {
    if (!restaurant) return { distanceKm: 2.5, radiusKm: 8, isEligible: true, statusLabel: '✓ Delivery available (2.5 km)' };

    const uLoc = userLoc || (nuState && nuState.location) || {};
    const activeCity = uLoc.city || (nuState && nuState.currentCity) || 'Hyderabad';
    const defaultCityCoords = window.getCityCenterCoords(activeCity);

    const userLat = typeof uLoc.latitude === 'number' ? uLoc.latitude : defaultCityCoords.lat;
    const userLng = typeof uLoc.longitude === 'number' ? uLoc.longitude : defaultCityCoords.lng;

    const defaultRestCityCoords = window.getCityCenterCoords(restaurant.city || activeCity);
    const restLat = typeof restaurant.latitude === 'number' ? restaurant.latitude : defaultRestCityCoords.lat;
    const restLng = typeof restaurant.longitude === 'number' ? restaurant.longitude : defaultRestCityCoords.lng;

    const distanceKm = window.calculateHaversineDistanceKm(userLat, userLng, restLat, restLng);
    const radiusKm = typeof restaurant.deliveryRadiusKm === 'number' ? restaurant.deliveryRadiusKm : 8;
    const isEligible = distanceKm <= radiusKm;

    return {
        distanceKm,
        radiusKm,
        isEligible,
        statusLabel: isEligible ? `✓ Delivery available (${distanceKm} km)` : `Outside delivery area (${distanceKm} km)`
    };
};

window._lastPincodePostOffices = [];
window._selectedAddrLabel = 'Home';
window._editingAddressId = null;

window.checkAddressFormValidity = () => {
    const house = (document.getElementById('addrHouseFlat')?.value || '').trim();
    const street = (document.getElementById('addrStreet')?.value || '').trim();
    const area = (document.getElementById('addrArea')?.value || '').trim();
    const pin = (document.getElementById('addrPincode')?.value || '').trim();
    const city = (document.getElementById('addrCity')?.value || '').trim();
    const dist = (document.getElementById('addrDistrict')?.value || '').trim();
    const state = (document.getElementById('addrState')?.value || '').trim();
    const label = window._selectedAddrLabel || 'Home';
    const customLabel = (document.getElementById('addrCustomLabel')?.value || '').trim();

    const isLabelValid = label !== 'Other' || customLabel.length > 0;
    const isPinValid = pin.length === 6 && /^\d{6}$/.test(pin);
    const isFormValid = Boolean(house && street && area && isPinValid && city && dist && state && isLabelValid);

    const saveBtn = document.getElementById('saveDeliveryAddressBtn');
    if (saveBtn) {
        if (isFormValid) {
            saveBtn.disabled = false;
            saveBtn.classList.remove('disabled');
            saveBtn.classList.add('valid');
        } else {
            saveBtn.disabled = true;
            saveBtn.classList.add('disabled');
            saveBtn.classList.remove('valid');
        }
    }
    return isFormValid;
};

window.selectAddrFormLabel = (label, btnEl) => {
    window._selectedAddrLabel = label;
    document.querySelectorAll('#addrLabelPills button').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');

    const customGroup = document.getElementById('customLabelGroup');
    if (label === 'Other') {
        if (customGroup) customGroup.classList.remove('d-none');
    } else {
        if (customGroup) customGroup.classList.add('d-none');
    }
    window.checkAddressFormValidity();
};

window.handlePincodeInput = (rawVal) => {
    const pin = (rawVal || '').replace(/\D/g, '');
    const pincodeInput = document.getElementById('addrPincode');
    if (pincodeInput && pincodeInput.value !== pin) {
        pincodeInput.value = pin;
    }

    const statusEl = document.getElementById('pincodeStatus');
    const poSelectGroup = document.getElementById('postOfficeSelectGroup');
    const poSelect = document.getElementById('addrPostOfficeSelect');
    const poFullGroup = document.getElementById('selectedPostOfficeFull');
    const poFullText = document.getElementById('fullPostOfficeText');

    if (pin.length < 6) {
        if (statusEl) {
            statusEl.className = 'small mt-1 d-none';
            statusEl.textContent = '';
        }
        if (poSelectGroup) poSelectGroup.classList.add('d-none');
        if (poFullGroup) poFullGroup.classList.add('d-none');
        window.checkAddressFormValidity();
        return;
    }

    if (pin.length === 6) {
        if (statusEl) {
            statusEl.className = 'small mt-1 text-accent d-block';
            statusEl.innerHTML = '<i class="fas fa-circle-notch fa-spin mr-1"></i> Checking pincode...';
        }

        fetch(`https://api.postalpincode.in/pincode/${pin}`)
            .then(res => res.json())
            .then(data => {
                if (data && data[0] && data[0].Status === 'Success' && Array.isArray(data[0].PostOffice) && data[0].PostOffice.length > 0) {
                    const postOffices = data[0].PostOffice;
                    window._lastPincodePostOffices = postOffices;

                    if (statusEl) {
                        statusEl.className = 'small mt-1 text-success d-block font-weight-bold';
                        statusEl.innerHTML = '<i class="fas fa-check-circle mr-1"></i> Pincode verified';
                    }

                    const primary = postOffices[0];
                    const stateInput = document.getElementById('addrState');
                    const distInput = document.getElementById('addrDistrict');
                    const cityInput = document.getElementById('addrCity');
                    const areaInput = document.getElementById('addrArea');

                    if (stateInput) stateInput.value = primary.State || '';
                    if (distInput) distInput.value = primary.District || '';
                    if (cityInput) cityInput.value = primary.Block || primary.District || primary.Name || '';
                    if (areaInput && !areaInput.value) areaInput.value = primary.Name || '';

                    if (poFullGroup && poFullText) {
                        const fullName = `${primary.Name} (${primary.District}, ${primary.State})`;
                        poFullText.textContent = fullName;
                        poFullGroup.title = fullName;
                        poFullGroup.classList.remove('d-none');
                    }

                    if (postOffices.length > 1 && poSelectGroup && poSelect) {
                        poSelect.innerHTML = '';
                        postOffices.forEach((po, idx) => {
                            const opt = document.createElement('option');
                            opt.value = idx;
                            opt.textContent = `${po.Name} (${po.District})`;
                            opt.title = `${po.Name} (${po.District}, ${po.State})`;
                            poSelect.appendChild(opt);
                        });
                        poSelectGroup.classList.remove('d-none');
                    } else if (poSelectGroup) {
                        poSelectGroup.classList.add('d-none');
                    }
                } else {
                    if (statusEl) {
                        statusEl.className = 'small mt-1 text-warning d-block';
                        statusEl.textContent = 'Invalid pincode. Please check the 6-digit PIN.';
                    }
                    if (poSelectGroup) poSelectGroup.classList.add('d-none');
                    if (poFullGroup) poFullGroup.classList.add('d-none');
                    const stateInput = document.getElementById('addrState');
                    const distInput = document.getElementById('addrDistrict');
                    if (stateInput) stateInput.value = '';
                    if (distInput) distInput.value = '';
                }
                window.checkAddressFormValidity();
            })
            .catch(() => {
                if (statusEl) {
                    statusEl.className = 'small mt-1 text-warning d-block';
                    statusEl.textContent = 'Unable to verify pincode automatically. Please enter details manually.';
                }
                if (poSelectGroup) poSelectGroup.classList.add('d-none');
                if (poFullGroup) poFullGroup.classList.add('d-none');
                window.checkAddressFormValidity();
            });
    }
};

window.handlePostOfficeSelect = (idxVal) => {
    const idx = parseInt(idxVal, 10);
    if (!isNaN(idx) && window._lastPincodePostOffices && window._lastPincodePostOffices[idx]) {
        const po = window._lastPincodePostOffices[idx];
        const areaInput = document.getElementById('addrArea');
        const distInput = document.getElementById('addrDistrict');
        const stateInput = document.getElementById('addrState');
        const poFullGroup = document.getElementById('selectedPostOfficeFull');
        const poFullText = document.getElementById('fullPostOfficeText');

        if (areaInput) areaInput.value = po.Name || '';
        if (distInput) distInput.value = po.District || '';
        if (stateInput) stateInput.value = po.State || '';

        if (poFullGroup && poFullText) {
            const fullName = `${po.Name} (${po.District}, ${po.State})`;
            poFullText.textContent = fullName;
            poFullGroup.title = fullName;
            poFullGroup.classList.remove('d-none');
        }
        window.checkAddressFormValidity();
    }
};

window.showAddAddressForm = () => {
    window._editingAddressId = null;
    const titleEl = document.getElementById('addressFormTitle');
    if (titleEl) titleEl.innerHTML = '<i class="fas fa-home text-accent mr-2"></i> Add Delivery Address';

    const form = document.getElementById('nuDeliveryAddressForm');
    if (form) form.reset();

    const errEl = document.getElementById('addressInlineError');
    if (errEl) errEl.classList.add('d-none');

    const poSelectGroup = document.getElementById('postOfficeSelectGroup');
    const poFullGroup = document.getElementById('selectedPostOfficeFull');
    if (poSelectGroup) poSelectGroup.classList.add('d-none');
    if (poFullGroup) poFullGroup.classList.add('d-none');

    window.selectAddrFormLabel('Home', document.querySelector('#addrLabelPills button'));

    const sec = document.getElementById('deliveryAddressSection');
    if (sec) sec.classList.remove('d-none');
    window.checkAddressFormValidity();
};

window.saveDeliveryAddress = (e) => {
    if (e) e.preventDefault();

    if (!window.checkAddressFormValidity()) {
        const errEl = document.getElementById('addressInlineError');
        if (errEl) {
            errEl.textContent = 'Please complete all required fields and enter a valid 6-digit pincode.';
            errEl.classList.remove('d-none');
        }
        return;
    }

    const houseOrFlat = (document.getElementById('addrHouseFlat')?.value || '').trim();
    const street = (document.getElementById('addrStreet')?.value || '').trim();
    const area = (document.getElementById('addrArea')?.value || '').trim();
    const landmark = (document.getElementById('addrLandmark')?.value || '').trim();
    const pincode = (document.getElementById('addrPincode')?.value || '').trim();
    const city = (document.getElementById('addrCity')?.value || '').trim();
    const district = (document.getElementById('addrDistrict')?.value || '').trim();
    const state = (document.getElementById('addrState')?.value || '').trim();
    const isDefaultChecked = Boolean(document.getElementById('addrSetDefaultCheck')?.checked);

    let label = window._selectedAddrLabel || 'Home';
    if (label === 'Other') {
        const customVal = (document.getElementById('addrCustomLabel')?.value || '').trim();
        if (customVal) label = customVal;
    }

    const poSelect = document.getElementById('addrPostOfficeSelect');
    const selectedPoText = (poSelect && poSelect.options && poSelect.options.length > 0 && poSelect.selectedIndex >= 0)
        ? poSelect.options[poSelect.selectedIndex].text
        : '';

    if (!nuState.location) nuState.location = {};
    if (!Array.isArray(nuState.location.deliveryAddresses)) {
        nuState.location.deliveryAddresses = [];
    }

    let isDefault = isDefaultChecked;
    if (nuState.location.deliveryAddresses.length === 0) {
        isDefault = true; // First address is automatically default
    }

    if (isDefault) {
        // Clear default flag on other addresses
        nuState.location.deliveryAddresses.forEach(a => a.isDefault = false);
    }

    const addressObj = {
        id: window._editingAddressId || `addr-${Date.now()}`,
        label,
        houseOrFlat,
        street,
        area,
        landmark,
        pincode,
        postOffice: selectedPoText,
        city,
        district,
        state,
        latitude: nuState.location.latitude,
        longitude: nuState.location.longitude,
        isDefault
    };

    if (window._editingAddressId) {
        const existingIdx = nuState.location.deliveryAddresses.findIndex(a => a.id === window._editingAddressId);
        if (existingIdx !== -1) {
            nuState.location.deliveryAddresses[existingIdx] = addressObj;
        } else {
            nuState.location.deliveryAddresses.push(addressObj);
        }
    } else {
        nuState.location.deliveryAddresses.push(addressObj);
    }

    // Set active delivery address to saved address
    window.useDeliveryAddress(addressObj.id);

    window._editingAddressId = null;
    $('#nuLocationModal').modal('hide');
};

window.useDeliveryAddress = (addrId) => {
    if (!nuState.location || !Array.isArray(nuState.location.deliveryAddresses)) return;

    const targetAddr = nuState.location.deliveryAddresses.find(a => a.id === addrId);
    if (!targetAddr) return;

    nuState.location.deliveryAddress = targetAddr;
    nuState.location.city = targetAddr.city;
    nuState.location.area = targetAddr.area;
    nuState.currentCity = targetAddr.city;

    if (typeof targetAddr.latitude === 'number' && typeof targetAddr.longitude === 'number') {
        nuState.location.latitude = targetAddr.latitude;
        nuState.location.longitude = targetAddr.longitude;
    }

    updateLocationUI(targetAddr.city);

    renderCategoryCards();
    renderNearbyRestaurants();
    renderPopularDishes();

    window.renderCurrentDeliveryAddress();
};

window.makeAddressDefault = (addrId) => {
    if (!nuState.location || !Array.isArray(nuState.location.deliveryAddresses)) return;
    nuState.location.deliveryAddresses.forEach(a => {
        a.isDefault = (a.id === addrId);
    });
    window.renderCurrentDeliveryAddress();
};

window.editDeliveryAddress = (addrId) => {
    if (!nuState.location || !Array.isArray(nuState.location.deliveryAddresses)) return;
    const addr = nuState.location.deliveryAddresses.find(a => a.id === addrId);
    if (!addr) return;

    window._editingAddressId = addr.id;
    const titleEl = document.getElementById('addressFormTitle');
    if (titleEl) titleEl.innerHTML = `<i class="fas fa-edit text-accent mr-2"></i> Edit Address (${addr.label})`;

    // Pre-fill form inputs
    const houseFlatInput = document.getElementById('addrHouseFlat');
    const streetInput = document.getElementById('addrStreet');
    const areaInput = document.getElementById('addrArea');
    const landmarkInput = document.getElementById('addrLandmark');
    const pincodeInput = document.getElementById('addrPincode');
    const cityInput = document.getElementById('addrCity');
    const distInput = document.getElementById('addrDistrict');
    const stateInput = document.getElementById('addrState');
    const defaultCheck = document.getElementById('addrSetDefaultCheck');

    if (houseFlatInput) houseFlatInput.value = addr.houseOrFlat || '';
    if (streetInput) streetInput.value = addr.street || '';
    if (areaInput) areaInput.value = addr.area || '';
    if (landmarkInput) landmarkInput.value = addr.landmark || '';
    if (pincodeInput) pincodeInput.value = addr.pincode || '';
    if (cityInput) cityInput.value = addr.city || '';
    if (distInput) distInput.value = addr.district || '';
    if (stateInput) stateInput.value = addr.state || '';
    if (defaultCheck) defaultCheck.checked = Boolean(addr.isDefault);

    // Label pill
    if (['Home', 'Hostel', 'Work'].includes(addr.label)) {
        const pillBtn = Array.from(document.querySelectorAll('#addrLabelPills button')).find(b => b.textContent.includes(addr.label));
        window.selectAddrFormLabel(addr.label, pillBtn);
    } else {
        const pillBtn = Array.from(document.querySelectorAll('#addrLabelPills button')).find(b => b.textContent.includes('Other'));
        window.selectAddrFormLabel('Other', pillBtn);
        const customInput = document.getElementById('addrCustomLabel');
        if (customInput) customInput.value = addr.label;
    }

    const sec = document.getElementById('deliveryAddressSection');
    if (sec) sec.classList.remove('d-none');
    window.checkAddressFormValidity();
};

window.deleteDeliveryAddress = (addrId) => {
    if (!nuState.location || !Array.isArray(nuState.location.deliveryAddresses)) return;
    const idx = nuState.location.deliveryAddresses.findIndex(a => a.id === addrId);
    if (idx === -1) return;

    const wasDefault = nuState.location.deliveryAddresses[idx].isDefault;
    const wasActive = nuState.location.deliveryAddress && nuState.location.deliveryAddress.id === addrId;

    nuState.location.deliveryAddresses.splice(idx, 1);

    if (wasDefault && nuState.location.deliveryAddresses.length > 0) {
        nuState.location.deliveryAddresses[0].isDefault = true;
    }

    if (wasActive) {
        if (nuState.location.deliveryAddresses.length > 0) {
            window.useDeliveryAddress(nuState.location.deliveryAddresses[0].id);
        } else {
            nuState.location.deliveryAddress = null;
        }
    }

    window.renderCurrentDeliveryAddress();
};

window.renderCurrentDeliveryAddress = () => {
    const card = document.getElementById('savedDeliveryAddressCard');
    const sec = document.getElementById('deliveryAddressSection');
    const listContainer = document.getElementById('savedAddressesList');
    const addresses = (nuState.location && Array.isArray(nuState.location.deliveryAddresses)) ? nuState.location.deliveryAddresses : [];

    if (addresses.length > 0) {
        if (card) card.classList.remove('d-none');
        if (listContainer) {
            listContainer.innerHTML = '';
            addresses.forEach(addr => {
                const isCurrentActive = Boolean(nuState.location.deliveryAddress && nuState.location.deliveryAddress.id === addr.id);
                const itemDiv = document.createElement('div');
                itemDiv.className = 'nu-saved-address-card-item';

                let iconClass = 'fa-map-marker-alt';
                const lowerLabel = (addr.label || '').toLowerCase();
                if (lowerLabel.includes('home')) iconClass = 'fa-home';
                else if (lowerLabel.includes('hostel')) iconClass = 'fa-building';
                else if (lowerLabel.includes('work') || lowerLabel.includes('office')) iconClass = 'fa-briefcase';

                itemDiv.innerHTML = `
                    <div class="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom" style="border-color: rgba(255,255,255,0.06) !important;">
                        <div class="d-flex align-items-center gap-2">
                            <span class="text-white font-weight-bold" style="font-size: 15px; letter-spacing: 0.3px;">
                                <i class="fas ${iconClass} text-accent mr-1"></i> ${addr.label.toUpperCase()}
                            </span>
                            ${addr.isDefault ? '<span class="badge nu-badge-default"><i class="fas fa-star mr-1"></i> DEFAULT</span>' : ''}
                        </div>
                        ${isCurrentActive ? '<span class="badge nu-badge-active"><i class="fas fa-check-circle mr-1"></i> CURRENTLY SELECTED</span>' : ''}
                    </div>
                    <div class="nu-addr-body-text mb-3">
                        <div class="text-white font-weight-600 mb-1" style="font-size: 14px;">${addr.houseOrFlat}</div>
                        <div class="text-light small mb-1">${addr.street}, ${addr.area}</div>
                        ${addr.landmark ? `<div class="text-muted small mb-1"><i class="fas fa-map-pin text-accent mr-1"></i> Near: ${addr.landmark}</div>` : ''}
                        <div class="text-accent font-weight-bold small mt-1">
                            ${addr.city}, ${addr.district}, ${addr.state} — <span class="text-white font-weight-bold">${addr.pincode}</span>
                        </div>
                    </div>
                    <div class="nu-addr-actions-row pt-2 border-top" style="border-color: rgba(255,255,255,0.06) !important;">
                        <div class="nu-addr-primary-btn-col">
                            <button type="button" class="btn btn-block nu-use-addr-btn ${isCurrentActive ? 'active' : ''}" onclick="window.useDeliveryAddress('${addr.id}');">
                                <i class="fas ${isCurrentActive ? 'fa-check-circle' : 'fa-check'} mr-1"></i> ${isCurrentActive ? '✓ Currently Selected' : '✓ Use This Address'}
                            </button>
                        </div>
                        <div class="nu-addr-secondary-btn-col">
                            ${!addr.isDefault ? `<button type="button" class="btn btn-sm nu-addr-default-btn" onclick="window.makeAddressDefault('${addr.id}');"><i class="fas fa-star mr-1"></i> Make Default</button>` : ''}
                            <button type="button" class="btn btn-sm nu-addr-edit-btn" onclick="window.editDeliveryAddress('${addr.id}');"><i class="fas fa-pencil-alt mr-1"></i> Edit</button>
                            <button type="button" class="btn btn-sm nu-addr-delete-btn" onclick="window.deleteDeliveryAddress('${addr.id}');"><i class="fas fa-trash-alt mr-1"></i> Delete</button>
                        </div>
                    </div>
                `;
                listContainer.appendChild(itemDiv);
            });
        }
    } else {
        if (card) card.classList.add('d-none');
        if (sec) sec.classList.remove('d-none');
    }
};

window.setAddressTag = (btn, tagLabel) => {
    document.querySelectorAll('.nu-address-tag-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    nuState.authTempData.addressLabel = tagLabel;
};

window.handleAuthAddressSubmit = (e) => {
    if (e) e.preventDefault();
    const city = (document.getElementById('authAddressCity')?.value || '').trim() || nuState.currentCity;
    const area = (document.getElementById('authAddressArea')?.value || '').trim() || 'Central';
    const street = (document.getElementById('authAddressStreet')?.value || '').trim() || 'Main Road';
    const landmark = (document.getElementById('authAddressLandmark')?.value || '').trim();
    const label = nuState.authTempData.addressLabel || 'Home';

    // Complete Login
    nuState.user = {
        phone: nuState.authTempData.phone,
        fullName: nuState.authTempData.fullName,
        isAuthenticated: true
    };

    // Add address to savedAddresses
    const newAddr = {
        id: `addr-${Date.now()}`,
        label,
        city,
        area,
        street,
        landmark
    };
    nuState.savedAddresses.unshift(newAddr);

    $('#nuAuthModal').modal('hide');

    renderProfileMenu();
    renderSavedAddresses();

    // Show friendly confirmation toast/alert
    const firstName = nuState.user.fullName.split(' ')[0];
    alert(`Welcome to NUOrder, ${firstName}! Your account and delivery address are ready.`);
};

window.nuSignOut = () => {
    nuState.user = {
        phone: '',
        fullName: '',
        isAuthenticated: false
    };
    renderProfileMenu();
    alert('You have signed out of NUOrder.');
};

window.openSavedAddressesModal = () => {
    renderSavedAddresses();
    $('#nuSavedAddressesModal').modal('show');
};

function renderSavedAddresses() {
    const container = document.getElementById('savedAddressesListContainer');
    if (!container) return;

    if (!nuState.savedAddresses || nuState.savedAddresses.length === 0) {
        container.innerHTML = `<div class="text-muted small p-3 text-center">No saved addresses found. Add an address below.</div>`;
        return;
    }

    let html = '';
    nuState.savedAddresses.forEach((addr) => {
        const icon = addr.label.toLowerCase() === 'home' ? 'fa-home' : (addr.label.toLowerCase() === 'office' ? 'fa-briefcase' : 'fa-map-pin');
        html += `
            <div class="nu-saved-address-card-full">
                <div class="d-flex align-items-start gap-3">
                    <div class="nu-auth-icon-circle" style="width: 38px; height: 38px; font-size: 15px; flex-shrink: 0;">
                        <i class="fas ${icon}"></i>
                    </div>
                    <div>
                        <div class="d-flex align-items-center gap-2 mb-1">
                            <strong class="text-white" style="font-size: 14px;">${escapeHtml(addr.label)}</strong>
                            <span class="badge badge-dark text-accent" style="font-size: 11px;">${escapeHtml(addr.city)}</span>
                        </div>
                        <p class="text-muted small mb-0">${escapeHtml(addr.street)}, ${escapeHtml(addr.area)}${addr.landmark ? ` (Near ${escapeHtml(addr.landmark)})` : ''}</p>
                    </div>
                </div>
                <button type="button" class="custom-outline-button py-1 px-3" style="font-size: 12px; height: auto;" onclick="window.selectDeliveryAddress('${addr.id}');">
                    Deliver Here
                </button>
            </div>
        `;
    });
    container.innerHTML = html;
}

window.selectDeliveryAddress = (addrId) => {
    const addr = nuState.savedAddresses.find(a => a.id === addrId);
    if (!addr) return;
    if (NU_CITIES.includes(addr.city)) {
        nuSetCity(addr.city);
    }
    $('#nuSavedAddressesModal').modal('hide');
    alert(`Delivering to ${addr.label} (${addr.area}, ${addr.city})`);
};

window.setNewAddrTag = (btn, tagLabel) => {
    document.querySelectorAll('#addNewAddressForm .nu-address-tag-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    btn.dataset.selectedTag = tagLabel;
};

window.handleAddNewAddressSubmit = (e) => {
    if (e) e.preventDefault();
    const city = (document.getElementById('newAddrCity')?.value || '').trim() || nuState.currentCity;
    const area = (document.getElementById('newAddrArea')?.value || '').trim();
    const street = (document.getElementById('newAddrStreet')?.value || '').trim();
    const landmark = (document.getElementById('newAddrLandmark')?.value || '').trim();
    const activeTagBtn = document.querySelector('#addNewAddressForm .nu-address-tag-btn.active');
    const label = activeTagBtn?.dataset.label || 'Home';

    if (!area || !street) return;

    const newAddr = {
        id: `addr-${Date.now()}`,
        label,
        city,
        area,
        street,
        landmark
    };

    nuState.savedAddresses.push(newAddr);
    renderSavedAddresses();

    document.getElementById('addNewAddressForm').reset();
    $('#newAddressFormCollapse').collapse('hide');
};

window.handleMobileProfileClick = () => {
    if (nuState.user && nuState.user.isAuthenticated) {
        window.openSavedAddressesModal();
    } else {
        window.openAuthModal();
    }
};

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function runUXDiagRunner() {
    if (typeof window !== 'undefined' && window.location && typeof window.location.search === 'string' && window.location.search.includes('runUXDiag=')) {
        setTimeout(async () => {
            const steps = [];
            const vpMatch = window.location.search.match(/runUXDiag=(\d+)/);
            const vpWidth = vpMatch ? parseInt(vpMatch[1], 10) : window.innerWidth;
            let maxOverflow = 0;
            let categoryCarouselOk = true;
            let bottomNavOk = true;
            let feedbackOk = true;
            let aiPanelOk = true;

            const checkLayout = (actionName) => {
                const overflow = Math.max(0, document.documentElement.scrollWidth - window.innerWidth);
                if (overflow > maxOverflow) maxOverflow = overflow;

                const bottomNav = document.querySelector('.nu-bottom-nav');
                const feedbackTab = document.querySelector('.nu-feedback-tab');

                let stepPassed = true;
                let rootCause = 'None';
                let responsibleSelector = 'None';

                if (overflow > 0) {
                    stepPassed = false;
                    rootCause = `Page-level horizontal overflow detected (${overflow}px)`;
                    responsibleSelector = 'html / body / .container';
                }

                if (vpWidth < 768 && bottomNav) {
                    const bnStyle = getComputedStyle(bottomNav);
                    if (bnStyle.display === 'none') {
                        stepPassed = false;
                        rootCause = 'Mobile bottom navigation hidden on mobile viewport';
                        responsibleSelector = '.nu-bottom-nav';
                        bottomNavOk = false;
                    }
                }

                if (vpWidth < 768 && feedbackTab) {
                    const fbRect = feedbackTab.getBoundingClientRect();
                    if (fbRect.bottom > window.innerHeight - 60) {
                        stepPassed = false;
                        rootCause = `Feedback tab overlapping bottom navigation (bottom: ${fbRect.bottom}px, window: ${window.innerHeight}px)`;
                        responsibleSelector = '.nu-feedback-tab';
                        feedbackOk = false;
                    }
                }

                steps.push({
                    action: actionName,
                    passed: stepPassed,
                    overflow,
                    rootCause,
                    responsibleSelector
                });
            };

            try {
                // 1. Initial State Check
                try { checkLayout('Initial Homepage View'); } catch (e) {}

                // 2. Click Explore Kitchens / Category Card
                try {
                    const firstCatCard = document.querySelector('#exploreMenuCategoryGrid .nu-category-card, #exploreMenuSection');
                    if (firstCatCard) firstCatCard.click();
                } catch (e) {}
                await new Promise(r => setTimeout(r, 250));
                try { checkLayout('Click Explore Kitchens / Category'); } catch (e) {}

                // 3. Click View Menu on first restaurant
                try {
                    const restCard = document.querySelector('.nu-restaurant-card, [onclick*="openRestaurantMenu"]');
                    if (restCard) restCard.click();
                } catch (e) {}
                await new Promise(r => setTimeout(r, 250));
                try { checkLayout('Click View Menu'); } catch (e) {}

                // 4. Click Back to Explore Menu
                try {
                    const backBtn = document.querySelector('#backToRestaurantsBtn, #backToExploreBtn');
                    if (backBtn) backBtn.click();
                } catch (e) {}
                await new Promise(r => setTimeout(r, 250));
                try { checkLayout('Click Back to Explore Menu'); } catch (e) {}

                // 5. Click AI Button
                try {
                    const aiBtn = document.getElementById('mobileNavAiBtn') || document.getElementById('nuFloatingAiBtn');
                    if (aiBtn) aiBtn.click();
                } catch (e) {}
                await new Promise(r => setTimeout(r, 250));

                try {
                    const elModal = document.querySelector('#nuAIAssistantModal .modal-dialog');
                    const mRect = elModal ? elModal.getBoundingClientRect() : {};
                    const extraBrains = document.querySelectorAll('#nuAIAssistantModal #nuFloatingAiBtn, #nuAIAssistantModal .nu-ai-spark-icon-large');

                    let aiStepPassed = true;
                    let aiCause = 'None';
                    let aiSel = 'None';

                    if (vpWidth < 768) {
                        const mBottomOffset = window.innerHeight - mRect.bottom;
                        if (mBottomOffset < 64) {
                            aiStepPassed = false;
                            aiCause = `AI panel overlapping bottom navigation (bottom offset: ${mBottomOffset}px < 64px)`;
                            aiSel = '#nuAIAssistantModal .modal-dialog';
                            aiPanelOk = false;
                        }
                        if (extraBrains.length > 0) {
                            aiStepPassed = false;
                            aiCause = `Duplicate glowing brain icon inside mobile chat panel (${extraBrains.length} found)`;
                            aiSel = '#nuAIAssistantModal #nuFloatingAiBtn';
                            aiPanelOk = false;
                        }
                    }

                    steps.push({
                        action: 'Click AI (Bottom Nav)',
                        passed: aiStepPassed,
                        overflow: Math.max(0, document.documentElement.scrollWidth - window.innerWidth),
                        rootCause: aiCause,
                        responsibleSelector: aiSel
                    });
                } catch (e) {}

                // 6. Quick Prompts: Payment
                try {
                    if (typeof window.sendAIPrompt === 'function') window.sendAIPrompt('What payment options are available?');
                } catch (e) {}
                await new Promise(r => setTimeout(r, 250));
                try {
                    const resPayment = processAIQuery('What payment options are available?');
                    const payCardsCount = (resPayment && resPayment.recommendations || []).length;
                    const isPaymentOk = resPayment && resPayment.message && resPayment.message.includes('Visa') && payCardsCount === 0;

                    steps.push({
                        action: 'Click Payment Quick Prompt',
                        passed: isPaymentOk,
                        overflow: Math.max(0, document.documentElement.scrollWidth - window.innerWidth),
                        rootCause: isPaymentOk ? 'None' : `Payment response failed isolation check (cards: ${payCardsCount})`,
                        responsibleSelector: isPaymentOk ? 'None' : 'processAIQuery / sendAIPrompt'
                    });
                } catch (e) {}

                // 7. Quick Prompts: High Protein
                try {
                    if (typeof window.sendAIPrompt === 'function') window.sendAIPrompt('Show me high protein food');
                } catch (e) {}
                await new Promise(r => setTimeout(r, 250));
                try {
                    const resProtein = processAIQuery('Show me high protein food');
                    const protCardsCount = (resProtein && resProtein.recommendations || []).length;
                    const isProteinOk = protCardsCount > 0;

                    steps.push({
                        action: 'Click High Protein Quick Prompt',
                        passed: isProteinOk,
                        overflow: Math.max(0, document.documentElement.scrollWidth - window.innerWidth),
                        rootCause: isProteinOk ? 'None' : 'High protein returned zero recommendation cards',
                        responsibleSelector: isProteinOk ? 'None' : 'processAIQuery'
                    });
                } catch (e) {}

                // 8. Quick Prompts: Coupons
                try {
                    if (typeof window.sendAIPrompt === 'function') window.sendAIPrompt('What coupons can I use?');
                } catch (e) {}
                await new Promise(r => setTimeout(r, 250));
                try {
                    const resCoupon = processAIQuery('What coupons can I use?');
                    const isCouponOk = resCoupon && resCoupon.message && resCoupon.message.includes('NUFIRST');

                    steps.push({
                        action: 'Click Coupons Quick Prompt',
                        passed: isCouponOk,
                        overflow: Math.max(0, document.documentElement.scrollWidth - window.innerWidth),
                        rootCause: isCouponOk ? 'None' : 'Coupons response missing expected promo codes',
                        responsibleSelector: isCouponOk ? 'None' : 'processAIQuery'
                    });
                } catch (e) {}

                // 9. Quick Prompts: Delivery
                try {
                    if (typeof window.sendAIPrompt === 'function') window.sendAIPrompt('Can this restaurant deliver to me?');
                } catch (e) {}
                await new Promise(r => setTimeout(r, 250));
                try {
                    const resDelivery = processAIQuery('Can this restaurant deliver to me?');
                    const isDeliveryOk = resDelivery && resDelivery.message && (resDelivery.message.includes('deliver') || resDelivery.message.includes('radius'));

                    steps.push({
                        action: 'Click Delivery Quick Prompt',
                        passed: isDeliveryOk,
                        overflow: Math.max(0, document.documentElement.scrollWidth - window.innerWidth),
                        rootCause: isDeliveryOk ? 'None' : 'Delivery response missing delivery eligibility info',
                        responsibleSelector: isDeliveryOk ? 'None' : 'processAIQuery'
                    });
                } catch (e) {}

                // 10. Quick Prompts: Track Order
                try {
                    if (typeof window.sendAIPrompt === 'function') window.sendAIPrompt('Track my order');
                } catch (e) {}
                await new Promise(r => setTimeout(r, 250));
                try {
                    const resTracking = processAIQuery('Track my order');
                    const isTrackingOk = resTracking && resTracking.message && (resTracking.message.includes('track') || resTracking.message.includes('order'));

                    steps.push({
                        action: 'Click Track Order Quick Prompt',
                        passed: isTrackingOk,
                        overflow: Math.max(0, document.documentElement.scrollWidth - window.innerWidth),
                        rootCause: isTrackingOk ? 'None' : 'Tracking response missing tracking status info',
                        responsibleSelector: isTrackingOk ? 'None' : 'processAIQuery'
                    });
                } catch (e) {}

                const payload = {
                    viewport: vpWidth,
                    steps,
                    summary: {
                        maxOverflow,
                        categoryCarouselOk: maxOverflow === 0,
                        bottomNavOk,
                        feedbackOk,
                        aiPanelOk
                    }
                };

                fetch('/api/diag/ux_report', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                }).catch(() => {});
            } catch (err) {
                console.error('[runUXDiag Error]', err);
            }
        }, 500);
    }
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', runUXDiagRunner);
} else {
    runUXDiagRunner();
}

if (typeof window !== 'undefined') {
    const showTestModal = () => {
        const params = new URLSearchParams(window.location.search);
        const catParam = params.get('payCat');
        if (params.get('openAiModal') === '1') {
            if (typeof $ !== 'undefined') $('#nuAIAssistantModal').removeClass('fade').modal({ backdrop: false, show: true });
        } else if (params.get('openCartModal') === '1') {
            if (typeof addToCart === 'function') { addToCart('nvs-2'); addToCart('vs-1'); }
            if (typeof $ !== 'undefined') $('#nuCartModal').removeClass('fade').modal({ backdrop: false, show: true });
        } else if (params.get('openCheckoutModal') === '1') {
            if (typeof addToCart === 'function') { addToCart('nvs-2'); addToCart('vs-1'); }
            if (typeof renderCheckoutModalView === 'function') renderCheckoutModalView();
            if (typeof $ !== 'undefined') $('#nuCheckoutModal').removeClass('fade').modal({ backdrop: false, show: true });
        } else if (params.get('openPaymentModal') === '1') {
            if (typeof addToCart === 'function') { addToCart('nvs-2'); addToCart('vs-1'); }
            nuState.selectedPaymentCategory = catParam || 'UPI';
            if (typeof renderPaymentModalView === 'function') renderPaymentModalView();
            if (typeof $ !== 'undefined') $('#nuPaymentModal').removeClass('fade').modal({ backdrop: false, show: true });
        }
    };

    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', showTestModal);
    } else {
        showTestModal();
    }
}
