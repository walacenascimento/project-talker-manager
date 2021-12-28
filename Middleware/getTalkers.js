const fs = require('fs').promises; // importando o pacote 'fs' para ser utilizado no código abaixo

// Requisito 1 
// Criando a função getTalkerFile quer retornará um array com todas as pessoas palestrantes cadastradas
const getTalkerFile = async () => {
  const path = './talker.json';
  const file = await fs.readFile(path, 'utf8'); // declarando a constate 'file' que requebe quer fará a leitura do arquivo.
  const parsedFile = JSON.parse(file); // declarando a constante 'parsedFile' que recebe o resultado da leitura armazenada no 'file'.
  if (!file || parsedFile.length === 0) {
    return [];
  } // declarando a condição que retornará um array vazio, caso os valores de 'file' e 'parsedFile' sejam diferente do valor esperado.
    
  return parsedFile; // retorna o parsedFile com a lista das pessoas palestrantes cadastradas, caso não tenha entrado na condição do IF
};

const getTalkers = async (req, res) => {
  const talkerFile = await getTalkerFile();
  res.status(200).json(talkerFile);
};

module.exports = {
  getTalkers,
  getTalkerFile,
};
