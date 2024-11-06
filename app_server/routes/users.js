var express = require('express');
var router = express.Router();

/* The line of code below gets the user listing of all the vacation spots*/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//This line exports the router
module.exports = router;
