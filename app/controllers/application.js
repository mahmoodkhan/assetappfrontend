import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    init() {
        this.get('session').authenticate('authenticator:drf-token-authenticator', 'username','password');
    },
    actions: {
        invalidateSession() {
            this.get('session').invalidate();
        }
    }
});
