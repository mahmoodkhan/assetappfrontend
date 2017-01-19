import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        this.store.findAll('country');
        this.store.findAll('office');
        this.store.findAll('category');
        this.store.findAll('subcategory');
        //let atypes = this.store.findAll('asset-type');
        this.store.findAll('donor');
        this.store.findAll('status');
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
