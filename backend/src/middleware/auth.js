import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../controllers/authController.js"; // ✅ mesma chave usada no login

export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  const token = authHeader.split(" ")[1];

  try {
    jwt.verify(token, SECRET_KEY); // 🔑 usando a mesma chave
    next();
  } catch (err) {
    return res.status(403).json({ error: "Token inválido" });
  }
}
