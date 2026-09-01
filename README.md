# NUOrder — AI-Driven Food Platform

> **Order Smarter. Eat Better.**

NUOrder is an AI-driven, hyperlocal food ordering and delivery platform designed for discovering nearby partner restaurants, nutrition intelligence, personalized recommendations, transparent delivery estimates, and group ordering.

---

## 🤖 Real AI Assistant Architecture (Task 3.4)

NUOrder features a secure, provider-agnostic **AI Food & Nutrition Assistant**:

```
User (Natural Language / Prompts)
      ↓
NUOrder AI UI (Modal with chat history & interactive recommendation cards)
      ↓
NUOrder Backend API (POST http://localhost:5000/api/ai/chat)
      ↓
Provider Abstraction (askLLM in aiService.js supporting Gemini, OpenAI, Groq, & intelligent fallback)
      ↓
NUOrder Context Injection (City, active restaurant, cart items, computed macros, authentic dish records)
      ↓
Structured JSON Response ({ success, message, recommendations: [{ foodId, reason }] })
      ↓
Interactive Recommendation Cards with live [ + ADD ] / Stepper controls synced to Cart
```

---

## 🔒 Security Guarantee
- **Zero API Keys in Frontend**: API keys and provider secrets NEVER touch `index.html`, `app.js`, `data.js`, `localStorage`, or client-side code.
- **Server-side Environment Variables**: Configured via server `.env` (strictly ignored in `.gitignore`).
- **Graceful Offline Degradation**: If backend is offline or external LLM limits are exceeded, NUOrder seamlessly falls back to its built-in deterministic nutrition solver without interrupting user browsing.

---

## 📂 Project Structure

```
├── index.html                   # Main application document & NUOrder AI modal
├── resta.css                    # NUOrder design tokens, AI chat styling & mobile layouts
├── data.js                      # Seed data with structured nutrition intelligence for 160 dishes
├── app.js                       # Discovery engine, nutrition engine, cart & AI controller
├── server/                      # Secure Node.js + Express backend
│   ├── server.js                # Server entry point & CORS/route mounting
│   ├── routes/
│   │   └── ai.js                # POST /api/ai/chat & request validation/rate limiter
│   ├── services/
│   │   └── aiService.js         # Provider abstraction (Gemini / OpenAI / Groq / Fallback)
│   ├── test_suite.js            # Automated verification test suite
│   ├── .env.example             # Environment template (NO secrets)
│   └── package.json             # Backend dependencies
├── .env.example                 # Root environment template
├── .gitignore                   # Ignores .env and node_modules
├── assets/
│   └── hero/
│       └── nuorder-hero.webp   # 3D cinematic food hero visual
└── README.md                    # Project documentation
```

---

## 🚀 Running the Project Locally

### Step 1: Start the Backend Server (Terminal 1)
```bash
cd C:\Projects\Fullstack-Projects\NUOrder-AI-Food-Platform\server
npm install
npm run dev
```
*Backend runs on `http://localhost:5000` (Health check at `http://localhost:5000/api/health`).*

### Step 2: Configure LLM Provider (Optional)
Copy `server/.env.example` to `server/.env` and add your Gemini or OpenAI API Key:
```env
PORT=5000
LLM_PROVIDER=gemini
LLM_API_KEY=your_actual_gemini_api_key
LLM_MODEL=gemini-1.5-flash
```
*(Note: If no API key is provided, the backend operates in local intelligent context mode).*

### Step 3: Launch the Frontend (Terminal 2 or VS Code)
Open `index.html` with **Live Server** at `http://127.0.0.1:5500/index.html` (or open directly in Google Chrome/Edge).

---

## 🧪 Running Automated Tests
```bash
cd C:\Projects\Fullstack-Projects\NUOrder-AI-Food-Platform\server
node test_suite.js
```

---

## 👨‍💻 Developer & Contact

**Badavath Madanlal**
- Email: badavathmadan123@gmail.com
- GitHub: https://github.com/badavathmadanlal
