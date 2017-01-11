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
		$dropdowns.removeClass('animated fadeInDown');
		$arrows.removeClass('active');
		// activate this one
		$this.addClass('open');
		$this.find('.direction-arrow').addClass('active');
		$('.dropdown-container[data-dropdown="' + id + '"]').removeClass('hide').addClass('animated fadeInDown');
	} else {
		$this.removeClass('open');
		$this.find('.direction-arrow').removeClass('active');
		$dropdowns.removeClass('animated fadeInDown');
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

			// eg hi-fi == hi-fi
			if (subCategory.machine_title === categoryName) {
				var $domSubcategory = $('.dropdown-container[data-dropdown="' + subCategory.machine_title + '"]').find('.dropdown__subcategories ul');
				for (var x = 0; x < subCategory['child-category'].length; x++) {
					// print all subcategories if not range
					if (subCategory['child-category'][x].type != 'range') {
						
						$domSubcategory.append('<li>' + subCategory['child-category'][x].title + '</li>');
					}
					var $domProduct = $('.dropdown-container[data-dropdown="' + subCategory.machine_title + '"]').find('.dropdown__products ul');
					var products = subCategory['child-category'][x].products;
					// for (var y = 0; y < products.length; y++) {
					// 	$domProduct.append('<li>' + products[y].title + '</li>');
					// }
				}
			}
		}
	}
}

$(window).on('scroll', function() {
	// bototm of filter distance from top
	if ($('#drake-options').val() === 'fixed') {
	    var bottomOfFilter = $('.toolbar').position().top;
		if ($(window).scrollTop() > bottomOfFilter) {
			$('.fixed-filter').addClass('fixed').removeClass('hide');
		}
		else {
			$('.fixed-filter').removeClass('fixed').addClass('hide');
		}
	}

});