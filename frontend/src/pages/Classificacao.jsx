import { useEffect, useState } from "react";
import { getClassificacao } from "../api";

function Classificacao() {
  const [tabela, setTabela] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    getClassificacao(token).then((data) => {
      if (!data.error) setTabela(data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-green-600 mb-4">CLASSIFICAÇÃO</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-purple-800 text-white">
            <th className="p-2">Posição</th>
            <th className="p-2">Time</th>
            <th className="p-2">Pontos</th>
            <th className="p-2">Vitórias</th>
            <th className="p-2">Empates</th>
            <th className="p-2">Derrotas</th>
          </tr>
        </thead>
        <tbody>
          {tabela.map((t, i) => (
            <tr key={t.id} className="bg-purple-600 text-white text-center">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">{t.time}</td>
              <td className="p-2">{t.pontos}</td>
              <td className="p-2">{t.vitorias}</td>
              <td className="p-2">{t.empates}</td>
              <td className="p-2">{t.derrotas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Classificacao;
