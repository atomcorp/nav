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
	$('.features-group').addClass('hide');
	// deselect uneligible categories if necessary
	if (type !== 'All') {
		$('.filter__category').addClass('inactive');
		$('.filter__category[data-system="'+ type + '"]').removeClass('inactive');
		$('.filter__range').addClass('inactive');
		$('.filter__range[data-system="'+ type + '"]').removeClass('inactive');
	} else {
		$('.filter__category').removeClass('inactive');
		$('.filter__range').removeClass('inactive');
		$('.filter__range').addClass('inactive');
	}
	// check if range label needs to show
	if ($('.filter__range.inactive').length === $('.filter__range').length) {
		$('.filter__range--label').addClass('inactive');
	} else {
		$('.filter__range--label').removeClass('inactive');
	}
	// dust up any that should be circled
	$('.filter__category.selected.inactive').removeClass('selected');
	// get what the filters are
	var filters = setFilterCriteria();
	getEligibleProducts(filters);
	//	use filters to 

});

// categories
$(document).on('click', '.filter__category.filter__category--tabs', function(event) {
	event.preventDefault();
	var $this = $(this);
	if (!$this.hasClass('inactive')) {
		if (!$this.hasClass('selected')) {
			$this.addClass('selected');
			$this.siblings().removeClass('selected');
		} else {
			$this.removeClass('selected');
		}

		// check it's not something that uses a feature
		$('.filter__feature').addClass('hide');

		if ($this.data('feature-link') === "Amplifiers") {
			$('.features-group').removeClass('hide');
			$('.filter__feature[data-feature="Amplifiers"]').removeClass('hide');
		} else if ($this.data('feature-link') === "Wireless") {
			$('.features-group').removeClass('hide');
			$('.filter__feature[data-feature="Wireless"]').removeClass('hide');
		} else {
			$('.features-group').addClass('hide');
			$('.filter__feature').addClass('hide');
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
					var name = cachedData[i]['child-category'][x].products[y].title;
					var price = cachedData[i]['child-category'][x].products[y].nid;
					var strapline = cachedData[i]['child-category'][x].products[y].strapline;
					products.push(productMarkup(name, price, strapline));
				}
			}
		}
	} else {
		// also look at categories
		for (var i = 0; i < cachedData.length; i++) {

			for (var x = 0; x < cachedData[i]['child-category'].length; x++) {


				if (cachedData[i]['child-category'][x].title === filters.categories) {

					for (var y = 0; y < cachedData[i]['child-category'][x].products.length; y++) {
						var name = cachedData[i]['child-category'][x].products[y].title;
						var price = cachedData[i]['child-category'][x].products[y].nid;
						var strapline = cachedData[i]['child-category'][x].products[y].strapline;
						products.push(productMarkup(name, price, strapline));
						
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
		$('.found-count--number').text($('.results-list .result---product').length);

	} else {
		$list.html('<div>' +  'No results' + '</div>');
		$('.found-count--number').text('0');
	}
}

var productMarkup = function(name, price, strapline) {
	var back1 = 'img--dots';
	var back2 = 'img--blueprint';
	var back3 = 'img--cross';
	var back = back1;
	// var num = Math.random();
	var num = Math.random().toFixed(2) * 100;
	var random = Math.random();
	if (random > 0.3 && random < 0.7) {
		back = back2;
		num = num.toFixed(2) * 100;
	} else if (random > 0.7) {
		back = back3;
		num = num.toFixed(1) * 10;
	}
 	return '<div class="result---product"><div class="box"><div class="dropdown__product--img"><div class="dropdown-img box ' + back + '"></div></div><div class="dropdown__product--heading"><div class="dropdown__product--title">' + name + '</div><div class="dropdown__product--price">£' + num + '</div></div><div class="dropdown__product--strapline">' + strapline + '</div></div></div>';
}

if ($('.filter').length) {
	$('.filter__heading.selected').trigger('click');
	hashSelectFilter();
}

function hashSelectFilter() {
	// grab hash and remove #
	var hash = window.location.hash;
	if (hash.substring(0, 1) == '#') { 
		hash = hash.substring(1);
	}

	// look at a hash and the trigger respective tab	
	$('.filter__heading--tabs[data-nav-hash="' + hash + '"]').trigger('click');

	if (hash.length > 0) {
		hash === 'hifi' ? $('.products-title').text('Hi-fi') : false;
		hash === 'speakers' ? $('.products-title').text('Speakers') : false;
		hash === 'home' ? $('.products-title').text('Home cinema') : false;
	}
}
