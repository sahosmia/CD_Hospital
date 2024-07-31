import mongoose from "mongoose";

const DonersSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 3,
    max: 100,
    required: [true, "Name is required."],
  },
  address: {
    type: String,
    default: "Chuadanga",
    min: 4,
    max: 100,
  },
  phone: {
    type: String,
    default: null,
    min: 11,
    max: 100,
  },
  facebook: {
    type: String,
    default: null,
  },
  blood_group: {
    type: mongoose.Types.ObjectId,
    ref: "BloodGroup",
  },
  last_donet: {
    type: Date,
    default: null,
  },

  status: {
    type: Boolean,
    default: 1,
  },
});

const Doner = mongoose.models.Doner || mongoose.model("Doner", DonersSchema);

export default Doner;
