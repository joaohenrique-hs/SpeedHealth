const jwt = require('jsonwebtoken')
require('dotenv').config();

const privateKey = process.env.PRIVATE_KEY

module.exports = function authToken(request, response, next) {
    const token = request.headers.token

    jwt.verify(token, privateKey, function (err, decoded) {
        if (err) return response.status(500).send({ message: 'Failed to authenticate token.' })
        
        request.id = decoded.id
        
        next()
    })
}
