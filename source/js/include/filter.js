function popFilterCategories() {
	var $domFilter = $('.filter__categories');

	var loopThis = data.navigation;

	for (var i = 0; i < loopThis.length; i++) {
		var subCategory = loopThis[i];
		for (var x = 0; x < subCategory['child-category'].length; x++) {
			if (subCategory['child-category'][x].type != "range") {
				var category = subCategory['child-category'][x].title;
				$domFilter.append('<div class="filter__category">' + category + '</div>');

			}
		}
	}
}

/*

Filter actions

- Systems: click on Hi-Fi  -> only Cats under Hi-Fi highlighted / only Ranges with Products in Hi-Fi
- Categories: click only if highlighted -> 

Filter Tasks

- get all the products, define them 

*/

function setFilterCriteria() {
	// when someone clicks
	// get what System selected
	// get what categories selected
	var selections = {};
	$.each($('.filter__category'), function(index, val) {
		if ($(this).hasClass('selected')) {
			selections.categories = $(this).text();
		}
	});
	$.each($('.filter__heading'), function(index, val) {
		if ($(this).hasClass('selected')) {
			selections.systems = $(this).text();
		}
	});
	return selections;
}

// hifi, home cinema, speakers
$(document).on('click', '.filter__heading', function(event) {
	event.preventDefault();
	var $this = $(this);
	var type = $this.text(); 
	if (!$this.hasClass('selected')) {
		$this.addClass('selected');
		$this.siblings().removeClass('selected');
	} else {
		$this.removeClass('selected');
		type = 'All';
		$(".filter__heading:contains('All')").addClass('selected');
	}
	// deselect uneligible categories if necessary
	if (type !== 'All') {
		$('.filter__category').addClass('inactive');
		$('.filter__category[data-system="'+ type + '"]').removeClass('inactive');
	} else {
		$('.filter__category').removeClass('inactive');
	}
	// dust up any that should be circled
	$('.filter__category.selected.inactive').removeClass('selected');
	// get what the filters are
	var filters = setFilterCriteria();
	getEligibleProducts(filters);
	//	use filters to 

});

// categories
$(document).on('click', '.filter__category', function(event) {
	event.preventDefault();
	var $this = $(this);
	if (!$this.hasClass('inactive')) {
		if (!$this.hasClass('selected')) {
			$this.addClass('selected');
			$this.siblings().removeClass('selected');
		} else {
			$this.removeClass('selected');
		}
		// get what the filters are
		var filters = setFilterCriteria();
		getEligibleProducts(filters);
	}
});

function getEligibleProducts(filters) {
	// get data
	var cachedData = data.navigation;
	var results = [];
	var products = [];
	// select home cinema
	if (filters.systems && !filters.categories) {
		if (filters.systems !== "All")  {
			for (var i = 0; i < cachedData.length; i++) {
				if (cachedData[i].title === filters.systems) {
					results.push(cachedData[i]);
				}
			}
		} else {
			results = cachedData;
		}
		for (var i = 0; i < results.length; i++) {

			for (var x = 0; x < results[i]['child-category'].length; x++) {

				for (var y = 0; y < results[i]['child-category'][x].products.length; y++) {
					products.push('<div>' +  results[i]['child-category'][x].products[y].title + '</div>');
				}
			}
		}
	} else {
		// also look at categories
		for (var i = 0; i < cachedData.length; i++) {

			for (var x = 0; x < cachedData[i]['child-category'].length; x++) {


				if (cachedData[i]['child-category'][x].title === filters.categories) {

					for (var y = 0; y < cachedData[i]['child-category'][x].products.length; y++) {
						products.push('<div>' +  cachedData[i]['child-category'][x].products[y].title + '</div>');
					}
				}
			}
		}
	}
	
	var $list = $('.results-list');
	if (products.length) {
		$list.html('');
		for (var i = 0; i < products.length; i++) {
			$list.append(products[i])
		}
	} else {
		$list.html('<div>' +  'No results' + '</div>');
	}
}