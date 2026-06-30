import bcrypt from "bcryptjs";
import User from "../models/Users.js";

export async function seedAdmin() {
    try {
        const existingAdmin = await User.findOne({ is_admin: true });
        if (existingAdmin) {
            console.log("Admin account already exists:", existingAdmin.email);
            return;
        }

        const adminPassword = 'admin123'; // Direct password for testing
        const hashedPassword = await bcrypt.hash(adminPassword, 10);

        const admin = new User({
            name: 'Admin',
            email: 'admin@example.com',
            phone_number: '+254700000000', // Must start with +254 and have 9 digits after
            password: hashedPassword,
            is_admin: true,
        });

        await admin.save();
        console.log("Default admin account created:", admin.email);
    } catch (err) {
        console.error("Error seeding admin:", err);
    }
}