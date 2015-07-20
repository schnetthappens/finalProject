import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['user-show-pay-container'],

  //Creates the Checkout form when the element is inserted into the DOM
  didInsertElement: function(){
    this.handler = StripeCheckout.configure({
      key: "pk_test_qtYTRfTiY5i8Ja2JapoUGGlN",
      image: "assets/images/timesweep_logo.png",
      token: this.handleToken
    });
  },

  //Sends the token to Parse to create the charge
  handleToken: function(token) {
    console.log('handleToken', token);
  },

  actions: {

    //Opens the Checkout form when button is clicked
    checkout: function() {
      this.handler.open({
        name: "Timesweep.io",
        description: "Just keeping you honest!",
        amount: "100",
        panelLabel: 'Pay'
      });
    }
  }
});
