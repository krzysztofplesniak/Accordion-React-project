const express = require("express");
const dotenv = require("dotenv");
const path = require("path");


const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV;


const app = express();

app.use(express.json());
app.get("/ping", (req, res) => res.send("pong"));

if (env === 'production') {
    //Static folder
    app.use(express.static('build'));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, 'build','index.html'))
     });
} else 

app.listen(port, () =>
  console.log(`Backend listening at http://localhost:${port}`)
);
 
