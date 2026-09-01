# 🍽️ NUOrder — AI-Powered Food Ordering Platform

<div align="center">

### An AI-powered food ordering platform combining food discovery, nutrition intelligence, personalized recommendations, secure payments, and interactive order tracking.

<br/>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

</div>

---

## 📌 About NUOrder

NUOrder is a modern **AI-powered food ordering platform** designed to provide a smarter, more personalized, and interactive food ordering experience.

The platform combines traditional food ordering functionality with:

- 🤖 AI-powered food and nutrition recommendations
- 🍽️ Food and restaurant discovery
- 🥗 Nutrition intelligence
- 🛒 Smart cart management
- 💳 Secure online payments
- 📦 Order management
- 🛵 Interactive order tracking
- 📍 Delivery address management
- ❤️ Favorite food management
- 📱 Fully responsive desktop, tablet, and mobile layouts

---

# ✨ Features

## 🤖 AI Food & Nutrition Assistant

NUOrder includes an AI-powered assistant that helps users make better food decisions.

Users can ask questions such as:

- What food should I eat for high protein?
- Suggest healthy food options.
- Which dishes have fewer calories?
- Recommend food based on my nutrition goals.
- What should I order from this restaurant?

The AI assistant uses available food, restaurant, nutrition, and cart context to generate relevant recommendations.

### AI Architecture

```text
User Prompt
      │
      ▼
NUOrder AI Interface
      │
      ▼
Backend API
POST /api/ai/chat
      │
      ▼
AI Provider Abstraction
      │
      ├── Google Gemini
      ├── OpenAI
      ├── Groq
      └── Intelligent Fallback
      │
      ▼
NUOrder Context Injection
      │
      ├── Food Data
      ├── Nutrition Data
      ├── Cart Items
      └── Restaurant Context
      │
      ▼
Structured AI Response
      │
      ▼
Interactive Food Recommendations
      │
      ▼
Add Items Directly to Cart
```

---

## 🍔 Smart Food Discovery

Users can discover and explore different food items and restaurants.

Features include:

- Food categories
- Restaurant discovery
- Food cards
- Search functionality
- Food details
- Nutrition information
- Interactive recommendations
- Personalized discovery

---

## 🥗 Nutrition Intelligence

NUOrder provides nutrition information for food items and orders.

The application calculates nutrition information based on selected food items and their quantities.

### Nutrition Information

- 🔥 Calories
- 💪 Protein
- 🌾 Carbohydrates
- 🥑 Fat

Nutrition information can be viewed for individual food items and completed orders.

---

## 🛒 Smart Cart System

The NUOrder cart provides a complete food ordering experience.

Users can:

- Add food items
- Remove items
- Increase quantity
- Decrease quantity
- View item totals
- View order totals
- Manage selected food items
- Continue to checkout

The empty cart also includes an **Explore Food** option to help users quickly return to food discovery.

---

## 📦 Order Management

Users can manage orders through the **My Orders** section.

The platform provides:

- Active orders
- Previous orders
- Order details
- Ordered food items
- Total order amount
- Payment information
- Delivery information
- Nutrition summary
- Order tracking
- Reorder functionality

### Order Progress

```text
● Order Placed
        │
● Preparing Food
        │
● Order Picked Up
        │
● On the Way
        │
● Delivered
```

---

## 🛵 Interactive Order Tracking

NUOrder provides an interactive order tracking experience.

When users select **Track Order**, they can view:

- 🏪 Restaurant location
- 🏠 Customer location
- 🛵 Animated delivery bike
- 📍 Delivery route
- ⏱️ Estimated delivery time
- 📦 Order progress

Example:

```text
Your order is on the way 🛵

Estimated arrival:
10–20 minutes

Thanks for your patience!
Your delivery partner is on the way.
```

The estimated delivery experience is generated from the available delivery and order context.

---

## 💳 Secure Payment System

NUOrder supports multiple payment options.

Available payment methods include:

- 💳 Credit / Debit Cards
- 📱 UPI
- 🏦 Net Banking
- 👛 Wallets
- 💵 Cash on Delivery

Online payments are integrated using **Razorpay**.

### 🔐 Razorpay Payment Architecture

