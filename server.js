const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

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


//Static folder
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', (req, res) => res.send('pong'));
app.get('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port1);
