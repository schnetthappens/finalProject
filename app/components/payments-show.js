import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['payment-show-container'],

  didInsertElement: function(){
    $(document).ready(function(){
      $('.modal-trigger').leanModal();
    });
  }
});
