📄 README.md
# ⚽ Passa a Bola

**Passa a Bola** é uma aplicação web desenvolvida para acompanhar o **Campeonato Brasileiro Feminino 2025**.  
O sistema permite visualizar **jogos, classificação, jogadoras e estatísticas**, com autenticação para acesso seguro.

---

## 📌 Funcionalidades

- 🔑 **Login com autenticação**
- 🏠 **Página inicial** com destaque para o campeonato
- 📅 **Jogos** – acompanhe partidas, horários e status
- 📊 **Classificação** – tabela de desempenho dos times
- 👩‍🦰 **Jogadoras** – lista com estatísticas individuais
- 📈 **Estatísticas** – destaques da competição (artilheira, assistente e goleira)
- 🎨 **Design responsivo e moderno** feito com **React + Tailwind CSS**

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/) (opcional)

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- Manipulação de arquivos **JSON** simulando banco de dados

---

## 📂 Estrutura do Projeto



📦 Passa-a-Bola
┣ 📂 backend
┃ ┣ 📂 src
┃ ┃ ┣ 📂 controllers # Lógica de cada rota
┃ ┃ ┣ 📂 data # Arquivos JSON simulando banco
┃ ┃ ┣ 📂 routes # Definição das rotas da API
┃ ┃ ┗ index.js # Servidor Express
┣ 📂 frontend
┃ ┣ 📂 public # Imagens (logo, background)
┃ ┣ 📂 src
┃ ┃ ┣ 📂 assets # Imagens extras
┃ ┃ ┣ 📂 components # Componentes reutilizáveis
┃ ┃ ┣ 📂 pages # Páginas (Home, Jogos, etc.)
┃ ┃ ┣ api.js # Comunicação com backend
┃ ┃ ┣ App.jsx # Estrutura principal
┃ ┃ ┗ main.jsx # Entrada do React
┗ README.md


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
# Entre na pasta do frontend
cd frontend

# Instale as dependências
npm install

# Rode o servidor React
npm run dev


O frontend estará disponível em:
👉 http://localhost:5173

🔑 Login de Teste

Use as credenciais abaixo para acessar:

Usuário: admin
Senha: 1234

📸 Prints da Aplicação

👉 (Adicione aqui capturas de tela das páginas Home, Jogos, Classificação, Jogadoras, Estatísticas e Login)

👨‍💻 Equipe de Desenvolvimento

Projeto desenvolvido na disciplina Web & Frontend

✍️ Integrantes:

Guilherme Eduardo de Lima – 566045
Enzo de Faria Ferreira – 562448
Guilherme de Paula Kuskowski – 562471
Matheus Gomes Stefaneli - 562277

