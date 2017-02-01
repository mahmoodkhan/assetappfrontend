import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    iso2: DS.attr('string'),
    region: DS.belongsTo('region', {inverse: 'countries', async: false}),
    assets: DS.hasMany('asset'),
    offices: DS.hasMany('office', {inverse: 'country', async: false})
});
