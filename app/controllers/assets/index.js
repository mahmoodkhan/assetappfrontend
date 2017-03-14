import Ember from 'ember';

export default Ember.Controller.extend({
    sortedAssets: Ember.computed.sort('model', 'sortDefinition'),
    sortDefinition: ['no:asc'],
    sortAscending: true,

    sortHelper: function(field) {
        let sortDefinition = this.get('sortDefinition')[0].split(':')[0];
        console.log(sortDefinition);
        console.log(field);
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

    sortByNo: Ember.computed('sortDefinition', function() {
        return this.sortHelper('no');
    }),

    sortByDescription: Ember.computed('sortDefinition', function() {
        return this.sortHelper('description');
    }),

    sortByCategory: Ember.computed('sortDefinition', function() {
        return this.sortHelper('category.category');
    }),

    actions: {
        sortBy: function(property) {
            let sortOrder = this.get('sortAscending') ? 'desc' : 'asc';
            this.set('sortDefinition', [`${property}:${sortOrder}`]);
            this.set('sortAscending', !this.sortAscending);
        },
    },
});
