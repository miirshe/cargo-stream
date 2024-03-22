import mongoose, { Schema, model } from "mongoose";
const shipSchema = new mongoose.Schema(
  {
    ship_name: {
      type: String,
      required: true,
    },
    ship_capacity: {
      type: Number,
      required: true,
    },
    ship_type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    shipowner_id: {
      type: Schema.ObjectId,
      ref: "ShipOwner",
    },
  },
  {
    timestamps: true,
  }
);

const Ship = model.Ship || new model("Ship", shipSchema);
export default Ship;
