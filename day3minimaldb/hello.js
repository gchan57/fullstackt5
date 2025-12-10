const express = require("express");
const mongoose = require("mongoose");
const connectDB= require("./config/db") // Imports the DB connection logic
const userRouter = require("./routes/userRoutes");   // Imports the routes

const app = express();
const PORT = 3000;

// Middleware
app.use("/",userRouter);

connectDB(); // Connects to MongoDB

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

