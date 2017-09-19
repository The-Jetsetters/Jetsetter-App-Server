const knex = require('./db/knex')

module.exports = {
  getPerson: function(){
    return knex('*').from('person')
  },
  getTripsByPerson: function(person_id){
    return knex('*').from('trips')
    .where('id', person_id)
  },
  getFlights: function(){
    return knex('*').from('flights')
  },
  getAllInfo: function(trips_id){
    return knex('trips').select(
      'flights.id as flights_id',
      'flights.departuredate as flights_departuredate',
      'airline',
      'flightnumber',
      'departuretime',
      'departureairport',
      'arrivaltime',
      'arrivalairport',
      'destination'
    )
    .innerJoin('flights', 'flights.trips_id')
    .where('trips.id')
  }
  // getTasksByProject: function(project_id) {
  //   return knex('task')
  //     .select('task.id', 'project.name as project_name', 'task.name as task_name', 'task.description', 'task.todo', 'task.inprogress', 'task.icebox', 'task.finished', 'project.id as project_id', 'member.id as member_id', 'member.name as member_name')
  //     .innerJoin('project', 'project.id', 'task.project_id')
  //     .innerJoin('member', 'member.id', 'task.member_id')
  //     .where('project.id', project_id)
  // }
  // addTask: function(body) {
  //   return knex('task').insert(body).returning('*')
  // },
  // deleteTask: function(task_id) {
  //   return knex('task').where('id', task_id).del().returning('*')
  // },
  // deleteProject: function(project_id) {
  //   return knex('project').where('id', project_id).del().returning('*')
  // },
  // addProject: function(body) {
  //   return knex('project').insert(body).returning('*')
  // },
  // getTasks: function() {
  //   return knex("*").from("task")
  // },
  // getTaskById: function(task_id) {
  //   return knex('task').select('task.id', 'project.name as project_name', 'task.name as task_name', 'task.description', 'task.todo', 'task.inprogress', 'task.icebox', 'task.finished','member.id as member_id', 'member.name as member_name')
  //     .innerJoin('project', 'project.id', 'task.project_id')
  //     .innerJoin('member', 'member.id', 'task.member_id')
  //     .where('task.id', task_id)


};
