exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "lodging"; ALTER SEQUENCE lodging_id_seq RESTART WITH 3;')
        .then(function() {
            var lodging = [{
                    id: 1,
                    name: "The Pheonician",
                    address: "6000 E Camelback Rd, Scottsdale, AZ 85251",
                    url: "https://www.thephoenician.com/",
                    phonenumber: "4809808200",
                    arrivaldate: "2017-09-29",
                    departuredate: "2017-10-05",
                    trips_id: 1
                },
                {
                    id: 2,
                    name: "The Standard",
                    address: "550 S Flower St, Los Angeles, CA 90071",
                    url: "http://www.standardhotels.com/",
                    phonenumber: "2138908080",
                    arrivaldate: "2017-09-29",
                    departuredate: "2017-10-05",
                    trips_id: 2
                }
            ];
            return knex('lodging').insert(lodging);
        })
};