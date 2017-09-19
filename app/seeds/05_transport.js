exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "transport"; ALTER SEQUENCE transport_id_seq RESTART WITH 2;')
        .then(function() {
            var transport = [{
                id: 1,
                name: "Enterprise",
                address: "2850 W 26th Ave, Denver, CO 80211",
                url: "https://www.enterprise.com/",
                phonenumber: "7208557171",
                arrivaldate: "2017-09-29",
                departuredate: "2017-10-05",
                trips_id: 2
            }];
            return knex('transport').insert(transport);
        })
};