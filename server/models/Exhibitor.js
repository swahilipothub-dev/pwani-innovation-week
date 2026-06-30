import mongoose from "mongoose";

const exhibitorSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    business_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    business_description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    agree_terms: { type: Boolean, required: true },
    agree_communications: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const Exhibitor = mongoose.model("Exhibitor", exhibitorSchema);

export default Exhibitor;