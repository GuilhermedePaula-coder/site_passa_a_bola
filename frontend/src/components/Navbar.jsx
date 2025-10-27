import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm border-b-2 border-purple-600">
      {/*  Logo  */}
      <div className="flex items-center space-x-3">
        <img src="/image.png" alt="logo" className="h-10" />
        <h1 className="text-2xl font-bold text-purple-700">PASSA A BOLA</h1>
      </div>

      <nav className="hidden md:flex space-x-6 text-green-700 font-semibold">
  <Link to="/">Home</Link>
  <Link to="/jogos">Jogos</Link>
  <Link to="/classificacao">Classificação</Link>
  <Link to="/jogadoras">Jogadoras</Link>
  <Link to="/estatisticas">Estatísticas</Link>
  <Link to="/campeonatos">Campeonatos</Link>
  <Link to="/noticias">Notícias</Link>
  <Link to="/sobre">Sobre</Link>
      </nav>


      <div className="ml-4 hidden md:block">
        {!token ? (
          <Link to="/login" className="text-purple-700 font-bold">Login</Link>
        ) : (
          <button onClick={handleLogout} className="text-red-600 font-bold">Logout</button>
        )}
      </div>

      {/* Menu Mobile */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden ml-4 p-2 rounded-md bg-purple-100"
      >
        ☰
      </button>

      {open && (
        <div className="md:hidden absolute top-16 right-4 bg-white shadow-lg rounded-md p-4 w-48">
          <Link to="/" onClick={() => setOpen(false)} className="block py-2">Home</Link>
          <Link to="/jogos" onClick={() => setOpen(false)} className="block py-2">Jogos</Link>
          <Link to="/classificacao" onClick={() => setOpen(false)} className="block py-2">Classificação</Link>
          <Link to="/jogadoras" onClick={() => setOpen(false)} className="block py-2">Jogadoras</Link>
          <Link to="/estatisticas" onClick={() => setOpen(false)} className="block py-2">Estatísticas</Link>
          {!token ? (
            <Link to="/login" onClick={() => setOpen(false)} className="block py-2 text-purple-700">Login</Link>
          ) : (
            <button onClick={handleLogout} className="block py-2 text-red-600">Logout</button>
          )}
        </div>
      )}
    </header>
  );
}
