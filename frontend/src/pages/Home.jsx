
import { useEffect, useState } from "react";
import { getNoticias } from "../api";

export default function Home() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    getNoticias().then(setNoticias).catch(()=>setNoticias([]));
  }, []);

  // pega primeiras 3 notícias para cards
  const destaque = noticias.slice(0, 3);

  return (
    <section className="pt-6 pb-12">
      <div
        className="max-w-7xl mx-auto px-6 rounded-xl overflow-hidden relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.36), rgba(0,0,0,0.36)), url('${import.meta.env.BASE_URL}imagemfundo.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "56vh",
        }}
      >
        <div className="py-24 text-center text-white">
          <h1 className="text-5xl font-extrabold leading-tight drop-shadow-lg">O FUTEBOL PELAS MULHERES.</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto opacity-95">
            Acompanhe jogos, classificações e estatísticas do Brasileirão Feminino 2025.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Últimas notícias</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {destaque.length > 0 ? (
            destaque.map((n) => (
              <article key={n.id} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
                {n.imagem && <img src={n.imagem} alt={n.titulo} className="w-full h-40 object-cover rounded-md mb-3" />}
                <h3 className="font-semibold text-lg text-purple-800">{n.titulo}</h3>
                <p className="text-sm text-gray-600 mt-2">{n.resumo}</p>
                <a href={n.link || "#"} className="text-green-700 font-semibold mt-3 inline-block">Leia mais →</a>
              </article>
            ))
          ) : (
            <>
              <div className="bg-white rounded-lg shadow p-6">Sem notícias no momento.</div>
              <div className="bg-white rounded-lg shadow p-6">Sem notícias no momento.</div>
              <div className="bg-white rounded-lg shadow p-6">Sem notícias no momento.</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
