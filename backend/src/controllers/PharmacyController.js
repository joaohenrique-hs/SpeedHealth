const connection = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqueId')

module.exports = {
    async create(request, response) {
        const {
            name,
            email,
            password,
            cnpj,
            whatsapp,
            description,
            address,
            city,
            uf
        } = request.body

        const id = generateUniqueId()

        await connection('pharmacys').insert({
            id,
            name,
            email,
            password,
            cnpj,
            whatsapp,
            description,
            address,
            city,
            uf,
        })

        return response.json({ id })
    }
}