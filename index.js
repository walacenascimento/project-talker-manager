const express = require('express');
const bodyParser = require('body-parser');
const { getTalkers } = require('./Middleware/getTalkers'); // Importando o middleware getTalker da pasta 'Midlleware'
const getTalkerById = require('./Middleware/getTalkerById');

const { createToken, validateEmail, validatePassword } = require('./Middleware/postCreateToken');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// app get, recebendo no parâmetros a rota '/talker' e o middleware 'getTalker' requisito 1
app.get('/talker', getTalkers);

// app get, recebendo no parâmetros a rota '/talker/:id' e o middleware 'getTalkerById' requisito 2
app.get('/talker/:id', getTalkerById);

// app post, recebendo no parâmetros a rota '/login' e os middleware ' de validação de password, email, e criação de token aleatório Requisito 3 
app.post('/login', validatePassword, validateEmail, createToken);

app.listen(PORT, () => {
  console.log('Online');
});
