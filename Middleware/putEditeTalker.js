const fs = require('fs').promises;

// todas as funções de validação já foram criadas em ./createTalker.js

const editTalker = async (req, res, _next) => {
  const response = await fs.readFile('./talker.json'); 
  const parseResponse = JSON.parse(response); 
  const { name, age, talk } = req.body; 
  const { id } = req.params; 
  const editedTalker = {
    name,
    age,
    talk,
    id: Number(id),
  };

  const index = parseResponse.find((talker) => talker.id === Number(id));
  parseResponse.splice(index, 1, editedTalker);
  await fs.writeFile('./talker.json', JSON.stringify(parseResponse));
  return res.status(200).send(editedTalker);
};

module.exports = editTalker;