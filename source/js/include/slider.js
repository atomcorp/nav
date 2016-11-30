
if ($('body').hasClass('swipe-page')) {

	$(document).on('scroll', function(event) {
		event.preventDefault();
		swipe();

	});
}

var swipe = debounce(function() {
	var windowScroll = parseInt($(window).scrollTop());

	var windowHeight = parseInt($(window).height() / 2);

	var imageFromTop = parseInt($('.swipe').offset().top);

	var imageHeight = parseInt($('.swipe').height());

	var windowCenter = windowScroll + windowHeight;

	// Height of the window (halved) plus how far it has been scrolled down = middle of the screen
	// if that is more than imageFromTop, the window can view the swipe
	if ((windowCenter > imageFromTop) && (windowCenter < imageFromTop + imageHeight)) {
		var formula = ((windowCenter - imageFromTop) / imageHeight) * 100;
		$('.swipe__container--above').css('left', formula.toFixed(2) + '%');
		$('.swipe--above').css('left', '-' + formula.toFixed(2) + '%');
	}
}, 0);

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};