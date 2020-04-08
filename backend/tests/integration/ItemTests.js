const request = require('supertest')
const app = require('../../src/app')

const itemTests = (email, password, item) => {
    describe('Items', () => {
        var token

        var modifiedItem = {
            title: "Ibuprofeno",
            price: 8,
            description: "Bom para dor e mal estar"
        }

        it('should be able to create an item', async () => {
            const getToken = await request(app)
                .post('/login')
                .send({
                    email,
                    password
                })
                .expect(200)

            token = getToken.body.token

            const response = await request(app)
                .post('/items')
                .set({ token })
                .send(item)
                .expect(200)

            expect(response.body.item_id).toBe(1)
        })

        it('should be able to modify an item', async () => {
            const response = await request(app)
                .put('/items/1')
                .set({ token })
                .send(modifiedItem)
                .expect(200)

            expect(response.body).toMatchObject(modifiedItem)
        })
    })
}

module.exports = itemTests