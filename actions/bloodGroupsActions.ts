"use server";
import connectMongo from "@/lib/dbConnect/connectMongo";
import BloodGroup from "@/models/BloodGroup";

export const getBloodGroups = async () => {
  try {
    await connectMongo();

    //  get collections
    const collections = await BloodGroup.find();

    return collections;
  } catch (err) {
    console.log(err);
  }
};
