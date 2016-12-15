/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    host: 'http://localhost:8000',
    modulePrefix: 'frontendapp',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    apiURL: '/api',
  };

  ENV['ember-simple-auth'] = {
    authenticationRoute: 'login',
    routeAfterAuthentication: 'home',
    routeIfAlreadyAuthenticated: 'about'
  };

/*
  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:token'
  };
  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: '/api/api-token-auth/',
    identificationField: 'username',
    passwordField: 'password',
    tokenPropertyName: 'token',
    authorizationPrefix: 'Bearer ',
    authorizationHeaderName: 'Authorization',
    //headers: {},
    refreshAccessTokens: true,
    tokenExpireName: 'exp',
    timeFactor: 1,
    refreshLeeway: 300 // Refresh the token 5 minutes (300s) before it expires.
  };
*/

  if (environment === 'development') {
    ENV.host = 'http://localhost:8000';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
