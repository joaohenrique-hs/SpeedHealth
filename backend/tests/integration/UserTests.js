const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

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
    })
}

module.exports = userTests