const express = require('express');
const router = express.Router();
const queries = require('../queries')

router.get('/', function(req, res, next) {
  queries.getAllTrips()
    .then((trips) => {
      res.json(trips)
    })
    .catch(function(error){
      res.json({
        error: 'error'
      })
    })
});

router.get('/:id', function(req, res, next) {
  queries.getTripsById(req.params.id)
    .then((trips) => {
      res.json(trips)
    })
    .catch(function(error){
      res.json({
        error: 'error'
      })
    })
});

router.post('/', function(req, res, next) {
  queries.addTrip(req.body)
    .then((newTrip) => {
      res.json(newTrip[0])
    })
    .catch(function (error){
      res.json({
        error: "error"
      })
    })
});

router.put('/:id', function(req, res, next) {
  queries.editTrip(req.params.id,req.body)
    .then((trip) => {
      res.json(trip[0])
    })
    .catch(function (error){
      res.json({
        error: "error"
      })
    })
});

router.delete("/:id", (req, res, next) => {
  queries.deleteTrip(req.params.id)
    .then(function(trip) {
      res.json(trip);
    })
    .catch(function (error){
      res.json({
        error: "error"
      })
    })
});

module.exports = router;
