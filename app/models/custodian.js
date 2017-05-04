import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    name: DS.attr('string'),
    empnum: DS.attr('number'),
    user: DS.belongsTo('user', {inverse: 'custodian', async: true}),
    country: DS.belongsTo('country', {inverse: 'custodians', async: false}),
    countries: DS.hasMany('country', {inverse: 'custodians', async: false}),
    assets: DS.hasMany('asset', {inverse: 'custodian', async: true}),
    custodianhistory: DS.hasMany('assetissuancehistory', {inverse: 'custodian', async: false}),
});
