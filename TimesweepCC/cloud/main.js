
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

//Parse.Cloud.define("checkout", function(request, response){
  //receive token from handleToken function
  //set card parameter equal to the token
  //Stripe.Charges.create to charge the customer who's associated with the token
//})

/*
# Create the charge on Stripe's servers
  charge = Stripe::Charge.create(
    :amount => 1000, # amount in cents, again
    :currency => "usd",
    :source => token,
    :description => "Example charge"
  )
*/
