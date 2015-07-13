import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(){
    var token = window.location.hash.match(/access_token=([^&]+)/)[1];
      return Ember.$.ajax({
        url: 'https://jsonp.afeld.me/?callback=?&url=https://api.harvestapp.com/account/who_am_i?access_token='+token,
        dataType: 'jsonp'
      }).then(function(response) {
        console.log(response);
        return response;
      }, function(xhr, status, error) {
        console.log(error);
      });
    },

  actions: {
    invalidateSession: function() {
      this.get('session').invalidate();
    }
  }
});
