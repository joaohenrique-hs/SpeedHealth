const generateJwtToken = require('../../src/utils/generateJwtToken')
const jwt = require('jsonwebtoken')
require('dotenv').config();

const privateKey = process.env.PRIVATE_KEY

describe('generateJwtToken', () => {
    it('should generate an Jwt Token whithout errors', () => {
        const data = {
            type: "pharmacy",
            id: "dbbc0dff"
        }

        const token = generateJwtToken(data.type, data.id)

        jwt.verify(token, privateKey, function (err, decoded) {
            expect(err).toBe(null)
            expect(decoded.type).toBe(data.type)
            expect(decoded.id).toBe(data.id)
        })
    })
})