```text
User
 │
 ▼
Select Payment Method
 │
 ▼
NUOrder Frontend
 │
 ▼
POST /api/payments/create-order
 │
 ▼
NUOrder Backend
 │
 ▼
Razorpay Order Creation
 │
 ▼
Razorpay Checkout
 │
 ▼
Payment Verification
 │
 ▼
Order Confirmed
 │
 ▼
Order Appears in My Orders
```

### Security Features

- Server-authoritative pricing
- Razorpay secret key remains on the backend
- Payment signature verification
- HMAC SHA256 verification
- Timing-safe signature comparison
- Public key exposed only when required
- Cash on Delivery handled independently

---

## 📍 Address Management

Users can manage delivery information through the platform.

Features include:

- Add address
- Select delivery address
- Save addresses
- Manage customer information
- Use the selected address during checkout

---

## ❤️ Favorites

Users can save preferred food items for easier access.

Features include:

- Add food to favorites
- Remove favorites
- View saved items
- Quickly access preferred food

---

## 📱 Fully Responsive Design

NUOrder is designed to work across multiple devices.

### Supported Layouts

- 🖥️ Desktop
- 💻 Laptop
- 📲 Tablet
- 📱 Mobile

### Responsive Improvements

- Fixed responsive header
- Mobile navigation
- Responsive modal layouts
- Always-visible close buttons
- Internal modal scrolling
- Accessible action buttons
- No unwanted horizontal overflow
- Consistent content positioning
- Protected header stacking hierarchy
- Bottom navigation that does not cover modal actions

---

## 🎨 Modern User Interface

NUOrder uses a modern dark-themed interface focused on usability and readability.

The UI includes:

- Dark visual design
- High-contrast text
- Interactive cards
- Food discovery components
- Smooth UI interactions
- Responsive navigation
- Interactive modals
- Order tracking visuals

---

# 🧠 Skills Demonstrated

| 🌐 Frontend | ⚙️ Backend | 🤖 AI | 💳 Payments |
|---|---|---|---|
| HTML5 | Node.js | Gemini API | Razorpay |
| CSS3 | Express.js | OpenAI Support | Payment Orders |
| JavaScript | REST APIs | Groq Support | Verification |
| Responsive Design | Middleware | Context Injection | Secure Payments |
| DOM Manipulation | Environment Variables | Structured Responses | HMAC SHA256 |

| 🥗 Data & Logic | 🛵 Tracking | 🔐 Security | 🧪 Engineering |
|---|---|---|---|
| Nutrition Calculation | Order Progress | Environment Variables | Testing |
| Calories | Delivery Experience | API Key Protection | Debugging |
| Protein | Tracking UI | Server-side Logic | Git |
| Food Data Processing | Delivery Status | Secret Isolation | GitHub |

---

# 🏗️ System Architecture

```text
                         ┌───────────────────────┐
                         │         USER          │
                         │   Web / Mobile UI     │
                         └───────────┬───────────┘
                                     │
                                     ▼
                    ┌─────────────────────────────┐
                    │      NUOrder Frontend       │
                    │                             │
                    │  index.html                 │
                    │  index.js                   │
                    │  style.css                  │
                    │  data.js                    │
                    └──────────────┬──────────────┘
                                   │
                    ┌──────────────┼──────────────┐
                    ▼              ▼              ▼
              AI Assistant      Payments        Orders
                    │              │              │
                    ▼              ▼              ▼
          ┌──────────────────────────────────────────┐
          │        Node.js + Express Backend         │
          │                                          │
          │ /api/ai/chat                             │
          │ /api/payments/create-order               │
          │ /api/payments/verify                     │
          │ /api/orders                              │
          │ /api/health                              │
          └───────────────┬──────────────────────────┘
                          │
          ┌───────────────┼────────────────┐
          ▼               ▼                ▼
      AI Providers      Razorpay       Order Logic
          │               │                │
          ▼               ▼                ▼
   Gemini / OpenAI      Payment          Order
      / Groq            Gateway        Management
```

---

# 📂 Project Structure

