const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB Connection
const MONGO_URL = "mongodb://127.0.0.1:27017/express_curd_db";

mongoose.connect(MONGO_URL)
  .then(() => console.log("Connected To MongoDB"))
  .catch(err => console.log("MongoDB connection failed:", err.message));

// Schema
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
);

// Model
const User = mongoose.model("User", UserSchema);

// GET USERS
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// ADD USER
app.post("/users", async (req, res) => {
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
app.put("/users/:id", async (req, res) => {
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
app.delete("/users/:id", async (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});