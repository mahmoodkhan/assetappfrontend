import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        foo: function(country) {
            this.set('country', country);
            console.log(country.id);
        }
    },
});
