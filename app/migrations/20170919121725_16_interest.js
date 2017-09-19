exports.up = function(knex, Promise) {
    return knex.schema.createTable('interest', (table) => {
        table.increments(),
            table.text('interest'),
            table.integer('trips_id').references('trips.id').unsigned().onDelete('cascade')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('interest')
};