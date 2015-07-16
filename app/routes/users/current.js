import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model: function() {
    return this.get('session.currentUser');
  },

  actions: {
    saveOrg: function(){
      var o = $(".select-organization-list option:selected").val();
      console.log(o);
    }
  }
});


/*
// this.send('setUserData', {harvestToken: 'actualtoken'});
var adapter = this.store.adapterFor('application');
adapter.ajax("https://api.parse.com/1/functions/setUserData", "POST", {
  data: data
}).then(function(response) {
  // do something once it's resolved
  console.log(response);
});
*/
