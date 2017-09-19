const express = require('express');
const router = express.Router();
const queries = require('../queries')

router.get('/', function(req, res, next) {
  queries.getTripsByPerson(1)
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
