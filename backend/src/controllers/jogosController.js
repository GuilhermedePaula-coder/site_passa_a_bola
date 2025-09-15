import fs from "fs";
import path from "path";

const __dirname = path.resolve();
const dataPath = path.join(__dirname, "src", "data", "jogos.json");

export const getJogos = (req, res) => {
  try {
    const raw = fs.readFileSync(dataPath);
    const jogos = JSON.parse(raw);
    res.json(jogos);
  } catch (err) {
    res.status(500).json({ error: "Erro ao carregar jogos" });
  }
};
