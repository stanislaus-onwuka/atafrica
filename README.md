ATAfrica assessment project with backend and frontend

## Pre-requirements

To run this project, you will need:

- [git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/)
- npm

**Note:** When installing Node.js, npm is automatically installed too.

## Installation of `devDependencies` & `dependencies`

After cloning this project, to install the dependencies, run `npm install` (or `npm i` for short.)

## Installing and starting the servers

# Robo-Advisor App

The Robo-Advisor is a web application written using ReactJS on the frontend and Node.js in the backend.


## How to run it

After cloning the repo ...

### 1) Starting the backend

Open a terminal, go to the root of this repo and:

```sh
cd api
npm install
nodemon server.js
```

The server will be listening on port 3030. If you need to change this, go to `/api/server.js` and change the port variable value.

```js
const port = 3030;
```

### 2) Starting the frontend

Open a new terminal, go to the root of this repo and:

**Important:** if you changed the backend port number, you will have to change it also in .env file, before starting the frontend.

```sh
cd client
npm install
npm start
```

Go to a web browser and open `http://localhost:3000/`.
