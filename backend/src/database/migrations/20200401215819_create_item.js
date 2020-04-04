exports.up = function (knex) {
    return knex.schema.createTable('items', function (table) {
        table.increments('id').primary()

        table.string('title').notNullable()
        table.string('cientific_name').notNullable().defaultTo('')
        table.decimal('price').notNullable()
        table.text('description').notNullable()

        table.string('pharmacy_id').notNullable()

        table.foreign('pharmacy_id').onDelete('CASCADE').references('id').inTable('pharmacys')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('items')
};
