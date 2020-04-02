exports.up = function(knex) {
    return knex.schema.createTable('items', function (table) {
        table.string('id').primary()
        table.string('title').notNullable()
        table.decimal('price').notNullable()
        table.string('description').notNullable()

        table.string('pharmacy_id')

        table.foreign('pharmacy_id').references('id').inTable('pharmacys')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('items')  
};
