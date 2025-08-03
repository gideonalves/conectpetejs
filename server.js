const express = require('express');
const app = express();
const routeIndex = require('./routes/index');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(__dirname + "/views");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// Configurações
app.set('view engine', 'ejs');
app.use(express.static('public'));

// 👇 Use as rotas separadas
app.use('/', routeIndex);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});