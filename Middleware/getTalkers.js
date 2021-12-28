const fs = require('fs').promises; // importando o pacote 'fs' para ser utilizado no código abaixo

// Criando a função getTalker quer retornará um array com todas as pessoas palestrantes cadastradas
const getTalkerFile = async () => {
  const path = './talker.json';
  const file = await fs.readFile(path, 'utf8'); // declarando a constate 'talker' que requebe o método síncrono (fs.readFileSync) quer fará a leitura do arquivo.
  const parsedFile = JSON.parse(file); // declarando a constante 'talkerJson' que recebe o resultado da leitura armazenada no 'talker'.
  if (!file || parsedFile.length === 0) {
    return [];
  } // declarando a condição que retornará um array vazio, caso os valores de 'talker' e 'talkerJson' sejam diferente do valor esperado.
    
  return parsedFile; // retorna o talkerJson com a lista das pessoas palestrantes cadastradas, caso não tenha entrado na condição do IF
};

const getTalkers = async (req, res) => {
  const talkerFile = await getTalkerFile();
  res.status(200).json(talkerFile);
};

module.exports = {
  getTalkers,
  getTalkerFile,
};
