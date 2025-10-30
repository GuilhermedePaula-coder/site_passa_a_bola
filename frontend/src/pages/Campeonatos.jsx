// frontend/src/pages/Campeonatos.jsx
import { useEffect, useState } from "react";
import {
  getCampeonatos,
  addCampeonato,
  updateCampeonato,
  deleteCampeonato,
} from "../api";
import { Trophy, MapPin, Calendar, Users, Pencil, Trash2 } from "lucide-react";

export default function Campeonatos() {
  const [campeonatos, setCampeonatos] = useState(null);
  const [editando, setEditando] = useState(null);
  const [msg, setMsg] = useState("");
  const [form, setForm] = useState({
    nome: "",
    data: "",
    numeroTimes: "",
    local: "",
    descricao: "",
  });

  const token = localStorage.getItem("token");

  const carregarCampeonatos = async () => {
    try {
      const dados = await getCampeonatos();
      setCampeonatos(dados || []);
    } catch {
      setCampeonatos([]);
    }
  };

  useEffect(() => {
    carregarCampeonatos();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      setMsg("⚠️ Faça login para cadastrar ou editar.");
      return;
    }

    let res;
    if (editando) {
      res = await updateCampeonato(token, editando, form);
    } else {
      res = await addCampeonato(token, form);
    }

    if (res && (res.id || res.success)) {
      setMsg(editando ? "✅ Campeonato atualizado!" : "🏆 Campeonato criado!");
      setForm({
        nome: "",
        data: "",
        numeroTimes: "",
        local: "",
        descricao: "",
      });
      setEditando(null);
      carregarCampeonatos();
    } else {
      setMsg("❌ Erro ao salvar.");
    }
    setTimeout(() => setMsg(""), 3000);
  };

  const handleEdit = (c) => {
    setEditando(c.id);
    setForm({
      nome: c.nome,
      data: c.data,
      numeroTimes: c.numeroTimes,
      local: c.local,
      descricao: c.descricao || "",
    });
  };

  const handleDelete = async (id) => {
    if (!token) {
      setMsg("⚠️ Faça login para excluir.");
      return;
    }
    if (confirm("Tem certeza que deseja excluir este campeonato?")) {
      const res = await deleteCampeonato(token, id);
      if (res && res.success) {
        setMsg("🗑️ Campeonato excluído com sucesso!");
        carregarCampeonatos();
      } else {
        setMsg("❌ Erro ao excluir.");
      }
      setTimeout(() => setMsg(""), 3000);
    }
  };

  if (campeonatos === null)
    return <div className="p-6 text-center text-gray-600">Carregando...</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-12">
      <h1 className="text-3xl font-bold text-purple-800 mb-8 text-center">
        Campeonatos
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 space-y-4 border border-purple-100"
        >
          {msg && (
            <div className="text-sm font-medium text-center bg-purple-100 text-purple-800 py-2 rounded">
              {msg}
            </div>
          )}

          <input
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Nome do campeonato"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
          <input
            type="date"
            name="data"
            value={form.data}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
          <input
            type="number"
            name="numeroTimes"
            value={form.numeroTimes}
            onChange={handleChange}
            placeholder="Número de times"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
          <input
            name="local"
            value={form.local}
            onChange={handleChange}
            placeholder="Local"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
          <textarea
            name="descricao"
            value={form.descricao}
            onChange={handleChange}
            placeholder="Descrição"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg h-24 resize-none focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />

          <button className="bg-purple-700 hover:bg-purple-800 transition text-white px-6 py-2 rounded-lg font-semibold shadow w-full">
            {editando ? "Salvar alterações" : "Cadastrar campeonato"}
          </button>
        </form>

        {/* Lista de campeonatos */}
        <section className="bg-white rounded-2xl shadow-md border border-purple-100 p-6">
          <h2 className="font-semibold text-xl text-purple-800 mb-4 flex items-center gap-2">
            <Trophy size={20} className="text-yellow-500" />
            Campeonatos cadastrados
          </h2>

          {campeonatos.length === 0 ? (
            <p className="text-gray-500">Nenhum campeonato cadastrado ainda.</p>
          ) : (
            <ul className="space-y-4">
              {campeonatos.map((c) => (
                <li
                  key={c.id}
                  className="border border-purple-100 rounded-lg p-4 hover:bg-purple-50 transition flex justify-between items-start"
                >
                  <div>
                    <div className="font-bold text-purple-700">{c.nome}</div>
                    <div className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                      <Calendar size={14} /> {c.data}
                      <span className="mx-1">•</span>
                      <MapPin size={14} /> {c.local}
                    </div>
                    <div className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                      <Users size={14} /> {c.numeroTimes} times
                    </div>
                    {c.descricao && (
                      <p className="mt-2 text-sm text-gray-700">{c.descricao}</p>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(c)}
                      className="text-purple-600 hover:text-purple-800"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(c.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
