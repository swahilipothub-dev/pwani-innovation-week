import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import app from "../app.js";
import User from "../models/Users.js";

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe("RBAC middleware", () => {
    let adminToken, userToken;

    beforeEach(async () => {
        await User.deleteMany();

        const admin = await User.create({
            name: "Admin Test",
            email: "admintest@swahilipothub.co.ke",
            phone_number: "+254700000000",
            password: await bcrypt.hash("admin123456", 10),
            is_admin: true
        });

        const user = await User.create({
            name: "User One",
            email: "userone@email.com",
            phone_number: "+254700000001",
            password: await bcrypt.hash("user123456", 10),
            is_admin: false
        });

        adminToken = jwt.sign({ id: admin._id, is_admin: true }, process.env.JWT_SECRET || "secret");
        userToken = jwt.sign({ id: user._id, is_admin: false }, process.env.JWT_SECRET || "secret");
    });

    test("Admin can access /admin", async () => {
        const res = await request(app)
            .get("/admin")
            .set("Cookie", [`token=${adminToken}`]);

        expect(res.statusCode).toBe(200);
    });

    test("User cannot access /admin", async () => {
        const res = await request(app)
            .get("/admin")
            .set("Cookie", [`token=${userToken}`]);

        expect(res.statusCode).toBe(403);
    });
});