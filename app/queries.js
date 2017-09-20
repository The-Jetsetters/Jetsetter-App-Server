const knex = require('./db/knex')

module.exports = {
  getPerson: function(){
    return knex('*').from('person')
  },
  getTripsByPerson: function(person_id){
    return knex('*').from('trip')
    .where('id', person_id)
  },
  getAllTrips: function(){
    return knex('*').from('trip')
  }

};
