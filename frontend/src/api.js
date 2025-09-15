// frontend/src/api.js
const API_URL = "http://localhost:4000/api";

// Função de login
export async function login(username, password) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}

// Jogadoras
export async function getJogadoras(token) {
  const res = await fetch(`${API_URL}/jogadoras`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

// Jogos
export async function getJogos(token) {
  const res = await fetch(`${API_URL}/jogos`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

// Classificação
export async function getClassificacao(token) {
  const res = await fetch(`${API_URL}/classificacao`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

// Estatísticas
export async function getEstatisticas(token) {
  const res = await fetch(`${API_URL}/estatisticas`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}
