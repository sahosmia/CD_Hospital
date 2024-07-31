import mongoose from "mongoose";

const CategorysSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 2,
    max: 100,
    unique: true,
  },
});

const Category =
  mongoose.models.Category || mongoose.model("Category", CategorysSchema);

export default Category;
