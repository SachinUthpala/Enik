const express = require("express");
const {
  userRegister,
  userLogin,
  createInverter,
  getInverters,
  getInverter,
  deleteInverter,
  updateInverter,
} = require("../controllers/inverterController");

const router = express.Router();

// User register
router.post("/register", userRegister);

// User login
router.post("/login", userLogin);

// GET all inverters
router.get("/", getInverters);

// GET a single inverter
router.get("/:id", getInverter);

// POST a new inverter
router.post("/", createInverter);

// DELETE an inverter
router.delete("/:id", deleteInverter);

// UPDATE an inverter
router.patch("/:id", updateInverter);

module.exports = router;
