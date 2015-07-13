import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(){
    var token = window.location.hash.match(/access_token=([^&]+)/)[1];
    console.log(token);
      return Ember.$.ajax({
        url: 'https://api.harvestapp.com/account/schnetthappens?access_token='+token,
        type: 'GET',
        contentType: 'application/json',
        dataType: 'json'
      }).then(function(results) {
          console.log(results);
      });
  },

  actions: {
    invalidateSession: function() {
      this.get('session').invalidate();
    }
  }
});
