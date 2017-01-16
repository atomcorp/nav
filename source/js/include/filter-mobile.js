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
			activeCategoryObj.name =  $clicked.text();
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

	return {
		testMyCode: testMyCode
	};
}

var newFilter = MobileFilter();

newFilter.testMyCode();