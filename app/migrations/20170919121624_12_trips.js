exports.up = function(knex, Promise) {
    return knex.schema.createTable('trip', (table) => {
        table.increments(),
            table.date('startdate').notNullable(),
            table.date('enddate').notNullable(),
            table.text('destination').notNullable()
            table.text('airline'),
            table.integer('flightnumber'),
            table.time('departuretime'),
            table.text('lodgingname'),
            table.text('lodgingconf'),
            table.text('rentalname'),
            table.text('rentalconf'),
            table.text('tripnote'),
            table.integer('person_id').references('person.id').unsigned().onDelete('cascade')
    });
}
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('trip')
};
