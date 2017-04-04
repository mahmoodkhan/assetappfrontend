import Ember from 'ember';

export default Ember.Controller.extend({
    selected_custodian: '',
    status: Ember.computed.alias('asset.status'),
    isIssued: Ember.computed.equal('status.status', 'Issued'),

    actions: {
        custodian_change: function(custodian) {
            //console.log(JSON.stringify(custodian));
            this.set('selected_custodian', custodian);
        },
    },
});