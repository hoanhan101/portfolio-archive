(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Closes responsive menu when a link is clicked
    $('.navbar-collapse>ul>li>a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

    $('[data-toggle="tooltip"]').tooltip();

    $('#story-closed').click(function(){
      $('#story-opened').toggle();
    });

    $('#different-closed').click(function(){
      $('#different-opened').toggle();
    });

    $('#wrong-closed').click(function(){
      $('#wrong-opened').toggle();
    });

    $('#change-closed').click(function(){
      $('#change-opened').toggle();
    });

    $('#why-closed').click(function(){
      $('#why-opened').toggle();
    });

    $('#free-time-closed').click(function(){
      $('#free-time-opened').toggle();
    });

    $('#speedcubing-closed').click(function(){
      $('#speedcubing-opened').toggle();
    });

    $('#powerlifting-closed').click(function(){
      $('#powerlifting-opened').toggle();
    });

    $('#lossless-closed').click(function(){
      $('#lossless-opened').toggle();
    });

    $('#arthouse-closed').click(function(){
      $('#arthouse-opened').toggle();
    });


})(jQuery); // End of use strict


// var $playOnHover = $('.playOnHover');
// $playOnHover.on('mouseenter focus', function() {
//   $playOnHover.get(0).play();
// });
//
// $playOnHover.on('mouseout blur', function() {
//   $playOnHover.get(0).pause();
// });
