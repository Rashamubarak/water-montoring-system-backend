const WaterData = require("../models/WaterData");

// ==========================
// ADD WATER DATA
// ==========================
exports.addWaterData = async (req, res) => {
  try {
    const reading = await WaterData.create({
      user: req.user.id,
      ph: req.body.ph,
      tds: req.body.tds,
      turbidity: req.body.turbidity,
      temp: req.body.temp
    });

    res.status(201).json(reading);
  } catch (error) {
    console.error("Add water error:", error);
    res.status(500).json({ message: "Failed to save water data" });
  }
};

// ==========================
// GET USER WATER DATA
// ==========================
exports.getWaterData = async (req, res) => {
  try {
    const readings = await WaterData.find({ user: req.user.id })
      .sort({ createdAt: -1 });

    res.json(readings);
  } catch (error) {
    console.error("Get water error:", error);
    res.status(500).json({ message: "Failed to fetch water data" });
  }
};

// ==========================
// DELETE WATER DATA
// ==========================
exports.deleteWaterData = async (req, res) => {
  try {
    await WaterData.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (error) {
    console.error("Delete water error:", error);
    res.status(500).json({ message: "Delete failed" });
  }
};
