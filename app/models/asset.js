import DS from 'ember-data';

export default DS.Model.extend({
    country: DS.belongsTo('country', {inverse: 'assets', async: false}),
    office: DS.belongsTo('office', {inverse: 'assets', async: false}),
    no: DS.attr('number'),
    asset_type: DS.belongsTo('asset_type', {inverse: 'assets', async: false}),
    category: DS.belongsTo('category', {inverse: 'assets', async: false}),
    subcategory: DS.belongsTo('subcategory', {inverse: 'assets', async: false}),
    status: DS.belongsTo('status', {inverse: 'assets', async: false}),
    donor: DS.belongsTo('donor', {inverse: 'assets', async: false}),
    brand: DS.attr('string'),
    model: DS.attr('string'),
    description: DS.attr('string'),
    sno1: DS.attr('string'),
    sno2: DS.attr('string'),
    accessories: DS.attr('string'),
    prnumber: DS.attr('string'),
    ponumber: DS.attr('string'),
    notes: DS.attr('string')
});
