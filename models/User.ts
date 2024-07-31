import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    min: 2,
    max: 100,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
    min: 2,
    max: 100,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    min: 6,
    max: 20,
  },
  // default image
  image: {
    type: String,
    default: null,
    min: 6,
    max: 20,
  },
  role: {
    type: Array,
    default: ["User"],
  },
});

const User = mongoose.models.User || mongoose.model("User", UsersSchema);

export default User;
