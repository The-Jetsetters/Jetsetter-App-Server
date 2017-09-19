exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "person"; ALTER SEQUENCE person_id_seq RESTART WITH 3;')
        .then(function() {
            var person = [{
                    id: 1,
                    name: "Danielle Maier",
                    email: "danielle@example.com",
                    password: "travels"
                },
                {
                    id: 2,
                    name: "Mikki Mesfin",
                    email: "mikki@example.com",
                    password: "departure"
                }
            ];
            return knex('person').insert(person);
        })
};