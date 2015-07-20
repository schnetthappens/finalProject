import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['users-auth-container'],

  actions: {
    authHarvest: function(){
      this.sendAction();
    }
  }

});
