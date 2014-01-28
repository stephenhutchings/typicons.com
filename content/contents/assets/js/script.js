(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-24285947-5', 'typicons.com');
ga('send', 'pageview');

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

  if (isTouch) {
    $('#preview aside').html('Tap on an icon to enlarge');
  }
  $('#download').click(function(){
    ga('send', 'event', 'Clicks', 'Download ZIP');
  })
  $('#donate-button').click(function(){
    ga('send', 'event', 'Clicks', 'Donate');
  })
});
