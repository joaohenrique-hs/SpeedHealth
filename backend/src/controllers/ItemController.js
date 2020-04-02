const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { title, price, description } = request.body

        const pharmacy_id = request.id

        console.log(pharmacy_id)

        try {
            const [id] = await connection('items').insert({
                title,
                price,
                description,
                pharmacy_id,
            })
        }
        catch (exception) { 
            console.log(exception)
            return response.status(500).send()
        }

        return response.json({ id })
    }
}