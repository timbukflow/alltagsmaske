$(document).ready(function () {
    
    setTimeout(function(){$('#loader').fadeOut(800)},800);
    
    // nav by scroll small //
    
    var mainHeader = $('.cd-auto-hide-header'),
		belowNavHeroContent = $('.sub-nav-hero'),
		headerHeight = mainHeader.height();

	var scrolling = false,
		previousTop = 0,
		currentTop = 0,
		scrollDelta = 10,
		scrollOffset = 150;

	mainHeader.on('click', '.nav-trigger', function(event){
		event.preventDefault();
		mainHeader.toggleClass('nav-open');
	});

	$(window).on('scroll', function(){
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame)
				? setTimeout(autoHideHeader, 250)
				: requestAnimationFrame(autoHideHeader);
		}
	});

	$(window).on('resize', function(){
		headerHeight = mainHeader.height();
	});

	function autoHideHeader() {
		var currentTop = $(window).scrollTop();

		( belowNavHeroContent.length > 0 ) 
			? checkStickyNavigation(currentTop)
			: checkSimpleNavigation(currentTop);

	   	previousTop = currentTop;
		scrolling = false;
	}

	function checkSimpleNavigation(currentTop) {
	    if (previousTop - currentTop > scrollDelta) {
	    	mainHeader.removeClass('is-hidden');
	    } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
	    	mainHeader.addClass('is-hidden');
	    }
	}
    
    // impressum //

    $('.impressum').click(function() {
        var totoggle = $(this).attr("data-toggle");
        $(totoggle).slideToggle(500);
        $(totoggle).next().hide();
        
        if ($(totoggle).is(":visible")) {
            $('html,body').animate({scrollTop:$(totoggle).offset().top}, 1000);
        }     
    });
    
});