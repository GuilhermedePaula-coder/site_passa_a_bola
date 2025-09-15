import fs from "fs";
import path from "path";

const __dirname = path.resolve();
const dataPath = path.join(__dirname, "src", "data", "estatisticas.json");

export const getEstatisticas = (req, res) => {
  try {
    const raw = fs.readFileSync(dataPath);
    const estatisticas = JSON.parse(raw);
    res.json(estatisticas);
  } catch (err) {
    res.status(500).json({ error: "Erro ao carregar estatísticas" });
  }
};
