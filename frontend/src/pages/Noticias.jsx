import { useEffect, useState } from "react";
import { getNoticias } from "../api";

export default function Noticias() {
const [noticias, setNoticias] = useState([]);

useEffect(() => {
getNoticias().then(setNoticias).catch(() => setNoticias([]));
}, []);

return ( <div className="max-w-6xl mx-auto p-6"> <h1 className="text-4xl font-extrabold text-purple-800 mb-10 text-center">
Últimas Notícias </h1>

```
  <div className="grid md:grid-cols-2 gap-8">
    {noticias.length > 0 ? (
      noticias.map((n) => (
        <div
          key={n.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition transform hover:-translate-y-1"
        >
          {n.imagem && (
            <img
              src={n.imagem}
              alt={n.titulo}
              className="w-full h-52 object-cover"
            />
          )}
          <div className="p-5">
            <h2 className="text-2xl font-semibold text-purple-800 mb-2">
              {n.titulo}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{n.resumo}</p>
            <a
              href={n.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-green-700 font-semibold hover:text-purple-700 transition"
            >
              ➜ Leia mais
            </a>
          </div>
        </div>
      ))
    ) : (
      <p className="text-center text-gray-500">
        Nenhuma notícia disponível no momento.
      </p>
    )}
  </div>
</div>


);
}
