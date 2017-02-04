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
        this.set('countries', store.peekAll('country'));
        this.set('offices', store.query('office', { filter: {country: country_id, name: 'KBL'} }, {backgroundReload: false}));
        this.set('atypes', store.peekAll('assettype'));
        this.set('categories', store.peekAll('category'));
        this.set('subcategories', store.peekAll('subcategory'));
        this.set('statuses', store.peekAll('status'));
        this.set('donors', store.peekAll('donor'));
    },

    actions: {
        buttonClicked(param) {
            this.sendAction('action', param);
        },

        country_change: function(country) {
            this.set('selected_country', country);
        },

        office_change: function(office) {
            this.set('selected_office', office);
        },
    },
});
