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

// ---- ATUALIZAR CAMPEONATO ----
export async function updateCampeonato(token, id, campeonato) {
  const res = await fetch(`${API_URL}/campeonatos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(token),
    },
    body: JSON.stringify(campeonato),
  });
  return res.json();
}

// ---- EXCLUIR CAMPEONATO ----
export async function deleteCampeonato(token, id) {
  const res = await fetch(`${API_URL}/campeonatos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(token),
    },
  });
  return res.json();
}

// ---- SIMULAÇÃO IoT ----
// Essa função simula o envio de eventos de um botão físico (IoT)
// Em um cenário real, o árbitro apertaria o botão e o dispositivo
// enviaria o evento automaticamente para o servidor via rede.
export async function registrarEventoIoT(token, jogoId, tipo) {
  console.log(`[Simulação IoT] Enviando evento: ${tipo} para jogo ID: ${jogoId}`);

  // Simula um pequeno delay de rede
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Retorna um resultado de sucesso simulado
  return {
    success: true,
    message: `Evento '${tipo}' registrado com sucesso para o jogo ${jogoId}.`,
  };
}
