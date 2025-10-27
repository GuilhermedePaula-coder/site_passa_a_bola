import fs from "fs";
import path from "path";

const __dirname = path.resolve();
const dataPath = path.join(__dirname, "src", "data", "campeonatos.json");

function readData() {
  const raw = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(raw || "[]");
}

function writeData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), "utf-8");
}

export const getCampeonatos = (req, res) => {
  try {
    const data = readData();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao ler campeonatos" });
  }
};

export const addCampeonato = (req, res) => {
  try {
    const { nome, data, numeroTimes, local, descricao } = req.body;
    if (!nome || !data || !numeroTimes || !local) {
      return res.status(400).json({ error: "Campos obrigatórios faltando" });
    }

    const list = readData();
    const novo = {
      id: list.length ? Math.max(...list.map((c) => c.id)) + 1 : 1,
      nome,
      data,
      numeroTimes: Number(numeroTimes),
      local,
      descricao: descricao || ""
    };

    list.push(novo);
    writeData(list);
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ error: "Erro ao adicionar campeonato" });
  }
};
