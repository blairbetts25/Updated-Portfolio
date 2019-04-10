/*----------- Contact -----------*/

$('.contact-form').on('submit', function(event) {
  var form = $(this);
  var submitBtn = form.find('#contact-submit');
  var feedbackErr = form.find('.contact-error');
  event.preventDefault();
  // Waiting for the response from the server
  submitBtn.html('Wait...').addClass('wait').prop('disabled', true);
  setTimeout(function() {
    // Posts the Form's data to the server using Ajax
    $.ajax({
        url: form.attr('action'),
        type: 'POST',
        data: form.serialize(),
      })
      // Getting a response from the server
      .done(function(response) {
        // If the PHP file succeed sending the message
        if (response == 'success') {
          // Feedback to the user
          submitBtn.removeClass('wait').html('Success').addClass('success');
          setTimeout(function() {
            submitBtn.html('Submit').removeClass('success').prop('disabled', false);
          }, 6000);
          // Clears the Form
          form[0].reset();
          // If something is wrong
        } else {
          // Feedback to the user
          submitBtn.removeClass('wait').html('Error').addClass('error');
          feedbackErr.fadeIn(200);
          setTimeout(function() {
            submitBtn.html('Submit').removeClass('error').prop('disabled', false);
            feedbackErr.fadeOut(200);
          }, 6000);
        }
      });
  }, 1000);
});
