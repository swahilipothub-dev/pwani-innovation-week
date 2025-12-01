import express from "express";
import Image from "../models/Image.js";

const router = express.Router();

// Save uploaded file reference
router.post("/", async (req, res) => {
  try {
    const { url, key, uploadedBy } = req.body;

    const newImage = new Image({
      url,
      key,
      uploadedBy: uploadedBy || "anonymous",
    });

    await newImage.save();
    res.status(201).json(newImage);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save image" });
  }
});

// Render gallery page
router.get("/gallery", async (req, res) => {
  try {
    const images = await Image.find().sort({ uploadedAt: -1 });
    res.render("gallery", { images });
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to load gallery");
  }
});

// Get all images (JSON API)
router.get("/", async (req, res) => {
  try {
    const images = await Image.find().sort({ uploadedAt: -1 });
    res.json(images);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

export default router;
