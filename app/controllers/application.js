import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    store: Ember.inject.service(),
    init() {
        console.log("Application Controller: BLA");
        //this.get('session').authenticate('authenticator:drf-token-authenticator', 'username','password');
        this.get('session').authenticate('authenticator:jwt-authenticator');
        var store = this.get('store');
        console.log('Application Controller store==>',store);
    },
    actions: {
        invalidateSession() {
            this.get('session').invalidate();
        }
    }
});
