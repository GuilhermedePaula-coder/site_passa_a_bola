import fs from "fs";
import path from "path";

const __dirname = path.resolve();
const dataPath = path.join(__dirname, "src", "data", "noticias.json");

export const getNoticias = (req, res) => {
  try {
    if (!fs.existsSync(dataPath)) {
      return res.status(404).json({ error: "Arquivo de notícias não encontrado" });
    }

    const raw = fs.readFileSync(dataPath, "utf-8");
    const noticias = JSON.parse(raw || "[]");

    if (!Array.isArray(noticias)) {
      return res.status(500).json({ error: "Formato inválido no JSON" });
    }

    res.json(noticias);
  } catch (err) {
    console.error("Erro ao ler notícias:", err);
    res.status(500).json({ error: "Erro ao processar as notícias" });
  }
};
