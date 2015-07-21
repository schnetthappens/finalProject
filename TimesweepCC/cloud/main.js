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
    amount: 300,
    currency: 'usd',
    card: request.params.token
  },{
    success: function(){
      response.success('Purchase made!');
    },
    error: function(err){
      response.error(err);
    }
  });
});

Parse.Cloud.define("getCharges", function(request, response){
  var charges = Stripe.Charges.list({
    customer: 'cus_6dJj6qJXsgpRgu',
    limit: 12
  },{
    success: function(charges){
      response.success(charges);
    },
    error: function(err){
      response.error(err);
    }
  });
});
