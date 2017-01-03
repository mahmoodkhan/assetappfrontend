import DS from 'ember-data';

export default DS.Model.extend({
    category: DS.hasMany('category', {inverse: 'subcategories', async: true}),
    subcategory: DS.attr('string'),
    assets: DS.hasMany('asset'),
});