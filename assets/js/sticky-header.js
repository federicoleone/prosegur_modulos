$(document).ready(function() {

    $(window).scroll(function() {
        var value = $(this).scrollTop();
        var resolution= $(window).width();

        if(resolution > 992){
	        if ( value > 400){ 
	            $('.sticky-header-fixed').fadeIn();
	        } else {
	            $('.sticky-header-fixed').fadeOut('fast');
	        }
        }

    });

    // Sticky Footer
	$('input[type=text], input[type=email]').focus(function() {
	   $('.sticky-footer').addClass('keyboard_hidden');
	   $('.cx-side-button-group').hide();
	});

	$('input[type=text], input[type=email], input[type=checkbox]').focusout(function() {
	   $('.sticky-footer').removeClass('keyboard_hidden');
   	   $('.cx-side-button-group').show();
	});

/*
	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.header-prosegur').outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);

	function hasScrolled() {
	    var st = $(this).scrollTop();
	    
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $('.header-prosegur').addClass('nav-up');
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('.header-prosegur').removeClass('nav-up');
	        }
	    }
	    
	    lastScrollTop = st;
	}
*/

});


