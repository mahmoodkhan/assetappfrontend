import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    iso2: DS.attr('string'),
    region: DS.belongsTo('region', {inverse: 'countries', async: false}),
    assets: DS.hasMany('asset', {inverse: 'countries', async: false}),
    offices: DS.hasMany('office', {inverse: 'countries', async: false}),
    custodians: DS.hasMany('custodian', {inverse: 'countries', async: false}),
});
