import Ember from 'ember';

export default Ember.Controller.extend({
    sortedAssets: Ember.computed.sort('model', 'sortDefinition'),
    sortDefinition: ['no:asc'],
    sortAscending: true,
    theFilter: '',

    cols: {
        'country.iso2': ['CO', false, "Two letter country ISO code"],
        'no': ['No', true, "Purchase Request Serial Number"],
        'description': ['Description', true],
        'category.category': ['Category', true],
        'status.status': ['Status', true],
        'donor.donor': ['Donor', true],
        'brand': ['Brand', true],
        'model': ['Model', true],
        'prnumber': ['PR #', false, "Purchase Request Number"],
        'ponumber': ['PO #', false, "Purchase Order Number"],
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







    // Here, we're telling the controller that the property `page`
    // should be "bound" to the query parameter the same name.
    // We could map the parameter to a different property name if we wanted.
    queryParams: ['page'],

    // The default value for our page property
    page: 1,

    // This property will be set by the parent route
    pages: null,

    // The following properties will be used for the display of the pagination links
    prevPage: function() {
        return this.get('page') - 1;
    }.property('page'),

    nextPage: function() {
        return this.get('page') + 1;
    }.property('page'),

    isFirstPage: function() {
        return this.get('page') === 1;
    }.property('page'),

    isLastPage: function() {
        return this.get('page') >= this.get('pages');
    }.property('page', 'pages'),

    pageRange: function () {
        let result = Ember.A();

        for(let i = 1; i <= this.get('pages'); i++) {
            result.push(i);
        }
        return result;
    }.property('pages')

});
