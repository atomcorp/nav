// Main.js

var $g = {};

jQuery(document).ready(function($) {

if ($('.nav--columbus').length) {

	$('.product').on('click', function(event) {

		event.preventDefault();

		var $products = $('.product');

		var $this = $(this);

		var id = $this.data('dropdown-button');

		var $dropdown = $('.dropdown');

		// if not open, open

		if (!$this.hasClass('open')) {

			// reset

			$products.removeClass('open');

			$dropdown.removeClass('animated fadeInDown');

			// activate this one

			$this.addClass('open');

			$('.dropdown[data-dropdown="' + id + '"]').removeClass('hide').addClass('animated fadeInDown');

		} else {

			$this.removeClass('open');

			$dropdown.removeClass('animated fadeInDown');

		}

	});

}
if ($('.generic').length) {
	if (window.location.hash) {
		var hash = window.location.hash;
		if (hash.substring(0, 1) == '#') { 
			hash = hash.substring(1);
		}
		hash = decodeURI(hash); 
		$('.hash-title').text(hash);
		if (hash) {
			var url = '/app/source/data.json';
			$.ajax({
				url: url,
			})
			.done(function(data) {
				$g.nav = data.navigation;
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				getProducts(hash);
			});
			
		}
	}
}

function getProducts(categoryName) {
	if (categoryName) {
		// look 
		for (var i = 0; i < $g.nav.length; i++) {
			var subCategory = $g.nav[i];
			for (var x = 0; x < subCategory['child-category'].length; x++) {
				if (subCategory['child-category'][x].title === categoryName) {
					var products = subCategory['child-category'][x].products;
					for (var y = 0; y < products.length; y++) {
						if ($('.generic__products').length) {
							$('.generic__products ul').append('<li>' + products[y].title + '</li>');
						}
					}
					break;
				}
			}
		}
	}
}

$(document).on('click', '.hash-link', function(event) {
	event.preventDefault();
	// get text
	// encode
	// go to link
	var $this = $(this);
	var newHash = $this.text();
	newHash = encodeURI(newHash);
	var href = $this.attr('href');
	href = href + '#' + newHash;
	window.location = href;
});

}); // END JQUERY