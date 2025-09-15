import { useEffect, useState } from "react";
import { getJogos } from "../api";

function Jogos() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    getJogos(token).then((data) => {
      if (!data.error) setJogos(data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-green-600 mb-4">JOGOS</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-purple-800 text-white">
            <th className="p-2">Data</th>
            <th className="p-2">Horário</th>
            <th className="p-2">Jogo</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {jogos.map((j) => (
            <tr key={j.id} className="bg-purple-600 text-white text-center">
              <td className="p-2">{j.data}</td>
              <td className="p-2">{j.horario}</td>
              <td className="p-2">{j.time1} x {j.time2}</td>
              <td className="p-2">{j.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Jogos;
