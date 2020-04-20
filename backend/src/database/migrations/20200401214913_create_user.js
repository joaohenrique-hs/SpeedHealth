exports.up = function userMigration(knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('whatsapp').notNullable();
    table.string('address').notNullable();
  });
};

exports.down = function userRollback(knex) {
  return knex.schema.dropTable('users');
};
