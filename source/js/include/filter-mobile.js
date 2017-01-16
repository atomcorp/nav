var slinky = $('.slinky-menu').slinky({
	title: false,

});

// slinky.jump('.slinky-speakers', false)

var MobileFilter = function() {

	var state = {
		getActiveCategory: function() {
			var activeCategoryObj = {};
			var $selected = $('.slink-item.selected');
			activeCategoryObj.name =  $selected.text();
			activeCategoryObj.dom = $selected;
			activeCategoryObj.parentName =  $selected.parent().siblings('.next').text();
			activeCategoryObj.parentDom = $selected.parent().siblings('.next');
			this.currentCategory = activeCategoryObj;
		},
		setActiveCategory: function($clicked) {
			var activeCategoryObj = {};
			activeCategoryObj.name =  $clicked.contents().get(1).nodeValue;
			activeCategoryObj.dom = $clicked;
			// http://stackoverflow.com/a/22117753/2368141
			activeCategoryObj.parentName = $clicked.parent().siblings('.next').contents().get(0).nodeValue;
			activeCategoryObj.parentDom = $clicked.parent().siblings('.next');
			this.currentCategory = activeCategoryObj;
		},
		currentCategory: {
			name: null,
			dom: null,
			parentName: null,
			parentDom: null
		},
		filteredData: null,
	};

	var domCache = {
		categories: $('.slink-item'),
		radios: $('.slink-item .radio'),
		selectedCategory: $('.slink-item.selected'),
		currentSelectionMaster: $('.current-selection--master'),
	};

	var _initEventListeners = function() {
		// listen for clicking on a category
		domCache.categories.on('click', function(event) {
			event.preventDefault();
			var $this = $(this);
			if (!$this.hasClass('selected')) {
				domCache.selectedCategory = $this;
				state.setActiveCategory($this);
				_setSubheadings();
				_switchRadioButton($this);
				_getProductData(state.currentCategory.name);
			}
			
		});
	};

	function testMyCode() {
		_initEventListeners();
	};

	function _switchRadioButton(clickedListItem) {
		domCache.categories.removeClass('selected');
		clickedListItem.addClass('selected');

	};

	function _setSubheadings() {
		var textTemplate = state.currentCategory.parentName + ' > ' + state.currentCategory.name;

		domCache.currentSelectionMaster.html(textTemplate);
		$('.current-selection--parent').html('');
		state.currentCategory.parentDom.find('.current-selection--parent').html(state.currentCategory.name);

	}

	function _getProductData(categoryName) {
		// get data
		var cachedData = data.navigation;
		var results = data.navigation;
		var products = [];
		// select home cinema
		if (!categoryName) {

			for (var i = 0; i < results.length; i++) {

				for (var x = 0; x < results[i]['child-category'].length; x++) {

					for (var y = 0; y < results[i]['child-category'][x].products.length; y++) {
						var name = results[i]['child-category'][x].products[y].title;
						var price = results[i]['child-category'][x].products[y].nid;
						var strapline = results[i]['child-category'][x].products[y].strapline;
						var colours = results[i]['child-category'][x].products[y].colours;
						products.push({name, price, strapline, colours});
						//products.push(productMarkup(name, price, strapline, colours));
					}
				}
			}
		} else {
			// also look at categories
			for (var i = 0; i < cachedData.length; i++) {
				for (var x = 0; x < cachedData[i]['child-category'].length; x++) {
					if (cachedData[i]['child-category'][x].title === categoryName) {
						for (var y = 0; y < cachedData[i]['child-category'][x].products.length; y++) {
							var name = cachedData[i]['child-category'][x].products[y].title;
							var price = cachedData[i]['child-category'][x].products[y].nid;
							var strapline = cachedData[i]['child-category'][x].products[y].strapline;
							var colours = cachedData[i]['child-category'][x].products[y].colours;
							products.push(productMarkup(name, price, strapline, colours));
						}
					}
				}
			}
		}
		
		// var $list = $('.results-list');
		// if (products.length) {
		// 	$list.html('');
		// 	for (var i = 0; i < products.length; i++) {
		// 		$list.append(products[i])
		// 	}
		// 	$('.found-count--number').text($('.results-list .result---product').length);

		// } else {
		// 	$list.html('<div>' +  'No results' + '</div>');
		// 	$('.found-count--number').text('0');
		// }
		$('.results-list').html(products);
		$('.found-count--number').text(products.length);
		slinky.home();
		setTimeout(function() {
			$('html, body').animate({
		        scrollTop: $(".mob--container").offset().top + $('.mob--dynamic-title h2').outerHeight(true)
		    }, 300);
		}, 200);
		
	}

	return {
		testMyCode: testMyCode
	};
}

var newFilter = MobileFilter();

newFilter.testMyCode();