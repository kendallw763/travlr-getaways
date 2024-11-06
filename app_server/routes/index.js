var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main')

//get the homepage
router.get('/', ctrlMain.index);

//This line represnets the exportation of the router
module.exports = router;
