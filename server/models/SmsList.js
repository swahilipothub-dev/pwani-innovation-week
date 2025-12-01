import mongoose from 'mongoose';

const smsListSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true, trim: true },
    last_name: { type: String, required: true, trim: true },
    phone_number: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

const SmsList =
  mongoose.models.SmsList || mongoose.model('SmsList', smsListSchema);

export default SmsList;
