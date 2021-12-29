const fs = require('fs').promises;

const deleteTalker = async (req, res) => {
  const response = await fs.readFile('./talker.json');
  const parseResponse = JSON.parse(response); 
  const { id } = req.params; 
  const index = parseResponse.findIndex((t) => t.id === Number(id));
  parseResponse.splice(index, 1);
  await fs.writeFile('./talker.json', JSON.stringify(parseResponse));
  return res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
};

module.exports = deleteTalker;