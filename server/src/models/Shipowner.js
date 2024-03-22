import mongoose, { Schema, model } from "mongoose";
const ShipOwnerSchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
    },
    contact_name: {
      type: Number,
      required: true,
    },
    contact_email: {
      type: String,
      required: true,
    },
    contact_phone: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ShipOwner = model.ShipOwner || new model("ShipOwner", ShipOwnerSchema);
export default ShipOwner;
