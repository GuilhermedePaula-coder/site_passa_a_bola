import { useEffect, useState } from "react";
import { getJogos } from "../api";
import Spinner from "../components/Spinner";
import Modal from "../components/Modal";

export default function Jogos() {
  const [jogos, setJogos] = useState(null);
  const [filter, setFilter] = useState("Todos");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setJogos([]);
      return;
    }

    getJogos(token)
      .then((data) => setJogos(data.error ? [] : data))
      .catch(() => setJogos([]));
  }, []);

  if (jogos === null)
    return (
      <div className="text-center p-10">
        <Spinner />
      </div>
    );

  const filtered = jogos.filter((j) => {
    if (filter !== "Todos" && j.status !== filter) return false;
    if (
      search &&
      !(
        j.time1.toLowerCase().includes(search.toLowerCase()) ||
        j.time2.toLowerCase().includes(search.toLowerCase())
      )
    )
      return false;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-800">Jogos</h1>
        <div className="flex gap-3">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 rounded border"
          >
            <option>Todos</option>
            <option>Finalizado</option>
            <option>Agendado</option>
          </select>
          <input
            placeholder="Buscar time..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 border rounded"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {filtered.map((j) => (
          <div
            key={j.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelected(j)}
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="text-lg font-bold">
                  {j.time1} <span className="text-purple-600">vs</span> {j.time2}
                </div>
                <div className="text-sm text-gray-600">
                  {j.data} • {j.horario}
                </div>
              </div>
              <div
                className={`px-3 py-1 rounded-full font-semibold ${
                  j.status === "Finalizado"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {j.status}
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center p-6 bg-white rounded">
            Nenhum jogo encontrado.
          </div>
        )}
      </div>

      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title="Detalhes do Jogo"
      >
        {selected && (
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Times:</strong> {selected.time1} vs {selected.time2}
            </p>
            <p>
              <strong>Data:</strong> {selected.data}
            </p>
            <p>
              <strong>Horário:</strong> {selected.horario}
            </p>
            <p>
              <strong>Status:</strong> {selected.status}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
}
