# MiniBlog

Um projeto de blog desenvolvido em React com Firebase, baseado no curso de React do Matheus Battisti.

## 🚀 Tecnologias

- **React** 19.1.0
- **React Router DOM** 7.7.0
- **Firebase** 12.0.0 (Firestore)
- **Tailwind CSS** 4.1.11
- **Vite** 7.0.4

## 📋 Funcionalidades Atuais

- ✅ Navegação entre páginas (Home e About)
- ✅ Navbar responsiva com links ativos
- ✅ Footer
- ✅ Configuração do Firebase/Firestore
- ✅ Estrutura de páginas para Login e Registro
- ✅ Estilização com Tailwind CSS

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd miniblog
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o Firebase:
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
   - Ative o Firestore Database
   - Substitua as configurações em `src/firebase/config.js`

4. Execute o projeto:
```bash
npm run dev
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Login.jsx
│   └── Register.jsx
├── firebase/
│   └── config.js
├── App.jsx
└── main.jsx
```

## 🎯 Próximas Funcionalidades

- [ ] Sistema de autenticação (Login/Registro)
- [ ] Criação de posts
- [ ] Listagem de posts
- [ ] Edição e exclusão de posts
- [ ] Sistema de busca
- [ ] Dashboard do usuário

## 📝 Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter

## 🔗 Referência

Projeto baseado no curso de React do [Matheus Battisti](https://github.com/matheusbattisti/curso_react/tree/main/10_MINI_BLOG/miniblog).