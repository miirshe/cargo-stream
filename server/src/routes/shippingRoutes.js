import express from "express";
import {
  createShipping,
  deleteShipping,
  getShippings,
  updateShipping,
} from "../controllers/shippingController.js";

const shippingRoutes = express.Router();
shippingRoutes.post("/create", createShipping);
shippingRoutes.put("/update/:id", updateShipping);
shippingRoutes.delete("/delete/:id", deleteShipping);
shippingRoutes.get("/", getShippings);

export default shippingRoutes;
