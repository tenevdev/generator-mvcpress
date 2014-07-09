module.exports = function(app) {

  var router = require('express').Router(),
    home = require('../../app/controllers/home');

  // Route using controller
  router.route('/home')
    .get(home.index);

  // Simple route (just render a view)
  router.route('/')
    .get(function(req, res) {
      res.render('home/index', {
        title: '<%= _.slugify(appname) %>'
      });
    });

  // Register router
  app.use('/', router);

  // Handle not found on application level
  app.use(function(req, res) {
    res.status(404).render('app/views/404', {
      title: '404'
    });
  });
};
