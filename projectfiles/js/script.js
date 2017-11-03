$(document).ready(function() {
    
    
    /* for sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
       if (direction == "down") {
           $('nav').addClass('sticky');
       } else {
           $('nav').removeClass('sticky');
       }
       
    }, {
      offset: '95px'
    })
    
    
    /* Scroll to buttons */
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });    
    
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    

    /* Navigation Scroll */
    
    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html, body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
            }   
        }
    });
    
    
    
});

