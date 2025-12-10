const express = require("express");
const mongoose = require("mongoose");

const connectDB = async ()=>{
const MONGO_URL = "mongodb://127.0.0.1:27017/express_curd_db";

mongoose.connect(MONGO_URL)
  .then(() => console.log("Connected To MongoDB"))
  .catch(err => console.log("MongoDB connection failed:", err.message));
}
  module.exports = connectDB;