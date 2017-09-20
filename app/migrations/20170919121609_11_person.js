exports.up = function(knex, Promise) {
    return knex.schema.createTable('person', (table) => {
        table.increments(),
            table.text('name').notNullable(),
            table.text('email').notNullable().unique(),
            table.string('password').notNullable().unique()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('person')
};
