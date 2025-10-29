import { useEffect, useState } from "react";
import { getEstatisticas } from "../api";
import Spinner from "../components/Spinner";

export default function Estatisticas() {
  const [estatisticas, setEstatisticas] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    getEstatisticas(token)
      .then((data) => setEstatisticas(data))
      .catch(() => setEstatisticas([]));
  }, []);

  if (estatisticas === null)
    return (
      <div className="text-center p-10">
        <Spinner />
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">
        Estatísticas do Campeonato
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {estatisticas.map((e) => (
          <div key={e.id} className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              {e.titulo}
            </h2>
            <p className="text-2xl font-bold text-green-700">{e.valor}</p>
            <p className="text-sm text-gray-500 mt-2">{e.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
