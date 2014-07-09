var express = require('express'),
  compress = require('compression'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  favicon = require('serve-favicon'),
  env = process.env.NODE_ENV || 'development';

module.exports = function(app, config) {

  app.set('showStackError', true);

  app.use(compress({
    filter: function(req, res) {
      return /json|text|javascript|css/.test(res.getHeader(
        'Content-Type'));
    },
    level: 9
  }));

  app.use(express.static(config.root + '/public'));

  app.set('views', config.root + '/app/views');
  app.set('view engine', 'jade');

  app.use(favicon(config.root + '/public/img/favicon.ico'));

  app.use(morgan('dev'));

  app.use(bodyParser.json());
  app.use(methodOverride());

  if (env === 'development') {
    app.locals.pretty = true;
  }
};