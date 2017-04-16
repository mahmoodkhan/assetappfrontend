import Ember from 'ember';

export default Ember.Controller.extend({
    sortedAssets: Ember.computed.sort('model', 'sortDefinition'),
    sortDefinition: ['no:asc'],
    sortAscending: true,
    theFilter: '',

    cols: {
        'country.iso2': ['Country', true],
        'no': ['No', true],
        'category.category': ['Category', true],
        'status.status': ['Status', true],
        'donor.donor': ['Donor', true],
        'brand': ['Brand', true],
        'model': ['Model', true],
        'description': ['Description', true],
        'edit': ['Edit',false]
    },

    //filteredAssets: function() {
    filteredAssets: Ember.computed('theFilter', 'sortedAssets', function(){
        let filter_str = this.get('theFilter').toLowerCase();
        return this.get('sortedAssets').filter((item) => {

            //console.log(Object.keys(JSON.parse(JSON.stringify(item))));
            //let donor = item.get('donor.donor').toString().slice(0, filter_str.length).toLowerCase();
            //let description = item.get('description').toString().slice(0, filter_str.length).toLowerCase();
            //return (donor === filter_str || description === filter_str);

            let donor = item.get('donor.donor').toString().toLowerCase();
            let description = item.get('description').toString().toLowerCase();
            return (donor.includes(filter_str) || description.includes(filter_str));
        });
    }), //.property('@each.description'),

    sortedColName: Ember.computed('sortDefinition', function() {
        return this.get('sortDefinition')[0].split(':')[0];
    }),

    actions: {
        sortColumnBy: function(property) {
            let sortOrder = this.get('sortAscending') ? 'desc' : 'asc';
            this.set('sortDefinition', [`${property}:${sortOrder}`]);
            this.set('sortAscending', !this.sortAscending);
        },
    },
});
