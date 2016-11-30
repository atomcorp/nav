//
// Jumps on IE
//



if ($('body').hasClass('parallax')) {
	var heroTop = $('.hero__image').css('top');

	$(document).on('scroll', function(event) {
		event.preventDefault();
		$('.hero__image').css('top', $(window).scrollTop());
		console.log($(window).scrollTop());
	});
}