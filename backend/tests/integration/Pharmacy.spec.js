const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('Pharmacy', () => {
    beforeAll(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async () => {
        await connection.destroy()
    })

    it('should be able to create a pharmacy', async () => {
        const response = await request(app)
            .post('/pharmacy')
            .send({
                name: "Farmacia 24horas",
                email: "farmacia.24@gmail.com",
                password: "farmacia24",
                cnpj: "16151746000136",
                whatsapp: "49988267304",
                description: "A melhor farmácia 24 hrs",
                address: "Centro, Rua Mário, 1090",
                city: "Dionísio-Cerqueira",
                uf: "SC"
            })

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})