var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

// HTML endpoints
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});


//Server listening on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('server is running on http://localhost:3000/');
});
