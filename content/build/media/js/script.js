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
  var initialText = $('#result').text(),
      counter = 0,
      isTouch = 'ontouchstart' in window,
      startEvent = isTouch ? 'touchstart' : 'mouseover';

  // Hide chrome on iOS
  setTimeout(function () {
    window.scrollTo(0, 1);
  }, 0);

  $('#search').on('keyup focus blur', function(e){
    var query = $(this).val().trim().replace(/\-/gi, ' ').toLowerCase(),
        matches = [],
        result = initialText,
        qnt = 4;

    $('.match').removeClass('match');

    if (query) {
      // Determine matches
      $('.icon').each(function(i, el) {
        $el = $(el);
        try {
          if ($el.data('match').match(query)) {
            $el.addClass('match');
            matches.push($el.data('name'));
          }
        } catch (e) {
          // Suppress RegExp errors
        }
      })

      // Interpolate result message
      if (matches.length > qnt) {
        var rem = matches.length - qnt,
            plural = rem > 1;

        result = matches.slice(0, qnt).join(', ') + ' and ' +
                 rem + ' other' + (plural ? 's' : '');
      } else if (matches.length > 0) {
        result = matches.join(', ');
      } else {
        result = 'No results found for "' + query + '". Try "media", "weather" or "arrow".';
      }
    }

    $('#preview').toggleClass('focus', query);
    $('#result').html(result)
  })

  $('#content').on(startEvent, function(e) {
    var el = $(e.target).parent('.icon');
    $('.enlarge').removeClass('enlarge');
    if (!el.is('.icon')) {
      $('#result').html(initialText);
      return;
    } else {
      el.addClass('enlarge');
      $('#result').html(
        el.data('name') + '<small>' + el.data('code') + '</small>'
      ).prepend(el.html());
    }
  });

  // $('#change-style').on('click', function(e) {
  //   $('#preview').toggleClass('black');
  //   if (window.location.pathname != '/') window.location.href = '/';
  // })

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