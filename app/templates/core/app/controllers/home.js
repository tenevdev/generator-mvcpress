// You might want to use the 'exports' alias here
// e.g. exports.index = function...
module.exports.index = function(req, res) {
  // Render a view passing an object
  res.render('home/index', {
    title: '<%= _.slugify(appname) %>'
  });
};