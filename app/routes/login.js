import Ember from 'ember';

export default Ember.Route.extend({
    session: Ember.inject.service('session'),

    actions: {
        authenticate() {
            let {username, password} = this.controller.getProperties("username", "password");
            /*
            this.get('session').authenticate('authenticator:drf-token-authenticator', username, password).catch((reason) => {
                this.set('error', reason.error || reason);
            });
            this.get('session').authenticate('authenticator:drf-token-authenticator', username, password).then(
                () => this.transitionTo('index')
            );
            */

            /*
            this.get('session').authenticate('authenticator:drf-token-authenticator', username, password).then(
                function() {
                    console.log("success");
                    this.transitionTo('index');
                }, function(error) {
                    console.log(error);
                }
            );
            */
            this.get('session').authenticate('authenticator:drf-token-authenticator', username, password).then(
                () => this.transitionTo("index"),
                (err) => this.controller.set('error', err.error || err)
            );
        }
    }
});
