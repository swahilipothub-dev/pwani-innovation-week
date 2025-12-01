import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  phone_number: { type: String, required: true },
  agree_terms: { type: Boolean, required: true },
  agree_communications: { type: Boolean, required: true },
  business_name: { type: String, required: true },
  business_address: { type: String, required: true },
  business_description: { type: String, required: true },
  is_registered: { type: Boolean, required: true },
  business_phone: { type: String, required: true },
  business_email: { type: String, required: true },
  vendor_type: { type: String, enum: ['food', 'drinks', 'food and drinks'], required: true },
  is_accepted: { type: Boolean, default: false }
}, { timestamps: true });

// const Vendor = mongoose.model('Vendor', vendorSchema);
const Vendor = mongoose.models.Vendor || mongoose.model('Vendor', vendorSchema);

export default Vendor;
