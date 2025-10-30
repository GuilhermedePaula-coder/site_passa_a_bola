// frontend/src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-purple-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6 items-center">
        <div>
          <h3 className="font-bold text-lg">Passa a Bola</h3>
          <p className="text-sm opacity-90">Portal de acompanhamento do Brasileirão Feminino 2025</p>
        </div>

        <div className="text-center">
          <p className="font-semibold">Siga nas redes</p>
          <div className="flex gap-3 justify-center mt-2">
            <a className="bg-white/10 px-3 py-2 rounded">YouTube</a>
            <a className="bg-white/10 px-3 py-2 rounded">Instagram</a>
            <a className="bg-white/10 px-3 py-2 rounded">Twitter</a>
          </div>
        </div>

        <div className="text-right text-sm">
          <p>© 2025 Passa a Bola</p>
          <p className="opacity-80">Feito por: Codando Magia</p>
        </div>
      </div>

      <div className="bg-purple-900 text-center py-3">
        <small className="opacity-90">PASSA A BOLA • PASSA A BOLA • PASSA A BOLA</small>
      </div>
    </footer>
  );
}
