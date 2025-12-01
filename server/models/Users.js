import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
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
    password: {
        type: String,
        required: true
    },
  is_admin: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const pwd = this.password || "";
    const looksHashed = typeof pwd === "string" && pwd.startsWith("$2") && pwd.length >= 60;
    if (!looksHashed) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

userSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;