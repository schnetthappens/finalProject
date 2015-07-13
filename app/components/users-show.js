import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['connect-payment-container'],

  didInsertElement: function(){
    this.handler = StripeCheckout.configure({
      key: "pk_test_qtYTRfTiY5i8Ja2JapoUGGlN",
      image: "https://stripe.com/img/documentation/checkout/marketplace.png",
      token: this.handleToken
    });
  },

  handleToken: function(token) {
    console.log('handleToken', token);
  },

  actions: {
    invalidateSession: function(){
      this.sendAction('action', this.get('model'));
    },

    checkout: function() {
      this.handler.open({
        name: "Cool Company",
        description: "Forgetting to enter time",
        amount: "100"
      });
    }
  }
});
