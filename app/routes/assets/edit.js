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
        assignToCustodian(issuance, asset, selected_custodian, currentUser) {
            issuance.set('asset', asset);
            issuance.set('custodian', selected_custodian);
            //console.log(JSON.stringify(selected_custodian.get('user').get('id')));
            //console.log(JSON.stringify(currentUser.get('user').get('custodian').get('name') ));
            issuance.set('issuedby', currentUser.get('user').get('custodian') );
            //console.log(JSON.stringify(currentUser));
            //console.log(Ember.inspect(issuance));
            issuance.save().then(() => console.log("issuance saved successfully!"));
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
