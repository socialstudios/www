/**
* Created on June 20, 2012
* @author: moshidelgo.
*/

$(document).ready(function(){
  code = GetURLParameter("code");
  if (code == "seeall"){
    $("#middle").show();
  }
  change_view("about");
  handle_browser_support_html5();
  register_tabs_events();
  FB.init({
        appId      : '333928046667696', // App ID
        status     : true, // check login status
        cookie     : true, // enable cookies to allow the server to access the session
        xfbml      : true,  // parse XFBML
        oauth    : true
  });
  $window = $(window);
  $('[data-type]').each(function() {
    $(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
    $(this).data('Xposition', $(this).attr('data-Xposition'));
    $(this).data('speed', $(this).attr('data-speed'));
  });

  $('section[data-type="background"]').each(function(){

    var $self = $(this),
      offsetCoords = $self.offset(),
      topOffset = offsetCoords.top;

      $(window).scroll(function() {

      // If this section is in view
      if ( ($window.scrollTop() + $window.height()) > (topOffset) &&
         ( (topOffset + $self.height()) > $window.scrollTop() ) ) {

        // Scroll the background at var speed
        // the yPos is a negative value because we're scrolling it UP!
        var yPos = -($window.scrollTop() / $self.data('speed'));
        
        // If this element has a Y offset then add it on
        if ($self.data('offsetY')) {
          yPos += $self.data('offsetY');
        }

        // Put together our final background position
        var coords = '50% '+ yPos + 'px';

        // Move the background
        $self.css({ backgroundPosition: coords });

        // Check for other sprites in this section
        $('[data-type="sprite"]', $self).each(function() {

          // Cache the sprite
          var $sprite = $(this);

          // Use the same calculation to work out how far to scroll the sprite
          var yPos = -($window.scrollTop() / $sprite.data('speed'));
          var coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';

          $sprite.css({ backgroundPosition: coords });

        }); // sprites

        // Check for any Videos that need scrolling
        $('[data-type="video"]', $self).each(function() {

          // Cache the video
          var $video = $(this);

          // There's some repetition going on here, so
          // feel free to tidy this section up.
          var yPos = -($window.scrollTop() / $video.data('speed'));
          var coords = (yPos + $video.data('offsetY')) + 'px';

          $video.css({ top: coords });
        });
      };
    });
  });
});

function GetURLParameter(sParam){
  /*
    Retrieve parameter from url.
   */
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}

function handle_browser_support_html5(){
    if (Modernizr.video) {
        $("#no_html").hide();
    } else {
        $("#no_html").show();
    }
}

function register_tabs_events(){
    $(".tab-btn").mouseover(function(){
        $(this).addClass("hover");
    }).mouseout(function(){
        $(this).removeClass("hover");
    });
    $(".tab-btn").click(function(){
        $(this).removeClass("hover");
        $(".tab-btn").each(function(){$(this).removeClass("selected");})
        $(this).addClass("selected");
    });
}

function change_view(view){
    $("#main_content").children().each(function(idx, val){$(val).hide()});
    elem = document.getElementById(view);
    $(elem).show();
}

