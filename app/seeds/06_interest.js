exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "interest"; ALTER SEQUENCE interest_id_seq RESTART WITH 3;')
        .then(function() {
            var interest = [{
                    id: 1,
                    interest: "Eating, Bars, Sight-Seeing",
                    trips_id: 1
                },
                {
                    id: 2,
                    interest: "Eating, Bars, Surfing",
                    trips_id: 2
                }
            ];
            return knex('interest').insert(interest);
        })
};