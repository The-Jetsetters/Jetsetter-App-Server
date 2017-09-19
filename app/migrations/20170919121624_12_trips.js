exports.up = function(knex, Promise) {
    return knex.schema.createTable('trips', (table) => {
        table.increments(),
            table.date('startdate').notNullable(),
            table.date('enddate').notNullable(),
            table.text('destination').notNullable(),
            table.integer('person_id').references('person.id').unsigned().onDelete('cascade')
    });
}
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('trips')
};