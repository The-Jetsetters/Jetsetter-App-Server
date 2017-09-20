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
  queries.getTripsByPerson(req.params.id)
    .then((trips) => {
      res.json(trips)
    })
    .catch(function(error){
      res.json({
        error: 'error'
      })
    })
});

module.exports = router;
