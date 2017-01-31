import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('asset');
    },

    actions: {
        deleteAsset(asset) {
            let confirmation = confirm('Are you sure?');

            if (confirmation) {
                asset.destroyRecord();
            }
        }
    }
});
