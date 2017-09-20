const express = require('express');
const router = express.Router();
const queries = require('../queries')

router.get('/', function(req, res, next) {
  queries.getPerson()
    .then((person) => {
      res.json(person)
    })
    .catch(function(error) {
      res.json({
        error: 'error'
      })
    })
});

router.get('/:id', function(req, res, next) {
  queries.getPersonById(req.params.id)
    .then((person) => {
      res.json(person)
    })
    .catch(function(error) {
      res.json({
        error: 'error'
      })
    })
});

module.exports = router;
