import fs from "fs";
import path from "path";

const __dirname = path.resolve();
const dataPath = path.join(__dirname, "src", "data", "classificacao.json");

export const getClassificacao = (req, res) => {
  try {
    if (!fs.existsSync(dataPath)) {
      return res.status(404).json({ error: "Arquivo de classificação não encontrado" });
    }

    const raw = fs.readFileSync(dataPath, "utf-8");
    const classificacao = JSON.parse(raw || "[]");

    if (!Array.isArray(classificacao)) {
      return res.status(500).json({ error: "Formato inválido de dados no JSON" });
    }

    res.json(classificacao);
  } catch (err) {
    console.error("Erro ao ler classificação:", err);
    res.status(500).json({ error: "Erro ao carregar classificação" });
  }
};
