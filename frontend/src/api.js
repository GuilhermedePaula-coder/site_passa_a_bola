// frontend/src/api.js
const API_URL = "http://localhost:4000/api";

async function request(path, options = {}) {
  const token = localStorage.getItem("token");
  const headers = options.headers || {};
  if (token) headers["Authorization"] = `Bearer ${token}`;
  headers["Content-Type"] = headers["Content-Type"] || "application/json";
  const res = await fetch(`${API_URL}${path}`, { ...options, headers });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${res.status} - ${text}`);
  }
  return res.json();
}

export async function login(username, password) {
  return request("/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  });
}

export async function getJogadoras() {
  return request("/jogadoras");
}

export async function getJogos() {
  return request("/jogos");
}

export async function getClassificacao() {
  return request("/classificacao");
}

export async function getEstatisticas() {
  return request("/estatisticas");
}
