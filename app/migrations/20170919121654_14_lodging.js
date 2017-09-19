exports.up = function(knex, Promise) {
    return knex.schema.createTable('lodging', (table) => {
        table.increments(),
            table.text('name').notNullable(),
            table.text('address').notNullable(),
            table.text('url'),
            table.text('phonenumber'),
            table.date('arrivaldate'),
            table.date('departuredate'),
            table.integer('trips_id').references('trips.id').unsigned().onDelete('cascade')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('lodging')
};