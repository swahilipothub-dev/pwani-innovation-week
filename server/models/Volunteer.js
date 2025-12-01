import mongoose from 'mongoose';

const volunteerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /.+@.+\..+/.test(v);
            },
            message: 'Invalid email format'
        }
    },
    phone_number: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^\+254\d{9}$/.test(v);
            },
            message: 'Phone number must start with +254 and have 9 digits after'
        }
    },
    department: {
        type: String,
        enum: ["Registration", "Logistics", "Tech", "Catering", "Security", "Cleaners"],
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: "Volunteer"
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Prefer not to say"],
        required: true,
    },
    id_number: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^\d{8}$/.test(v);
            },
            message: 'National ID No. must be 8 digits'
        }
    },
    agree_terms: {
        type: Boolean, required: true
    },
	agree_communications: {
        type: Boolean, required: true
    }
}, {
    timestamps: true
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

export default Volunteer;