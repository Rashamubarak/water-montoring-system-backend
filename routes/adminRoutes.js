const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authmiddleware");
const { adminProtect } = require("../middleware/adminMiddleware");

const {
  getAllUsers,
  deleteUser,
  updateRole
} = require("../controllers/adminController");

router.get("/users", protect, adminProtect, getAllUsers);
router.delete("/users/:id", protect, adminProtect, deleteUser);
router.put("/users/:id", protect, adminProtect, updateRole);

module.exports = router;
