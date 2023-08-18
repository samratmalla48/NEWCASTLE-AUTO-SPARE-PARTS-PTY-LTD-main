import { number, string } from "mathjs";
import { Timestamp } from "mongodb";
import mongoose from "mongoose";

// creating schema for user
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: string,
      required: true,
    },
    phone: {
      type: number,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
export default mongoose.model("users", userSchema);
