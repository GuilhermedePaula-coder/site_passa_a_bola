// frontend/src/api.js
const API_URL = "http://localhost:4000/api";

// ---- LOGIN ----
export async function login(username, password) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}

// ---- JOGADORAS ----
export async function getJogadoras(token) {
  const res = await fetch(`${API_URL}/jogadoras`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

// ---- JOGOS ----
export async function getJogos(token) {
  const res = await fetch(`${API_URL}/jogos`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

// ---- CLASSIFICAÇÃO ----
export async function getClassificacao(token) {
  const res = await fetch(`${API_URL}/classificacao`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

// ---- ESTATÍSTICAS ----
export async function getEstatisticas(token) {
  const res = await fetch(`${API_URL}/estatisticas`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

// ---- NOTÍCIAS ----
export async function getNoticias() {
  const res = await fetch(`${API_URL}/noticias`);
  return res.json();
}

// ---- CAMPEONATOS ----
export async function getCampeonatos(token) {
  const res = await fetch(`${API_URL}/campeonatos`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function addCampeonato(token, campeonato) {
  const res = await fetch(`${API_URL}/campeonatos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(campeonato),
  });
  return res.json();
}
