const mongoose = require("mongoose");

const waterSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    ph: Number,
    tds: Number,
    turbidity: Number,
    temp: Number,
    source: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("WaterData", waterSchema);
