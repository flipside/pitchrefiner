(function($, win) {
  var doc = window.document;

  $(doc).ready(function () {
    var ref = new Firebase('https://pitchrefiner.firebaseio.com'),
    userInfo;

    var authClient = new FirebaseAuthClient(ref, function(error, user) {
      if (error) {
        // an error occurred while attempting login
        console.log(error);
      } else if (user) {
        // user authenticated with Firebase
        console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
        userInfo = user;
        $.mobile.changePage('/create_or_rate');
      } else {
        // user is logged out
      }
    });

    $('#facebook_login').click(function (evt) {
      console.log('facebook login button clicked');
      authClient.login('facebook');
    });

    $('#createPitchBtn').click(function (evt) {
      var company     = $('#company_name').val(),
          offering    = $('#offering').val(),
          audience    = $('#audience').val(),
          problem     = $('#problem').val(),
          sauce       = $('#sauce').val(),
          dialog      = $('#dialog');
      
      if (!company || !offering || !audience || !problem || !sauce) {
        // console.log('company = ' + company);
        // console.log('offering = ' + offering);
        // console.log('audience = ' + audience);
        // console.log('problem = ' + problem);
        // console.log('not all fields are filled');
        // console.log('header = ' + dialog.find('#dailogHeader').text());
        dialog.find('#nextBtn').css('visibility', 'hidden');
        dialog.find('#addAnotherBtn').css('visibility', 'hidden');
        dialog.find('#dialogHeader').text('Something is missing!');
        dialog.find('#dialogContent').text('Make sure all required fields are filled.');
      } else {
        // console.log('dialog header = ' + dialog.find('#dialogHeader').text());
        // dialog.find('#nextBtn').show();
        // dialog.find('#addAnotherBtn').show();
        dialog.find('#nextBtn').css('visibility', 'visible');
        dialog.find('#addAnotherBtn').css('visibility', 'visible');
        dialog.find('#dialogHeader').text('What do you want to do?');
        dialog.find('#dialogContent').text('My company, ' +
        company + ' is developing ' + offering + ' to help ' +
        audience + ' ' + problem + ' ' + sauce + '.');
        console.log('success');
      }
      $.mobile.changePage('#dialog', {role: 'dialog'});
    });
  });
})(jQuery, window);
