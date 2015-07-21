import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  model: function(){
    return this.get('session.currentUser');
    //return this.modelFor('users.current') ** when working **
  }
});
