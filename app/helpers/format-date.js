import Ember from 'ember';

export function formatDate() {
  var time = moment.unix();
  return moment(time).format('MMMM Do YYYY, h:mm:ss a');
}

export default Ember.HTMLBars.makeBoundHelper(formatDate);
