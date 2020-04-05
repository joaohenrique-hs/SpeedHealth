exports.up = function (knex) {
    return knex.schema.createTable('pharmacys', function (table) {
        table.string('id').primary()
        table.string('name').notNullable()
        table.string('cnpj', 14).notNullable()
        table.string('email').notNullable()
        table.string('password').notNullable()
        table.string('whatsapp').notNullable()
        table.string('description').defaultTo('')
        table.string('address').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('pharmacys')
};
