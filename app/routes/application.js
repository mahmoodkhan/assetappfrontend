import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

/*
 * The ApplicationRouteMixin automatically maps the session events to the
 * 'sessionAuthenticated' and 'sessionInvalidated' methods it implements.
 */
export default Ember.Route.extend(ApplicationRouteMixin, {
    currentUser: service(),
    session: service('session'),

    /*
     * This hook is the first of the route entry validation hooks called when an
     * attempt is made to transition into a route or one of its children.
     * It is called before 'model' and 'afterModel' hooks.
     */
    beforeModel() {

        this.get('session').authenticate('authenticator:jwt-authenticator').then(()=>{
            return this._loadCurrentUser();
        });

        //this.get('session').authenticate('authenticator:jwt-authenticator')
    },

    /*
     * When the user authenticates manually, this method is invoked because this
     * class mixes the ApplicationRouteMixin, which maps the corresponding session
     * events.
     */
    sessionAuthenticated() {
        this._super(...arguments);
        this._loadCurrentUser();
    },

    /*
     * A private method that is referenced above.
     */
    _loadCurrentUser() {
        return this.get('currentUser').load().catch((e) => console.log('something terrible happened', e)); //this.get('session').invalidate()
    }
});
