const request = require('supertest')
const app = require('../../src/app')

const itemTests = (email, password) => {
    describe('Items', () => {

        const item = {
            title: "Paracetamol",
            price: 10,
            description: "Bom para dor de cabeça"
        }

        var token

        var invalidToken

        const modifiedItem = {
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
            invalidToken = token.concat(item.title)

            const response = await request(app)
                .post('/items')
                .set({ token })
                .send(item)
                .expect(200)

            expect(response.body.item_id).toBe(1)
        })

        it('should be able to block fail login', async () => {
            await request(app)
                .post('/login')
                .send({
                    email,
                    password: "IncorrectPasswd"
                })
                .expect(401)
        })

        it('should block all requests with invalid token', async () => {

            await request(app)
                .get('/items')
                .set({ token: invalidToken })
                .send()
                .expect(401)

            await request(app)
                .put('/items/1')
                .set({ token: invalidToken })
                .send(modifiedItem)
                .expect(401)

            await request(app)
                .get('/items')
                .set({ token: invalidToken })
                .send()
                .expect(401)
        })

        it('should be able to modify an item', async () => {
            const response = await request(app)
                .put('/items/1')
                .set({ token })
                .send(modifiedItem)
                .expect(200)

            expect(response.body).toMatchObject(modifiedItem)
        })

        it('should be able to list items', async () => {
            const response = await request(app)
                .get('/')
                .send()
                .expect(200)

            expect(response.body[0]).toMatchObject(modifiedItem)
        })


        it('should be able to list items of pharmacy', async () => {
            const response = await request(app)
                .get('/items')
                .set({ token })
                .send()
                .expect(200)

            expect(response.body[0]).toMatchObject(modifiedItem)
        })


        it('should be able to delete an item', async () => {
            await request(app)
                .delete('/items/1')
                .set({ token })
                .send()
                .expect(204)
        })
    })
}

module.exports = itemTests