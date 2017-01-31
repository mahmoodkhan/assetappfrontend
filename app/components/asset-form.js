import Ember from 'ember';

export default Ember.Component.extend({
    countries: '',
    store: Ember.inject.service(),
    didInsertElement: function(){
        this.set('countries', this.get('store').findAll('country'));
    },
    actions: {
        country_change: function(country) {
            this.set('selected_country', country);
            console.log(country);
        },
    },
});
