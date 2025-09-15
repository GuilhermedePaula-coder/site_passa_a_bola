import { Router } from "express";
import { login } from "./controllers/authController.js";
import { getJogos } from "./controllers/jogosController.js";
import { getClassificacao } from "./controllers/classificacaoController.js";
import { getJogadoras } from "./controllers/jogadorasController.js";
import { getEstatisticas } from "./controllers/estatisticasController.js";
import { authMiddleware } from "./middleware/auth.js";

const router = Router();

// Login
router.post("/login", login);

// Rotas protegidas
router.get("/jogos", authMiddleware, getJogos);
router.get("/classificacao", authMiddleware, getClassificacao);
router.get("/jogadoras", authMiddleware, getJogadoras);
router.get("/estatisticas", authMiddleware, getEstatisticas);

export default router;
