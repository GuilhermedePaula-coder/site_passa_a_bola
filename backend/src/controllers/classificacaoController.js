import fs from "fs";
import path from "path";

const __dirname = path.resolve();
const dataPath = path.join(__dirname, "src", "data", "classificacao.json");

export const getClassificacao = (req, res) => {
  try {
    const raw = fs.readFileSync(dataPath);
    const classificacao = JSON.parse(raw);
    res.json(classificacao);
  } catch (err) {
    res.status(500).json({ error: "Erro ao carregar classificação" });
  }
};
