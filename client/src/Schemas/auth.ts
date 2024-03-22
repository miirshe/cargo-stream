import { z } from "zod";

export const loginSchema = z.object({
    email:z.string({
        required_error: "Email is required",
        invalid_type_error:"Email must be a string"
    }).email({message:"invalid email"}),
    password:z.string({
        required_error: "Password is required",
        invalid_type_error:"Password must be a string"
    }).min(8,{message:"must be 8 or more characters long"})
})


export const registerSchema = z.object({
    name:z.string({
        required_error: "Name is required",
        invalid_type_error:"Name must be a string"
    }),
    email:z.string({
        required_error: "Email is required",
        invalid_type_error:"Email must be string"
    }).email({message:"invalid email"}),
    password:z.string({
        required_error: "Password is required",
        invalid_type_error:"Password must be string"
    }).min(8,{message:"must be 8 or more characters long"})
})