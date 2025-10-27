import { useEffect, useState } from "react";
import { getCampeonatos, createCampeonato } from "../api";

export default function Campeonatos() {
  const [campeonatos, setCampeonatos] = useState(null);
  const [form, setForm] = useState({
    nome: "",
    data: "",
    numeroTimes: "",
    local: "",
    descricao: ""
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    getCampeonatos().then(setCampeonatos).catch(() => setCampeonatos([]));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // exige token no backend
    const res = await createCampeonato(form, token);
    if (res.id) {
      setMessage("Campeonato criado com sucesso!");
      // atualizar lista
      const updated = await getCampeonatos(token);
      setCampeonatos(updated);
      setForm({ nome: "", data: "", numeroTimes: "", local: "", descricao: "" });
    } else {
      setMessage(res.error || "Erro ao criar campeonato");
    }
    setTimeout(()=>setMessage(""), 3000);
  };

  if (campeonatos === null) return <div className="p-8">Carregando campeonatos...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Campeonatos</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-3">Cadastrar novo campeonato</h2>
          {message && <div className="mb-3 text-sm text-green-700">{message}</div>}
          <form onSubmit={handleSubmit} className="space-y-3">
            <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome do campeonato" className="w-full border px-3 py-2 rounded" />
            <input type="date" name="data" value={form.data} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
            <input name="numeroTimes" value={form.numeroTimes} onChange={handleChange} placeholder="Número de times" type="number" className="w-full border px-3 py-2 rounded" />
            <input name="local" value={form.local} onChange={handleChange} placeholder="Local" className="w-full border px-3 py-2 rounded" />
            <textarea name="descricao" value={form.descricao} onChange={handleChange} placeholder="Descrição (opcional)" className="w-full border px-3 py-2 rounded" />
            <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">Cadastrar</button>
          </form>
        </section>

        <section className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-3">Campeonatos cadastrados</h2>
          <ul className="space-y-3">
            {campeonatos.map(c => (
              <li key={c.id} className="border p-3 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold">{c.nome}</div>
                    <div className="text-sm text-gray-600">{c.data} — {c.local}</div>
                  </div>
                  <div className="text-sm text-gray-700">Times: {c.numeroTimes}</div>
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
