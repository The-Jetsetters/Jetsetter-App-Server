exports.up = function(knex, Promise) {
    return knex.schema.createTable('flights', (table) => {
        table.increments(),
            table.date('departuredate').notNullable(),
            table.text('airline').notNullable(),
            table.integer('flightnumber').notNullable(),
            table.time('departuretime').notNullable(),
            table.text('departureairport').notNullable(),
            table.time('arrivaltime'),
            table.text('arrivalairport').notNullable(),
            table.integer('trips_id').references('trips.id').unsigned().onDelete('cascade')
    });
}
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('flights')
};