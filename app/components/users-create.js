import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['create-user-container'],

  actions: {
    createUser: function() {
      this.sendAction('action', this.get('model'));
    }
  }
});
