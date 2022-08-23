import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minlength: 3,
      maxlength: 255,
      trim: true,
      default: 'User Name',
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      minlength: 3,
      maxlength: 255,
      unique: true,
      trim: true,
      validate(value: string) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid');
        }
      },
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 3,
      maxlength: 255,
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
