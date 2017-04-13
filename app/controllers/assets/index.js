import Ember from 'ember';

export default Ember.Controller.extend({
    sortedAssets: Ember.computed.sort('model', 'sortDefinition'),
    sortDefinition: ['no:asc'],
    sortAscending: true,
    theFilter: '',

    sortHelper: function(field) {
        let sortDefinition = this.get('sortDefinition')[0].split(':')[0];
        const SORTED_ASCENDING = 'sorted glyphicon glyphicon-sort-by-attributes';
        const SORTED_DESCENDING = 'sorted glyphicon glyphicon-sort-by-attributes-alt';
        const UNSORTED = 'glyphicon glyphicon-sort';

        if (sortDefinition === field) {
            if (this.get('sortAscending') === true) {
                return SORTED_ASCENDING;
            } else {
                return SORTED_DESCENDING;
            }
        } else {
            return UNSORTED;
        }
    },

    //filteredAssets: function() {
    filteredAssets: Ember.computed('theFilter', 'sortedAssets', function(){
        let filter_str = this.get('theFilter').toLowerCase();
        return this.get('sortedAssets').filter((item) => {
            //console.log(Object.keys(JSON.parse(JSON.stringify(item))));
            let donor = item.get('donor.donor').toString().slice(0, filter_str.length).toLowerCase();
            let description = item.get('description').toString().slice(0, filter_str.length).toLowerCase();
            return (donor === filter_str || description === filter_str);
        });
    }), //.property('@each.description'),

    sortByCountry: Ember.computed('sortDefinition', function() {
        return this.sortHelper('country.iso2');
    }),

    sortByNo: Ember.computed('sortDefinition', function() {
        return this.sortHelper('no');
    }),

    sortByDescription: Ember.computed('sortDefinition', function() {
        return this.sortHelper('description');
    }),

    sortByCategory: Ember.computed('sortDefinition', function() {
        return this.sortHelper('category.category');
    }),

    sortByStatus: Ember.computed('sortDefinition', function() {
        return this.sortHelper('status.status');
    }),

    sortByDonor: Ember.computed('sortDefinition', function() {
        return this.sortHelper('donor.donor');
    }),

    sortByBrand: Ember.computed('sortDefinition', function() {
        return this.sortHelper('brand');
    }),

    sortByModel: Ember.computed('sortDefinition', function() {
        return this.sortHelper('model');
    }),

    sortBy: Ember.computed('sortDefinition', function() {
        return this.get('sortDefinition')[0].split(':')[0];
    }),

    sortOrder: Ember.computed('sortAscending', function(){
        return this.get('sortAscending');
    }),
    actions: {
        sortBy: function(property) {
            let sortOrder = this.get('sortAscending') ? 'desc' : 'asc';
            this.set('sortDefinition', [`${property}:${sortOrder}`]);
            this.set('sortAscending', !this.sortAscending);
        },
    },
});
