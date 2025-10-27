// frontend/src/api.js
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api"; // use env se quiser

// login existente...
export async function login(username, password) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}

// jogadoras, jogos, classificacao, estatisticas (existentes)...

export async function getNoticias(token) {
  const res = await fetch(`${API_URL}/noticias`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  return res.json();
}

export async function getCampeonatos(token) {
  const res = await fetch(`${API_URL}/campeonatos`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  return res.json();
}

export async function createCampeonato(data, token) {
  const res = await fetch(`${API_URL}/campeonatos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}
