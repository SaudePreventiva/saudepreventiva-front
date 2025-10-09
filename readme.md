# 📱 SaúdePreventiva - Protótipo Mobile

Aplicativo desenvolvido em React Native com Expo como parte do desafio de Mobile App Development.
O app simula uma plataforma de saúde preventiva, permitindo cadastrar e visualizar pacientes, com armazenamento local e navegação entre telas.

---

## 📌 Funcionalidades

* 🧭 Navegação entre telas usando React Navigation (Stack Navigator).
* 📝 Formulário de cadastro de pacientes com campos controlados (useState).
* 💾 Armazenamento local com AsyncStorage (dados persistem mesmo após fechar o app).
* 🎨 Tema claro/escuro com Context API.
* 👤 Listagem de pacientes cadastrados com tela de detalhes.
* ⚙️ Tela de Configurações (simulação de preferências do usuário).

---

## 🛠️ Tecnologias Utilizadas

* React Native
* Expo
* React Navigation
* AsyncStorage

---

## 📂 Estrutura do Projeto

```
/screens
├── HomeScreen.js
├── PacientesScreen.js
├── NovoPacienteScreen.js
├── DetalheScreen.js
└── ConfigScreen.js

/utils
└── storage.js  # funções de salvar/carregar pacientes

/context
└── ThemeContext.js  # gerencia tema claro/escuro
```

---

## 🚀 Executando o Projeto

1. Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/saude-preventiva.git
cd saude-preventiva
```

2. Instalar dependências

```bash
npm install
```

3. Rodar com Expo

```bash
npx expo start
```

* Escaneie o QR Code no terminal com o Expo Go (Android/iOS).
* Ou rode no emulador Android/iOS.

---

## 🎯 Como usar

1. Abra o app e veja a tela inicial com o número de pacientes cadastrados.
2. Clique em ➕ **Novo Paciente** para cadastrar nome, idade e condição de saúde.
3. Os pacientes aparecem listados em 📋 **Ver Pacientes**.
4. Clique em um paciente para abrir a tela de detalhes.
5. Vá em ⚙️ **Configurações** para simular preferências (tema escuro/claro).

---

## 💡 Tema Acadêmico

Este protótipo representa a versão mobile da plataforma de saúde preventiva baseada em Oracle 23ai.
Na Sprint atual, os dados de pacientes são salvos localmente.
Em versões futuras, esses dados seriam integrados ao Oracle Database com IA embarcada, permitindo:

* Alertas preventivos de doenças (ex: risco de diabetes, hipertensão).
* Dashboards para médicos e gestores.
* Consultas inteligentes em linguagem natural.