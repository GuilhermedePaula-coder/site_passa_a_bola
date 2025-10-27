// backend/src/middleware/auth.js
import jwt from "jsonwebtoken";

const SECRET = "passaabolasecret"; // chave usada no login

// middleware de autenticação
export function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  const token = authHeader.split(" ")[1];
  try {
    jwt.verify(token, SECRET);
    next();
  } catch (err) {
    return res.status(403).json({ error: "Token inválido" });
  }
}

export default verifyToken;
