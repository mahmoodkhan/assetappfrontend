import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    users: DS.hasMany('group',  {async: false}), //, {inverse: 'groups', async: true}
});
