import DS from 'ember-data';
// import Ember from 'ember-data/models';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  shoppingCart: Ember.inject.service(),

  title: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  cost: DS.attr()
});
