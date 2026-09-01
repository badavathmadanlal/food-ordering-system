/**
 * ==================================================
 * NUOrder — AI-Driven Food Platform
 * Multi-Model AI Provider Abstraction (Task 4.4)
 * Providers: OpenAI, Gemini, Anthropic (Claude)
 * ==================================================
 */

const PROVIDER_METRICS = {
    openai: { available: false, status: 'unavailable', model: 'gpt-4o-mini', lastError: null, latencyMs: 0 },
    gemini: { available: false, status: 'unavailable', model: 'gemini-1.5-flash', lastError: null, latencyMs: 0 },
    anthropic: { available: false, status: 'unavailable', model: 'claude-3-5-haiku-20241022', lastError: null, latencyMs: 0 }
};

/**
 * Check and update provider health status
 */
function updateProviderHealth() {
    const openaiKey = process.env.OPENAI_API_KEY;
    const isRealOpenAIKey = openaiKey && typeof openaiKey === 'string' && openaiKey.trim().length > 10 && !openaiKey.includes('your_');
    PROVIDER_METRICS.openai.available = !!isRealOpenAIKey;
    PROVIDER_METRICS.openai.status = isRealOpenAIKey ? 'available' : 'unavailable';
    PROVIDER_METRICS.openai.model = process.env.OPENAI_MODEL || 'gpt-4o-mini';

    const geminiKey = process.env.GEMINI_API_KEY || process.env.LLM_API_KEY;
    const isRealGeminiKey = geminiKey && typeof geminiKey === 'string' && geminiKey.trim().length > 10 && !geminiKey.includes('your_');
    PROVIDER_METRICS.gemini.available = !!isRealGeminiKey;
    PROVIDER_METRICS.gemini.status = isRealGeminiKey ? 'available' : 'unavailable';
    PROVIDER_METRICS.gemini.model = process.env.GEMINI_MODEL || 'gemini-1.5-flash';

    const anthropicKey = process.env.ANTHROPIC_API_KEY;
    const isRealAnthropicKey = anthropicKey && typeof anthropicKey === 'string' && anthropicKey.trim().length > 10 && !anthropicKey.includes('your_');
    PROVIDER_METRICS.anthropic.available = !!isRealAnthropicKey;
    PROVIDER_METRICS.anthropic.status = isRealAnthropicKey ? 'available' : 'unavailable';
    PROVIDER_METRICS.anthropic.model = process.env.ANTHROPIC_MODEL || 'claude-3-5-haiku-20241022';
}

/**
 * Get current health status of all AI providers
 */
function getProvidersHealth() {
    updateProviderHealth();
    return {
        openai: { ...PROVIDER_METRICS.openai, hasKey: PROVIDER_METRICS.openai.available },
        gemini: { ...PROVIDER_METRICS.gemini, hasKey: PROVIDER_METRICS.gemini.available },
        anthropic: { ...PROVIDER_METRICS.anthropic, hasKey: PROVIDER_METRICS.anthropic.available }
    };
}

/**
 * 1. OpenAI Provider
 */
