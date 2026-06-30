import express from "express";
import User from "../models/Users.js";
import jwt from "jsonwebtoken";
import rateLimit from "express-rate-limit";
import bcrypt from "bcryptjs";

const router = express.Router();

// Login rate limiter
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10,
    message: { message: "Too many login attempts, try again later" }
});

// GET login page
// Render login at `/`
router.get("/", (req, res) => {
    if (req.user) {
        if (req.user.is_admin === true) {
            return res.redirect("/admin");
        } else {
            return res.redirect("/users");
        }
    }
    res.render("auth/login", { layout: "layouts/auth", error: null });
});

// Login endpoint with rate limiter
router.post("/login", loginLimiter, async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.render("auth/login", { layout: "layouts/auth", error: "Email and password required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.render("auth/login", { layout: "layouts/auth", error: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.render("auth/login", { layout: "layouts/auth", error: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 3600000,
        });

        if (user.is_admin === true) {
            return res.redirect("/admin");
        } else {
            return res.redirect("/users");
        }
    } catch (err) {
        console.error(err);
        res.render("auth/login", { layout: "layouts/auth", error: "Server error" });
    }
});

// GET user
router.get("/me", (req, res) => {
    res.json(req.user);
});

// Logout
router.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/")
});

export default router;