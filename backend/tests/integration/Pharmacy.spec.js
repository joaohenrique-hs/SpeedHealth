const request = require('supertest')
const app = require('../../src/app')
const jwt = require('jsonwebtoken')
const connection = require('../../src/database/connection')
require('dotenv').config()

const privateKey = process.env.PRIVATE_KEY

describe('Pharmacy', () => {
    var id

    const pharmacy = {
        name: "Farmacia 24horas",
        email: "farmacia.24@gmail.com",
        password: "farmacia24",
        cnpj: "16151746000136",
        whatsapp: "49988267304",
        description: "A melhor farmácia 24 hrs",
        address: "Centro, Rua Mário, 1090",
        city: "Dionísio-Cerqueira",
        uf: "SC"
    }

    beforeAll(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async () => {
        await connection.migrate.rollback()
        await connection.destroy()
    })

    it('should be able to create a pharmacy', async () => {
        const response = await request(app)
            .post('/pharmacy')
            .send(pharmacy)
            .expect(200)

        id = response.body.id

        expect(response.body).toHaveProperty('id')
        expect(id).toHaveLength(8)
    })

    it('should be able to returns a JwtToken to pharmacy login', async () => {
        const response = await request(app)
            .post('/login')
            .send({
                email: pharmacy.email,
                password: pharmacy.password
            })
            .expect(200)

        expect(response.body).toHaveProperty('token')

        jwt.verify(token, privateKey, function (err, decoded) {
            expect(!err)
            expect(decoded.type).toBe('pharmacy')
            expect(decoded.id).toBe(id)
        })
    })

    it('should be able to list pharmacys', async () => {
        const response = await request(app)
            .get('/pharmacy')
            .send()
            .expect(200)

        list = response.body[0]

        delete pharmacy.password

        expect(response.body[0]).toMatchObject(pharmacy)
    })
})