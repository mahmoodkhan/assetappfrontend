import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import Cookies from 'ember-cli-js-cookie';

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
            if (typeof(jwt) !== 'undefined') {
                Cookies.remove('jwt');
                Ember.run(function() {
                    resolve({
                        token: jwt
                    });
                });
            } else {
                Ember.run(function() {
                    reject();
                });
            }
        });
    },
});