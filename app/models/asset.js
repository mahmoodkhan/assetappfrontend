import DS from 'ember-data';

export default DS.Model.extend({
    country: DS.belongsTo('country', {inverse: 'assets', async: true}),
    office: DS.belongsTo('office', {inverse: 'assets', async: true}),
    no: DS.attr('number'),
    asset_type: DS.belongsTo('asset_type', {inverse: 'assets', async: true}),
    category: DS.belongsTo('category', {inverse: 'assets', async: true}),
    subcategory: DS.belongsTo('subcategory', {inverse: 'assets', async: true}),
    status: DS.belongsTo('status', {inverse: 'assets', async: true}),
    donor: DS.belongsTo('donor', {inverse: 'assets', async: true}),
    brand: DS.attr('string'),
    model: DS.attr('string'),
    description: DS.attr('string'),
    sno1: DS.attr('string'),
    sno2: DS.attr('string'),
    accessories: DS.attr('string'),
    pr_number: DS.attr('string'),
    po_number: DS.attr('string'),
    notes: DS.attr('string')
});