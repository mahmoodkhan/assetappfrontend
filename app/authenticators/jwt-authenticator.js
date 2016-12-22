import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import Cookies from 'ember-cli-js-cookie';
import ENV from 'frontendapp/config/environment';

export default Base.extend({
  restore(data) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate() {
    return new Ember.RSVP.Promise((resolve, reject) => {
        var jwt = Cookies.get('jwt');
        Ember.run(function() {
          resolve({
            token: jwt
          });
        });
    });
  },
});