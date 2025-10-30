// frontend/src/pages/Estatisticas.jsx
import { useEffect, useState } from "react";
import { getEstatisticas } from "../api";
import Spinner from "../components/Spinner";

export default function Estatisticas() {
  const [estatisticas, setEstatisticas] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Faça login para ver estatísticas.");
      setEstatisticas([]);
      return;
    }

    getEstatisticas(token)
      .then((data) => {
        if (data && data.error) {
          setError("Erro ao carregar estatísticas.");
          setEstatisticas([]);
          return;
        }

        // aceitar tanto objeto {artilheira, assistente, goleira} quanto array
        if (!data) {
          setEstatisticas([]);
          return;
        }

        if (Array.isArray(data)) {
          setEstatisticas(data.map((item, i) => ({
            id: item.id ?? i,
            titulo: item.jogadora || item.titulo || `Item ${i+1}`,
            time: item.time || item.clube,
            gols: item.gols || 0,
            assistencias: item.assistencias || 0,
            defesas: item.defesas || 0,
          })));
          return;
        }

        // se for objeto com chaves
        if (typeof data === "object") {
          const arr = [];
          if (data.artilheira) arr.push({ id: "art", titulo: data.artilheira.nome, time: data.artilheira.time || data.artilheira.clube, gols: data.artilheira.gols || 0 });
          if (data.assistente) arr.push({ id: "ass", titulo: data.assistente.nome, time: data.assistente.time || data.assistente.clube, assistencias: data.assistente.assistencias || 0 });
          if (data.goleira) arr.push({ id: "gol", titulo: data.goleira.nome, time: data.goleira.time || data.goleira.clube, defesas: data.goleira.defesas || 0 });
          setEstatisticas(arr);
          return;
        }

        setEstatisticas([]);
      })
      .catch(() => {
        setError("Erro de rede ao buscar estatísticas.");
        setEstatisticas([]);
      });
  }, []);

  if (estatisticas === null) return <div className="p-8 text-center"><Spinner /></div>;

  return (
    <div className="max-w-6xl mx-auto px-6 pt-8 pb-12">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Estatísticas do Campeonato</h1>
      {error && <div className="bg-red-100 p-3 rounded text-red-800 mb-6">{error}</div>}

      <div className="grid md:grid-cols-3 gap-6">
        {estatisticas.map((e) => (
          <div key={e.id} className="bg-white rounded-xl p-6 shadow">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-purple-700">{e.titulo}</h2>
                {e.time && <div className="text-sm text-gray-500">{e.time}</div>}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 text-center items-end">
              <div>
                <div className="text-sm text-gray-500">Gols</div>
                <div className="text-2xl font-bold text-green-700">{e.gols ?? 0}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Assistências</div>
                <div className="text-2xl font-bold text-green-700">{e.assistencias ?? 0}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Defesas</div>
                <div className="text-2xl font-bold text-green-700">{e.defesas ?? 0}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
