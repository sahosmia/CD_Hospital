import mongoose from "mongoose";

const BloodGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
});

const BloodGroup =
  mongoose.models.BloodGroup || mongoose.model("BloodGroup", BloodGroupSchema);

export default BloodGroup;
