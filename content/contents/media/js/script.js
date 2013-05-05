var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-24285947-5']);
_gaq.push(['_trackPageview']);

(function () {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();

$(document).ready(function () {
  // Hide chrome on iOS
  setTimeout(function () {
    window.scrollTo(0, 1);
  }, 0);

  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'()*+,-./",
    counter = 0,
    isTouch = 'ontouchstart' in window,
    startEvent = isTouch ? 'touchstart' : 'mouseover';

  setInterval(function changeHeaderIcon() {
    if (counter >= chars.length) counter = 0;
    $('#icon-changer').text(chars.charAt(counter));
    counter++;
  }, 400);

  $('#preview').on(startEvent, function(e) {
    var el = $(e.target).parent('.icon');
    $('.enlarge').removeClass('enlarge');
    if (!el.is('.icon')) return;
    el.addClass('enlarge');
  });

  $('#change-style').on('click', function(e) {
    $('#preview').toggleClass('black');
    if (window.location.pathname != '/') window.location.href = '/';
  })

  if (isTouch) {
    $('#preview aside').text('Tap on an icon to enlarge');
  }
  $('#download').click(function(){
    _gaq.push(['_trackEvent', 'Clicks', 'Download ZIP']);
  })
  $('#donate-button').click(function(){
    _gaq.push(['_trackEvent', 'Clicks', 'Donate']);
  })
});