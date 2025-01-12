import { z } from "zod";

export const signUpSchema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  email: z.string().email("Invalid email address"),
  gender: z
    .enum(["male", "female", "others"])
    .refine((val) => val !== undefined, { message: "Gender is required" }),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Password must include at least one number and one special character"
    )
    .nonempty("Password is required"),
});

export type SignUpPayload = z.infer<typeof signUpSchema>;