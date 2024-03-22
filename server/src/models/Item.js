import mongoose, { Schema, model } from "mongoose";
const itemSchema = new mongoose.Schema(
  {
    item_name: {
      type: String,
      required: true,
    },
    item_description: {
      type: String,
      required: true,
    },
    item_category: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Item = model.Item || new model("Item", itemSchema);
export default Item;
