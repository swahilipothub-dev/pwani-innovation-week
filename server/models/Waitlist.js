import mongoose from 'mongoose';

const waitlistSchema = new mongoose.Schema({
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},
	email: {type: String, required: true},
	phone_number: {type: String, required: true},
	agree_terms: {type: Boolean, required: true},
	agree_communications: {type: Boolean, required: true}
}, {timestamps: true});

// const Waitlist = mongoose.model('Waitlist', waitlistSchema);
const Waitlist = mongoose.models.Waitlist || mongoose.model('Waitlist', waitlistSchema);

export default Waitlist;
