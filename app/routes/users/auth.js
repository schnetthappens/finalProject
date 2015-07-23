import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model: function(){
    return this.get('session').get('currentUser');
  },

  afterModel: function(model){
    return model.reload();
  },

  actions: {
    authHarvest: function(){
      window.location.replace("https://api.harvestapp.com/oauth2/authorize?client_id=bzfkSnoPQGNEgsRhRJLAFA&redirect_uri=http://e34d696.ngrok.com/users/show&state=optional-csrf-token&response_type=token");
    }
  }
});
