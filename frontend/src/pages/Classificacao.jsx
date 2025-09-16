import { useEffect, useState } from "react";
import { getClassificacao } from "../api";

function Classificacao() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) getClassificacao(token).then(setTimes);
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Classificação</h1>
      <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
        <thead className="bg-purple-700 text-white">
          <tr>
            <th className="p-3">Posição</th>
            <th className="p-3">Time</th>
            <th className="p-3">Pontos</th>
            <th className="p-3">Vitórias</th>
            <th className="p-3">Empates</th>
            <th className="p-3">Derrotas</th>
          </tr>
        </thead>
        <tbody>
          {times.map((t, i) => (
            <tr key={i} className="text-center border-b hover:bg-purple-50">
              <td className="p-3 font-bold">{i + 1}</td>
              <td className="p-3">{t.time}</td>
              <td className="p-3">{t.pontos}</td>
              <td className="p-3">{t.vitorias}</td>
              <td className="p-3">{t.empates}</td>
              <td className="p-3">{t.derrotas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Classificacao;