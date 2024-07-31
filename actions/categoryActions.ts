"use server";
import connectMongo from "@/lib/dbConnect/connectMongo";
import Category from "@/models/Category";
import { revalidatePath } from "next/cache";

// * getCategories
export const getCategories = async () => {
  try {
    await connectMongo();

    // get collections
    const collections = await Category.find();

    return collections;
  } catch (err) {
    console.log(err);
  }
};

// * storeCategory
export const storeCategory = async (formData: any) => {
  const collectionData = {
    name: formData.get("name"),
  };

  try {
    await connectMongo();
    // insert into database
    await new Category(collectionData).save();

    // revalidate Categorys
    revalidatePath("/");
  } catch (err) {
    console.log(err);
  }
};

// * updateCategory
export const updateDoner = async (formData: any) => {
  // todo: Query updated Category
  const collectionData = {
    name: formData.get("name"),
  };

  try {
    await connectMongo();
    // insert into database
    await new Category(collectionData).save();

    // revalidate users
    revalidatePath("/");
  } catch (err) {
    console.log(err);
  }
};

// * deleteCategory
export const deleteCategory = async () => {
  // todo: find category
  // todo: delete category
};
