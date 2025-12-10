const express= require("express");
const router = express.Router();
const User = require("../models/User");
// GET USERS
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// ADD USER
router.post("/users", async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const newUser = new User({ name });
    const savedUser = await newUser.save();

    res.status(201).json({
      message: "User Added Successfully",
      user: savedUser
    });
  } catch (err) {
    res.status(500).json({ message: "Server Issue" });
  }
});

// UPDATE USER
router.put("/users/:id", async (req, res) => {
  try {
    const { name } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true } // returns updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    res.status(200).json({
      message: "User Updated Successfully",
      user: updatedUser
    });
  } catch (err) {
    res.status(500).json({ message: "Server Issue" });
  }
});

// DELETE USER
router.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    res.status(200).json({
      message: "User Deleted Successfully",
      user: deletedUser
    });
  } catch (err) {
    res.status(500).json({ message: "Server Issue" });
  }
});
module.exports= router;