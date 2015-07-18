import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    this.modelFor('users.show');
  }
});
