// backend/src/routes.js
import { Router } from "express";
import { login } from "./controllers/authController.js";
import { getJogos } from "./controllers/jogosController.js";
import { getClassificacao } from "./controllers/classificacaoController.js";
import { getJogadoras } from "./controllers/jogadorasController.js";
import { getEstatisticas } from "./controllers/estatisticasController.js";
import { authMiddleware } from "./middleware/auth.js";
import { getNoticias } from "./controllers/noticiasController.js";
import { getCampeonatos, addCampeonato } from "./controllers/campeonatosController.js";
import { authMiddleware } from "./middleware/auth.js";

const router = Router();

// Login (público)
router.post("/login", login);

// Notícias (público)
router.get("/noticias", getNoticias);

// Campeonatos
router.get("/campeonatos", getCampeonatos);
router.post("/campeonatos", authMiddleware, addCampeonato); // apenas usuários logados

// Rotas protegidas
router.get("/jogos", authMiddleware, getJogos);
router.get("/classificacao", authMiddleware, getClassificacao);
router.get("/jogadoras", authMiddleware, getJogadoras);
router.get("/estatisticas", authMiddleware, getEstatisticas);

export default router;
