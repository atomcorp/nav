// Main.js

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

}); // END JQUERY