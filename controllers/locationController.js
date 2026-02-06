const Location = require("../models/Location");

// ================= CREATE LOCATION =================
exports.createLocation = async (req, res) => {
  try {
    const { name, district } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Location name is required",
      });
    }

    const location = await Location.create({
      name,
      district,
      userId: req.user.id   //  attach owner
    });

    res.status(201).json(location);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "Location already exists",
      });
    }

    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= GET USER LOCATIONS =================
exports.getLocations = async (req, res) => {
  try {
    const locations = await Location.find({
      userId: req.user.id
    }).sort({ name: 1 });

    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= UPDATE LOCATION =================
exports.updateLocation = async (req, res) => {
  try {
    const updated = await Location.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id }, // 🔐 ownership
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({
        message: "Location not found",
      });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= DELETE LOCATION =================
exports.deleteLocation = async (req, res) => {
  try {
    const deleted = await Location.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id   // 🔐 ownership
    });

    if (!deleted) {
      return res.status(404).json({
        message: "Location not found",
      });
    }

    res.status(200).json({
      message: "Location deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
