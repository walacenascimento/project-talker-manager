const express = require('express');
const bodyParser = require('body-parser');
const { getTalkers } = require('./Middleware/getTalkers'); // Importando o middleware getTalker da pasta 'Midlleware' req 1
const getTalkerById = require('./Middleware/getTalkerById'); // req 2
const { createToken, validateEmail, validatePassword } = require('./Middleware/postCreateToken'); // req 3
const { validateToken, validateName, validateAge, validateTalk,
  validateDate, validateRate, createTalker } = require('./Middleware/postCreateTalker'); // req 4
const editTalker = require('./Middleware/putEditeTalker'); // req 5
const putDeleteTalker = require('./Middleware/putDeleteTalker'); // req 6

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// app get, recebendo nos parâmetros a rota '/talker' e o middleware 'getTalker' requisito 1
app.get('/talker', getTalkers);

// app get, recebendo nos parâmetros a rota '/talker/:id' e o middleware 'getTalkerById' requisito 2
app.get('/talker/:id', getTalkerById);

// app post, recebendo nos parâmetros a rota '/login' e os middleware ' de validação de password, email, e criação de token aleatório Requisito 3 
app.post('/login', validatePassword, validateEmail, createToken);

// app post, recebendo nos parâmetros a rota '/talker' e os middleware ' de validações Requisito 4 
app.post('/talker', validateToken, validateName, validateAge,
validateTalk, validateDate, validateRate, createTalker);

// app put, recebendo nos parâmetro a rota '/talker/:id' e os middleware ' de validações Requisito 5
app.put('/talker/:id', validateToken, validateName, validateAge,
validateTalk, validateDate, validateRate, editTalker);

// app delete, recebendo nos parâmetro a rota '/talker/:id' e o middleware ' de validação do Token e o middleware de exclusão(delete) Requisito 6
app.delete('/talker/:id', validateToken, putDeleteTalker);

app.listen(PORT, () => {
  console.log('Online');
});
