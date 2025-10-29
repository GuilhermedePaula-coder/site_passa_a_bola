export default function Sobre() {
return ( <div className="max-w-5xl mx-auto p-10 text-center"> <h1 className="text-4xl font-extrabold text-purple-800 mb-6">
Sobre o Passa a Bola </h1>

```
  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
    O <strong>Passa a Bola</strong> é uma plataforma dedicada a dar visibilidade ao
    futebol feminino, oferecendo informações sobre campeonatos, jogadoras e
    estatísticas. Nosso objetivo é impulsionar a valorização das mulheres no
    esporte, promovendo igualdade, paixão e reconhecimento dentro e fora dos
    campos.
  </p>

  <div className="grid md:grid-cols-3 gap-8 mb-10">
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-purple-700 mb-2">
        🌍 Nossa Missão
      </h3>
      <p className="text-gray-600 text-sm">
        Dar voz e espaço às atletas, conectando torcedores, clubes e o
        crescimento do futebol feminino.
      </p>
    </div>
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-purple-700 mb-2">
        💡 Nosso Propósito
      </h3>
      <p className="text-gray-600 text-sm">
        Ser uma referência de informação e inspiração para quem ama o jogo
        e acredita na força das mulheres no esporte.
      </p>
    </div>
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-purple-700 mb-2">
        ⚽ Nossa Visão
      </h3>
      <p className="text-gray-600 text-sm">
        Mostrar que o futebol feminino é talento, garra e emoção — e que
        merece todo o destaque.
      </p>
    </div>
  </div>

  <div className="mt-8">
    <h2 className="text-2xl font-semibold text-purple-800 mb-4">
      Siga o Passa a Bola
    </h2>
    <div className="flex justify-center gap-6">
      <a
        href="https://instagram.com"
        className="text-purple-700 hover:text-green-700 text-xl"
      >
        📷 Instagram
      </a>
      <a
        href="https://twitter.com"
        className="text-purple-700 hover:text-green-700 text-xl"
      >
        🐦 Twitter
      </a>
      <a
        href="https://facebook.com"
        className="text-purple-700 hover:text-green-700 text-xl"
      >
        👍 Facebook
      </a>
    </div>
  </div>
</div>


);
}
