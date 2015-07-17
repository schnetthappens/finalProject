import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    authHarvest: function(){
      this.sendAction();
    }
  }

});
