// frontend/src/pages/Jogadoras.jsx
import { useEffect, useState } from "react";
import { getJogadoras } from "../api";
import Spinner from "../components/Spinner";

export default function Jogadoras() {
  const [jogadoras, setJogadoras] = useState(null);
  const [error, setError] = useState("");

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Faça login para ver jogadoras.");
      setJogadoras([]);
      return;
    }
    getJogadoras(token).then(data=>{
      if (data && data.error) {
        setError("Erro ao buscar jogadoras.");
        setJogadoras([]);
      } else setJogadoras(data || []);
    }).catch(()=>{ setError("Erro de rede"); setJogadoras([]);});
  },[]);

  if (jogadoras === null) return <div className="p-8 text-center"><Spinner/></div>;

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-12">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Jogadoras</h1>
      {error && <div className="bg-red-100 text-red-800 p-3 rounded mb-6">{error}</div>}

      <div className="grid md:grid-cols-3 gap-6">
        {jogadoras.map((j)=>(
          <div key={j.id} className="bg-white p-4 rounded-xl shadow">
            <img src={j.foto || `${import.meta.env.BASE_URL}image.png`} alt={j.nome} className="w-full h-40 object-cover rounded" />
            <div className="mt-3">
              <div className="font-bold text-lg">{j.nome}</div>
              <div className="text-sm text-gray-500">{j.time}</div>
              <div className="text-xs text-gray-400">Posição: {j.posicao}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
