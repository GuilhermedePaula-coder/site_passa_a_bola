// frontend/src/pages/Classificacao.jsx
import { useEffect, useState } from "react";
import { getClassificacao } from "../api";
import Spinner from "../components/Spinner";

export default function Classificacao() {
  const [table, setTable] = useState(null);
  const [error, setError] = useState("");

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (!token) { setTable([]); setError("Faça login para ver a classificação."); return; }
    getClassificacao(token).then(data=>{
      if (data && data.error) { setError("Erro ao buscar classificação"); setTable([]); }
      else setTable(data || []);
    }).catch(()=>{ setError("Erro de rede"); setTable([]); });
  },[]);

  if (table === null) return <div className="p-10 text-center"><Spinner/></div>;

  return (
    <div className="max-w-6xl mx-auto px-6 pt-8 pb-12">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Classificação</h1>
      {error && <div className="bg-red-100 text-red-800 p-3 rounded mb-6">{error}</div>}

      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-purple-50 text-left">
            <tr>
              <th className="p-3">Pos</th>
              <th>Time</th>
              <th className="text-right pr-6">Pts</th>
              <th className="text-right pr-6">PJ</th>
            </tr>
          </thead>
          <tbody>
            {table.map((row, i)=>(
              <tr key={i} className="border-t">
                <td className="p-3 font-semibold">{row.posicao ?? (i+1)}</td>
                <td className="py-3">{row.time}</td>
                <td className="text-right pr-6">{row.pts ?? 0}</td>
                <td className="text-right pr-6">{row.pj ?? 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
