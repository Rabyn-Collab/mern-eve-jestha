import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    min: 4,
    required: true,
  }
}, { timestamps: true });


const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;