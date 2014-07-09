var rootPath = require('path').normalize(__dirname + '/..'),
  env = process.env.NODE_ENV || 'development',
  dbPath = process.env.MONGOLAB_URI ||
    'mongodb://localhost/<%= _.slugify(appname) %>';

var config = {
  development: {
    root: rootPath,
    app: {
      name: '<%= _.slugify(appname) %>'
    },
    port: 3000,
    db: dbPath + '-development'
  },

  test: {
    root: rootPath,
    app: {
      name: '<%= _.slugify(appname) %>'
    },
    db: dbPath + '-test'
  },

  production: {
    isProduction: true,
    root: rootPath,
    app: {
      name: '<%= _.slugify(appname) %>'
    },
    db: dbPath
  }
};

// Expose configuration for the current environment
exports = module.exports = config[env];