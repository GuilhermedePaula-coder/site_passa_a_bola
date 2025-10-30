// frontend/src/pages/Sobre.jsx
import { Users, Mail, HeartHandshake, Trophy } from "lucide-react";

export default function Sobre() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-10 pb-16">
      {/* Cabeçalho com logo e título */}
      <div className="flex flex-col items-center mb-10">
        <div className="flex items-center gap-4">
          <img
            src="/image.png"
            alt="Logo Passa a Bola"
            className="w-20 h-20 object-contain rounded-full shadow-md"
          />
          <h1 className="text-4xl font-extrabold text-purple-800">
            Sobre o <span className="text-purple-600">Passa a Bola</span>
          </h1>
        </div>
        <p className="text-gray-600 mt-3 text-center max-w-2xl">
          Um projeto dedicado a dar visibilidade, reconhecimento e espaço às mulheres que vivem o futebol.
        </p>
      </div>

      {/* Sessão principal */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Card - Quem Somos */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-purple-600" size={26} />
            <h3 className="text-xl font-semibold text-purple-700">Quem Somos</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            O <strong>Passa a Bola</strong> é uma iniciativa estudantil criada para promover e acompanhar
            o crescimento do futebol feminino no Brasil. Nossa plataforma reúne jogos, classificações,
            estatísticas e notícias, com o objetivo de dar mais visibilidade e reconhecimento às atletas.
          </p>

          <h3 className="text-lg font-semibold text-purple-700 mt-6 mb-2">O que fazemos</h3>
          <ul className="text-gray-700 list-disc list-inside space-y-1">
            <li>🏆 Cobertura completa de jogos e resultados.</li>
            <li>📊 Rankings e estatísticas atualizadas em tempo real.</li>
            <li>📰 Notícias, histórias e matérias sobre jogadoras e clubes.</li>
          </ul>
        </div>

        {/* Card - Contato e Redes */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="text-purple-600" size={26} />
            <h3 className="text-xl font-semibold text-purple-700">Equipe & Contato</h3>
          </div>

          <p className="text-gray-700 mb-2">
            Feito com 💜 por <strong>estudantes apaixonados por futebol feminino</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Email:{" "}
            <a href="mailto:contato@passaabola.org" className="text-purple-600 underline">
              contato@passaabola.org
            </a>
          </p>

          <h3 className="text-lg font-semibold text-purple-700 mb-3">Redes Sociais</h3>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/passaabola/"
              target="_blank"
              rel="noreferrer"
              className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full hover:bg-purple-200 transition"
            >
              Instagram
            </a>
            <a
              href="https://x.com/passaabola"
              target="_blank"
              rel="noreferrer"
              className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full hover:bg-purple-200 transition"
            >
              X
            </a>
            <a
              href="https://www.facebook.com/oficialpassaabola/"
              target="_blank"
              rel="noreferrer"
              className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full hover:bg-purple-200 transition"
            >
              Facebook
            </a>
            <a
              href="https://www.tiktok.com/@passabola"
              target="_blank"
              rel="noreferrer"
              className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full hover:bg-purple-200 transition"
            >
              Tiktok
            </a>
            <a
              href="https://www.youtube.com/@passabola"
              target="_blank"
              rel="noreferrer"
              className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full hover:bg-purple-200 transition"
            >
              Youtube
            </a>
          </div>

          <h3 className="text-lg font-semibold text-purple-700 mt-6 mb-2 flex items-center gap-2">
            <HeartHandshake size={20} className="text-purple-600" />
            Patrocínio & Apoio
          </h3>
          <p className="text-gray-600 text-sm">
            Se quiser destacar patrocinadores, adicione as logos em <code>/public</code> e atualize esta seção.
          </p>
        </div>
      </div>

      {/* Sessão final - Missão */}
      <div className="mt-12 bg-gradient-to-r from-purple-100 to-purple-200 p-8 rounded-2xl shadow-inner text-center">
        <Trophy className="text-purple-600 mx-auto mb-3" size={36} />
        <h2 className="text-2xl font-bold text-purple-800 mb-3">Nossa Missão</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Acreditamos que o futebol feminino merece o mesmo espaço, respeito e paixão que qualquer outro esporte.
          O <strong>Passa a Bola</strong> existe para impulsionar essa mudança, celebrando cada jogadora e sua trajetória dentro e fora dos campos.
        </p>
      </div>
    </div>
  );
}
