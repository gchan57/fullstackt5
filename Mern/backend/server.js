const express=require("express")
const mongoose = require("mongose");
const cors = require("cors");
require("dotenv").config(); 
const PORT=3000;
const userRouter = require("./routes/userRouter");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth",userRouter);
// local/3000/api/auth/login or register is path

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB connected")).catch((err)=>console.log("Error: ",err))


app.listen(PORT,()=>{
    console.log("Server running Successfully");
})

