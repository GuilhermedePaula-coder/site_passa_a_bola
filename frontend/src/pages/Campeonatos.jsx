// frontend/src/pages/Campeonatos.jsx
import { useEffect, useState } from "react";
import { getCampeonatos, addCampeonato } from "../api";

export default function Campeonatos() {
  const [campeonatos, setCampeonatos] = useState(null);
  const [form, setForm] = useState({ nome:"", data:"", numeroTimes:"", local:"", descricao:"" });
  const [msg, setMsg] = useState("");

  useEffect(()=> {
    getCampeonatos().then(d=>setCampeonatos(d || [])).catch(()=>setCampeonatos([]));
  },[]);

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) { setMsg("Faça login para cadastrar."); return; }
    const res = await addCampeonato(token, form);
    if (res && res.id) {
      setMsg("Campeonato criado!");
      const updated = await getCampeonatos();
      setCampeonatos(updated);
      setForm({nome:"",data:"",numeroTimes:"",local:"",descricao:""});
    } else {
      setMsg(res.error || "Erro ao criar campeonato.");
    }
    setTimeout(()=>setMsg(""),3000);
  };

  if (campeonatos === null) return <div className="p-6">Carregando...</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-12">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Campeonatos</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit} className="bg-white rounded p-4 shadow space-y-3">
          {msg && <div className="text-sm text-green-700">{msg}</div>}
          <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" className="w-full border px-3 py-2 rounded" />
          <input type="date" name="data" value={form.data} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          <input type="number" name="numeroTimes" value={form.numeroTimes} onChange={handleChange} placeholder="Número de times" className="w-full border px-3 py-2 rounded" />
          <input name="local" value={form.local} onChange={handleChange} placeholder="Local" className="w-full border px-3 py-2 rounded" />
          <textarea name="descricao" value={form.descricao} onChange={handleChange} placeholder="Descrição" className="w-full border px-3 py-2 rounded" />
          <button className="bg-purple-700 text-white px-4 py-2 rounded">Cadastrar</button>
        </form>

        <section className="bg-white rounded p-4 shadow">
          <h2 className="font-semibold mb-3">Campeonatos cadastrados</h2>
          <ul className="space-y-3">
            {campeonatos.map(c=>(
              <li key={c.id} className="border rounded p-3">
                <div className="flex justify-between">
                  <div>
                    <div className="font-bold">{c.nome}</div>
                    <div className="text-sm text-gray-500">{c.data} — {c.local}</div>
                  </div>
                  <div className="text-sm">Times: {c.numeroTimes}</div>
                </div>
                {c.descricao && <p className="mt-2 text-sm">{c.descricao}</p>}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
