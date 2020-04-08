const request = require('supertest')
const app = require('../../src/app')
const jwt = require('jsonwebtoken')

const privateKey = process.env.PRIVATE_KEY

const pharmacyTests = (pharmacy, token) => {
    describe('Pharmacy', () => {
        var id
        
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

            token = {'token' : response.body.token}
            jwt.verify(response.body.token, privateKey, function (err, decoded) {
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
}

module.exports = pharmacyTests