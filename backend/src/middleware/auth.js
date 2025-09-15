import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../controllers/authController.js";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "Token não fornecido" });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Token inválido" });
    req.user = decoded;
    next();
  });
};
