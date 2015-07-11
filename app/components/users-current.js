import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['current-user-container'],

  actions: {
    invalidateSession: function(){
      this.sendAction('action', this.get('model'));
    }
  }
});
