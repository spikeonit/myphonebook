var express = require('express');
var router = express.Router();
var https = require('https');

/* GET home page. */
router.get('/', function(req, res, next) {
    var url = 'https://4xfyet0w49.execute-api.us-east-1.amazonaws.com/api/list';
    var request = https.get(url, function (response) {
        response.setEncoding('utf8');
        response.on('data',function (data) {
            if(data.length > 0){
                res.render('index', { title: 'My Phone Book App', list:JSON.parse(data) });
            }else{
                res.render('index', { title: 'My Phone Book App', list:{} });
            }
        })
    })
});

module.exports = router;
