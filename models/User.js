const mongoose = require("mongoose");

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
      lowercase: true,
      trim: true,
    },
   password: {
  type: String,
  select: false,
},

    provider: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },
    profilePic: {
      type: String,
      default: "", // Google profile photo URL
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
