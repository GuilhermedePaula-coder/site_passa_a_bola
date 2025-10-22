
import { useEffect, useState } from "react";
import { getClassificacao } from "../api";
import Spinner from "../components/Spinner";
import Modal from "../components/Modal";

export default function Classificacao() {
  const [times, setTimes] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getClassificacao().then(setTimes).catch(() => setTimes([]));
  }, []);

  if (times === null)
    return (
      <div className="text-center p-10">
        <Spinner />
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">
        Classificação
      </h1>

      {/* Tabela */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="grid grid-cols-12 gap-0 border-b bg-purple-700 text-white p-3">
          <div className="col-span-1">#</div>
          <div className="col-span-5">Time</div>
          <div className="col-span-2">Pts</div>
          <div className="col-span-1">V</div>
          <div className="col-span-1">E</div>
          <div className="col-span-1">D</div>
          <div className="col-span-1">SG</div>
        </div>

        {times.map((t, idx) => (
          <div
            key={idx}
            className="grid grid-cols-12 gap-0 p-3 items-center hover:bg-purple-50 cursor-pointer"
            onClick={() => setSelected(t)}
          >
            <div className="col-span-1 font-bold">
              {t.posicao || idx + 1}
            </div>
            <div className="col-span-5">{t.time}</div>
            <div className="col-span-2">{t.pontos}</div>
            <div className="col-span-1">{t.vitorias}</div>
            <div className="col-span-1">{t.empates}</div>
            <div className="col-span-1">{t.derrotas}</div>
            <div className="col-span-1">
              {t.saldo ?? t.golsPro - t.golsContra}
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Detalhes do Time */}
      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={`Detalhes - ${selected?.time}`}
      >
        {selected && (
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Posição:</strong> {selected.posicao}
            </p>
            <p>
              <strong>Pontos:</strong> {selected.pontos}
            </p>
            <p>
              <strong>Vitórias:</strong> {selected.vitorias}
            </p>
            <p>
              <strong>Empates:</strong> {selected.empates}
            </p>
            <p>
              <strong>Derrotas:</strong> {selected.derrotas}
            </p>
            <p>
              <strong>Gols Pró:</strong> {selected.golsPro}
            </p>
            <p>
              <strong>Gols Contra:</strong> {selected.golsContra}
            </p>
            <p>
              <strong>Saldo de Gols:</strong>{" "}
              {selected.saldo ?? selected.golsPro - selected.golsContra}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
}
