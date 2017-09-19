exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "trips"; ALTER SEQUENCE trips_id_seq RESTART WITH 3;')
        .then(function() {
            var trips = [{
                    id: 1,
                    startdate: "2017-09-29",
                    enddate: "2017-10-05",
                    destination: "Pheonix, AZ",
                    person_id: 1
                },
                {
                    id: 2,
                    startdate: "2017-09-29",
                    enddate: "2017-10-05",
                    destination: "Los Angeles, CA",
                    person_id: 2
                }
            ];
            return knex('trips').insert(trips);
        })
};
