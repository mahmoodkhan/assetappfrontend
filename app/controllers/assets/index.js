import Ember from 'ember';

export default Ember.Controller.extend({
    sortedAssets: Ember.computed.sort('model', 'sortDefinition'),
    //sortBy: 'no:desc',
    sortDefinition: ['no'],
    actions: {
        sortBy: function(property) {
            //console.log(property);
            this.set('sortDefinition', [property]);
        }
    },
    /*
    sortDefinition: Ember.computed('sortBy', function() {
        return [ this.get('sortBy') ];
    }),
    */
});
