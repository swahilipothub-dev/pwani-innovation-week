import mongoose from 'mongoose';

const speakerSchema = new mongoose.Schema({
	email: {type: String, required: true},
	phone_number: {type: String, required: true},
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},
	middle_name: {type: String},
	gender: {type: String, enum: ['male', 'female'], required: true},
	country: {type: String, required: true},
	location: {type: String, enum: ['kenya - coast', 'kenya - others', 'other'], required: true},
	thematic_area: {type: String, enum: ['Sustainable Coastal', 'Youth Agency', 'Digital Track'], required: true},
	session_type: {
		type: String,
		enum: ['Keynote Address', 'Panel Discussions', 'Workshops', 'Masterclass'],
		required: true
	},
	session_title: {type: String, required: true},
	session_description: {type: String, required: true},
	target_audience: {type: String, enum: ['experience', 'beginners', 'amateur'], required: true},
	target_type: {type: String, enum: ['technical', 'non-technical'], required: true},
	audience_engagement: {type: String, enum: ['Q and A', 'Demo', 'Presentations', 'Skit'], required: true},
	agree_terms: {type: Boolean, required: true},
	agree_communications: {type: Boolean, required: true},
	delivery_type: {type: String, enum: ['physical', 'virtual - live', 'virtual - prerecorded'], required: true},
	is_accepted: {type: Boolean, default: false},
}, {timestamps: true});

const Speaker = mongoose.model('Speaker', speakerSchema);

export default Speaker;
