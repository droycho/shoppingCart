import DS from 'ember-data';
// import Ember from 'ember-data/models'; << may not need this line

export default DS.Model.extend({
  // shoppingCart: Ember.inject.service(), << may not need this line

  title: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  cost: DS.attr()
});
