import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  session: Ember.inject.service('session'),

  authorize: function(sessionData, block) {
    console.log(sessionData);
    if (this.get('session.isAuthenticated') && !Ember.isEmpty(sessionData.token)) {
      block('Authorization', 'JWT ' + sessionData.token);
    }
  }
});