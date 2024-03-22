import express from "express";
import {
  createItem,
  deleteItem,
  getItems,
  updateItem,
} from "../controllers/itemController.js";
const itemRoutes = express.Router();
itemRoutes.post("/create", createItem);
itemRoutes.put("/update/:id", updateItem);
itemRoutes.delete("/delete/:id", deleteItem);
itemRoutes.get("/", getItems);

export default itemRoutes;
