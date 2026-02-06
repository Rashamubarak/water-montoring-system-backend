const express = require("express");
const router = express.Router();

const {
  addWaterData,
  getWaterData,
  deleteWaterData
} = require("../controllers/waterController");

const { protect } = require("../middleware/authmiddleware");

// CREATE water data
router.post("/", protect, addWaterData);

// GET water data
router.get("/", protect, getWaterData);

// DELETE water data
router.delete("/:id", protect, deleteWaterData);

module.exports = router;
