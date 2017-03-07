import Ember from 'ember';

const { inject: { service }, isEmpty, RSVP } = Ember;

export default Ember.Service.extend({
    session: service('session'),
    store: service(),

    load() {
        //if (this.get('session.isAuthenticated')) {
        let token = this.get('session.data.authenticated.token');
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        let jwtobj = JSON.parse(window.atob(base64));
        let userId = jwtobj.user_id;
        console.log('current-user-service', jwtobj);
        //console.log('current-user service', JSON.stringify(userId));
        if (!isEmpty(userId)) {
            //return this.get('store').queryRecord('user', { me: true }).then((user) => {
            return this.get('store').findRecord('user', userId).then((user) => {
                //console.log(JSON.stringify(user.email));
                user.get('groups').forEach(function(g){
                    console.log(g.get('name'));
                });
                this.set('user', user);
            });
        } else {
            return RSVP.resolve();
        }

    }
});
