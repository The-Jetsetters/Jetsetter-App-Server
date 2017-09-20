const knex = require('./db/knex')

module.exports = {
  getPerson: function(){
    return knex('*').from('person')
  },
  getPersonById: function(person_id){
    return knex('*').from('person')
    .where('id', person_id)
  },
  getTripsById: function(id){
    return knex('*').from('trip')
    .where('id', id)
  },
  getAllTrips: function(){
    return knex('*').from('trip')
  },
  editTrip:function(id, body){
    return knex('trip')
    .where('id', id)
    .update(body)
  },
  addTrip:function(body){
    return knex('trip')
    .insert(body)
    .returning('*')
  },
  deleteTrip:function(id){
    return knex('trip')
    .where('id', id)
    .del()
  }

};
// editTask: function(task_id, edit) {
//    return knex('task').where('id', task_id).update(edit).returning('*')
//  },
