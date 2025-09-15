// src/pages/Home.jsx
function Home() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center">
      {/* Imagem de fundo */}
      <img
        src="/hero.jpg" // troque para a imagem do seu Figma
        alt="Futebol feminino"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Texto principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="text-white text-5xl md:text-6xl font-extrabold leading-tight">
          O FUTEBOL PELAS MULHERES.
        </h2>
      </div>
    </section>
  );
}

export default Home;
