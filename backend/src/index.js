// backend/src/index.js
import express from "express";
import cors from "cors";
import router from "./routes.js";

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Prefixo correto das rotas
app.use("/api", router);

// Teste rápido da API
app.get("/", (req, res) => {
  res.send("API Passa a Bola rodando com sucesso 🚀");
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
  console.log(`👉 Acesse: http://localhost:${PORT}/api`);
});
