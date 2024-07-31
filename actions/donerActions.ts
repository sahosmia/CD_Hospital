"use server";
import connectMongo from "@/lib/dbConnect/connectMongo";
import Doner from "@/models/Doner";
import { revalidatePath } from "next/cache";

// * getDoners
export const getDoners = async () => {
  try {
    await connectMongo();
    const collections = await Doner.find().populate("blood_group");

    // Convert ObjectId to string
    const formattedCollections = collections.map((doner) => ({
      ...doner.toObject(),
      _id: doner._id.toString(),
      blood_group: doner.blood_group
        ? {
            ...doner.blood_group.toObject(),
            _id: doner.blood_group._id.toString(),
          }
        : null,
    }));

    console.log(formattedCollections);
    return formattedCollections;
  } catch (err) {
    console.error("Error getting doners:", err);
    throw new Error("Failed to fetch doners");
  }
};

// * storeDoner
export const storeDoner = async (formData: FormData) => {
  const collectionData = {
    name: formData.get("name") as string,
    address: formData.get("address") as string,
    phone: formData.get("phone") as string,
    facebook: formData.get("facebook") as string | null,
    blood_group: formData.get("blood_group") as string,
    last_donet: formData.get("last_donet") as string,
    status: formData.get("status") === "true", // Convert to boolean
  };

  try {
    await connectMongo();
    // Insert into database
    await new Doner(collectionData).save();
    // Revalidate users
    revalidatePath("/");
  } catch (err) {
    console.error("Error storing doner:", err);
    throw new Error("Failed to store doner");
  }
};

// * updateDoner
export const updateDoner = async (id: string, formData: FormData) => {
  const collectionData = {
    name: formData.get("name") as string,
    address: formData.get("address") as string,
    phone: formData.get("phone") as string,
    facebook: formData.get("facebook") as string | null,
    blood_group: formData.get("blood_group") as string,
    last_donet: formData.get("last_donet") as string,
    status: formData.get("status") === "true", // Convert to boolean
  };

  try {
    await connectMongo();
    // Update existing document
    await Doner.findByIdAndUpdate(id, collectionData, { new: true });
    // Revalidate users
    revalidatePath("/");
  } catch (err) {
    console.error("Error updating doner:", err);
    throw new Error("Failed to update doner");
  }
};

// * deleteDoner
export const deleteDoner = async (id: string) => {
  try {
    await connectMongo();
    // Delete doner
    await Doner.findByIdAndDelete(id);
    // Revalidate users
    revalidatePath("/");
  } catch (err) {
    console.error("Error deleting doner:", err);
    throw new Error("Failed to delete doner");
  }
};

// * statusDoner
export const statusDoner = async (id: string, status: boolean) => {
  try {
    await connectMongo();
    // Update status
    await Doner.findByIdAndUpdate(id, { status }, { new: true });
    // Revalidate users
    revalidatePath("/");
  } catch (err) {
    console.error("Error updating doner status:", err);
    throw new Error("Failed to update doner status");
  }
};

// * getDonersByGroup
export const getDonersByGroup = async (groupId: string) => {
  try {
    await connectMongo();
    // Get collections by group
    const collections = await Doner.find({ blood_group: groupId });
    // Convert ObjectId to string
    const formattedCollections = collections.map((doner) => ({
      ...doner.toObject(),
      _id: doner._id.toString(),
      blood_group: doner.blood_group
        ? {
            ...doner.blood_group.toObject(),
            _id: doner.blood_group._id.toString(),
          }
        : null,
    }));

    return formattedCollections;
  } catch (err) {
    console.error("Error getting doners by group:", err);
    throw new Error("Failed to fetch doners by group");
  }
};
