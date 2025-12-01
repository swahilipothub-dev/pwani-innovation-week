import mongoose from "mongoose";
import dotenv from "dotenv";
import { seedAdmin } from "../../utils/seedAdmin.js";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

async function run() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connection to MongoDB successful");

        await seedAdmin();

        await mongoose.disconnect();
        console.log("🔒 MongoDB disconnected");
        process.exit(0);
    } catch (err) {
        console.error("❌ Error running seeder:", err);
        process.exit(1);
    }
}

run();