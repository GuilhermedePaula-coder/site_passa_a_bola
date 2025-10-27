export default function Sobre() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-4">Sobre o Passa a Bola</h1>

      <div className="bg-white p-6 rounded shadow">
        <p className="mb-4">
          O Passa a Bola é um projeto dedicado à divulgação e acompanhamento do futebol feminino.
          Aqui você encontra notícias, resultados, classificações e estatísticas atualizadas.
        </p>

        <h2 className="font-semibold mt-4">Contato</h2>
        <p>Email: contato@passaabola.org</p>
        <p>Telefone: (00) 90000-0000</p>

        <h3 className="font-semibold mt-4">Redes sociais</h3>
        <div className="flex gap-4 mt-2">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-pink-600">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-blue-600">Facebook</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-red-600">YouTube</a>
        </div>
      </div>
    </div>
  );
}
