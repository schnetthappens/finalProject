import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(){
    var adapter = this.store.adapterFor('application');
    return adapter.ajax("https://api.parse.com/1/functions/getCharges", "POST", {
      data: {}
    }).then(function(response) {
      return(response);
    });
  }
});

/*
var adapter = this.store.adapterFor('application');
return Ember.$.ajax({
  url: "https://api.parse.com/1/functions/getCharges",
  type: 'POST'
}).then(function(response){
  console.log(response);
});
*/
