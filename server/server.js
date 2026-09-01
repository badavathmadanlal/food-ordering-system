/**
 * ==================================================
 * NUOrder — AI-Driven Food Platform
 * Express Server: Secure Backend API & LLM Gateway
 * Task 3.4: Real AI Assistant Integration
 * ==================================================
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '.env') });

const { connectDB } = require('./config/db');
const aiRoutes = require('./routes/ai');
const orderRoutes = require('./routes/orders');

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Database Connection
connectDB();

// Security & Parsing Middleware
app.use(cors({
    origin: '*', // Allow local frontend during development
    methods: ['GET', 'POST', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-User-Id']
}));
app.use(express.json({ limit: '1mb' }));

// Health Check Endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        service: 'NUOrder API',
        version: '1.0.0',
        timestamp: new Date().toISOString()
    });
});

// Diagnostic UX Report Store
global.UX_DIAG_REPORTS = global.UX_DIAG_REPORTS || {};

app.post('/api/diag/ux_report', (req, res) => {
    const { viewport, steps, summary } = req.body;
    global.UX_DIAG_REPORTS[viewport] = { steps, summary, timestamp: new Date().toISOString() };
    res.json({ ok: true });
});

app.get('/api/diag/ux_report', (req, res) => {
    res.json(global.UX_DIAG_REPORTS || {});
});

// Serve static frontend files (index.html, resta.css, app.js, data.js)
const frontendPath = path.join(__dirname, '..');
app.use(express.static(frontendPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

// Endpoint Mounts
app.use('/api/ai', aiRoutes);
app.use('/api/orders', orderRoutes);

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Endpoint not found.'
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`  NUOrder Secure Backend Server Running`);
    console.log(`  Port: http://localhost:${PORT}`);
    console.log(`  Health: http://localhost:${PORT}/api/health`);
    console.log(`  AI Chat: http://localhost:${PORT}/api/ai/chat`);
    console.log(`  Orders: http://localhost:${PORT}/api/orders`);
    console.log(`==================================================`);
});
