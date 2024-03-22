import express from "express";
import { getUsers, registerUser } from "../controllers/authController.js";
import auth from "../middlewares/authMiddleware.js";

const authRoutes = express.Router();
authRoutes.post("/register", registerUser);
authRoutes.get("/", auth, getUsers);

export default authRoutes;
