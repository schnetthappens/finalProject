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
    this.route('show', function() {
      this.route('monday');
      this.route('tuesday');
      this.route('wednesday');
      this.route('pay');
      this.route('thursday');
      this.route('friday');
    });
    this.route('auth');
  });

  this.route('sessions', function() {
    this.route('create');
  });

  this.route('payments', function() {
    this.route('show');
    this.route('loading');
  });
});

export default Router;
