var global = {};

global.canMove = true;

$( document ).on('click', '.expandingImage', function(event) {
	event.preventDefault();
	var $this = $(this);
	expandableImage($this);
	
	
});

function expandableImage($clicked) {

	if ($clicked.hasClass('selected')) {
		$('.expandingImage').removeClass('expandImage')
		$clicked.addClass('contractimages');
		setTimeout(function() {
			$('.expandingImage').removeClass('contractimages selected');
		}, 200);
	} else {
		// if clicked has expanded image class
		if ($clicked.hasClass('expandImage')) {

			$clicked.removeClass('expandImage');

		// if any others have the class already (shouldn't happen)
		// shrink those, expand this one
		} else if ($clicked.siblings().hasClass('expandImage')) {
			$('.expandImage').addClass('contractimages');

			$clicked.siblings().removeClass('expandImage');
			$clicked.addClass('expandImage');

		// expand this image
		} else {
			$clicked.addClass('expandImage selected');
			makeSlideshow($clicked);
		}
	}

}

function makeSlideshow($clicked) {

	// get all the images
	// make full size (after )
	// any lower down the index are placed after
	// any up are put before
	var $images = $('.expandingImage');
	var selectedImageIndex = parseFloat($clicked.index());
	var difference, position, selected;

	// add slideshow class on each image

	// 2000, as that's the transition time on .expandImage
	setTimeout(function() {

		$images.addClass('expandedImages__slide');
		for (var i = 0; i < $images.length; i++) {
			// where is this image in relation to the clicked one
			difference = i - selectedImageIndex;
			if (difference > 0) {

				// This is before the clicked image
				// It's a positive number
				position = difference * 100;
			} else if (difference < 0) {
				
				// This is after the clicked image
				// It's a negative number
				position = difference * 100;
			} else if  (difference === 0) {

				// The clicked image
				console.log('Equal: ',difference);
				position = 0;
			}
			$images.eq(i).css('left', position + '%');
		}


		checkControls();

	}, 200);
	
}

function moveSlide($this) {
		console.log('Clicked');
		event.preventDefault();
		var $images = $('.expandingImage');
		var movement = 0;
		global.canMove = false;
		// minus 100% off each image
		if ($this.hasClass('left')) {
			movement = 100;

		// add 100% on every image
		} else if ($this.hasClass('right')) {
			movement = -100;
		}

		$images.removeClass('selected');

		$.each($images, function(index, val) {
			var $that = $(this);
			var currentValue = 0;

			// get current left attr value
			// !!! IMPORTANT !!!
			// JS can't calc %, have to hide and show the container, see:
			//http://stackoverflow.com/questions/744319/get-css-rules-percentage-value-in-jquery
			$that.parent().hide();
			currentValue = parseFloat($that.css('left'));
			$that.parent().show();
			// var result = currentValue + movement;
			var result = Math.floor((currentValue + movement) / 100) * 100;

			// Cheap way of adding a 'in focus' class
			if (result === 0) {
				$that.addClass('selected');
			}

			$that.animate({'left': result + '%'}, 400);
			console.log();


			// Move the image
			// $that.css('left', result + '%');
		});

		checkControls();
		global.canMove = true;
}

function checkControls() {

	if ($('.selected').index() === 5) {
		$('.controls .left').show();
		$('.controls .right').hide();
	} else if ($('.selected').index() === 0 ) {
		$('.controls .right').show();
		$('.controls .left').hide();
	} else {
		$('.controls .left').show();
		$('.controls .right').show();

	}
}

$('.controls .right').hide();

$('.controls .left').hide();

// Keep this out of other click event so it doesn't add multiple event listeners
$( document ).on('click', '.controls .left, .controls .right', function(event) {

	if (global.canMove = true) {
		var $this = $(this);
		moveSlide($this);
	} else {

	}
});


$( document ).on('click', '.reset, .expandedImages__slide', function(event) {
	event.preventDefault();
	var $images = $('.expandedImages__slide');
	$.each($images, function(index, val) {
		var $this = $(this);

		$this.css('left', '').removeClass('expandedImages__slide');
	}); 
});