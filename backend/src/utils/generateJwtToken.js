const jwt = require('jsonwebtoken')

const privateKey = '3a25068225ea1dba6e9300abea58550a8395daf0bc16793b40ba162f06a714e3'

module.exports = function generateJwtToken(id, email) {
    const token = jwt.sign({ email: email, id: id}, privateKey, { expiresIn: '72h' })
    return token
}
