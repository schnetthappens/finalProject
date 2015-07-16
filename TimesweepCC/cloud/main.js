
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("setUserData", function(request, response){
  var user = request.user;
  user.set(request.params);
  user.save().then(function(){
    response.success(request.params);
  });
});
