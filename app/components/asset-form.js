import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    countries: '',
    offices: '',
    atypes: '',
    categories: '',
    subcategory: '',
    statuses: '',
    donors: '',
    didInsertElement: function(){
        var store = this.get('store');
        var country_id = this.get('selected_country').get('id');
        this.set('countries', store.findAll('country'));
        this.set('offices', store.query('office', { filter: {country: country_id, name: 'KBL'} }));
        this.set('atypes', store.findAll('assettype'));
        this.set('categories', store.findAll('category'));
        this.set('subcategories', store.findAll('subcategory'));
        this.set('statuses', store.findAll('status'));
        this.set('donors', store.findAll('donor'));
    },

    actions: {
        country_change: function(country) {
            this.set('selected_country', country);
        },

        office_change: function(office) {
            this.set('selected_office', office);
        },
    },
});
