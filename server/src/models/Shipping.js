import mongoose, { Schema, model } from "mongoose";
const ShippingSchema = new mongoose.Schema(
  {
    ship_id: {
      type: Schema.ObjectId,
      ref: "Ship",
      required: true,
    },
    item_id: {
      type: Schema.ObjectId,
      ref: "Item",
      required: true,
    },
    shipping_status: {
      type: String,
      default: "pending",
    },
    requested_departure_date: {
      type: Date,
      required: true,
    },
    approved_departure_date: {
      type: Date,
      required: true,
    },
    payment_status: {
      type: String,
      required: true,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Shipping = model.Shipping || new model("Shipping", ShippingSchema);

export default Shipping;
