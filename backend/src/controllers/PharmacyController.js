const connection = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqueId')
const generateJwtToken = require('../utils/generateJwtToken')

module.exports = {
    async login(request, response) {
        const { email, password } = request.body

        const pharmacy = await connection('pharmacys')
            .where('email', email)
            .first()

        if (!pharmacy) {
            return response.status(400).json({ error: "No pharmacy found with this email" })
        }

        if (pharmacy.password !== password) {
            return response.status(401).json({ error: "Invalid password" })
        }

        token = generateJwtToken(pharmacy.id, email)

        return response.json({ token })
    },

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

        if (!description) {
            const description = ''
        }

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