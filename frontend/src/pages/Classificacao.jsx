import { useEffect, useState } from "react";
import { getClassificacao } from "../api";
import Spinner from "../components/Spinner";

export default function Classificacao() {
  const [classificacao, setClassificacao] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    getClassificacao(token)
      .then((data) => setClassificacao(data))
      .catch(() => setClassificacao([]));
  }, []);

  if (classificacao === null)
    return (
      <div className="text-center p-10">
        <Spinner />
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Classificação</h1>
      <table className="w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-purple-700 text-white">
          <tr>
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">Time</th>
            <th className="p-3 text-center">Pontos</th>
            <th className="p-3 text-center">Vitórias</th>
            <th className="p-3 text-center">Empates</th>
            <th className="p-3 text-center">Derrotas</th>
          </tr>
        </thead>
        <tbody>
          {classificacao.map((t, i) => (
            <tr key={t.id} className="border-b hover:bg-gray-100">
              <td className="p-3">{i + 1}</td>
              <td className="p-3 font-bold">{t.time}</td>
              <td className="p-3 text-center">{t.pontos}</td>
              <td className="p-3 text-center">{t.vitorias}</td>
              <td className="p-3 text-center">{t.empates}</td>
              <td className="p-3 text-center">{t.derrotas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
