import { useEffect, useState } from "react";
import { getJogos } from "../api";
import Spinner from "../components/Spinner";
import Modal from "../components/Modal";
import { CheckCircle, Clock } from "lucide-react";

export default function Jogos() {
  const [jogos, setJogos] = useState(null);
  const [filter, setFilter] = useState("Todos");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Faça login para ver os jogos.");
      setJogos([]);
      return;
    }

    getJogos(token)
      .then((data) => {
        if (data && data.error) {
          setError("Erro ao carregar jogos. Verifique o token ou o backend.");
          setJogos([]);
        } else {
          setJogos(data || []);
        }
      })
      .catch(() => {
        setError("Erro de rede ao buscar jogos.");
        setJogos([]);
      });
  }, []);

  if (jogos === null) return <div className="p-10 text-center"><Spinner /></div>;

  const filtered = jogos.filter((j) => {
    if (filter !== "Todos" && j.status !== filter) return false;
    if (search && !(j.time1.toLowerCase().includes(search.toLowerCase()) || j.time2.toLowerCase().includes(search.toLowerCase()))) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-12">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
        <h1 className="text-3xl font-bold text-purple-800">Jogos</h1>

        <div className="flex gap-3 flex-wrap">
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

          {(search || filter !== "Todos") && (
            <button
              onClick={() => {
                setFilter("Todos");
                setSearch("");
              }}
              className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded text-sm font-medium transition"
            >
              Limpar
            </button>
          )}
        </div>
      </div>

      {error && (
        <div className="bg-red-100 text-red-800 p-3 rounded mb-6">{error}</div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((j) => (
          <div
            key={j.id}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-xl hover:scale-[1.02] transition cursor-pointer"
            onClick={() => setSelected(j)}
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="text-lg font-bold">
                  {j.time1} <span className="text-purple-600">vs</span> {j.time2}
                </div>
                <div className="text-sm text-gray-500">
                  {j.data ? j.data : "Data a definir"} •{" "}
                  {j.horario ? j.horario : "Horário indefinido"}
                </div>
              </div>

              <div
                className={`flex items-center gap-2 px-3 py-1 rounded-full font-semibold ${
                  j.status === "Finalizado"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {j.status === "Finalizado" ? (
                  <CheckCircle size={16} />
                ) : (
                  <Clock size={16} />
                )}
                {j.status}
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full text-center bg-white p-6 rounded shadow">
            Nenhum jogo encontrado.
          </div>
        )}
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)} title="Detalhes do Jogo">
        {selected && (
          <div className="space-y-2">
            <p>
              <strong>Times:</strong> {selected.time1} vs {selected.time2}
            </p>
            <p>
              <strong>Data:</strong> {selected.data || "A definir"}
            </p>
            <p>
              <strong>Horário:</strong> {selected.horario || "Indefinido"}
            </p>
            <p>
              <strong>Status:</strong> {selected.status}
            </p>
            {selected.local && (
              <p>
                <strong>Local:</strong> {selected.local}
              </p>
            )}
            {selected.campeonato && (
              <p>
                <strong>Campeonato:</strong> {selected.campeonato}
              </p>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
