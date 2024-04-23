import { z } from "zod";

export const shipOwnerSchema = z.object({
  company_name: z
    .string({
      required_error: "Company name is required",
      invalid_type_error: "Company name must be a string",
    })
    .trim()
    .min(1, { message: "Company name is required" }),
  contact_name: z
    .string({
      required_error: "Contact name is required",
      invalid_type_error: "Contact name must be a string",
    })
    .trim()
    .min(1, { message: "Contact name is required" }),
  contact_email: z
    .string({
      required_error: "Contact email is required",
      invalid_type_error: "Contact email must be a string",
    })
    .trim()
    .min(1, { message: "Contact name is required" })
    .email({ message: "invalid email" }),
  contact_phone: z.number({
    required_error: "Contact phone is required",
    invalid_type_error: "Contact phone must be a number",
  }),
});