```text
NUOrder
│
├── index.html
│   └── Main application interface
│
├── index.js
│   └── Frontend application logic
│
├── style.css
│   └── Application styling and responsive design
│
├── data.js
│   └── Food, restaurant, and nutrition data
│
├── assets/
│   │
│   └── hero/
│       └── nuorder-hero.webp
│
├── server/
│   │
│   ├── server.js
│   │   └── Backend server entry point
│   │
│   ├── routes/
│   │   │
│   │   ├── ai.js
│   │   │   └── AI chat API routes
│   │   │
│   │   └── payments.js
│   │       └── Razorpay payment routes
│   │
│   ├── services/
│   │
│   │   └── aiService.js
│   │       └── AI provider abstraction
│   │
│   ├── test_suite.js
│   │   └── Backend automated tests
│   │
│   ├── package.json
│   │   └── Backend dependencies
│   │
│   └── .env.example
│       └── Environment variable template
│
├── .env.example
│
├── .gitignore
│
└── README.md
```

---

# 🔒 Security

NUOrder follows important security practices.

Sensitive API keys are never stored in:

- `index.html`
- `index.js`
- `style.css`
- `data.js`
- `localStorage`
- Frontend source code

Sensitive credentials are stored using environment variables.

### Example

```env
PORT=5000

LLM_PROVIDER=gemini
LLM_API_KEY=your_actual_api_key
LLM_MODEL=gemini-1.5-flash

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

> ⚠️ Never upload your real `.env` file or secret API keys to GitHub.

---

# 🚀 Running the Project Locally

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/badavathmadanlal/NUOrder.git
```

Move into the project directory:

```bash
cd NUOrder
```

---

## ⚙️ Backend Setup

Move into the backend folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create your `.env` file using `.env.example`.

Example:

```env
PORT=5000

LLM_PROVIDER=gemini
LLM_API_KEY=your_actual_gemini_api_key
LLM_MODEL=gemini-1.5-flash

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Start the backend:

```bash
npm run dev
```

The backend will run at:

```text
http://localhost:5000
```

Health endpoint:

```text
http://localhost:5000/api/health
```

---

## 🌐 Frontend Setup

Open the project folder using VS Code.

Open:

```text
index.html
```

Run the frontend using **VS Code Live Server**.

Example:

```text
http://127.0.0.1:5500/index.html
```

Make sure the backend is running on:

```text
http://localhost:5000
```

---

# 🧪 Testing

Run the backend test suite:

```bash
cd server
node test_suite.js
```

Check frontend JavaScript syntax:

```bash
node --check index.js
```

---

# 🔗 API Endpoints

| Feature | Method | Endpoint |
|---|---|---|
| Health Check | `GET` | `/api/health` |
| AI Chat | `POST` | `/api/ai/chat` |
| Create Payment Order | `POST` | `/api/payments/create-order` |
| Verify Payment | `POST` | `/api/payments/verify` |
| Orders | `POST` | `/api/orders` |

---

# 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Node.js, Express.js |
| AI | Google Gemini, OpenAI, Groq |
| Payments | Razorpay |
| APIs | REST APIs |
| Data | Structured JavaScript Data |
| Styling | Custom CSS |
| Testing | JavaScript Test Suite |
| Version Control | Git |
| Repository | GitHub |

---

# 🎯 Learning Outcomes

This project demonstrates practical experience in:

- Building a complete frontend application
- Designing responsive user interfaces
- Managing dynamic JavaScript application state
- DOM manipulation
- Creating REST APIs
- Integrating AI APIs
- Integrating payment gateways
- Implementing secure payment verification
- Using environment variables
- Protecting API secrets
- Building order management functionality
- Creating nutrition calculation logic
- Designing interactive modal systems
- Implementing responsive layouts
- Testing backend APIs
- Debugging frontend and backend issues
- Managing source code with Git and GitHub

---

# 🚧 Future Improvements

Future improvements may include:

- Real-time GPS delivery tracking
- Database persistence
- Complete user authentication
- Restaurant partner dashboard
- Admin dashboard
- Real delivery partner integration
- Push notifications
- Real-time order updates
- Advanced AI personalization
- Machine learning-based recommendations
- Advanced nutrition analytics

---

# 🤝 Contributing

Contributions and improvements are welcome.

To contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit your changes.
5. Push the branch.
6. Create a Pull Request.

---

# 📬 Connect

**GitHub:**  
https://github.com/badavathmadanlal

---

<div align="center">

## 🚀 Developed by

### Badavath Madanlal

⭐ If you found this project useful, consider giving the repository a star.

<br/>

# 🍽️ NUOrder

### Order Smarter. Eat Better.

🤖 🍔 🥗 🛒 💳 🛵

</div>
