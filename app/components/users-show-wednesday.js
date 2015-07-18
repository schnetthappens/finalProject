import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleWednesday: function(){
      $('.user-show-entries-list-wednesday').slideToggle('slow', function(){});
    }
  }
});
