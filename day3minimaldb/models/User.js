const mongoose= require("mongoose")
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

module.exports= User;