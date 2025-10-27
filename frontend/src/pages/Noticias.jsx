import { useEffect, useState } from "react";
import { getNoticias } from "../api";

export default function Noticias() {
  const [noticias, setNoticias] = useState(null);

  useEffect(() => {
    getNoticias().then(setNoticias).catch(() => setNoticias([]));
  }, []);

  if (noticias === null) return <div className="p-8">Carregando notícias...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Portal de Notícias</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {noticias.map((n) => (
          <article key={n.id} className="bg-white rounded-lg shadow p-4">
            <img src={n.imagem} alt={n.titulo} className="w-full h-40 object-cover rounded" />
            <h2 className="text-xl font-bold mt-3">{n.titulo}</h2>
            <p className="text-sm text-gray-600">{n.data}</p>
            <p className="mt-2 text-gray-700">{n.resumo}</p>
            <details className="mt-2 text-sm text-gray-800">
              <summary className="cursor-pointer text-purple-700">Ler mais</summary>
              <div className="mt-2">{n.conteudo}</div>
            </details>
          </article>
        ))}
      </div>
    </div>
  );
}

