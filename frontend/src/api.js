
const API_URL = "http://localhost:4000/api";

// helper: cria headers com token (se existir)
function authHeaders(token) {
  return token
    ? { Authorization: `Bearer ${token}` }
    : {};
}

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
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(token),
    },
  });
  return res.json();
}

// ---- JOGOS ----
export async function getJogos(token) {
  const res = await fetch(`${API_URL}/jogos`, {
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(token),
    },
  });
  return res.json();
}

// ---- CLASSIFICAÇÃO ----
export async function getClassificacao(token) {
  const res = await fetch(`${API_URL}/classificacao`, {
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(token),
    },
  });
  return res.json();
}

// ---- ESTATÍSTICAS ----
export async function getEstatisticas(token) {
  const res = await fetch(`${API_URL}/estatisticas`, {
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(token),
    },
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
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(token),
    },
  });
  return res.json();
}

export async function addCampeonato(token, campeonato) {
  const res = await fetch(`${API_URL}/campeonatos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(token),
    },
    body: JSON.stringify(campeonato),
  });
  return res.json();
}
