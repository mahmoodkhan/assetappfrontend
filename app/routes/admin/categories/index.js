import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('category');
    },

    actions: {
        deleteCategory(category) {
            let confirmation = confirm('Are you sure?');

            if (confirmation) {
                category.destroyRecord();
            }
        }
    }

});
