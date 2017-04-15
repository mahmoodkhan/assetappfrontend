import Ember from 'ember';

export default Ember.Route.extend({
    currentUser: Ember.inject.service(),
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

    afterModel(model, transition) {
        console.log('afterModel: ', model.asset.get('description'));
        this.store.query('assetissuancehistory', { filter:
                {asset: model.asset.get('id')}})
            .then(function(history) {
                console.log("success", history);
            }
        );
    },

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
        assignToCustodian(selected_custodian) {
            let issuance = (this.get('controller')).get('issuance');
            let asset = (this.get('controller')).get('asset');
            let custodian = (this.get('currentUser').get('user')).get('custodian');

            issuance.set('asset', asset);
            issuance.set('custodian', selected_custodian);
            issuance.set('issuedby', custodian);
            issuance.save().then(() => {
                let status_issued = this.store.peekRecord('status', 2);
                asset.set('status', status_issued);
                asset.save().then( () => console.log("Asset also saved!"));
                console.log("issuance saved successfully!");
            });
        },

        returnAssetFromCustodian(asset) {
            let status_available = this.store.peekRecord('status', 1);
            asset.set('status', status_available);
            asset.save().then(
                ()=>console.log("Returned Asset")
            );
        },

        willTransition(transition) {
            let model = this.controller.get('model');

            if (model.asset.get('hasDirtyAttributes')) {
                let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
                if (confirmation) {
                    model.asset.rollbackAttributes();
                    model.issuance.deleteRecord();
                } else {
                    transition.abort();
                }
            }
        }
    }
});
