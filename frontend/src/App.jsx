// frontend/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import Jogos from "./pages/Jogos";
import Classificacao from "./pages/Classificacao";
import Jogadoras from "./pages/Jogadoras";
import Estatisticas from "./pages/Estatisticas";
import Campeonatos from "./pages/Campeonatos";
import Noticias from "./pages/Noticias";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";
import SimulacaoIoT from "./pages/SimulacaoIoT";

export default function App() {
  const basename = import.meta.env.BASE_URL || "/";

  return (
    <Router basename={basename}>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
        <Header />
        <main className="flex-1 pt-28">
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/jogos" element={<PrivateRoute><Jogos /></PrivateRoute>} />
            <Route path="/classificacao" element={<PrivateRoute><Classificacao /></PrivateRoute>} />
            <Route path="/jogadoras" element={<PrivateRoute><Jogadoras /></PrivateRoute>} />
            <Route path="/estatisticas" element={<PrivateRoute><Estatisticas /></PrivateRoute>} />
            <Route path="/campeonatos" element={<PrivateRoute><Campeonatos /></PrivateRoute>} />
            <Route path="/simulacao-iot" element={<PrivateRoute><SimulacaoIoT /></PrivateRoute>} />

            {/* públicas */}
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
