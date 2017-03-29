import DS from 'ember-data';

export default DS.Model.extend({
    asset: DS.belongsTo('asset', {inverse: 'assethistory', async: false}),
    custodian: DS.belongsTo('custodian', {inverse: 'custodianhistory', async: false}),
    notes: DS.attr('string'),
    issuedby: DS.belongsTo('custodian', {async: false}),
});