import Ember from 'ember';

export function formatCurrency(params) {
  var payment = numeral(3).format('0,0');
  return payment;
}

export default Ember.HTMLBars.makeBoundHelper(formatCurrency);
