const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authmiddleware");
const { adminProtect } = require("../middleware/adminMiddleware");

const {
  getAllUsers,
  getUserCount,
  getReportCount,
  deleteUser,
  updateRole,
  getAllReports
} = require("../controllers/adminController");

router.get("/users", protect, adminProtect, getAllUsers);
router.get("/users/count", protect, adminProtect, getUserCount);
router.get("/reports", protect, adminProtect, getAllReports);
router.delete("/users/:id", protect, adminProtect, deleteUser);
router.put("/users/:id/role", protect, adminProtect, updateRole);
router.get("/reports/count", protect, adminProtect, getReportCount);
module.exports = router;
