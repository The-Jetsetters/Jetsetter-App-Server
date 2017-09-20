require('dotenv').config();
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "person"; ALTER SEQUENCE person_id_seq RESTART WITH 3;')
    .then(function() {
      var hash = bcrypt.hashSync(process.env.SECRET_WORD, saltRounds);
      var hash2 = bcrypt.hashSync(process.env.SECRET_WORD2, saltRounds);
      var person = [{
          id: 1,
          name: "Danielle Maier",
          email: "danielle@example.com",
          password: hash
        },
        {
          id: 2,
          name: "Mikki Mesfin",
          email: "mikki@example.com",
          password: hash2
        }
      ];
      return knex('person').insert(person);
    })
};
