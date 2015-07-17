import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model: function(){
    // console.log(this.get('session').get('currentUser'));
    // return this.store.find('parseUser', this.get('session').get('currentUser').id);
    console.log('model:', this.get('session').get('currentUser'));
    return this.get('session').get('currentUser');
  },


  actions: {
    authHarvest: function(){
      console.log('test');
    }
  }
});
