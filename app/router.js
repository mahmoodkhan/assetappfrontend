import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');

  this.route('admin', function() {
    this.route('categories', function() {
      this.route('new');
    });
  });
  this.route('login');
});

export default Router;
