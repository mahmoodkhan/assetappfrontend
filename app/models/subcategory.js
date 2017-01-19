import DS from 'ember-data';

export default DS.Model.extend({
    subcategory: DS.attr('string'),
    category: DS.belongsTo('category', {inverse: 'subcategories', async: false}),
    assets: DS.hasMany('asset'),
});