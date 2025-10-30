// frontend/src/pages/Noticias.jsx
import { useEffect, useState } from "react";
import { getNoticias } from "../api";

export default function Noticias() {
  const [noticias, setNoticias] = useState(null);

  useEffect(()=>{
    getNoticias().then(setNoticias).catch(()=>setNoticias([]));
  },[]);

  if (noticias === null) return <div className="p-8 text-center">Carregando...</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-12">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Notícias</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {noticias.map(n => (
          <article key={n.id} className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition">
            {n.imagem && <img src={n.imagem} alt={n.titulo} className="w-full h-44 object-cover rounded mb-3" />}
            <h3 className="font-semibold text-lg">{n.titulo}</h3>
            <p className="text-sm text-gray-600 mt-2">{n.resumo}</p>
            <a href={n.link || "#"} target="_blank" rel="noreferrer" className="text-green-700 font-semibold mt-3 inline-block">Leia mais →</a>
          </article>
        ))}
      </div>
    </div>
  );
}
