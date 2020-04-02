const jwt = require('jsonwebtoken')

const privateKey = '3a25068225ea1dba6e9300abea58550a8395daf0bc16793b40ba162f06a714e3'

module.exports = function authToken(request, response, next) {
    const token = request.headers.token

    jwt.verify(token, privateKey, function (err, decoded) {
        if (err) return response.status(500).send({ message: 'Failed to authenticate token.' })

        request.id = decoded.id

        next()
    })
}
