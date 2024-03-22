import { z } from "zod";

export const itemSchema = z.object({
  item_name: z
    .string({
      required_error: "Item name is required",
      invalid_type_error: "Item name must be a string",
    })
    .trim()
    .min(1, { message: "Item name is required" })
    .max(15, { message: "Item name can't be more than 15 characters" }),
  item_category: z
    .string({
      required_error: "Item category is required",
      invalid_type_error: "Item category must be a string",
    })
    .trim()
    .min(1, { message: "Item category is required" })
    .max(20, { message: "Item category can't be more than 20 characters" }),
  item_description: z
    .string({
      required_error: "Item description  is required",
      invalid_type_error: "Item description  must be string",
    })
    .min(1, { message: "Item description  is required" }),
});
