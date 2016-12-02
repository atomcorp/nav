$('.menu').on('click', function(event) {
	event.preventDefault();
	if (!$(this).hasClass('active')) {
		$(this).addClass('active');
		$('.menu__dropdown').show().addClass('fadeInDown');
	} else {
		$(this).removeClass('active');
		$('.menu__dropdown').hide().removeClass('fadeInDown');
	}
	
});

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
		$('.dropdown3').show().addClass('slideOutLeft');
		setTimeout(function() {
			$('.dropdown3').hide().removeClass('slideInLeft slideOutLeft');
		}, 400);
		
	}
	
});

$('.bo__nav-li.clickable').on('click', function(event) {
	event.preventDefault();
	var id = $(this).data('click');
	console.log(id);
	var toScrollTo = $('.bo__heading[data-scroll="' + id + '"]').offset().top;
	$('body').animate({
		scrollTop: parseInt(toScrollTo) - 30,
		
	}, 400, function() {
		/* stuff to do after animation is complete */
	});
});