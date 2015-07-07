import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['landing-page-container'],

  actions: {
    tryDemo: function(){
      console.log('demo');
    }
  }
});
