var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('express is runnig on port ' + ENV.port);
});

module.exports = router;
