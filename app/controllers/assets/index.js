import Ember from 'ember';

export default Ember.Controller.extend({
    sortedAssets: Ember.computed.sort('model', 'sortDefinition'),
    sortDefinition: ['no:asc'],
    sortAscending: true,

    sortHelper: function(field) {
        let sortDefinition = this.get('sortDefinition')[0].split(':')[0];
        if (sortDefinition === field) {
            if (this.get('sortAscending') === true) {
                return 'sorted glyphicon  glyphicon-arrow-down';
            } else {
                return 'sorted glyphicon glyphicon-arrow-up';
            }
        } else {
            return 'glyphicon glyphicon-sort';
        }
    },

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

    actions: {
        sortBy: function(property) {
            let sortOrder = this.get('sortAscending') ? 'desc' : 'asc';
            this.set('sortDefinition', [`${property}:${sortOrder}`]);
            this.set('sortAscending', !this.sortAscending);
        },
    },
});
