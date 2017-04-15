import Ember from 'ember';

export default Ember.Component.extend({
    tagName: "thead",

    actions: {
        sortColumn(col) {
            this.get('sortBy')(col);
        },
    }
});
