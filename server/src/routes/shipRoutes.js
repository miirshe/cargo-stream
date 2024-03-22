import express from "express";
import {
  createShip,
  deleteShip,
  getShips,
  updateShip,
} from "../controllers/ShipController.js";

const shipRoutes = express.Router();
shipRoutes.post("/create", createShip);
shipRoutes.put("/update/:id", updateShip);
shipRoutes.delete("/delete/:id", deleteShip);
shipRoutes.get("/", getShips);

export default shipRoutes;
