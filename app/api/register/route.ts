import { NextResponse } from "next/server";

import User from "@/models/User";
import connectMongo from "@/lib/dbConnect/connectMongo";
import bcrypt from "bcryptjs";

export const POST = async (request: Request) => {
  const { name, email, password } = await request.json();

  console.log(name, email, password);

  await connectMongo();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = {
    name,
    email,
    password: hashedPassword,
  };

  console.log(newUser);

  try {
    await User.create(newUser);
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (error: any) {
    console.error(error);
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
