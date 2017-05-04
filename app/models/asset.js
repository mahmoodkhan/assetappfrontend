import DS from 'ember-data';

export default DS.Model.extend({
    country: DS.belongsTo('country', {inverse: 'assets', async: true}),
    office: DS.belongsTo('office', {inverse: 'assets', async: true}),
    no: DS.attr('number'),
    assettype: DS.belongsTo('assettype', {inverse: 'assets', async: true}),
    category: DS.belongsTo('category', {inverse: 'assets', async: true}),
    donor: DS.belongsTo('donor', {inverse: 'assets', async: true}),
    brand: DS.attr('string'),
    model: DS.attr('string'),
    description: DS.attr('string'),
    sno1: DS.attr('string'),
    sno2: DS.attr('string'),
    accessories: DS.attr('string'),
    prnumber: DS.attr('string'),
    ponumber: DS.attr('string'),
    notes: DS.attr('string'),
    disposed: DS.attr('boolean'),
    broken: DS.attr('boolean'),
    custodian: DS.belongsTo('custodian', {inverse: 'assets', assets: true}),
    assethistory: DS.hasMany('assetissuancehistory', {inverse: 'asset', async: true}),
});
