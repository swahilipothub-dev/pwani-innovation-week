import mongoose from 'mongoose';

const sponsorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  website: { type: String },
  logo: { type: String, required: true }
}, { timestamps: true });

const Sponsor = mongoose.model('Sponsor', sponsorSchema);

export default Sponsor;