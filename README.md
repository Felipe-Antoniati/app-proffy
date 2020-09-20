# Proffy APP - Marketplace de Estudos

<h4 align="center"> 
	🚧  EM CONSTRUÇÃO!!! 🚧
</h4>

<div align="center"> 
	<img  src="./.github/proffy.png">
</div>



<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


##  Sobre o projeto

Proffy - é um Marketplace desenvolvido para fazer à conexão entre Professores particulares e pessoas que precisam estudar Matérias do Ensino Médio; Essa conexão é feita através do cadastro de aulas por parte dos professores, e pelos alunos entrando em contato via Whatsapp. 


Este Projeto foi desenvolvido durante à **NLW 2** (Next Level Week 2) um evento oferecido pela [Rocketseat](https://blog.rocketseat.com.br/primeira-next-level-week/). À NLW é um curso intensivo online e gratuito, com muito conteúdo prático e informativo! 

O conteúdo é exibido durante 1 semana, e em cada dia da semana, é apresentado uma etapa para o desenvolvimento do projeto, desde o Back-end até o Front-end Web e Mobile, utilizando as melhores tecnologias.

<div align="center">
  <sub>Agradeço de 💜 à
    <a href="https://github.com/diego3g">Diego Fernandez</a> e toda à equipe:
    <a href="https://github.com/rocketseat">Rocketseat</a> :facepunch:    
  </sub>
</div>

---

## ⚙️ Funcionalidades

- [x] Os Professores tem acesso ao aplicativo Web, onde podem: 
  - [x] Cadastrar-se na plataforma enviando:
    - [x] Uma imagem para o perfil (avatar).
    - [x] Nome completo, Email e Whatsapp.
    - [x] Biografia.
  - [x] Cadastrar Aulas selecionando:
    - [x] Uma Matéria.
    - [x] Um dia da semana.
    - [x] Um horário.

- [x] Os Alunos tem acesso ao aplicativo Mobile, onde podem:
  - [x] Selecionar a Matéria, o dia da semana e a hora que quer estudar.
  - [x] Entrar em contato com os professores através do E-mail ou do WhatsApp.

---

## 🚀 Como executar o projeto

Este projeto é divido em três partes:
1. Back-end (pasta server) 
2. Front-end Web (pasta web)
3. Front-end Mobile (pasta mobile)

💡Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

É necessário ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) - [Node.js](https://nodejs.org/en/) - [NPM](https://www.npmjs.com/) || [YARN](https://yarnpkg.com/)


```bash

# Clone este repositório
$ git clone https://github.com/Felipe-Antoniati/app-proffy-1.0.git

```


#### :minidisc: Iniciar o Servidor (API)

```bash

# Acesse a pasta server do projeto no terminal/cmd
$ cd app-proffy-1.0/server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:5000 - acesse http://localhost:5000

```


#### 💻 Iniciar Aplicação Web

```bash

# Vá para a pasta Web da aplicação
$ cd app-proffy-1.0/client/web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```


#### 📱 Iniciar APlicação Mobile

``` bash
Para rodar o projeto mobile você precisa de um celular com o EXPO instlado ou um emulador android/ios.

# Vá para a pasta mobile
$ cd app-ecoleta/client/mobile

# Instale as depedencias
$ yarn install

# Rode a aplicação
$ yarn start

Depois leia o QRCode com o app do EXPO ou rode em um emulador.

```

---


## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Axios](https://github.com/axios/axios)**

> Veja o arquivo  [package.json](https://github.com/tgmarinho/README-ecoleta/blob/master/web/package.json)

#### **Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[KnexJS](http://knexjs.org/)**
-   **[SQLite](https://github.com/mapbox/node-sqlite3)**
-   **[ts-node-dev](https://github.com/TypeStrong/ts-node)**

> Veja o arquivo  [package.json](https://github.com/tgmarinho/README-ecoleta/blob/master/server/package.json)

#### **Mobile**  ([React Native](http://www.reactnative.com/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Expo](https://expo.io/)**
-   **[Expo Google Fonts](https://github.com/expo/google-fonts)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[Axios](https://github.com/axios/axios)**

> Veja o arquivo  [package.json](https://github.com/tgmarinho/README-ecoleta/blob/master/mobile/package.json)



##  💪 Como contribuir para o projeto

1. Faça um **fork** deste projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Em caso de dúvidas, confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

## 👨‍💻 Dev,s que trabalharam neste Repositório

<a href="https://github.com/felipe-antoniati">
 <img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/63480609?s=460&u=c69fe399d6e97159b75b64b597b007ff8e6ac553&v=4" width="100px;" alt="Fullstack Programmer"/>
 <br />
 <sub><b>Felipe Antoniati</b></sub></a> <a href="https://github.com/felipe-antoniati" title="Fullstack Programmer">🚀</a>
 <br /><br />

[![Twitter Badge](https://img.shields.io/badge/-@felipe-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/)](https://twitter.com/) [![Linkedin Badge](https://img.shields.io/badge/-Felipe-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/)](https://www.linkedin.com/in/felipe-antoniati-1288041b7/) 
[![Gmail Badge](https://img.shields.io/badge/-antoniati.felipe@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:antoniati.felipe@gmail.com)](mailto:antoniati.felipe@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

---

##  Versões do README

[Português 🇧🇷](./README.md)  |  [Inglês sem emojis 🇺🇸](./README-en.md) 


De uma ⭐️ neste Projeto, para liberar a dopamina!
