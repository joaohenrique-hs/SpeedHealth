const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { title, price, description } = request.body
        const pharmacy_id = request.id

        const [id] = await connection('items').insert({
            title,
            price,
            description,
            pharmacy_id,
        })

        return response.json({ id })
    }
}