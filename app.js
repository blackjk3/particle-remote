var express = require('express');
var app = express();

var bot = require ('./bot_ctl');

console.log(bot);

app.set('view engine', 'jade');
app.use('/assets', express.static('assets'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Particle Remote', message: 'Hello there!'});
});

app.get('/controls/:control', function (req, res) {
	console.log(req.params.control);
	bot.processDirection(req.params.control);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
