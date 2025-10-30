// frontend/src/pages/Noticias.jsx
import { useEffect, useState } from "react";
import { getNoticias } from "../api";

export default function Noticias() {
  const [noticias, setNoticias] = useState(null);

  useEffect(() => {
    getNoticias().then(setNoticias).catch(() => setNoticias([]));
  }, []);

  if (noticias === null)
    return <div className="p-8 text-center">Carregando...</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-12">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Notícias</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {noticias.map((n) => (
          <article
            key={n.id}
            className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition border border-purple-100"
          >
            <div className="w-full h-48 overflow-hidden rounded-lg mb-3 bg-gray-100 flex items-center justify-center">
              <img
                src={n.imagem || "/imagem.png"}
                alt={n.titulo}
                className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                onError={(e) => (e.target.src = "/imagem.png")}
              />
            </div>

            <h3 className="font-semibold text-lg text-purple-800 mb-2">
              {n.titulo}
            </h3>

            <p className="text-sm text-gray-600 mb-3 line-clamp-3">
              {n.resumo}
            </p>

            <a
              href={n.link || "#"}
              target="_blank"
              rel="noreferrer"
              className="text-green-700 font-semibold inline-block hover:text-green-800"
            >
              Leia mais →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
