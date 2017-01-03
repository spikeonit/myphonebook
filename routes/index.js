var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = [
      {Name:"Dexter Baga",Phone:"619-001-4562"},
      {Name:"Kent Johnson",Phone:"760-331-4562"},
      {Name:"Julie Parks",Phone:"918-001-2312"}
  ]
  res.render('index', { title: 'My Phone Book App', list:data });
});

module.exports = router;
