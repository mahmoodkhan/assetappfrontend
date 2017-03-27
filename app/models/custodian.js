import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    name: DS.attr('string'),
    empnum: DS.attr('number'),
    user: DS.belongsTo('user', {inverse: 'custodian', async: true}),
    country: DS.belongsTo('country', {inverse: 'custodians', async: true}),
    countries: DS.hasMany('country', {inverse: 'custodians', async: true}),
    custodianhistory: DS.hasMany('assetissuancehistory', {inverse: 'custodian', async: true}),
});
