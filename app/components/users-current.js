import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['current-user-container'],

  actions: {
    saveOrg: function() {
      this.sendAction('action');
    }
  }
});
