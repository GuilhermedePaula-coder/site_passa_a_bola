// frontend/src/pages/Sobre.jsx
export default function Sobre() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-8 pb-12">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Sobre o Passa a Bola</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold mb-2">Missão</h3>
          <p>Divulgar e fortalecer o futebol feminino, com cobertura de jogos, estatísticas e notícias.</p>
          <h3 className="font-semibold mt-4 mb-2">Contato</h3>
          <p>Email: contato@passaabola.org</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold mb-2">Redes sociais</h3>
          <div className="flex gap-3 mt-2">
            <a className="bg-purple-50 px-3 py-2 rounded">Instagram</a>
            <a className="bg-purple-50 px-3 py-2 rounded">YouTube</a>
            <a className="bg-purple-50 px-3 py-2 rounded">Twitter</a>
          </div>

          <h3 className="font-semibold mt-4 mb-2">Equipe</h3>
          <p>Feito por: ____________________ (adicione nomes no README)</p>
        </div>
      </div>
    </div>
  );
}
