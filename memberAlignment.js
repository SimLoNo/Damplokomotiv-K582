$(window).on('load resize', function() {
    var maxHeight = 0;
    $('.mainSection .col-md-height').each(function() {
      var height = $(this).height();
      if (height > maxHeight) {
        maxHeight = height;
      }
    });
    $('.mainSection .col-md-height').height(maxHeight);
  });