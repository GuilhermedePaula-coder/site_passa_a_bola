import express from "express";
import cors from "cors";
import routes from "./routes.js";
import { errorHandler } from "./utils/errorHandler.js";

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api", routes);

// Middleware de erro
app.use(errorHandler);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ Backend rodando em http://localhost:${PORT}`);
});
