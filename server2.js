// JSON-SERVER-HEROKU  -> https://github.com/jesperorb/json-server-heroku
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3001;

// JSON-SERVER-HEROKU
server.use(middlewares);
server.use(router);
app.get('/acc', (req, res) => {
	res.send('/build/index.html');
});

server.listen(port, (req, res) => {
	console.log(`Server-JSON  listening at http://localhost:${port}`);
});
