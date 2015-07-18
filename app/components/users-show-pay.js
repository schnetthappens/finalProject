import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['user-show-pay-container'],

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
    checkout: function() {
      this.handler.open({
        name: "Timesweep.io",
        description: "Just keeping you honest!",
        amount: "100",
        panelLabel: 'Save Card'
      });
    }
  }
});
