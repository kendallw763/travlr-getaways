const express = require('express');//express application
const router = express.Router(); //the router logic

//import the controllers so we can route them
const tripsController = require('../controllers/trips');

//define the routes for the trips endpoint
router
    .route('/trips')
    .get('tripsController.tripsList');//get method for triplist route

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

    module.exports = router;


