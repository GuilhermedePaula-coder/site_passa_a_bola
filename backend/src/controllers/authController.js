import jwt from "jsonwebtoken";

const USER = { username: "admin", password: "1234" };
const SECRET = "passa_a_bola_secret";

export const login = (req, res) => {
  const { username, password } = req.body;
  if (username === USER.username && password === USER.password) {
    const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
    return res.json({ token });
  }
  res.status(401).json({ error: "Credenciais inválidas" });
};

export const SECRET_KEY = SECRET;
