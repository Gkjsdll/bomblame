var express = require('express');

var app = express();
var http = require('http').Server(app);

var chalk = require('chalk');

app.use(express.static('public'));

app.use('/api', require(__dirname + '/routes/api'));
app.all('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log(chalk.cyan.underline('listening on *:3000'));
});
