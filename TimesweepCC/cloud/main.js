/* globals Parse */
var Stripe = require('stripe');
Stripe.initialize('sk_test_KkScrikChRGn3nQkINxdKFcJ');

// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("saveOrg", function(request, response){
  var user = request.user;
  user.set(request.params);
  user.save().then(function(){
    response.success(request.params);
  });
});

Parse.Cloud.define("checkout", function(request, response){
  Stripe.Charges.create({
    amount: 100,
    currency: 'usd',
    card: request.params.token
  },{
    success: function(){
      response.success('charge went through');
    },
    error: function(err){
      response.error(err);
    }
  });
});

/*
# Create the charge on Stripe's servers
  charge = Stripe::Charge.create(
    :amount => 1000, # amount in cents, again
    :currency => "usd",
    :source => token,
    :description => "Example charge"
  )
*/
