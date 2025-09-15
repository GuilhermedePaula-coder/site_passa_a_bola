import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Jogos from "./pages/Jogos";
import Classificacao from "./pages/Classificacao";
import Jogadoras from "./pages/Jogadoras";
import Estatisticas from "./pages/Estatisticas";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove o token
    navigate("/login"); // redireciona pro login
  };

  return (
    <nav className="flex space-x-6 text-green-600 font-bold text-lg">
      <Link to="/">Home</Link>
      <Link to="/jogos">Jogos</Link>
      <Link to="/classificacao">Classificação</Link>
      <Link to="/jogadoras">Jogadoras</Link>
      <Link to="/estatisticas">Estatísticas</Link>

      {!token ? (
        <Link to="/login">Login</Link>
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
      <div className="min-h-screen flex flex-col bg-white font-sans">
        {/* Header */}
        <header className="bg-white border-b-4 border-purple-800">
          <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Passa a Bola" className="w-12 h-12" />
              <h1 className="text-3xl font-extrabold text-purple-800">
                PASSA A BOLA
              </h1>
            </div>

            {/* Menu dinâmico */}
            <Navbar />
          </div>
        </header>

        {/* Conteúdo */}
        <main className="flex-1 p-6">
          <Routes>
            {/* Rota pública */}
            <Route path="/login" element={<Login />} />

            {/* Rotas privadas */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/jogos"
              element={
                <PrivateRoute>
                  <Jogos />
                </PrivateRoute>
              }
            />
            <Route
              path="/classificacao"
              element={
                <PrivateRoute>
                  <Classificacao />
                </PrivateRoute>
              }
            />
            <Route
              path="/jogadoras"
              element={
                <PrivateRoute>
                  <Jogadoras />
                </PrivateRoute>
              }
            />
            <Route
              path="/estatisticas"
              element={
                <PrivateRoute>
                  <Estatisticas />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-purple-800 text-white text-center py-4 mt-8">
          <div className="overflow-hidden">
            <div className="whitespace-nowrap animate-marquee text-lg font-bold tracking-wide">
              PASSA A BOLA • PASSA A BOLA • PASSA A BOLA • PASSA A BOLA • PASSA A BOLA • PASSA A BOLA • PASSA A BOLA • PASSA A BOLA • PASSA A BOLA • PASSA A BOLA • PASSA A BOLA 
            </div>
          </div>
          <p className="mt-2 text-sm">
            © 2025 Passa a Bola - Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
