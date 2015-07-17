import Ember from 'ember';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {  
  actions: {
    createUser: function(user){
        user.set('email', user.get('username'));

        user.save().then(function(){
          this.get('session').authenticate('authenticator:parse-token', {
            sessionToken: user.get('sessionToken')
          });
        }.bind(this));
      }
    }
});
