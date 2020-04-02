const connection = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqueId')
const generateJwtToken = require('../utils/generateJwtToken')

module.exports = {
    async all(request, response) {
        const { page = 1 } = request.query

        // const [count] = await connection('pharmacy').count()

        const pharmacys = await connection('pharmacys')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                "name",
                "email",
                "cnpj",
                "whatsapp",
                "description",
                "address",
                "city",
                "uf"
            ])

        // response.header('X-Total-Count', count['count(*)'])

        return response.json(pharmacys)
    },

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