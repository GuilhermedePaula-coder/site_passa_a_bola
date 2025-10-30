// frontend/src/pages/Noticias.jsx
import { useEffect, useState } from "react";
import { getNoticias } from "../api";

export default function Noticias() {
  const [noticias, setNoticias] = useState(null);

  useEffect(()=>{
    getNoticias().then(d=>setNoticias(d || [])).catch(()=>setNoticias([]));
  },[]);

  if (noticias === null) return <div className="p-8">Carregando...</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-12">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Notícias</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {noticias.map((n)=>(
          <article key={n.id} className="bg-white rounded p-4 shadow">
            <h2 className="font-bold">{n.titulo}</h2>
            <p className="text-sm text-gray-500">{n.data}</p>
            <p className="mt-2 text-sm">{n.resumo || n.corpo?.slice(0,120)}</p>
            <a className="text-purple-700 text-sm mt-2 inline-block">Ler mais →</a>
          </article>
        ))}
      </div>
    </div>
  );
}
