$(document).ready(function () {
    
    // nav //
    
$('#navburger').click(function(){
		$(this).stop(true).toggleClass('open');
        $('.nav').stop(true).fadeToggle(1000);
        $('.nav ul').stop(true).toggleClass('up');
        $('.nav li').stop(true).toggleClass('open');
	});

    $('.bookmark').click(function() {
        var position = $($(this).attr('href')).offset().top - 120;
        
        $('#navburger').removeClass('open');
        $('.nav').fadeToggle(1000);
        $('.nav ul').removeClass('up');
        $('.nav li').removeClass('open');
        $("body, html").animate({scrollTop: position}, 2000);
    });
    
    $('.goto').click(function() {
        var goto = $($(this).attr('href')).offset().top - 120;
        
        $("body, html").animate({scrollTop: goto}, 2000);
    });
    

    // impressum //
    $('.disclamer').click(function() {
        var $target = $($(this).data("target"));
        $target.slideToggle(300, function() {
            if ($target.is(":visible")) {
                $('html,body').animate({scrollTop: $target.offset().top}, 600);
            }
        });
    });
    
});