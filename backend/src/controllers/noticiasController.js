import fs from "fs";
import path from "path";

const __dirname = path.resolve();
const dataPath = path.join(__dirname, "src", "data", "noticias.json");

export const getNoticias = (req, res) => {
  try {
    const raw = fs.readFileSync(dataPath, "utf-8");
    const noticias = JSON.parse(raw || "[]");
    res.json(noticias);
  } catch (err) {
    res.status(500).json({ error: "Erro ao ler notícias" });
  }
};
