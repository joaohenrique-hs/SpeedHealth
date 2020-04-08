const PharmacyTests = require('./integration/PharmacyTests')
const UserTests = require('./integration/UserTests')
const ItemTests = require('./integration/ItemTests')

const connection = require('../src/database/connection')

describe('sequentially run tests', () => {
    beforeAll(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async () => {
        await connection.migrate.rollback()
        await connection.destroy()
    })

    const pharmacy = {
        name: "Farmacia 24horas",
        email: "farmacia.24@gmail.com",
        password: "farmacia24",
        cnpj: "16151746000136",
        whatsapp: "49988267304",
        description: "A melhor farmácia 24 hrs",
        address: "Centro, Rua Mário, 1090",
        city: "Dionísio-Cerqueira",
        uf: "SC"
    }

    PharmacyTests(pharmacy)
    ItemTests(pharmacy.email, pharmacy.password)
    UserTests()
})