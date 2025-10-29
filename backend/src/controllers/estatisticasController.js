export const getEstatisticas = (req, res) => {
  const estatisticas = [
    {
      id: 1,
      jogadora: "Marta",
      time: "Orlando Pride",
      gols: 12,
      assistencias: 8,
      jogos: 15
    },
    {
      id: 2,
      jogadora: "Bia Zaneratto",
      time: "Palmeiras",
      gols: 10,
      assistencias: 6,
      jogos: 14
    },
    {
      id: 3,
      jogadora: "Ary Borges",
      time: "Racing Louisville",
      gols: 7,
      assistencias: 5,
      jogos: 12
    }
  ];

  res.json(estatisticas);
};
