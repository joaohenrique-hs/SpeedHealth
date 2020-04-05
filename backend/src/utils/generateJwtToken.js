const jwt = require('jsonwebtoken')
require('dotenv').config();

const privateKey = process.env.PRIVATE_KEY

module.exports = function generateJwtToken(id, type) {
    const token = jwt.sign({ type: type, id: id}, privateKey, { expiresIn: '72h' })
    return token
}
