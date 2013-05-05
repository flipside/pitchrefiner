(function($, win) {
  var doc = window.document;

  $(doc).ready(function () {
    var ref = new Firebase('https://pitchrefiner.firebaseio.com');

    var authClient = new FirebaseAuthClient(ref, function(error, user) {
      if (error) {
        // an error occurred while attempting login
        console.log(error);
      } else if (user) {
        // user authenticated with Firebase
        console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
        $.mobile.changePage('/create_or_rate');
      } else {
        // user is logged out
      }
    });

    $('#facebook_login').click(function (evt) {
      console.log('facebook login button clicked');
      authClient.login('facebook');
    });
  });
})(jQuery, window);
