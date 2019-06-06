$(document).ready(function() {

    $(window).scroll(function() {
        var value = $(this).scrollTop();
        var resolution= $(window).width();
        console.log(resolution);

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


});


