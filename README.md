# ⚽ Passa a Bola

**Passa a Bola** é uma aplicação web desenvolvida para acompanhar o **Campeonato Brasileiro Feminino 2025**.  
O sistema permite visualizar **jogos, classificação, jogadoras, estatísticas e notícias**, com autenticação para acesso seguro.

---

## 📌 Funcionalidades

- 🔑 **Login com autenticação**
- 🏠 **Página inicial** com destaque para o campeonato
- 📰 **Notícias** – acompanhe as últimas atualizações do futebol feminino
- 📅 **Jogos** – visualize partidas, horários e status em tempo real
- 📊 **Classificação** – tabela com desempenho dos clubes
- 👩‍🦰 **Jogadoras** – lista com estatísticas individuais
- 📈 **Estatísticas** – destaque de artilheira, assistente e goleira
- 🎨 **Design moderno e responsivo**, com transições suaves e tema roxo inspirado no futebol feminino
- 🔗 **Integração completa com API Node.js** (dados dinâmicos vindos do backend)

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- Fetch API (integração com backend)

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- Manipulação de arquivos **JSON** simulando banco de dados
- API REST estruturada por módulos (controllers, routes e data)

---

## 📂 Estrutura do Projeto

📦 Passa-a-Bola
┣ 📂 backend
┃ ┣ 📂 src
┃ ┃ ┣ 📂 controllers # Lógica de cada rota (times, jogos, jogadoras, notícias, etc.)
┃ ┃ ┣ 📂 data # Arquivos JSON simulando banco de dados
┃ ┃ ┣ 📂 routes # Definição das rotas da API
┃ ┃ ┗ index.js # Servidor Express
┣ 📂 frontend
┃ ┣ 📂 public # Imagens (logo, background)
┃ ┣ 📂 src
┃ ┃ ┣ 📂 assets # Imagens e ícones adicionais
┃ ┃ ┣ 📂 components # Componentes reutilizáveis
┃ ┃ ┣ 📂 pages # Páginas (Home, Jogos, Notícias, etc.)
┃ ┃ ┣ api.js # Comunicação com backend
┃ ┃ ┣ App.jsx # Estrutura principal de rotas
┃ ┃ ┗ main.jsx # Ponto de entrada do React
┗ README.md

yaml
Copiar código

---

## ⚙️ Como Rodar o Projeto

### 🔹 Pré-requisitos
- Node.js **v18+**
- NPM ou Yarn

---

### 🔹 Rodando o Backend

```bash
# Entre na pasta do backend
cd backend

# Instale as dependências
npm install

# Rode o servidor
npm run dev
O backend estará rodando em:
👉 http://localhost:4000

🔹 Rodando o Frontend
bash
Copiar código
# Entre na pasta do frontend
cd frontend

# Instale as dependências
npm install

# Rode o servidor React
npm run dev
O frontend estará disponível em:
👉 http://localhost:5173

🔑 Login de Teste
Use as credenciais abaixo para acessar o sistema:

makefile
Copiar código
Usuário: admin
Senha: 1234
🧩 Novidades Recentes
📰 Nova aba “Notícias” com layout limpo e imagens dinâmicas

🖼️ Correção de imagens (carregando automaticamente da pasta /public e /docs)

💾 API.js atualizada com endpoints organizados para fácil manutenção

💅 Melhorias estéticas e ajustes visuais nas páginas com foco em usabilidade


👨‍💻 Equipe de Desenvolvimento
Projeto desenvolvido na disciplina Web & Frontend 🖥️

✍️ Integrantes:

Guilherme Eduardo de Lima – 566045

Enzo de Faria Ferreira – 562448

Guilherme de Paula Kuskowski – 562471

Matheus Gomes Stefaneli – 562277