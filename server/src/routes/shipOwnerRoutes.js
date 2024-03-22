import express from "express";
import {
  createShipOwner,
  deleteShipOwner,
  getShipOwners,
  updateShipOwner,
} from "../controllers/shipOwnerController.js";

const shipOwnerRoutes = express.Router();
shipOwnerRoutes.post("/create", createShipOwner);
shipOwnerRoutes.put("/update/:id", updateShipOwner);
shipOwnerRoutes.delete("/delete/:id", deleteShipOwner);
shipOwnerRoutes.get("/", getShipOwners);

export default shipOwnerRoutes;
