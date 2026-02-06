const express = require("express");
const router = express.Router();

const {
  addWaterData,
  getWaterData,
  updateWaterData,
  deleteWaterData,
    
} = require("../controllers/waterController");



const { protect } = require("../middleware/authmiddleware");

// CREATE water data
router.post("/", protect, addWaterData);
// update water data
router.put("/:id", protect, updateWaterData);



// GET water data
router.get("/", protect, getWaterData);

// DELETE water data
router.delete("/:id", protect, deleteWaterData);

module.exports = router;
