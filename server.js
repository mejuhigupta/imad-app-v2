var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


//start of changes
//Added by me
app.get('/tvshows', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'tvshows.html'));
});

//added by me
//app.get('/songs', function (req, res) {
 // res.sendFile(path.join(__dirname, 'ui', 'songs.html'));
//});
//end of changes



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
