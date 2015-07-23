import Ember from 'ember';

export function formatDate(params) {
  var correctedTime = params[0] * 1000;
  return moment(correctedTime).format('MMMM Do YYYY, h:mm:ss a');
}

export default Ember.HTMLBars.makeBoundHelper(formatDate);
