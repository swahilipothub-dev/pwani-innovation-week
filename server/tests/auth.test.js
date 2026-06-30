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

describe("Auth routes", () => {
    let admin;

    beforeEach(async () => {
        await User.deleteMany();

        const hashed = await bcrypt.hash("password123", 10);
        admin = await User.create({
            name: "Admin Test",
            email: "admintest@swahilipothub.co.ke",
            phone_number: "+254700000000",
            password: hashed,
            is_admin: true
        });
    });

    test("Login with valid credentials sets cookie and redirects", async () => {
        const res = await request(app)
            .post("/auth/login")
            .send({ email: "admintest@swahilipothub.co.ke", password: "password123" });

        expect(res.statusCode).toBe(302); // success
        expect(res.headers["set-cookie"]).toBeDefined();
    });

    test("Login with invalid password shows error", async () => {
        const res = await request(app)
            .post("/auth/login")
            .send({ email: "admintest@swahilipothub.co.ke", password: "wrongpass" });

        expect(res.text).toContain("Invalid credentials");
    });

    test("/me returns current user from JWT", async () => {
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET || "secret", { expiresIn: "1h" });
        const res = await request(app)
            .get("/auth/me")
            .set("Cookie", [`token=${token}`]);

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("_id", admin._id.toString());
    });

    test("Logout clears cookie and redirects", async () => {
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET || "secret", { expiresIn: "1h" });
        const res = await request(app)
            .post("/auth/logout")
            .set("Cookie", [`token=${token}`]);

        expect(res.statusCode).toBe(302);
        expect(res.headers["set-cookie"][0]).toMatch(/token=;/);
    });
});