import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
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

  authenticate(username, password) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: ENV.host + '/api-token-auth/', //'/api-auth-basic/',
        type: 'POST',
        data: JSON.stringify({
          username: username,
          password: password
        }),
        contentType: 'application/json', //'application/json;charset=utf-8',
        dataType: 'json'
      }).then((response) => {
        Ember.run(function() {
          resolve({
            token: response.data.token
          });
        });
      }, (xhr, status, error) => {
        console.log(error);
        var response = xhr.responseText;
        Ember.run(function() {
          reject(response);
        });
      });
    });
  },
});