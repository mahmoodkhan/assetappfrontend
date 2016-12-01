import DS from 'ember-data';

export default DS.Model.extend({
  code: DS.attr('string'),
  name: DS.attr('string'),
  country: DS.belongsTo('country', {inverse: 'offices', async: true})
});
