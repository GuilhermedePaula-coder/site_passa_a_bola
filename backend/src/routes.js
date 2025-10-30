import { Router } from "express";
import { login } from "./controllers/authController.js";
import { getJogos } from "./controllers/jogosController.js";
import { getClassificacao } from "./controllers/classificacaoController.js";
import { getJogadoras } from "./controllers/jogadorasController.js";
import { getEstatisticas } from "./controllers/estatisticasController.js";
import { getNoticias } from "./controllers/noticiasController.js";
import { getCampeonatos, addCampeonato } from "./controllers/campeonatosController.js";
import { authMiddleware } from "./middleware/auth.js";

const router = Router();

// 🔓 Login público
router.post("/login", login);

// 📰 Notícias (público)
router.get("/noticias", getNoticias);

// ⚽ Campeonatos
router.get("/campeonatos", getCampeonatos);
router.post("/campeonatos", authMiddleware, addCampeonato); // apenas quem estiver logado pode adicionar

// 🌍 Rotas públicas (para o site carregar normalmente)
router.get("/jogos", getJogos);
router.get("/classificacao", getClassificacao);
router.get("/jogadoras", getJogadoras);
router.get("/estatisticas", getEstatisticas);

export default router;
