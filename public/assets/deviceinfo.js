(function() {
  function updateSize() {
    $('#jquery-window').text($(window).width() + 'x' + $(window).height());
    $('#jquery-document').text($(document).width() + 'x' + $(document).height());
    $('#inner').text(window.innerWidth + 'x' + window.innerHeight);
    $('#screen').text(screen.width + 'x' + screen.height);
  }

  $(window).on('resize', function() { updateSize(); });
  $(document).on('ready',function() { updateSize(); });

}).call(this);
