//------------ Requirements ------------//
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var lakana = require('./routes/lakana');
var ian = require('./routes/ian');
var dan = require('./routes/dan');
var donnie = require('./routes/donnie');




//------------ Middlware ------------//
app.use(express.static(path.join(__dirname, './public')));


//------------ Express Routes ------------//
app.use('/ian', ian);
app.use('/dan', dan);
app.use('/donnie', donnie);
app.use('/lakana', lakana);
app.use('/', index);


//------------ Set Port & Start Server ------------//
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('listening on port: ', app.get('port'));
});
