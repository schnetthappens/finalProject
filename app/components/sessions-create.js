import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Component.extend(LoginControllerMixin, UnauthenticatedRouteMixin, {
  tagName: 'div',
  classNames: ['login-container'],
  authenticator: 'authenticator:parse-username'
});
