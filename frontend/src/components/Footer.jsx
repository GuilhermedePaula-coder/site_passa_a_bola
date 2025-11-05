// frontend/src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-purple-700 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 items-start">
        <div>
          <h3 className="font-bold text-lg">Passa a Bola</h3>
          <p className="text-sm opacity-90">Portal de acompanhamento do Brasileirão Feminino 2025</p>
        </div>

        <div className="text-center">
          <p className="font-semibold">Siga nas redes</p>
          <div className="flex gap-3 justify-center mt-2">
            <a href="https://www.instagram.com/passaabola/" target="_blank" rel="noreferrer" className="bg-white/10 px-3 py-2 rounded">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="bg-white/10 px-3 py-2 rounded">Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-white/10 px-3 py-2 rounded">YouTube</a>
          </div>
        </div>

        <div className="text-right text-sm">
          <p>© 2025 Passa a Bola</p>
          
        </div>
      </div>

      <div className="bg-purple-900 text-center py-3">
        <small className="opacity-90">PASSA A BOLA • PASSA A BOLA • PASSA A BOLA</small>
      </div>
    </footer>
  );
}
