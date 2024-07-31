import { z } from "zod";

// * Login form
export const loginZodSchema = z.object({
  email: z.string().email().min(8).max(100).trim(),
  password: z
    .string()
    .min(4)
    .max(20)
    .refine((password) => /[a-z]/.test(password), {
      message: "lowercaseErrorMessage",
    })
    .refine((password) => /[0-9]/.test(password), {
      message: "numberErrorMessage",
    }),
});

// * Register form
export const registerZodSchema = z
  .object({
    name: z.string().min(2).max(100).trim(),
    email: z.string().email().min(8).max(100).trim(),
    password: z
      .string()
      .min(4)
      .max(20)
      .refine((password) => /[a-z]/.test(password), {
        message: "lowercaseErrorMessage",
      })
      .refine((password) => /[0-9]/.test(password), {
        message: "numberErrorMessage",
      }),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });
