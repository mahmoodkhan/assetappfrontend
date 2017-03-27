import Ember from 'ember';

export default Ember.Route.extend({
    /*
     This approach is fine provided you do not have any dynamic segments in your route. If you have dynamic segments and the route is entered via {{link-to 'index' someModel}} then the model hook is skipped entirely which will break this example. A more robust approach is to load any extra models in setupController which is always run.
     */
    model(params) {
        //return this.store.findRecord('asset', params.asset_id);
        return Ember.RSVP.hash({
            asset: this.store.findRecord('asset', params.asset_id),
            custodians: this.store.findAll('custodian'),
            issuance: this.store.createRecord('assetissuancehistory', {})
        });
    },

    // http://stackoverflow.com/questions/20521967/emberjs-how-to-load-multiple-models-on-the-same-route
    setupController(controller, model) {
        this._super(...arguments);
        Ember.set(controller, 'asset', model.asset);
        Ember.set(controller, 'custodians', model.custodians);
        Ember.set(controller, 'issuance', model.issuance);
    },

    actions: {
        saveAsset(existingAsset) {
            existingAsset.save().then(() => this.transitionTo('assets'));
        },
        deleteAsset(asset) {
            let confirmation = confirm('Are you sure?');

            if (confirmation) {
                asset.destroyRecord();
            }
        },
        assignToCustodian(issuance, asset, selected_custodian) {
            issuance.set('asset', asset);
            issuance.set('custodian', selected_custodian);
            console.log(JSON.stringify(issuance));
            console.log(Ember.inspect(issuance));
            issuance.save().then(() => console.log("issuance saved successfully!"));
            //console.log("foooooooooo: " , asset);
        },
        willTransition(transition) {
            let model = this.controller.get('model');

            if (model.asset.get('hasDirtyAttributes')) {
                let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
                if (confirmation) {
                    model.rollbackAttributes();
                } else {
                    transition.abort();
                }
            }
        }
    }
});
