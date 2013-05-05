
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes') 
  , Firebase = require('firebase') 
  , myRootRef = new Firebase('https://pitchrefiner.firebaseio.com/');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/create_or_rate', routes.createOrRate);
app.get('/create', routes.create);
app.get('/pitch_config', routes.pitchConfig);
app.get('/config_audience', routes.configAudience);
app.get('/summary', routes.summary);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