async function openaiProvider({ messages, systemPrompt, context }) {
    updateProviderHealth();
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey || !PROVIDER_METRICS.openai.available) {
        throw new Error('OpenAI provider unavailable: OPENAI_API_KEY is not configured.');
    }

    const startTime = Date.now();
    const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';

    const formattedMessages = [
        { role: 'system', content: `${systemPrompt}\n\nCONTEXT:\n${JSON.stringify(context)}` }
    ];

    (messages || []).forEach(m => {
        formattedMessages.push({
            role: m.role === 'user' ? 'user' : 'assistant',
            content: typeof m.content === 'string' ? m.content : JSON.stringify(m.content)
        });
    });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model,
                messages: formattedMessages,
                temperature: 0.2,
                response_format: { type: 'json_object' }
            }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);
        PROVIDER_METRICS.openai.latencyMs = Date.now() - startTime;

        if (!response.ok) {
            throw new Error(`OpenAI API returned HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        const content = data.choices?.[0]?.message?.content;
        const parsed = JSON.parse(content);

        PROVIDER_METRICS.openai.status = 'available';
        return {
            provider: 'openai',
            model,
            message: parsed.message || 'Here is the response:',
            recommendations: Array.isArray(parsed.recommendations) ? parsed.recommendations : [],
            actions: Array.isArray(parsed.actions) ? parsed.actions : []
        };
    } catch (err) {
        clearTimeout(timeoutId);
        PROVIDER_METRICS.openai.lastError = err.message;
        throw err;
    }
}

/**
 * 2. Gemini Provider
 */
async function geminiProvider({ messages, systemPrompt, context }) {
    updateProviderHealth();
    const apiKey = process.env.GEMINI_API_KEY || process.env.LLM_API_KEY;
    if (!apiKey || !PROVIDER_METRICS.gemini.available) {
        throw new Error('Gemini provider unavailable: GEMINI_API_KEY is not configured.');
    }

    const startTime = Date.now();
    const model = process.env.GEMINI_MODEL || 'gemini-1.5-flash';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const contents = [
        {
            role: 'user',
            parts: [{ text: `${systemPrompt}\n\nCONTEXT:\n${JSON.stringify(context)}` }]
        },
        {
            role: 'model',
            parts: [{ text: '{"success": true, "message": "I am ready as NUOrder AI.", "recommendations": []}' }]
        }
    ];

    (messages || []).slice(-4).forEach(m => {
        contents.push({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: typeof m.content === 'string' ? m.content : JSON.stringify(m.content) }]
        });
    });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents,
                generationConfig: {
                    temperature: 0.2,
                    topP: 0.8,
                    maxOutputTokens: 1024,
                    responseMimeType: 'application/json'
                }
            }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);
        PROVIDER_METRICS.gemini.latencyMs = Date.now() - startTime;

        if (!response.ok) {
            throw new Error(`Gemini API returned HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        const textOutput = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!textOutput) throw new Error('Empty response from Gemini API');

        const parsed = JSON.parse(textOutput);
        PROVIDER_METRICS.gemini.status = 'available';
        return {
            provider: 'gemini',
            model,
            message: parsed.message || 'Here is the response:',
            recommendations: Array.isArray(parsed.recommendations) ? parsed.recommendations : [],
            actions: Array.isArray(parsed.actions) ? parsed.actions : []
        };
    } catch (err) {
        clearTimeout(timeoutId);
        PROVIDER_METRICS.gemini.lastError = err.message;
        throw err;
    }
}

/**
 * 3. Anthropic (Claude) Provider
 */
async function anthropicProvider({ messages, systemPrompt, context }) {
    updateProviderHealth();
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey || !PROVIDER_METRICS.anthropic.available) {
        throw new Error('Anthropic provider unavailable: ANTHROPIC_API_KEY is not configured.');
    }

    const startTime = Date.now();
    const model = process.env.ANTHROPIC_MODEL || 'claude-3-5-haiku-20241022';

    const formattedMessages = (messages || []).map(m => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: typeof m.content === 'string' ? m.content : JSON.stringify(m.content)
    }));

    if (formattedMessages.length === 0) {
        formattedMessages.push({ role: 'user', content: 'Hello' });
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model,
                system: `${systemPrompt}\n\nCONTEXT:\n${JSON.stringify(context)}`,
                messages: formattedMessages,
                max_tokens: 1024,
                temperature: 0.2
            }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);
        PROVIDER_METRICS.anthropic.latencyMs = Date.now() - startTime;

        if (!response.ok) {
            throw new Error(`Anthropic API returned HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        const textOutput = data.content?.[0]?.text;
        const parsed = JSON.parse(textOutput);

        PROVIDER_METRICS.anthropic.status = 'available';
        return {
            provider: 'anthropic',
            model,
            message: parsed.message || 'Here is the response:',
            recommendations: Array.isArray(parsed.recommendations) ? parsed.recommendations : [],
            actions: Array.isArray(parsed.actions) ? parsed.actions : []
        };
    } catch (err) {
        clearTimeout(timeoutId);
        PROVIDER_METRICS.anthropic.lastError = err.message;
        throw err;
    }
}

module.exports = {
    getProvidersHealth,
    openaiProvider,
    geminiProvider,
    anthropicProvider
};
