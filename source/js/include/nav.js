$('.products').on('click', function(event) {
	event.preventDefault();
	if (!$(this).hasClass('active')) {
		$(this).addClass('active');
		$('.dropdown').show().addClass('fadeInDown');
	} else {
		$(this).removeClass('active');
		$('.dropdown').hide().removeClass('fadeInDown');
	}
	
});