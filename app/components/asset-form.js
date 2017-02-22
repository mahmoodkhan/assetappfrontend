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
        let store = this.get('store');
        let country_id = this.get('selected_country').get('id');
        let category_id = this.get('selected_category').get('id');
        this.set('countries', store.peekAll('country'));
        this.set('offices', store.query('office', { filter: {country: country_id, name: 'KBL'} }, {backgroundReload: false}));
        this.set('atypes', store.peekAll('assettype'));
        this.set('categories', store.peekAll('category'));
        this.set('subcategories', store.query('subcategory', { filter: {category: category_id} }));
        this.set('statuses', store.peekAll('status'));
        this.set('donors', store.peekAll('donor'));
    },

    actions: {
        /*
         * buttonClicked is the actionHandler for the 'submit' button in the asset-form component template
         * the asset-form component receives the 'action' parameter from the assets.edit template, which it
         * auto retrieves when "this.sendAction('action')"" is called.
         * The reason this generic buttonClicked hander is specified is to make this component more resuable
         * since any template that calls this component could pass it in "action" parameter value and this
         * component will send the action to it.
         */
        buttonClicked(item) {
            //console.log(item.get('description'));
            //console.log('This action is passed to the asset-form component from the assets.edit template: ', this.get('action'));
            this.sendAction('action', item);
        },

        country_change: function(country) {
            this.set('selected_country', country);
        },

        office_change: function(office) {
            this.set('selected_office', office);
        },
    },
});
