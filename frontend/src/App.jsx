import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Jogos from "./pages/Jogos";
import Classificacao from "./pages/Classificacao";
import Jogadoras from "./pages/Jogadoras";
import Estatisticas from "./pages/Estatisticas";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

// importa o logo da pasta assets
import logo from "./assets/image.png";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="flex space-x-6 text-green-600 font-bold text-lg">
      <Link to="/" className="hover:text-purple-700">Home</Link>
      <Link to="/jogos" className="hover:text-purple-700">Jogos</Link>
      <Link to="/classificacao" className="hover:text-purple-700">Classificação</Link>
      <Link to="/jogadoras" className="hover:text-purple-700">Jogadoras</Link>
      <Link to="/estatisticas" className="hover:text-purple-700">Estatísticas</Link>
      {!token ? (
        <Link to="/login" className="hover:text-purple-700">Login</Link>
      ) : (
        <button
          onClick={handleLogout}
          className="text-red-600 hover:text-red-800 font-bold"
        >
          Logout
        </button>
      )}
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-purple-50 via-white to-green-50">
        {/* Header */}
        <header className="bg-white shadow-md border-b-4 border-purple-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Passa a Bola" className="w-14 h-14 rounded-full shadow-lg" />
              <h1 className="text-3xl font-extrabold text-purple-800 tracking-wide">PASSA A BOLA</h1>
            </div>
            <Navbar />
          </div>
        </header>

        {/* Conteúdo */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/jogos" element={<PrivateRoute><Jogos /></PrivateRoute>} />
            <Route path="/classificacao" element={<PrivateRoute><Classificacao /></PrivateRoute>} />
            <Route path="/jogadoras" element={<PrivateRoute><Jogadoras /></PrivateRoute>} />
            <Route path="/estatisticas" element={<PrivateRoute><Estatisticas /></PrivateRoute>} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-purple-800 text-white text-center py-6 mt-12 shadow-inner">
          <div className="overflow-hidden">
            <div className="whitespace-nowrap animate-marquee text-lg font-bold tracking-wide">
              ⚽ PASSA A BOLA • FUTEBOL FEMININO • CAMPEONATO BRASILEIRO • 2025 •
            </div>
          </div>
          <p className="mt-2 text-sm opacity-80">
            © 2025 Passa a Bola - Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;