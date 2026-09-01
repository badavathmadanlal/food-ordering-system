/**
 * ==================================================
 * NUOrder — AI-Driven Food Platform
 * AI Router: Secure POST /api/ai/chat & GET /api/ai/status
 * Task 4.4: Multi-Model Copilot Orchestrator
 * ==================================================
 */

const express = require('express');
const router = express.Router();
const { processCopilotQuery, getMetrics } = require('../services/aiOrchestrator');

// In-memory rate-limiter
const requestLogs = new Map();

router.post('/chat', async (req, res) => {
    try {
        const { message, context, conversation } = req.body;

        if (!message || typeof message !== 'string' || message.trim().length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Invalid message payload. Please provide a non-empty string.',
                recommendations: []
            });
        }

        const clientIp = req.ip || req.connection.remoteAddress || 'unknown';
        const now = Date.now();
        const userLog = requestLogs.get(clientIp) || [];
        const recentRequests = userLog.filter(ts => now - ts < 10000); // 10s window

        if (recentRequests.length >= 40) {
            return res.status(429).json({
                success: false,
                message: 'Too many requests. Please wait a moment before sending another message.',
                recommendations: []
            });
        }

        recentRequests.push(now);
        requestLogs.set(clientIp, recentRequests);

        const safeContext = {
            userName: typeof context?.userName === 'string' ? context.userName.trim().slice(0, 30) : null,
            currentCity: context?.currentCity || 'Hyderabad',
            currentRestaurant: context?.currentRestaurant || null,
            currentCategory: context?.currentCategory || null,
            recommendationHistory: Array.isArray(context?.recommendationHistory) ? context.recommendationHistory.slice(-16) : [],
            cartItems: Array.isArray(context?.cartItems) ? context.cartItems : [],
            cartNutrition: context?.cartNutrition || null,
            availableFoods: Array.isArray(context?.availableFoods) ? context.availableFoods : [],
            latestOrder: context?.latestOrder || null
        };

        const safeConversation = Array.isArray(conversation) ? conversation.slice(-6) : [];

        // Execute copilot query through orchestrator
        const aiResponse = await processCopilotQuery(message.trim(), safeContext, safeConversation);

        return res.json({
            success: true,
            message: aiResponse.message || 'Here is what I found:',
            recommendations: aiResponse.recommendations || [],
            nutrition: aiResponse.nutrition || null,
            actions: aiResponse.actions || [],
            meta: aiResponse.meta || {}
        });
    } catch (err) {
        console.error('[NUOrder AI] Request failed:', err.message);
        return res.status(500).json({
            success: false,
            message: "Sorry, I couldn't process that right now. Please try again.",
            recommendations: []
        });
    }
});

/**
 * GET /api/ai/status — Provider Observability & Health Metrics
 */
router.get('/status', (req, res) => {
    try {
        const metrics = getMetrics();
        return res.json({
            success: true,
            data: metrics
        });
    } catch (err) {
        return res.status(500).json({ success: false, message: 'Failed to retrieve metrics.' });
    }
});

module.exports = router;
