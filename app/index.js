'use strict';
var util = require('util'),
  path = require('path'),
  yeoman = require('yeoman-generator'),
  yosay = require('yosay');


var SwaggerGenerator = module.exports = function SwaggerGenerator(args, options,
  config) {

  yeoman.generators.Base.apply(this, arguments);

  this.options = options;
};

util.inherits(SwaggerGenerator, yeoman.generators.Base);

SwaggerGenerator.prototype.initializing = {};
SwaggerGenerator.prototype.prompting = {
  greet: function() {
    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous MVCpress generator!'));
  },
};
SwaggerGenerator.prototype.configuring = {};
SwaggerGenerator.prototype.writing = {
  application: function() {
    this.directory('core', '.');
    this.mkdir(path.join(this.destinationRoot() + '/app/models'));
    this.mkdir(path.join(this.destinationRoot() + '/public/js'));
    this.mkdir(path.join(this.destinationRoot() + '/public/css'));
    this.mkdir(path.join(this.destinationRoot() + '/public/components'));
  },
};
SwaggerGenerator.prototype.conflicts = {};
SwaggerGenerator.prototype.install = {
  dependencies: function() {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
    });
  },
};
SwaggerGenerator.prototype.end = {};