import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('landing');

  this.route('users', function() {
    this.route('create');
  });

  this.route('sessions', function() {
    this.route('create');
  });

  this.route('onboarding', function() {
    this.route('pay');
  });
});

export default Router;
