const axios = require('axios');
require('dotenv').config();

const api = axios.create({
  baseURL: 'https://www.receitaws.com.br',
});

module.exports = api;
