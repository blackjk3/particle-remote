$(function() {
  $('.btn').on('touchstart click', function(e) {
    var target = $(e.currentTarget);
    $.ajax({
      url: 'http://localhost:3000/controls/' + target.data('dir'),
      success: function() {
        console.log("SDLKFJdls;kfjas;ldfk")
      },
      error: function() {
        console.log("error")
      }
    });
  });
});