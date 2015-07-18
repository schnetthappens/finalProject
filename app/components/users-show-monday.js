import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleMonday: function(){
      $('.user-show-entries-list-monday').slideToggle('slow', function(){});
    }
  }
});
