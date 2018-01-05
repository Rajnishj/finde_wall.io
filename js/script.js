$(document).ready(function(){
	var navOffSet = $("nav").offset().top;

		$(window).scroll(function(){

		var scrollPos = $(window).scrollTop();
        
        if (scrollPos >= navOffSet) {

        	$("nav").addClass("fixed");
        } else {
        	$("nav").removeClass("fixed");
        }
	});

	
});