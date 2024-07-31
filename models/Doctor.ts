import mongoose from "mongoose";

const DoctorsSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 5,
    max: 100,
  },
  // category relation
  category: {
    type: String,
  },
  //default Image
  image: {
    type: String,
    default: "Anonymous",
  },

  chamber: {
    type: String,
    default: null,
  },
  time: {
    type: String,
    default: null,
  },
});

const Doctor =
  mongoose.models.Doctor || mongoose.model("Doctor", DoctorsSchema);

export default Doctor;
