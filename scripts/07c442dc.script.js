/**
* Created on June 20, 2012
* @author: moshidelgo.
*/

$(document).ready(function(){

  if (Modernizr.video) {
    $("#no_html").hide();
  } else {
    $("#no_html").show();
  }

  var master = document.getElementById("master");
  var signinWin;

  FB.init({
        appId      : '287568434655109', // App ID
        status     : true, // check login status
        cookie     : true, // enable cookies to allow the server to access the session
        xfbml      : true,  // parse XFBML
        oauth    : true
  });
  FB.getLoginStatus(function(response){
    onStatus(response); // once on page load
    FB.Event.subscribe('auth.statusChange', onStatus.onStatus); // every status change
  });

  $("#playTrailer").bind('click', function(){
    $("#screen").fadeIn();
    master.play();
    return false;
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
<<<<<<< HEAD

=======
        
>>>>>>> 1e1a2ad15ebfd88db10fbfeb51330306084334f9
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

function master_ended(){
  $("#screen").fadeOut();
}