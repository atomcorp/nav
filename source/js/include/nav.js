$('.product-btn').on('click', function(event) {
	event.preventDefault();
	if (!$(this).hasClass('active')) {
		$(this).addClass('active');
		$('.dropdown').show().addClass('fadeInDown');
	} else {
		$(this).removeClass('active');
		$('.dropdown').hide().removeClass('fadeInDown');
	}
	
});

$('.product-btn2').on('click', function(event) {
	event.preventDefault();
	var id = $(this).data('drop');
	var $dropdown = $('[data-down="' + id + '"]');
	console.log(id, $dropdown);
	if (!$(this).hasClass('active')) {
		$(this).addClass('active');
		$dropdown.show().addClass('fadeInDown');
	} else {
		$(this).removeClass('active');
		$dropdown.hide().removeClass('fadeInDown');
	}
});

$('.bang-btn').on('click', function(event) {
	event.preventDefault();
	if (!$(this).hasClass('active')) {
		$(this).addClass('active');
		$('.dropdown3').show().addClass('slideInLeft');
	} else {
		$(this).removeClass('active');
		$('.dropdown3').hide().removeClass('slideInLeft');
	}
	
});