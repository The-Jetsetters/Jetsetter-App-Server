exports.up = function(knex, Promise) {
    return knex.schema.createTable('notes', (table) => {
        table.increments(),
            table.text('notes'),
            table.integer('trips_id').references('trips.id').unsigned().onDelete('cascade')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('notes')
};