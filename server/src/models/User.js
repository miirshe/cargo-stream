// Import required modules and configuration
import mongoose, { Schema } from "mongoose";

// Define a schema for the user with email and password fields
const UserSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true, // Makes this field mandatory
      unique: true, // Ensures email addresses are unique in the database
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the User model
const User = mongoose.model.User || mongoose.model("User", UserSchema);
export default User;
