import { useEffect, useState } from "react";
import { getJogadoras } from "../api";

function Jogadoras() {
  const [jogadoras, setJogadoras] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    getJogadoras(token).then((data) => {
      if (!data.error) setJogadoras(data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-green-600 mb-4">JOGADORAS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jogadoras.map((j) => (
          <div key={j.id} className="bg-purple-700 text-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">{j.nome}</h2>
            <p>{j.posicao}</p>
            <p>Time: {j.time}</p>
            <div className="mt-2 text-sm">
              Jogos: {j.jogos} | Gols: {j.gols} | Assistências: {j.assistencias} <br />
              Amarelo: {j.amarelo} | Vermelho: {j.vermelho}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jogadoras;
