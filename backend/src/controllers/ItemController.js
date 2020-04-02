const connection = require('../database/connection')

module.exports = {
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