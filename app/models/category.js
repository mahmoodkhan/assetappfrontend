import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    category: DS.attr('string'),
    assets: DS.hasMany('asset'),

    isValid: Ember.computed.notEmpty('category'),
});
