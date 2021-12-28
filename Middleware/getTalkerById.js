const { getTalkerFile } = require('./getTalkers');

// Requisito 2
const getTalkerById = async (req, res) => {
  const { id } = req.params;
  const talkerFile = await getTalkerFile();
  const talker = talkerFile.find((t) => t.id === Number(id));
  if (!talker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  } 
  res.status(200).json(talker);
};

module.exports = getTalkerById;
