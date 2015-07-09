import DS from 'ember-data';
import ParseUser from 'ember-parse-adapter/models/parse-user';

export function initialize() {
  ParseUser.reopen({
    name: DS.attr('string'),
    company: DS.attr('string')
  });
}

export default {
  name: 'parse-user',
  initialize: initialize
};
