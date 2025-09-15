import fs from "fs";
import path from "path";

const __dirname = path.resolve();
const dataPath = path.join(__dirname, "src", "data", "jogadoras.json");

export const getJogadoras = (req, res) => {
  try {
    const raw = fs.readFileSync(dataPath);
    const jogadoras = JSON.parse(raw);
    res.json(jogadoras);
  } catch (err) {
    res.status(500).json({ error: "Erro ao carregar jogadoras" });
  }
};
