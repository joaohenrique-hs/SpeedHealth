const request = require('supertest')
const app = require('../../src/app')

const itemTests = (email, password) => {
    describe('Items', () => {
        it('should be able to create an item', async () => {
            const getToken = await request(app)
                .post('/login')
                .send({
                    email,
                    password
                })
                .expect(200)

            const token = getToken.body.token

            const response = await request(app)
                .post('/items')
                .set({ token })
                .send({
                    title: "Paracetamal",
                    price: 120,
                    description: "Bom para a dor de cabeça"
                })
                .expect(200)

            expect(response.body.item_id).toBe(1)
        })
    })
}

module.exports = itemTests