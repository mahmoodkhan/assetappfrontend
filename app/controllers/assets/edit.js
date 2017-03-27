import Ember from 'ember';

export default Ember.Controller.extend({
    selected_custodian: '',
    actions: {
        custodian_change: function(custodian) {
            //console.log(JSON.stringify(custodian));
            this.set('selected_custodian', custodian);
        },
    },
});