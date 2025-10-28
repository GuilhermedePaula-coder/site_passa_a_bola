import { useEffect, useState } from "react";
import { getClassificacao } from "../api";
import Spinner from "../components/Spinner";

export default function Classificacao() {
  const [tabela, setTabela] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return setTabela([]);

    getClassificacao(token)
      .then((data) => setTabela(data.error ? [] : data))
      .catch(() => setTabela([]));
  }, []);

  if (tabela === null)
    return (
      <div className="text-center p-10">
        <Spinner />
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Classificação</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-purple-100 text-purple-800">
            <th className="p-2 text-left">#</th>
            <th className="p-2 text-left">Time</th>
            <th className="p-2">P</th>
            <th className="p-2">J</th>
            <th className="p-2">V</th>
            <th className="p-2">E</th>
            <th className="p-2">D</th>
          </tr>
        </thead>
        <tbody>
          {tabela.map((t, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="p-2">{i + 1}</td>
              <td className="p-2 font-semibold">{t.time}</td>
              <td className="p-2 text-center">{t.pontos}</td>
              <td className="p-2 text-center">{t.jogos}</td>
              <td className="p-2 text-center">{t.vitorias}</td>
              <td className="p-2 text-center">{t.empates}</td>
              <td className="p-2 text-center">{t.derrotas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
