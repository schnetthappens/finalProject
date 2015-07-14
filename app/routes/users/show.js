import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(){
    var token = window.location.hash.match(/access_token=([^&]+)/)[1];
      return Ember.RSVP.hash({
        data: Ember.$.ajax({
          url: 'https://jsonp.afeld.me/?callback=?&url=https://api.harvestapp.com/account/who_am_i?access_token='+token,
          dataType: 'jsonp'
        }),

        entries: Ember.$.ajax({
          url: 'https://jsonp.afeld.me/?callback=?&url=https://api.harvestapp.com/daily/194/2015?access_token='+token,
          dataType: 'jsonp'
        })
      });
  },

  actions: {
    invalidateSession: function() {
      this.get('session').invalidate();
    }
  }
});
