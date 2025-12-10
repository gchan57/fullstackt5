const express = require("express");
const mongoose = require("mongoose");
const connectDB= require("./config")
const Users = require("./routes");

const app = express();
const PORT = 3000;

// Middleware
app.use("/",userRouter);


connectDB();
// Schema



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});