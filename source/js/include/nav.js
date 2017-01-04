$(document).on('click', '.dropdown-link', function(event) {
	event.preventDefault();
	var $this = $(this);
	var $dropdowns = $('.dropdown-container');
	var id = $this.data('dropdown');
	var $dropdownLinks = $('.dropdown-link');
	var $arrows = $('.dropdown-link .direction-arrow');
	if (!$this.hasClass('open')) {
		// reset
		$dropdownLinks.removeClass('open');
		$dropdowns.removeClass('animated fadeInLeft');
		$arrows.removeClass('active');
		// activate this one
		$this.addClass('open');
		$this.find('.direction-arrow').addClass('active');
		$('.dropdown-container[data-dropdown="' + id + '"]').removeClass('hide').addClass('animated fadeInLeft');
	} else {
		$this.removeClass('open');
		$this.find('.direction-arrow').removeClass('active');
		$dropdowns.removeClass('animated fadeInLeft');
	}
});

function populateSubcategories() {
	var $dropdownSubcats = $('.dropdown__subcategories');

	$.each($dropdownSubcats, function(index, val) {
		var $this = $(this);
		var id  = $this.closest('.dropdown-container').data('dropdown');
		dropdownProducts(id);
	});
}

populateSubcategories();

function dropdownProducts(categoryName) {
	if (categoryName) {
		// look 
		for (var i = 0; i < $g.nav.length; i++) {
			var subCategory = $g.nav[i];
			if (subCategory.machine_title === categoryName) {
				console.log(subCategory.machine_title, categoryName);
				// add stuff from here

				// start again here!!!!!!!!!!!!!!!!!!!!
			}
			for (var x = 0; x < subCategory['child-category'].length; x++) {
				if (subCategory['child-category'][x].title === categoryName) {
					var products = subCategory['child-category'][x].products;
					for (var y = 0; y < products.length; y++) {
						if ($('.generic__products').length) {
							// also add strapline
							// add link (to another generic page?)
							$('.generic__products ul').append('<li><a href="/app/product" class="hash-link">' +  + '</a></li>');
						}
					}
					break;
				}
			}
		}
	}
}