const jwt = require('jsonwebtoken');
require('dotenv').config();

const privateKey = process.env.PRIVATE_KEY;

module.exports = function generateJwtToken(type, id) {
  const token = jwt.sign({ type, id }, privateKey, { expiresIn: '72h' });
  return token;
};
