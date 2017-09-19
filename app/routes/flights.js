const express = require('express');
const router = express.Router();
const queries = require('../queries')

router.get('/', function(req, res, next) {
  queries.getFlights()
    .then((flights) => {
      res.json(flights)
    })
    .catch(function(error) {
      res.json({
        error: 'errooor'
      })
    })

});

module.exports = router;
