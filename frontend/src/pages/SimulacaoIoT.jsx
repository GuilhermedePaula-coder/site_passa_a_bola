import { useEffect, useState } from "react";
import { getJogos, registrarEventoIoT } from "../api";

export default function SimulacaoIoT() {
  const [jogos, setJogos] = useState([]);
  const [selected, setSelected] = useState(null);
  const [placar, setPlacar] = useState({ time1: 0, time2: 0 });
  const [cartoes, setCartoes] = useState({
    time1: { amarelos: 0, vermelhos: 0 },
    time2: { amarelos: 0, vermelhos: 0 },
  });
  const [mensagem, setMensagem] = useState("");
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    getJogos(token).then((data) => {
      setJogos(data.filter((j) => j.status !== "Finalizado"));
    });
  }, []);

  const simularEvento = async (tipo) => {
    if (!selected) return;
    const token = localStorage.getItem("token");

    let descricao = "";

    // Gols
    if (tipo === "gol1") {
      setPlacar((p) => ({ ...p, time1: p.time1 + 1 }));
      descricao = `⚽ Gol de ${selected.time1}`;
    } else if (tipo === "gol2") {
      setPlacar((p) => ({ ...p, time2: p.time2 + 1 }));
      descricao = `⚽ Gol de ${selected.time2}`;
    }

    // Cartões
    else if (tipo === "amarelo1") {
      setCartoes((c) => ({
        ...c,
        time1: { ...c.time1, amarelos: c.time1.amarelos + 1 },
      }));
      descricao = `🟨 Cartão amarelo para ${selected.time1}`;
    } else if (tipo === "amarelo2") {
      setCartoes((c) => ({
        ...c,
        time2: { ...c.time2, amarelos: c.time2.amarelos + 1 },
      }));
      descricao = `🟨 Cartão amarelo para ${selected.time2}`;
    } else if (tipo === "vermelho1") {
      setCartoes((c) => ({
        ...c,
        time1: { ...c.time1, vermelhos: c.time1.vermelhos + 1 },
      }));
      descricao = `🟥 Cartão vermelho para ${selected.time1}`;
    } else if (tipo === "vermelho2") {
      setCartoes((c) => ({
        ...c,
        time2: { ...c.time2, vermelhos: c.time2.vermelhos + 1 },
      }));
      descricao = `🟥 Cartão vermelho para ${selected.time2}`;
    }

    // Histórico
    const hora = new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setHistorico((h) => [{ hora, descricao }, ...h]);

    // Simula envio ao servidor
    const res = await registrarEventoIoT(token, selected.id, tipo);
    setMensagem(
      res.success
        ? `✅ Evento "${descricao}" enviado com sucesso!`
        : "❌ Falha ao enviar evento para o servidor."
    );

    setTimeout(() => setMensagem(""), 3000);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-purple-800 mb-6 text-center">
        Simulação IoT – Árbitro Digital
      </h1>

      {/* Explicação */}
      <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-lg mb-8">
        <p className="text-gray-800">
          Nesta simulação, representamos como um sistema IoT (Internet das
          Coisas) poderia ser usado no futebol. Em um cenário real, o árbitro
          teria um dispositivo físico — como um relógio inteligente ou botão —
          que, ao ser pressionado, enviaria automaticamente o evento (gol,
          cartão etc.) ao servidor do campeonato.
        </p>
        <p className="mt-3 text-gray-800">
          Aqui, simulamos esse processo: ao clicar nos botões abaixo, você está
          “apertando” o botão do juiz, enviando um evento IoT para o sistema do
          site, que registra o{" "}
          <span className="font-semibold text-purple-700">gol</span> ou{" "}
          <span className="font-semibold text-purple-700">cartão</span> em tempo
          real.
        </p>
      </div>

      {/* Seleção do jogo */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-700">
          Selecione o jogo:
        </label>
        <select
          className="px-3 py-2 border rounded w-full"
          value={selected?.id || ""}
          onChange={(e) =>
            setSelected(jogos.find((j) => j.id === Number(e.target.value)))
          }
        >
          <option value="">-- Escolha uma partida --</option>
          {jogos.map((j) => (
            <option key={j.id} value={j.id}>
              {j.time1} vs {j.time2} — {j.data}
            </option>
          ))}
        </select>
      </div>

      {selected && (
        <>
          {/* Placar atual */}
          <div className="bg-white shadow p-6 rounded-xl mb-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              {selected.time1} <span className="text-purple-600">vs</span>{" "}
              {selected.time2}
            </h2>
            <div className="text-2xl font-semibold">
              {placar.time1} x {placar.time2}
            </div>
            <div className="mt-3 text-sm text-gray-500">
              🟨 {cartoes.time1.amarelos + cartoes.time2.amarelos} amarelos • 🟥{" "}
              {cartoes.time1.vermelhos + cartoes.time2.vermelhos} vermelhos
            </div>
          </div>

          {/* Mensagem */}
          {mensagem && (
            <div className="bg-green-100 text-green-800 text-center py-2 rounded mb-4 font-medium">
              {mensagem}
            </div>
          )}

          {/* Botões */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => simularEvento("gol1")}
              className="bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
            >
              ⚽ Gol {selected.time1}
            </button>
            <button
              onClick={() => simularEvento("gol2")}
              className="bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
            >
              ⚽ Gol {selected.time2}
            </button>

            <button
              onClick={() => simularEvento("amarelo1")}
              className="bg-yellow-400 py-3 rounded-lg hover:bg-yellow-500 transition"
            >
              🟨 Amarelo {selected.time1}
            </button>
            <button
              onClick={() => simularEvento("amarelo2")}
              className="bg-yellow-400 py-3 rounded-lg hover:bg-yellow-500 transition"
            >
              🟨 Amarelo {selected.time2}
            </button>

            <button
              onClick={() => simularEvento("vermelho1")}
              className="bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
            >
              🟥 Vermelho {selected.time1}
            </button>
            <button
              onClick={() => simularEvento("vermelho2")}
              className="bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
            >
              🟥 Vermelho {selected.time2}
            </button>
          </div>

          {/* Histórico */}
          <div className="bg-white shadow p-5 rounded-lg">
            <h3 className="text-lg font-bold text-purple-800 mb-3">
              📜 Histórico de Eventos
            </h3>
            {historico.length === 0 ? (
              <p className="text-gray-500 text-sm text-center">
                Nenhum evento registrado ainda.
              </p>
            ) : (
              <ul className="space-y-2">
                {historico.map((ev, i) => (
                  <li key={i} className="text-gray-800">
                    <span className="text-purple-700 font-semibold">
                      {ev.hora}
                    </span>{" "}
                    — {ev.descricao}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
}
