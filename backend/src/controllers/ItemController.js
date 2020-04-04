const connection = require('../database/connection')

module.exports = {
    async all(request, response){
        const { page = 1 } = request.query

        const [count] = await connection('items').count()

        const items = await connection('items')
            .limit(5)
            .offset((page - 1) * 5)
            .select('*')

        response.header('X-Total-Count', count['count'])

        return response.json(items)
    },
    
    async modify(request, response) {
        const { id } = request.params
        const { title, price, description } = request.body
        const pharmacy_id = request.id

        const items = await connection('items')
            .where('id', id)
            .select('pharmacy_id')
            .first()

        if (items.pharmacy_id !== pharmacy_id) {
            return response.status(401).json({ error: "Operation not permited." })
        }

        await connection('items')
            .where('id', id)
            .update({title,  price, description}, 'title')
            .then(function () {
                return response.json({ title, price, description })
            })

        return response.status(500).send()
    },

    async delete(request, response) {
        const { id } = request.params
        const pharmacy_id = request.id

        const items = await connection('items')
            .where('id', id)
            .select('pharmacy_id')
            .first()

        if (items.pharmacy_id !== pharmacy_id) {
            return response.status(401).json({ error: "Operation not permited." })
        }

        await connection('items').where('id', id).delete()

        return response.status(204).send()
    },

    async index(request, response) {
        const pharmacy_id = request.id

        const items = await connection('items')
            .where('pharmacy_id', pharmacy_id)
            .select('*')

        return response.json(items)
    },

    async create(request, response) {
        const { title, price, description } = request.body

        const pharmacy_id = request.id

        await connection('items')
            .insert({
                title,
                price,
                description,
                pharmacy_id,
            }, 'id')
            .then(function (id) {
                const [item_id] = id
                return response.json({ item_id })
            })

        return response.json({ item_id })
    }
}