const { getTalkerFile } = require('./getTalkers');

// const crypto = require('crypto'); // para criar token
// const generateToken = () => crypto.randomBytes(8).toString('hex');
// const token = generateToken();

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
