exports.up = function(knex, Promise) {
    return knex.schema.createTable('transport', (table) => {
        table.increments(),
            table.text('name'),
            table.text('address'),
            table.text('url'),
            table.text('phonenumber'),
            table.date('arrivaldate'),
            table.date('departuredate'),
            table.integer('trips_id').references('trips.id').unsigned().onDelete('cascade')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('transport')
};