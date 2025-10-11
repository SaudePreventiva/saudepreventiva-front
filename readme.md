# 📱 Saúde Preventiva

Aplicativo desenvolvido em **React Native** com **Expo**, como parte de um desafio de desenvolvimento mobile.  
O app simula uma plataforma de **saúde preventiva**, permitindo o **cadastro e visualização de pacientes**, com **armazenamento local** e suporte a **tema claro/escuro**.

---

## 🚀 Funcionalidades

- 🧭 **Navegação entre telas** usando `expo-router`
- 📝 **Cadastro de pacientes** com:
  - Nome
  - Idade
  - CPF
  - Gênero (masculino/feminino)
- 👀 **Visualização de detalhes** do paciente
- 💾 **Armazenamento local** usando `AsyncStorage`
- 🌙 **Tema claro e escuro** com `Context API`
- 🎨 **Cabeçalho personalizado** com logotipo e nome do app

---

## 🧩 Estrutura do Projeto

```
SaudePreventiva/
│
├── app/
│   ├── index.js              # Tela inicial (Home)
│   ├── pacientes.js          # Listagem de pacientes
│   ├── novo-paciente.js      # Cadastro de novo paciente
│   ├── paciente/[id].js      # Detalhes do paciente
│   ├── config.js             # Configuração de tema 
|   └── _layout.js            # Configuração de header e theme provider
|
├── assets/
│   ├── logo.png              # Ícone usado no header
│   ├── male.png              # Ícone masculino
│   └── female.png            # Ícone feminino  
|
├── context/
│   └── ThemeContext.js       # Contexto de tema (claro/escuro)
│
├── utils/
│   └── storage.js            # Funções para salvar/carregar pacientes
│
├── app.json                  # Configuração do Expo
├── package.json              # Dependências do projeto
└── README.md
```

---

## ⚙️ Instalação e Execução

### 1. Clonar o repositório
```bash
git clone https://github.com/juanxto/SaudePreventiva.git
cd SaudePreventiva
```

### 2. Instalar dependências
```bash
npm install
# ou
yarn install
```

### 3. Rodar o app
```bash
npx expo start
```

O Expo abrirá um QR Code no terminal ou no navegador. Você pode testar no **Expo Go** (Android/iOS) ou em um emulador.

---

## 💡 Tecnologias Utilizadas

- React Native (Expo)
- Expo Router
- AsyncStorage
- Context API
- React Hooks
- React Navigation (Stack)
- Lucide Icons (ícones vetoriais)
- Tailwind-like inline styles

---

## 🌗 Tema Escuro/Claro

O app detecta e alterna automaticamente entre os modos claro e escuro, afetando:
- Fundo das telas
- Cores de texto
- Cores dos cartões e cabeçalhos

---

## 👩‍⚕️ Futuras Melhorias

- 🧠 Filtros e pesquisa de pacientes
- 📊 Estatísticas e relatórios
- ☁️ Integração com backend (API REST)
- 🔐 Autenticação de usuários