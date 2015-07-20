import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['users-show-container'],

actions: {
  checkout: function(token) {
    this.sendAction('checkout', token);
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
