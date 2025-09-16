import { useEffect, useState } from "react";
import { getJogos } from "../api";

function Jogos() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) getJogos(token).then(setJogos);
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Jogos</h1>
      <div className="grid gap-4">
        {jogos.map((j) => (
          <div
            key={j.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <p className="text-lg font-bold">
              {j.time1} <span className="text-purple-600">vs</span> {j.time2}
            </p>
            <p className="text-sm text-gray-600">
              {j.data} • {j.horario} • <span className="font-semibold">{j.status}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jogos;