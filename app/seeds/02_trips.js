exports.seed = function(knex, Promise) {
    return knex.raw('DELETE FROM "trip"; ALTER SEQUENCE trip_id_seq RESTART WITH 3;')
        .then(function() {
            var trips = [{
                    id: 1,
                    startdate: "2017-09-29",
                    enddate: "2017-10-05",
                    destination: "Phoenix, AZ",
                    airline: "Southwest",
                    flightnumber: 766,
                    departuretime: "9:15",
                    lodgingname:"Four Seasons",
                    lodgingconf:"THEUEN32802",
                    rentalname:"Hertz",
                    rentalconf:"92380FJF89",
                    person_id: 1
                },
                {
                    id: 2,
                    startdate: "2017-09-29",
                    enddate: "2017-10-05",
                    destination: "Los Angeles, CA",
                    airline: "Delta",
                    flightnumber: 4832,
                    departuretime: "10:30",
                    lodgingname:"The Standard",
                    lodgingconf:"omfg49343",
                    rentalname:"Enterprise",
                    rentalconf:"sdfk3939",
                    person_id: 2
                }
            ];
            return knex('trip').insert(trips);
        })
};
