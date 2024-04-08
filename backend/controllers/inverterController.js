const Inverter = require("../models/inverterModel");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// --------- Create a Token
const createToken = (_id, exptime) => {
  return jwt.sign({ _id }, process.env.SECRETKEY, { expiresIn: exptime });
};

// --------- Register a user
const userRegister = async (req, res) => {
  const { username, email, password, number } = req.body;

  let emptyFields = [];
  if (!username) {
    emptyFields.push("username");
  }
  if (!email) {
    emptyFields.push("email");
  }
  if (!password) {
    emptyFields.push("password");
  }
  if (!number) {
    emptyFields.push("number");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  try {
    const exists = await Inverter.findOne({ username });

    if (exists) {
      return res.status(400).json({ error: "Username already in use" });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const admin = await Inverter.create({
      username,
      email,
      password: hash,
      number,
    });

    res.status(200).json(admin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const userLogin = async (req, res) => {
  const { username, password } = req.body;

  let emptyFields = [];
  if (!username) {
    emptyFields.push("username");
  }
  if (!password) {
    emptyFields.push("password");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  try {

    const user = await Inverter.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Incorrect email" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    // Create a token with an expiration time of 1 day
    const token = createToken(user._id, "1d");

    // Send success response with email and token
    res.status(200).json({ username, token, userID: user._id });
  } catch (error) {
    // Send error response
    res.status(400).json({ error: error.message });
  }
};

// get all inverters
const getInverters = async (req, res) => {
  const inverters = await Inverter.find({}).sort({ createdAt: -1 });

  res.status(200).json(inverters);
};

// get a single inverter
const getInverter = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  const inverter = await Inverter.findById(id);

  if (!inverter) {
    return res.status(404).json({ error: "No such user" });
  }

  res.status(200).json(inverter);
};

// create a new user
const createInverter = async (req, res) => {
  const { username, email, password, conPassword, number } = req.body;

  let emptyFields = [];
  if (!username) {
    emptyFields.push("username");
  }
  if (!email) {
    emptyFields.push("email");
  }
  if (!password) {
    emptyFields.push("password");
  }
  if (!conPassword) {
    emptyFields.push("conPassword");
  }
  if (!number) {
    emptyFields.push("number");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  // add doc to the database
  try {
    const inverter = await Inverter.create({
      username,
      email,
      password,
      conPassword,
      number,
    });
    res.status(200).json(inverter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete an inverter
const deleteInverter = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such user" });
  }

  const inverter = await Inverter.findOneAndDelete({ _id: id });

  if (!inverter) {
    return res.status(400).json({ error: "No such user" });
  }

  res.status(200).json(inverter);
};

// update an inverter
const updateInverter = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such an inverter" });
  }

  try {
    const inverter = await Inverter.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      },
      { new: true, runValidators: true }
    );

    if (!inverter) {
      return res.status(400).json({ error: "No such an inverter" });
    }

    res.status(200).json(inverter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  userRegister,
  userLogin,
  getInverters,
  getInverter,
  createInverter,
  deleteInverter,
  updateInverter,
};
