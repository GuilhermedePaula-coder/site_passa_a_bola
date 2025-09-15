// src/pages/Home.jsx
import imagemFundo from "../assets/imagemfundo.jpeg";

function Home() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center">
      {/* Imagem de fundo */}
      <img
        src={imagemFundo}
        alt="Futebol feminino"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    </section>
  );
}

export default Home;
