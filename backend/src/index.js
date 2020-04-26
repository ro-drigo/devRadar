const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

mongoose.set('useCreateIndex', true);

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-0qxt7.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUTS, DELETE

//Tipos de parâmetros:

//Query params: request.query(Filtros, ordenação, paginação...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)


server.listen(3333);