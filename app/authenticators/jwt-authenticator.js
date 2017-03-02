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
            let jwt = Cookies.get('jwt');
            //let base64Url = jwt.split('.')[1];
            //let base64 = base64Url.replace('-', '+').replace('_', '/');
            //console.log(JSON.parse(window.atob(base64)));
            if (typeof(jwt) !== 'undefined') {
                //Cookies.remove('jwt');
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