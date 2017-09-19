exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "flights"; ALTER SEQUENCE flights_id_seq RESTART WITH 2;')
        .then(function() {
            var flights = [{
                id: 1,
                departuredate: "2017-09-29",
                airline: "Southwest",
                flightnumber: 766,
                departuretime: "09:15",
                departureairport: "Denver International Airport",
                arrivaltime: "11:30",
                arrivalairport: "Pheonix International Airport",
                trips_id: 1
            }];
            return knex('flights').insert(flights);
        })
};