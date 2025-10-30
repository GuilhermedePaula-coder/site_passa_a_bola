// frontend/src/components/Header.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white/85 backdrop-blur-md shadow border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}image.png`}
            alt="logo"
            className="w-12 h-12 object-contain"
          />
          <div>
            <div className="text-xl font-extrabold text-purple-700">PASSA A BOLA</div>
            <div className="text-xs text-gray-500">Brasileirão Feminino 2025</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-green-700 font-semibold">
          <Link to="/" className="hover:text-purple-700">Home</Link>
          <Link to="/jogos" className="hover:text-purple-700">Jogos</Link>
          <Link to="/classificacao" className="hover:text-purple-700">Classificação</Link>
          <Link to="/jogadoras" className="hover:text-purple-700">Jogadoras</Link>
          <Link to="/estatisticas" className="hover:text-purple-700">Estatísticas</Link>
          <Link to="/campeonatos" className="hover:text-purple-700">Campeonatos</Link>
          <Link to="/noticias" className="hover:text-purple-700">Notícias</Link>
          <Link to="/sobre" className="hover:text-purple-700">Sobre</Link>
        </nav>

        <div className="flex items-center gap-4">
          {!token ? (
            <Link to="/login" className="hidden md:inline text-purple-700 font-bold">Login</Link>
          ) : (
            <button onClick={handleLogout} className="hidden md:inline text-red-600 font-bold">Logout</button>
          )}

          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden p-2 rounded bg-purple-50"
            aria-label="menu"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-purple-50 shadow">
          <div className="px-4 py-3 flex flex-col gap-2">
            <Link to="/" onClick={() => setOpen(false)} className="py-1">Home</Link>
            <Link to="/jogos" onClick={() => setOpen(false)} className="py-1">Jogos</Link>
            <Link to="/classificacao" onClick={() => setOpen(false)} className="py-1">Classificação</Link>
            <Link to="/jogadoras" onClick={() => setOpen(false)} className="py-1">Jogadoras</Link>
            <Link to="/estatisticas" onClick={() => setOpen(false)} className="py-1">Estatísticas</Link>
            <Link to="/campeonatos" onClick={() => setOpen(false)} className="py-1">Campeonatos</Link>
            <Link to="/noticias" onClick={() => setOpen(false)} className="py-1">Notícias</Link>
            <Link to="/sobre" onClick={() => setOpen(false)} className="py-1">Sobre</Link>
            <div className="pt-2">
              {!token ? (
                <Link to="/login" onClick={() => setOpen(false)} className="py-2 text-purple-700 font-semibold">Login</Link>
              ) : (
                <button onClick={handleLogout} className="py-2 text-red-600 font-semibold text-left">Logout</button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
