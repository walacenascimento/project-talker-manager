/* Referência: https://www.ti-enxame.com/pt/javascript/crie-um-token-aleatorio-em-javascript-com-base-nos-detalhes-do-usuario/941136694/ */
// Função para criar o token aleatório 
const createToken = (_req, res) => {
  const randomNumber = () => Math.random().toString(36).substring(2);
  const tokenNumber = (randomNumber() + randomNumber()).substring(0, 16);
    return res.status(200).json({ token: tokenNumber });
};

// Função para validação de email
// Regex para validar email: 
// Referêcnia: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  console.log(email);
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

module.exports = {
  createToken,
  validateEmail,
  validatePassword,
};
