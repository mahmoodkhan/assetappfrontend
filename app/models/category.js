import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    category: DS.attr('string'),
    assets: DS.hasMany('asset'),
    subcategories: DS.hasMany('subcategory'),

    isValidCategory: Ember.computed.notEmpty('category'),
});
