// frontend/src/pages/Classificacao.jsx
import { useEffect, useState } from "react";
import { getClassificacao } from "../api";
import Spinner from "../components/Spinner";

export default function Classificacao() {
  const [table, setTable] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setTable([]);
      setError("Faça login para ver a classificação.");
      return;
    }

    getClassificacao(token)
      .then((data) => {
        if (data && data.error) {
          setError("Erro ao buscar classificação");
          setTable([]);
        } else {
          setTable(data || []);
        }
      })
      .catch(() => {
        setError("Erro de rede");
        setTable([]);
      });
  }, []);

  if (table === null)
    return (
      <div className="p-10 text-center">
        <Spinner />
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-6 pt-8 pb-12">
      <h1 className="text-3xl font-extrabold text-purple-800 mb-6 text-center">
        Classificação do Brasileirão Feminino 2025
      </h1>

      {error && (
        <div className="bg-red-100 text-red-800 p-3 rounded mb-6 text-center font-medium">
          {error}
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-purple-100">
        <table className="w-full text-sm md:text-base">
          <thead className="bg-purple-50 text-purple-800 font-semibold uppercase">
            <tr>
              <th className="p-3 text-center">Pos</th>
              <th className="text-left">Time</th>
              <th className="text-center">Pts</th>
              <th className="text-center">Vit</th>
              <th className="text-center">Emp</th>
              <th className="text-center">Der</th>
              <th className="text-center">GP</th>
              <th className="text-center">GC</th>
              <th className="text-center">SG</th>
            </tr>
          </thead>

          <tbody>
            {table.map((row, i) => (
              <tr
                key={i}
                className={`border-t hover:bg-purple-50 transition ${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="p-3 text-center font-bold text-purple-700">
                  {row.posicao}
                </td>
                <td className="py-3 font-medium">{row.time}</td>
                <td className="text-center font-bold text-green-700">
                  {row.pontos}
                </td>
                <td className="text-center">{row.vitorias}</td>
                <td className="text-center">{row.empates}</td>
                <td className="text-center">{row.derrotas}</td>
                <td className="text-center">{row.golsPro}</td>
                <td className="text-center">{row.golsContra}</td>
                <td
                  className={`text-center font-bold ${
                    row.saldo > 0
                      ? "text-green-600"
                      : row.saldo < 0
                      ? "text-red-600"
                      : "text-gray-600"
                  }`}
                >
                  {row.saldo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-gray-500 text-sm text-center mt-4">
        Dados atualizados automaticamente conforme o campeonato avança.
      </p>
    </div>
  );
}
