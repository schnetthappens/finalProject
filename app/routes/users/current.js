import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model: function() {
    return this.get('session.currentUser');
  },

  actions: {
    saveOrg: function(org){
      console.log(org);
      var self = this;
      var adapter = this.store.adapterFor('application');
      adapter.ajax("https://api.parse.com/1/functions/saveOrg", "POST", {
        data: {
          organization: org
        }
      }).then(function(response) {
        self.transitionTo('users.auth');
      });
    }
  }
});

// this.send('saveOrg', {organization: org});
