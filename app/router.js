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
      this.route('edit', {path: '/:category_id/edit'});
      this.route('delete', {path: '/:category_id/delete'});
    });
  });
  this.route('login');
  this.route('assets', function() {});
});

export default Router;
