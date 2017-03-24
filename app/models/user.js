import DS from 'ember-data';

export default DS.Model.extend({
    username: DS.attr('string'),
    email: DS.attr('string'),
    name: DS.attr('string'),
    groups: DS.hasMany('group', {async: true}),
    custodian: DS.belongsTo('custodian', {inverse: 'user', async: true}),
});
