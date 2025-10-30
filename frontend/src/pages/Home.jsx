// frontend/src/pages/Home.jsx
export default function Home() {
  return (
    <section className="pt-28 pb-12">
      <div
        className="max-w-7xl mx-auto px-6 rounded-xl overflow-hidden shadow-lg relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('${import.meta.env.BASE_URL}imagemfundo.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
        }}
      >
        <div className="py-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            O FUTEBOL PELAS MULHERES.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Acompanhe jogos, classificações, estatísticas e notícias do Brasileirão Feminino 2025.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a href="/jogos" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow">
              Ver Jogos
            </a>
            <a href="/estatisticas" className="bg-white bg-opacity-90 text-purple-700 px-6 py-3 rounded-lg font-semibold shadow">
              Estatísticas
            </a>
          </div>
        </div>
      </div>

      {/* quick news cards */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Últimas notícias</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 shadow">Notícia 1 - Resumo curto...</div>
          <div className="bg-white rounded-lg p-4 shadow">Notícia 2 - Resumo curto...</div>
          <div className="bg-white rounded-lg p-4 shadow">Notícia 3 - Resumo curto...</div>
        </div>
      </div>
    </section>
  );
}
