import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/piw-express';

console.log('Environment variables:', {
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGO_URI: MONGO_URI ? 'Set' : 'Not set'
});

const connectDB = async () => {
    if (process.env.NODE_ENV === "test") {
        console.log("Skipping MongoDB connection in test mode");
        return;
    }

    try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected to:', MONGO_URI);
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export default connectDB;