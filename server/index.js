var express = require('express');
var bodyParser = require('body-parser');
var helpers = require('../helpers/convertToSql.js')
var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.urlencoded({
  extended: true
}))

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

app.get('/query', function (req, res) {
  let queries = req.query.queries
  res.send(helpers.convertToSql(queries))

});


/*
 with a database:

app.get('/query', function (req, res) {
  let queries = req.query.queries
  let sqlQueryString = helpers.convertToSql(queries)

  db.query(sqlQueryString, function(error,results) {
    if (error) {
      console.log(error)
    } else {
      callback(null, results)
    }
  })

});

*/
