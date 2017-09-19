exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "notes"; ALTER SEQUENCE notes_id_seq RESTART WITH 3;')
        .then(function() {
            var notes = [{
                    id: 1,
                    notes: "Don't forget to check in for the flight!!",
                    trips_id: 1
                },
                {
                    id: 2,
                    notes: "Stop by Vegas on the way into LA",
                    trips_id: 2
                }
            ];
            return knex('notes').insert(notes);
        })
};