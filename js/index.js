$(document).ready(function() {

//Adjust Header Height

	$('.home').height($(window).height());



// Navbar
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 50) {
			$(".change").css({
				"background": "white",
				"boxShadow": "0px -2px 3px"
			});
			$(".nav-link").css("color", "black");
			$(".btn-nav").css({
				"background": "#4caf50",
				"color": "white"
			});
			$(".logo").css("display", "block");
		} else {
			$(".change").css({
				"background": "transparent",
				"boxShadow": "0 0 0"
			});
			$(".nav-link").css("color", "white");
			$(".btn-nav").css({
				"background": "white",
				"color": "black"
			});
			$(".logo").css("display", "none");

		}
	});


	$(".nav-link").click(function(e) {
		e.preventDefault();
		$("html, body").animate({
			scrollTop: $("#" + $(this).data("scroll")).offset().top + 1
		}, 500);
	});
});

$(document).ready(function() {
	$(".owl-carousel").owlCarousel();
});

//Counter Section
$('span').each(function() {
	$(this).prop('Counter', 0).animate({
		Counter: $(this).text()
	}, {
			duration: 6000,
			easing: 'swing',
			step: function() {
				$(this).text(Math.ceil(this.Counter));
			}
		});
});

//Scroll To Top Section
$(window).scroll(function() {
	//scroll to top button
	var scrollToTop = $('.scroll-to-top');
	if ($(window).scrollTop() >= 1000) {
		if (scrollToTop.is(':hidden')) {
			scrollToTop.fadeIn(400);
		}

	} else {
		scrollToTop.fadeOut(400);
	}
});

// click on scroll to top to go up

$('.scroll-to-top').click(function(e) {
	e.preventDefault();
	$("html, body").animate({
		scrollTop: 0
	}, 500);


});