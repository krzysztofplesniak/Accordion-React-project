const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

// JSON-SERVER-HEROKU  -> https://github.com/jesperorb/json-server-heroku
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port1 = process.env.PORT || 3000;
const port2 = process.env.PORT || 3001;
const env = process.env.NODE_ENV;

// JSON-SERVER-HEROKU
server.use(middlewares);
server.use(router);
server.listen(port2, () => {
	console.log(`Server-JSON  listening at http://localhost:${port2}`);
});

const app = express();

app.use(express.json());
app.get('/ping', (req, res) => res.send('pong'));

//Static folder
app.use(express.static('build'));
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port1, () =>
	console.log(`App listening at http://localhost:${port1}`)
);
