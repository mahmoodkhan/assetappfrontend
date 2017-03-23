import DS from 'ember-data';

export default DS.Model.extend({
    item: DS.belongsTo('asset', {inverse: 'assethistory', async: false}),
    custodian: DS.belongsTo('custodian', {inverse: 'custodianhistory', async: false}),
    notes: DS.attr('string'),
});