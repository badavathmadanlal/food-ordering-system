/**
 * ==================================================
 * NUOrder — AI-Driven Food Platform
 * Database Connection & Data Store Layer (Task 4.0)
 * ==================================================
 */

const mongoose = require('mongoose');

let isConnected = false;
let isInMemoryFallback = false;

const connectDB = async () => {
    if (isConnected) return;

    const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/nuorder';

    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(mongoURI, {
            serverSelectionTimeoutMS: 2000
        });
        isConnected = true;
        isInMemoryFallback = false;
        console.log(`[DB] Connected to MongoDB at ${mongoURI}`);
    } catch (err) {
        // Fallback gracefully to memory-backed store if MongoDB server is offline
        isConnected = true;
        isInMemoryFallback = true;
        console.log(`[DB] MongoDB server unavailable. Running in memory-backed mode.`);
    }
};

const isMemoryStore = () => isInMemoryFallback;

module.exports = {
    connectDB,
    isMemoryStore
};
