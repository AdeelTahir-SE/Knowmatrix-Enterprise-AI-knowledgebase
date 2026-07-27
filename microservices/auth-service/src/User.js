import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    tier: {
      type: String,
      enum: ["Free", "Enterprise"],
      default: "Free",
    },


  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);