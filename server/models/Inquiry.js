import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  phone_number: { type: String, required: true },
  message_title: { type: String, required: true },
  message: { type: String, required: true },
  inquiry_type: {
    type: String,
    enum: ['sponsorship', 'participation', 'general'],
    required: true
  },
  agree_terms: { type: Boolean, required: true },
  agree_communications: { type: Boolean, required: true },
  is_resolved: { type: Boolean, default: false }
}, { timestamps: true });

// const Inquiry = mongoose.model('Inquiry', inquirySchema);

const Inquiry = mongoose.models.Inquiry || mongoose.model('Inquiry', inquirySchema);

export default Inquiry;
