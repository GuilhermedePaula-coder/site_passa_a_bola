import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/imagemfundo.jpeg')" }}
    >
      {/* camada preta transparente */}
      <div className="bg-black bg-opacity-40 absolute inset-0"></div>

      {/* texto principal */}
      <div className="relative z-10 text-center text-white">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
          O FUTEBOL PELAS MULHERES.
        </h2>
        <p className="mt-4 text-lg">
          Acompanhe jogos, classificações e estatísticas do Brasileirão Feminino 2025.
        </p>
        <button
          onClick={() => navigate("/jogos")}
          className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg"
        >
          Ver Jogos
        </button>
      </div>
    </section>
  );
}
