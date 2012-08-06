(function() {
  function updateSize() {
    $('#jquery-window').text($(window).width() + 'x' + $(window).height());
    $('#jquery-document').text($(document).width() + 'x' + $(document).height());
    $('#inner').text(window.innerWidth + 'x' + window.innerHeight);
    $('#screen').text(screen.width + 'x' + screen.height);
    $('#client').text(document.documentElement.clientWidth + 'x' + document.documentElement.clientHeight)
    $('#offset').text(document.documentElement.offsetWidth + 'x' + document.documentElement.offsetHeight)
    $('#page').text(window.pageXOffset + 'x' + window.pageYOffset)
  }

  $(window).on('resize', function() { updateSize(); });
  $(document).on('ready',function() { updateSize(); });

}).call(this);
