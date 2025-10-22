// frontend/src/pages/Jogadoras.jsx
import { useEffect, useState } from "react";
import { getJogadoras } from "../api";
import Spinner from "../components/Spinner";
import Modal from "../components/Modal";

export default function Jogadoras() {
  const [jogadoras, setJogadoras] = useState(null);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getJogadoras()
      .then(setJogadoras)
      .catch(() => setJogadoras([]));
  }, []);

  if (jogadoras === null)
    return (
      <div className="text-center p-10">
        <Spinner />
      </div>
    );

  const filtered = jogadoras.filter(
    (j) =>
      j.nome.toLowerCase().includes(search.toLowerCase()) ||
      j.time.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header da página */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-800">Jogadoras</h1>
        <input
          placeholder="Buscar por nome ou time"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 border rounded w-64"
        />
      </div>

      {/* Cards das jogadoras */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((j) => (
          <div
            key={j.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelected(j)}
          >
            <div className="text-xl font-bold text-purple-700">{j.nome}</div>
            <div className="text-sm text-gray-600">
              {j.posicao} • {j.time}
            </div>
            <div className="mt-3 text-sm text-gray-700">
              Jogos: {j.jogos} • Gols: {j.gols} • Assist: {j.assistencias}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="p-6 bg-white rounded shadow text-center">
            Nenhuma jogadora encontrada.
          </div>
        )}
      </div>

      {/* Modal de detalhes */}
      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.nome}
      >
        {selected && (
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Time:</strong> {selected.time}
            </p>
            <p>
              <strong>Posição:</strong> {selected.posicao}
            </p>
            <p>
              <strong>Jogos:</strong> {selected.jogos}
            </p>
            <p>
              <strong>Gols:</strong> {selected.gols}
            </p>
            <p>
              <strong>Assistências:</strong> {selected.assistencias}
            </p>
            <p>
              <strong>Cartões:</strong> 🟨 {selected.amarelo} • 🟥{" "}
              {selected.vermelho}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
}
