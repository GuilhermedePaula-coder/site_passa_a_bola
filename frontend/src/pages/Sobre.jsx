// frontend/src/pages/Sobre.jsx
export default function Sobre() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-8 pb-12">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Sobre o Passa a Bola</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold mb-2">Quem somos</h3>
          <p className="text-gray-600 leading-relaxed">
            O Passa a Bola é uma iniciativa estudantil para acompanhar o
            crescimento do futebol feminino no Brasil. A plataforma agrupa
            jogos, classificações, estatísticas e notícias com foco em
            visibilidade e promoção das atletas.
          </p>

          <h3 className="font-semibold mt-4 mb-2">O que fazemos</h3>
          <ul className="text-gray-600 list-disc list-inside">
            <li>Cobertura de jogos e resultados.</li>
            <li>Rankings e estatísticas atualizadas.</li>
            <li>Notícias e matérias sobre atletas e clubes.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold mb-2">Equipe & Contato</h3>
          <p className="text-gray-600">Feito por: ____________________ (adicione nomes no README)</p>
          <p className="text-gray-600 mt-2">Email: contato@passaabola.org</p>

          <h3 className="font-semibold mt-4 mb-2">Redes sociais</h3>
          <div className="flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-purple-50 px-4 py-2 rounded">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="bg-purple-50 px-4 py-2 rounded">Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-purple-50 px-4 py-2 rounded">Facebook</a>
          </div>

          <h3 className="font-semibold mt-4 mb-2">Patrocínio / Apoio</h3>
          <p className="text-gray-600 text-sm">Se quiser destacar patrocinadores, adicione logos em /public e atualize esta seção.</p>
        </div>
      </div>
    </div>
  );
}
