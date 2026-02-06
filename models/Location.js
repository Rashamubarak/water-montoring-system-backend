const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    district: {
      type: String,
      trim: true,
      lowercase: true,
    },

    // 🔐 Link location to user
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

// Prevent duplicate locations PER USER (not global)
locationSchema.index(
  { name: 1, district: 1, userId: 1 },
  { unique: true }
);

module.exports = mongoose.model("Location", locationSchema);
