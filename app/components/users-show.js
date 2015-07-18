import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['users-show-container'],

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
    
    toggleList: function(){
      $('.user-show-entries-list').slideToggle('slow', function(){});
    },

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

/*
saveOrg: function(data){
  var self = this;
  var org = $(".select-organization-list option:selected").val();
  var adapter = this.store.adapterFor('application');
  adapter.ajax("https://api.parse.com/1/functions/saveOrg", "POST", {
    data: {
      organization: org
    }
  }).then(function(response) {
    self.transitionTo('users.auth');
  });
  */
