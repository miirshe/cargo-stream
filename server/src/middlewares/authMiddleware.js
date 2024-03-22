import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/initialConfig.js";
export default function auth(req, res, next) {
  const token = req.headers.authorization || req.cookies.authToken;
  if (!token) {
    return res.status(401).json({ message: "Authorization  denied" });
  }
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    if (error.name == "JsonWebTokenError") {
      if (error.message.includes("expired")) {
        return res.status(401).json({ message: "Token expired" });
      } else {
        return res.status(500).json({ message: "Token invalid" });
      }
    } else {
      console.error(error);
      return res.status(500).json({ message: "Error verifying token" });
    }
  }
}
