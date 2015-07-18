import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleTuesday: function(){
      $('.user-show-entries-list-tuesday').slideToggle('slow', function(){});
    }
  }
});
