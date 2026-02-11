const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    location: String,
    ph: Number,
    turbidity: Number,
    result: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", reportSchema);
