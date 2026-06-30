import jwt from "jsonwebtoken";
import User from "../models/Users.js";

const wantsHTML = (req) => (req.headers.accept || "").includes("text/html");

const unauthorized = (req, res) => {
  if (wantsHTML(req)) return res.redirect("/");
  return res.status(401).json({ message: "Unauthorized" });
};

const forbidden = (req, res) => {
  if (wantsHTML(req)) return res.redirect("/");
  return res.status(403).json({ message: "Forbidden" });
};

export const attachUser = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) return next();
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (user) req.user = user;
  } catch {}
  next();
};

export const requireAuth = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) return unauthorized(req, res);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) return unauthorized(req, res);
    req.user = user;
    next();
  } catch {
    return unauthorized(req, res);
  }
};

export const requireAdmin = (req, res, next) => {
  if (!req.user?.is_admin) return forbidden(req, res);
  next();
};

export const requireUser = (req, res, next) => {
    if (!req.user || req.user.is_admin) {
        return forbidden(req, res);
    }
    next();
};