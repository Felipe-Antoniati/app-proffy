# Proffy

<h4 align="center"> 
	<img src="./.github/proffy.png" style="width: 90rem"/>
</h4>
<br />
<p align="center">
 <a href="#-about-the-project">About</a> •
 <a href="#-how-to-run-the-project">How to run</a> • 
 <a href="#-functionalities">Functionalities</a> •
 <a href="#-technologies">Technologies</a> • 
 <a href="#-autor">Author</a> • 
 <a href="#user-content--licença">License</a>
</p>

## About the Project

**Proffy** - Marketplace developed to make the connection between Private Teachers and people who need to study on High School Subjects; This connection is made through the registration of Classes by the Teachers, and by Students contacting via Whatsapp.

<details>
  <summary>Click here for more informations</summary>
  <br />
  <section>
    <div>
     This Project was developed during the <b>Next Level Week 1 (NLW)</b> an event offered by <a href="https://blog.rocketseat.com.br/">RocketSeat</a>. <b>NLW</b> is a free and intensive online course, with lots of code, challenges, networking and a single objective: to take you to the next level.
    </div>
    <br />
    <div>
    The content is displayed during <b>1 week</b>, and on each day of the week, a stage for the development of the project is presented, from the <b>Back-end</b> to the <b>Front-end Web</b> and <b>Mobile</b>, using the technologies: 
    <br />
    <div align="center" style="display: flex; flex-direction: row; margin-right: 3px;">
      <a href="">NodeJS <img src="./.github/nodejs.png" alt="NodeJs" style="width: 50%;"/></a>
      <a href="">ReacJs <img src="./.github/reactjs.png" alt="NodeJs" style="width: 50%;"/></a>
      <a href="">React Native <img src="./.github/react-native.png" alt="NodeJs" style="width: 50%;"/></a>
    </div> 
    </div>
  </section>
</details>
 <div align="center">
  <sub>I sincerely thank:
    <a href="https://github.com/diego3g">Diego Fernandez</a> and whole team:
    <a href="https://github.com/rocketseat">Rocketseat</a>
  </sub>
</div>

---

## How to run the project

<details>
  <summary>This project is separated into three parts:</summary>
  <section>
    <div>
    <h4>1 Back-end(server folder)</h4> 
    <h4>2 Front-end Web (web folder)</h4>
    <h4>3 Front-end Mobile (mobile folder)</h4>
    <br />
    <h2>Front-end Web and Mobile applications need the Backend to be running to work.</h2>
    </div>
  </section>
</details>

```bash

# Clone this repository
$ git clone https://github.com/Felipe-Antoniati/proffy-v1-nlw2.git

```

#### Start Server

```bash

# Access the project's server folder through the terminal/powershell
$ cd proffy-v1-nlw2/server

# Install dependencies
$ yarn install

# Run the application in development mode
$ yarn dev

# The server will start at the port: 5000 - access http://localhost:5000

```

#### Start Web Application

```bash

# Access the project's server folder through the terminal/powershell
$ cd proffy-v1-nlw2/client/web

# Install dependencies
$ yarn install

# Run the application in development mode
$ yarn start

# The application will open at the door:3000 - acess http://localhost:3000

```

#### Start Mobile Application

```bash
To run the mobile project you need a cell phone with Expo installed
or an android / ios emulator.

# Access the project's server folder through the terminal/powershell
$ cd proffy-v1-nlw2/client/mobile

# Install dependencies
$ yarn install

# Run the application in development mode
$ yarn start

> Then read the QR Code with the Expo app or run on an emulator.

```

---

## Functionalities

- [x] Teachers have access to the **Web application**, where they can:

  - [x] Register on the platform by sending:
    - [x] An image for the profile (avatar).
    - [x] Full name, Email and Whatsapp.
    - [x] Biography.
  - [x] Register Classes by selecting:
    - [x] One Matter.
    - [x] One day of the week.
    - [x] A schedule.

- [x] Students have access to the **Mobile application**, where they can:
  - [x] Select the subject, the day of the week and the time you want to study.
  - [x] Get in touch with teachers via E-mail or WhatsApp.

---

## Technologies

**These are the tools used in the construction of the project:**

<details>
  <summary><b>Server - <a href="https://nodejs.org/en/">NodeJS</a> + <a href="https://www.typescriptlang.org/">Typescript</a></b></summary>
  <section>
    <div style="display: flex; flex-direction: column">
     <a href="https://expressjs.com/">Express</a><br />
      <a href="https://expressjs.com/en/resources/middleware/cors.html">Cors</a><br />
      <a href="https://knexjs.org/">Knexjs</a><br />
      <a href="https://github.com/mapbox/node-sqlite3">SQLite3</a><br />
      <a href="https://github.com/TypeStrong/ts-node">ts-node</a><br />
      <br />
      <sub>
        <h1> See the package.json file for more information.</h1>      
      </sub>
    </div>
  </section>
</details>
<details>
  <summary><b>Web - <a href="https://reactjs.org">React</a> + <a href="https://www.typescriptlang.org/">Typescript</a></b></summary>
  <section>
    <div style="display: flex; flex-direction: column">
      <a href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom">React Router Dom</a><br />
      <a href="https://github.com/axios/axios">Axios</a>
      <br />
      <sub>
        <p> See the package.json file for more information.</p>      
      </sub>
    </div>
  </section>
</details>
<details>
  <summary><b>Mobile - <a href="http://www.reactnative.com/">React Native</a> + <a href="https://www.typescriptlang.org/">Typescript</a></b></summary>
  <section>
    <div style="display: flex; flex-direction: column">
      <a href="https://expo.io/">Expo</a><br />
      <a href="https://docs.expo.io/versions/latest/sdk/constants/">Expo Google Fonts</a><br />
      <a href="https://reactnavigation.org/">React Navigation</a><br />a><br />
      <a href="https://github.com/axios/axios">Axios</a><br />
      <br />
      <sub>
        <p> See the package.json file for more information.</p>      
      </sub>
    </div>
  </section>
</details>

## How to contribute to the project

1. **Fork** this project.
2. Create a new branch with your changes: `git checkout -b my-feature`
3. Save your changes and create a commit message telling you what you did: `git commit -m" feature: My new feature "`
4. Submit your changes: `git push origin my-feature`
   > If in doubt, check out this [how to contribute to GitHub] (./ CONTRIBUTING.md)

---

## Dev, s who worked on this Repository

<a href="https://github.com/felipe-antoniati">
 <img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/63480609?s=460&u=c69fe399d6e97159b75b64b597b007ff8e6ac553&v=4" width="100px;" alt="Fullstack Developer"/>
 <br />
 <sub><b>Felipe Antoniati</b></sub></a> <a href="https://github.com/felipe-antoniati" title="Fullstack Developer">🚀</a>
 <br /><br />

[![Linkedin Badge](https://img.shields.io/badge/-Felipe-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/)](https://www.linkedin.com/in/felipe-antoniati-1288041b7/)<br />
[![Gmail Badge](https://img.shields.io/badge/-antoniati.felipe@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:antoniati.felipe@gmail.com)](mailto:antoniati.felipe@gmail.com)

---

## License

This project is under license [MIT](./LICENSE).

---

## README versions

[English-EUA 🇺🇸](./README.md) | [Portuguese-BR 🇧🇷](./README-ptBR.md)

From a ⭐️ in this Project, to release dopamine!
