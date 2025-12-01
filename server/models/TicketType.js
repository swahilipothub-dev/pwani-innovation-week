import mongoose from 'mongoose';

const ticketTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      trim: true,
    },
    payment_link: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const TicketType =
  mongoose.models.TicketType || mongoose.model('TicketType', ticketTypeSchema);

export default TicketType;
