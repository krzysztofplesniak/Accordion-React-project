const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;

//Static folder
const app = express();
app.use(express.static(path.join(__dirname, './build')));
app.get('/ping', (req, res) => res.send('pong'));
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, './build/index.html'));
});

app.listen(port, (req, res) => {
	res.send(`Server HTML listening at http://localhost:${port}`);
});
