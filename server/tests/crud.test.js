import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import jwt from "jsonwebtoken";
import app from "../app.js";
import User from "../models/Users.js";
import Speaker from "../models/Speaker.js";
import bcrypt from "bcryptjs";

let mongoServer, adminToken;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

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
    adminToken = jwt.sign({ id: admin._id, is_admin: true }, process.env.JWT_SECRET || "secret");
});

describe("Admin generic delete route", () => {
    test("Deletes a speaker", async () => {
        const speaker = await Speaker.create({
            email: "test@speaker.com",
            phone_number: "+254711111111",
            first_name: "Test",
            last_name: "Speaker",
            gender: "male",
            country: "Kenya",
            location: "kenya - coast",
            thematic_area: "Sustainable Coastal",
            session_type: "Keynote Address",
            session_title: "The Future of Tech",
            session_description: "Exploring innovation in the coastal region",
            target_audience: "experience",
            target_type: "technical",
            audience_engagement: "Q and A",
            agree_terms: true,
            agree_communications: true,
            delivery_type: "physical"
        });

        const res = await request(app)
            .post(`/api/speakers/delete/${speaker._id}`)
            .set("Cookie", [`token=${adminToken}`]);

        expect(res.statusCode).toBe(302);

        const stillThere = await Speaker.findById(speaker._id);
        expect(stillThere).toBeNull();
    });
});