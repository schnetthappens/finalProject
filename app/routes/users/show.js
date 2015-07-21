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

        monday: Ember.$.ajax({
          url: 'https://jsonp.afeld.me/?callback=?&url=https://api.harvestapp.com/daily/201/2015?access_token='+token,
          dataType: 'jsonp'
        }),

        tuesday: Ember.$.ajax({
          url: 'https://jsonp.afeld.me/?callback=?&url=https://api.harvestapp.com/daily/202/2015?access_token='+token,
          dataType: 'jsonp'
        }),

        wednesday: Ember.$.ajax({
          url: 'https://jsonp.afeld.me/?callback=?&url=https://api.harvestapp.com/daily/203/2015?access_token='+token,
          dataType: 'jsonp'
        }),

        thursday: Ember.$.ajax({
          url: 'https://jsonp.afeld.me/?callback=?&url=https://api.harvestapp.com/daily/204/2015?access_token='+token,
          dataType: 'jsonp'
        }),

        friday: Ember.$.ajax({
          url: 'https://jsonp.afeld.me/?callback=?&url=https://api.harvestapp.com/daily/205/2015?access_token='+token,
          dataType: 'jsonp'
        }),
    });

  },

  actions: {
    sendToken: function(token){
      var self = this;
      var adapter = this.store.adapterFor('application');
      adapter.ajax("https://api.parse.com/1/functions/checkout", "POST", {
        data: {
          token: token,
          amount: 100
        }
      }).then(function(response) {
        console.log(response);
      });
    }
}

});



/*

RETRIEVE entries and projects for a certain day
  /daily/#{day_of_the_year}/#{year}

  ENDPOINT to get all time entries from a user from a specific timeframe
    /people/#{user_id}/entries?from=YYYYMMDD&to=YYYYMMDD

  My USER ID
    1045359
*/
