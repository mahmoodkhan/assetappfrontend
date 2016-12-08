import Ember from 'ember';

export default Ember.Controller.extend({
    emailAddress: '',

    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),

    actions: {
        saveInvitation() {
            this.set('responseMessage', `Thank you! We've saved your email: ${this.get('emailAddress')}`);
            this.set('emailAddress', '');
        }
    }
});
