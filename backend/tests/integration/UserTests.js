const request = require('supertest')
const app = require('../../src/app')
const jwt = require('jsonwebtoken')

const privateKey = process.env.PRIVATE_KEY

const userTests = () => {
    describe('User action', () => {

        user = {
            name: "João",
            email: "joao@gmail.com",
            password: "joao1",
            whatsapp: "49988267304",
            address: "Centro, Rua Tiago, 1906"
        }

        it('should create an user', async () => {
            const response = await request(app)
                .post('/register')
                .send(user)
                .expect(200)

            expect(response.body.name).toBe(user.name)
        })

        it('should logon an user returning an valid token', async () => {
            const response = await request(app)
                .post('/session')
                .send({
                    email: user.email,
                    password: user.password
                })
                .expect(200)

            jwt.verify(response.body.token, privateKey, function (err, decoded) {
                expect(!err)
                expect(decoded.type).toBe('user')
                expect(decoded.id).toHaveLength(8)
            })
        })
    })
}

module.exports = userTests