import jwt from "jsonwebtoken";

const USER = { username: "admin", password: "1234" };
export const SECRET_KEY = "passa_a_bola_secret"; // 🔒 Chave única compartilhada

export const login = (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    return res.json({ token });
  }

  return res.status(401).json({ error: "Credenciais inválidas" });
};
