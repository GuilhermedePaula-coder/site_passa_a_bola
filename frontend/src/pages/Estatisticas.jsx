
import { useEffect, useState } from "react";
import { getEstatisticas } from "../api";
import { FaFutbol, FaUserFriends, FaShieldAlt } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Spinner from "../components/Spinner";
import Modal from "../components/Modal";

export default function Estatisticas() {
  const [stats, setStats] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getEstatisticas().then(setStats).catch(() => setStats(null));
  }, []);

  if (stats === null)
    return (
      <div className="text-center p-10">
        <Spinner />
      </div>
    );

  const chartData = [
    { name: stats.artilheira.nome, value: stats.artilheira.gols },
    { name: stats.assistente.nome, value: stats.assistente.assistencias },
    { name: stats.goleira.nome, value: stats.goleira.defesas },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Estatísticas</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div
          className="bg-white rounded-xl shadow p-6 text-center cursor-pointer hover:shadow-lg transition"
          onClick={() => setSelected({ tipo: "Artilheira", ...stats.artilheira })}
        >
          <FaFutbol className="mx-auto text-4xl text-purple-600 mb-3" />
          <h3 className="text-lg font-bold">Artilheira</h3>
          <p className="mt-2 text-gray-700">
            <strong>{stats.artilheira.nome}</strong>
          </p>
          <p className="text-green-700 font-semibold mt-2">
            {stats.artilheira.gols} gols
          </p>
        </div>

        <div
          className="bg-white rounded-xl shadow p-6 text-center cursor-pointer hover:shadow-lg transition"
          onClick={() => setSelected({ tipo: "Assistente", ...stats.assistente })}
        >
          <FaUserFriends className="mx-auto text-4xl text-green-600 mb-3" />
          <h3 className="text-lg font-bold">Mais Assistências</h3>
          <p className="mt-2 text-gray-700">
            <strong>{stats.assistente.nome}</strong>
          </p>
          <p className="text-purple-700 font-semibold mt-2">
            {stats.assistente.assistencias} assistências
          </p>
        </div>

        <div
          className="bg-white rounded-xl shadow p-6 text-center cursor-pointer hover:shadow-lg transition"
          onClick={() => setSelected({ tipo: "Goleira", ...stats.goleira })}
        >
          <FaShieldAlt className="mx-auto text-4xl text-blue-600 mb-3" />
          <h3 className="text-lg font-bold">Goleira com mais defesas</h3>
          <p className="mt-2 text-gray-700">
            <strong>{stats.goleira.nome}</strong>
          </p>
          <p className="text-red-600 font-semibold mt-2">
            {stats.goleira.defesas} defesas
          </p>
        </div>
      </div>

      {/* Gráfico */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-bold mb-4">Resumo gráfico</h2>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#7c3aed" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Modal de Detalhes */}
      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.tipo}
      >
        {selected && (
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Nome:</strong> {selected.nome}
            </p>
            {selected.time && (
              <p>
                <strong>Time:</strong> {selected.time}
              </p>
            )}
            {selected.gols !== undefined && (
              <p>
                <strong>Gols:</strong> {selected.gols}
              </p>
            )}
            {selected.assistencias !== undefined && (
              <p>
                <strong>Assistências:</strong> {selected.assistencias}
              </p>
            )}
            {selected.defesas !== undefined && (
              <p>
                <strong>Defesas:</strong> {selected.defesas}
              </p>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
