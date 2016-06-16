import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  isImageShowing: false,

  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
    removeFromCart(item) {
      this.get('shoppingCart').remove(item);
    }
  }
});
