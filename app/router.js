import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('landing', {path: '/'});

  this.route('users', function() {
    this.route('create');
    this.route('current');
    this.route('loading');
    this.route('show');

    this.route('auth');
  });

  this.route('sessions', function() {
    this.route('create');
  });
});

export default Router;
