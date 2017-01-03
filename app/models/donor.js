import DS from 'ember-data';

export default DS.Model.extend({
    donor: DS.attr('string'),
    assets: DS.hasMany('asset')
});
