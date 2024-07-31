"use server";

import { signIn } from "@/auth";

export async function ceredntialLogin(values: {
  email: string;
  password: string;
}) {
  try {
    const response = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    return response;
  } catch (error: any) {
    // console.log(error);

    throw new Error(error);
  }
}
