// Main.js

var $g = {};

jQuery(document).ready(function($) {

var data = {

    "navigation": [{

        "tid": "1156",

        "title": "Hi-Fi",

        "machine_title": "hi-fi",

        "child-category": [{

            "tid": "1194",

            "title": "851 Series",

            "machine_title": "851_series",

            "type": "range",

            "products": [



            ]

        }, {

            "tid": "1193",

            "title": "CX Series",

            "machine_title": "cx_series",

            "type": "range",

            "products": [



            ]

        }, {

            "tid": "1157",

            "title": "Network Players",

            "machine_title": "network_players",

            "products": [{

                "title": "CXN",

                "strapline": "Network Player",

                "nid": "3799",

                "url": "\/products\/cx\/cxn",

                "keywords": ["Integrated"],

                "range": "CX"

            }, {

                "title": "Minx Xi",

                "strapline": "Digital Music System",

                "nid": "3872",

                "url": "\/products\/network-players\/minx-xi",

                "keywords": ["Power Amp"],

                "range": "Minx"

            }, {

                "title": "Azur 851N",

                "strapline": "Flagship Network Player",

                "nid": "3898",

                "url": "\/products\/851\/851n",

                "keywords": ["Power Amp"],

                "range": "851"

            }]

        }, {

            "tid": "1158",

            "title": "Disc Players",

            "machine_title": "disc_players",

            "products": [{

                "title": "CXU",

                "strapline": "Our best ever universal Blu-Ray player",

                "nid": "3987",

                "url": "\/products\/cx\/cxu",

                "keywords": ["Power Amp"],

                "range": "CX",

                "colours": ["black", "white"]

            }, {

                "title": "CXC",

                "strapline": "A dedicated CD transport",

                "nid": "4003",

                "url": "\/products\/cx\/cxc",

                "range": "CX",

                "colours": ["black", "white"]

            }, {

                "title": "Azur 851C",

                "strapline": "Flagship Upsampling DAC, CD Player \u0026 Preamplifier",

                "nid": "4085",

                "url": "\/products\/851\/851c",

                "keywords": ["With DAC"],

                "range": "851",

                "colours": ["black", "white"]

            }, {

                "title": "Topaz CD10",

                "strapline": "CD Player",

                "nid": "4261",

                "url": "\/products\/hifi-and-home-cinema\/topaz-cd10",

                "range": "Topaz",

                "colours": ["black", "white"]

            }, {

                "title": "Topaz CD5",

                "strapline": "Entry-Level CD player",

                "nid": "4264",

                "url": "\/products\/hifi-and-home-cinema\/topaz-cd5",

                "range": "Topaz"

            }, {

                "title": "Azur 651C",

                "strapline": "Premium CD Player",

                "nid": "4265",

                "url": "\/products\/hifi-and-home-cinema\/azur-651c"

            }]

        }, {

            "tid": "1159",

            "title": "Amplifiers",

            "machine_title": "amplifiers",

            "products": [{

                "title": "CXA80",

                "strapline": "80W integrated amplifier",

                "nid": "3995",

                "url": "\/products\/cx\/cxa80",

                "range": "CX"

            }, {

                "title": "CXA60",

                "strapline": "60W integrated amplifier",

                "nid": "4075",

                "url": "\/products\/cx\/cxa60",

                "range": "CX"

            }, {

                "title": "Azur 851A",

                "strapline": "Flagship Integrated class XD amplifier",

                "nid": "4099",

                "url": "\/products\/851\/851a",

                "range": "851"

            }, {

                "title": "Azur 851W",

                "strapline": "Flagship power amplifier",

                "nid": "4110",

                "url": "\/products\/851\/851w",

                "range": "851"

            }, {

                "title": "Azur 851E",

                "strapline": "Flagship Preamplifier",

                "nid": "4118",

                "url": "\/products\/851\/851e",

                "range": "851"

            }, {

                "title": "Topaz AM5",

                "strapline": "Entry-Level Integrated Amplifier",

                "nid": "4128",

                "url": "\/products\/hifi-and-home-cinema\/topaz-am5",

                "range": "Topaz"

            }, {

                "title": "Topaz SR10",

                "strapline": "Powerful FM\/AM Stereo Receiver",

                "nid": "4130",

                "url": "\/products\/hifi-and-home-cinema\/topaz-sr10",

                "range": "Topaz"

            }, {

                "title": "Topaz SR20",

                "strapline": "POWERFUL DIGITAL STEREO RECEIVER",

                "nid": "4134",

                "url": "\/products\/hifi-and-home-cinema\/topaz-sr20",

                "range": "Topaz"

            }, {

                "title": "Topaz AM10",

                "strapline": "Integrated Amplifier",

                "nid": "4135",

                "url": "\/products\/hifi-and-home-cinema\/topaz-am10",

                "range": "Topaz"

            }, {

                "title": "Azur 651A",

                "strapline": "Premium integrated amplifier",

                "nid": "4324",

                "url": "\/products\/hifi-and-home-cinema\/azur-651a"

            }]

        }, {

            "tid": "1160",

            "title": "DACs",

            "machine_title": "dacs",

            "products": [{

                "title": "DacMagic 100",

                "strapline": "Digital to Analogue Converter",

                "nid": "3823",

                "keywords": ["With DAC"],

                "url": "\/products\/hifi-and-home-cinema\/dacmagic-100"

            }, {

                "title": "DacMagic Plus ",

                "strapline": "Digital to Analogue Converter \u0026 Preamplifier",

                "nid": "3830",

                "keywords": ["With DAC"],

                "url": "\/products\/hifi-and-home-cinema\/dacmagic-plus"

            }, {

                "title": "DacMagic XS",

                "strapline": "Our best ever portable DAC",

                "nid": "3846",

                "keywords": ["With DAC"],

                "url": "\/products\/hifi-and-home-cinema\/dacmagic-xs"

            }, {

                "title": "Azur 851D",

                "strapline": "Flagship Digital to Analogue Converter",

                "nid": "3868",

                "keywords": ["With DAC"],



                "url": "\/products\/851\/851d",

                "range": "851"

            }]

        }, {

            "tid": "1161",

            "title": "Phono Stages",

            "machine_title": "phono_stages",

            "products": [{

                "title": "CP1",

                "strapline": "MOVING MAGNET PHONO PREAMPLIFIER",

                "nid": "4182",

                "url": "\/products\/hifi\/phono-stages\/cp1"

            }, {

                "title": "CP2",

                "strapline": "Moving Magnet \u0026 Moving coil phono preamplifier",

                "nid": "4184",

                "url": "\/products\/hifi\/phono-stages\/cp2"

            }, {

                "title": "Azur 551P",

                "strapline": "Moving magnet phono preamplifier",

                "nid": "4332",

                "url": "\/products\/hifi-and-home-cinema\/azur-551p"

            }, {

                "title": "Azur 651P",

                "strapline": "Moving magnet and moving coil phono preamplifier",

                "nid": "4333",

                "url": "\/products\/hifi-and-home-cinema\/azur-651p"

            }]

        }, {

            "tid": "1162",

            "title": "All-in-one Systems",

            "machine_title": "all-in-one_systems",

            "products": [{

                "title": "Minx Xi",

                "strapline": "Digital Music System",

                "nid": "3872",

                "url": "\/products\/network-players\/minx-xi",

                "range": "Minx"



            }, {

                "title": "ONE",

                "strapline": "All in one music system",

                "nid": "4273",

                "url": "\/products\/hifi-and-home-cinema\/one"

            }]

        }, {

            "tid": "1192",

            "title": "SE1",

            "machine_title": "se1",

            "products": [{

                "title": "SE1",

                "strapline": "In-ear headphones",

                "nid": "3821",

                "url": "\/products\/se1"

            }]

        }]

    }, {

        "tid": "1164",

        "title": "Speakers",

        "machine_title": "speakers",

        "child-category": [{

            "tid": "1165",

            "title": "Floor Standing",

            "machine_title": "floor_standing",

            "products": [{

                "title": "SX-80",

                "strapline": "Entry level floorstanding speakers",

                "nid": "4140",

                "url": "\/products\/sx\/sx80"

            }, {

                "title": "Aero 6",

                "strapline": "Premium Floorstanding Speakers",

                "nid": "4240",

                "url": "\/products\/speakers\/aero-6",

                "range": "Aero"

            }, {

                "title": "Aeromax 6",

                "strapline": "Flagship floorstanding speakers",

                "nid": "4315",

                "url": "\/products\/speakers\/aeromax-6",

                "range": "Aeromax"

            }]

        }, {

            "tid": "1166",

            "title": "Standmount",

            "machine_title": "standmount",

            "products": [{

                "title": "SX-60",

                "strapline": "Entry level standmount speakers",

                "nid": "4233",

                "url": "\/products\/speakers\/sx-60"

            }, {

                "title": "Aero 2",

                "strapline": "Premium standmount speakers",

                "nid": "4247",

                "url": "\/products\/speakers\/aero-2",

                "range": "Aero"

            }, {

                "title": "Aeromax 2",

                "strapline": "Flagship standmount speakers",

                "nid": "4311",

                "url": "\/products\/speakers\/aeromax-2",

                "range": "Aeromax"

            }]

        }, {

            "tid": "1167",

            "title": "Bookshelf",

            "machine_title": "bookshelf",

            "products": [{

                "title": "SX-50",

                "strapline": "Bookshelf speakers",

                "nid": "4304",

                "url": "\/products\/speakers\/sx-50"

            }, {

                "title": "Minx XL",

                "strapline": "Flagship bookshelf speakers",

                "nid": "4308",

                "url": "\/products\/speakers\/minx-xl",

                "range": "Minx"

            }, {

                "title": "Minx Min 12",

                "strapline": "Bookshelf speakers",

                "nid": "4344",

                "url": "\/products\/speakers\/minx-min-12",

                "range": "Minx"

            }, {

                "title": "Minx Min 22",

                "strapline": "Bookshelf speakers",

                "nid": "4354",

                "url": "\/products\/speakers\/minx-min-22",

                "range": "Minx"

            }]

        }, {

            "tid": "1168",

            "title": "Surround",

            "machine_title": "surround",

            "products": [{

                "title": "Aero 3",

                "strapline": "Premium surround speaker",

                "nid": "4281",

                "url": "\/products\/speakers\/aero-3",

                "range": "Aero"

            }, {

                "title": "SX-70",

                "strapline": "Entry level centre speaker",

                "nid": "4289",

                "url": "\/products\/sx\/sx70"

            }, {

                "title": "Aero 5",

                "strapline": "Premium centre speaker",

                "nid": "4384",

                "url": "\/products\/speakers\/aero-5",

                "range": "Aero"

            }]

        }, {

            "tid": "1169",

            "title": "Subwoofers",

            "machine_title": "subwoofers",

            "products": [{

                "title": "Aero 9",

                "strapline": "500W Subwoofer",

                "nid": "4290",

                "url": "\/products\/speakers\/aero-9",

                "range": "Aero"

            }, {

                "title": "SX-120",

                "strapline": "70W Subwoofer",

                "nid": "4299",

                "url": "\/products\/speakers\/sx-120"

            }, {

                "title": "Minx X201 ",

                "strapline": "200W subwoofer",

                "nid": "4369",

                "url": "\/products\/speakers\/minx-x201",

                "range": "Minx"

            }, {

                "title": "Minx X301",

                "strapline": "300W Subwoofer",

                "nid": "4370",

                "url": "\/products\/speakers\/minx-x301",

                "range": "Minx"

            }]

        }, {

            "tid": "1170",

            "title": "In-Ceiling",

            "machine_title": "in-ceiling",

            "products": [{

                "title": "C155",

                "strapline": "Entry Level In-Ceiling Speaker",

                "nid": "4385",

                "url": "\/product\/c155"

            }, {

                "title": "C165",

                "strapline": "Premium In-Ceiling Speaker",

                "nid": "4386",

                "url": "\/product\/c165"

            }, {

                "title": "C165SS",

                "strapline": "Premium In-Ceiling Stereo Speaker",

                "nid": "4387",

                "url": "\/product\/c165ss"

            }, {

                "title": "C200B",

                "strapline": "In-Ceiling Subwoofer",

                "nid": "4388",

                "url": "\/product\/c200b"

            }, {

                "title": "C46",

                "strapline": "Compact In-Ceiling Speaker",

                "nid": "4389",

                "url": "\/product\/c46"

            }]

        },{

            "tid": "5745",

            "title": "Wireless",

            "machine_title": "wireless",

            "products": [{

                "title": "Yoyo (S)",

                "strapline": "Portable Bluetooth Speaker",

                "nid": "9991",

                "url": "\/products\/speakers\/tv2",

                "keywords": ["Portable", "Bluetooth"],

                "range": "Yoyo",

                "keywords": ["Portable", "Bluetooth", "Stereo"],

                "colours": ["blue", "red", "white"]

            }, {

                "title": "Yoyo (M)",

                "strapline": "Portable Stereo Bluetooth Speaker",

                "nid": "9992",

                "url": "\/products\/speakers\/tv5",

                "keywords": ["Portable", "Bluetooth", "Multiroom"],

                "range": "Yoyo",

                "colours": ["blue", "red", "white"]

            }, {

                "title": "Yoyo (L)",

                "strapline": "All-In-One Home Audio System",

                "nid": "9993",

                "url": "\/products\/speakers\/tv2-v2",

                "keywords": ["TV Compatible"],

                "range": "Yoyo"

            }, {

                "title": "Air 100",

                "strapline": "Powerful, Flexible, Wireless Sound",

                "nid": "9993",

                "url": "\/products\/speakers\/tv2-v2",

                "keywords": ["Portable"]

            }, {

                "title": "G2",

                "strapline": "Mini Portable Bluetooth Speaker",

                "nid": "9993",

                "url": "\/products\/speakers\/tv2-v2",

                "keywords": ["Portable", "Bluetooth"]

            }, {

                "title": "G5",

                "strapline": "Portable Bluetooth speaker",

                "nid": "9993",

                "url": "\/products\/speakers\/tv2-v2",

                "keywords": ["Portable", "Bluetooth", "Airplay"],

                "colours": ["blue", "gold", "white"]

            }, {

                "title": "GO",

                "strapline": "Portable Bluetooth speaker",

                "nid": "9993",

                "url": "\/products\/speakers\/tv2-v2",

                "keywords": ["Portable", "Bluetooth"],

                "colours": ["blue", "red", "white"]

            }, {

                "title": "GO Radio",

                "strapline": "Wireless Bluetooth Speaker & Radio",

                "nid": "9993",

                "url": "\/products\/speakers\/tv2-v2",

                "keywords": ["Portable", "Bluetooth"]

            }]

        }]

    }, {

        "tid": "1171",

        "title": "Home Cinema",

        "machine_title": "home_cinema",

        "child-category": [{

            "tid": "1172",

            "title": "AV Receivers",

            "machine_title": "av_receivers",

            "products": [{

                "title": "CXR200",

                "strapline": "200W AV Receiver",

                "nid": "4008",

                "url": "\/products\/cx\/cxr200",

                "range": "CX"

            }, {

                "title": "CXR120",

                "strapline": "120W AV Receiver",

                "nid": "4079",

                "url": "\/products\/cx\/cxr120",

                "range": "CX"

            }]

        }, {

            "tid": "1173",

            "title": "Bluray Player",

            "machine_title": "our_universal_player",

            "products": [{

                "title": "CXU",

                "strapline": "Our best ever universal Blu-Ray player",

                "nid": "3987",

                "url": "\/products\/cx\/cxu",

                "range": "CX"

            }]

        }, {

            "tid": "1174",

            "title": "Speakers",

            "machine_title": "speakers",

            "products": [



            ]

        }, {

            "tid": "1175",

            "title": "TV Speakers",

            "machine_title": "tv_sound",

            "products": [{

                "title": "TV2 (v1)",

                "strapline": "Compact base with Bluetooth",

                "nid": "4185",

                "url": "\/products\/speakers\/tv2"

            }, {

                "title": "TV5 (v1)",

                "strapline": "Compact base with Bluetooth",

                "nid": "4217",

                "url": "\/products\/speakers\/tv5"

            }, {

                "title": "TV2 (v2)",

                "strapline": "Soundbase with Bluetooth",

                "nid": "4547",

                "url": "\/products\/speakers\/tv2-v2"

            }, {

                "title": "TV5 (v2)",

                "strapline": "Soundbase with Bluetooth",

                "nid": "4549",

                "url": "\/products\/speakers\/tv5-v2"

            }, {

                "title": "TVB2",

                "strapline": "Bluetooth Soundbar with Wireless Subwoofer",

                "nid": "4550",

                "url": "\/products\/tv-sound\/tvb2"

            }]

        }]

    }]

}


$g.nav = data.navigation;
//=include include/defaults.js
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
			
		});
		
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
							// also add strapline
							// add link (to another generic page?)
							$('.generic__products ul').append('<li><a href="/app/product" class="hash-link">' + products[y].title + '</a></li>');
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
var filteredProductData = [];

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
$(document).on('click', '.filter__group--og .filter__heading', function(event) {
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
$(document).on('click', '.filter__group--og .filter__category.filter__category--tabs', function(event) {
	event.preventDefault();
	var $this = $(this);
	$('.filter__feature').removeClass('selected');
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
	$('.filter__feature').removeClass('selected');
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
					var name = results[i]['child-category'][x].products[y].title;
					var price = results[i]['child-category'][x].products[y].nid;
					var strapline = results[i]['child-category'][x].products[y].strapline;
					var colours = results[i]['child-category'][x].products[y].colours;
					products.push(productMarkup(name, price, strapline, colours));
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
						var colours = cachedData[i]['child-category'][x].products[y].colours;
						products.push(productMarkup(name, price, strapline, colours));
						
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

function addColours(colourArray) {
	for (var i = 0; i < colourArray.length; i++) {
		colourArray[i]
	}
}

function featuresFilter(filter) {
	// check if any products have the filter
	var results = data.navigation;
	var products = [];
	for (var i = 0; i < results.length; i++) {

		for (var x = 0; x < results[i]['child-category'].length; x++) {

			for (var y = 0; y < results[i]['child-category'][x].products.length; y++) {
				// var name = results[i]['child-category'][x].products[y].title;
				// var price = results[i]['child-category'][x].products[y].nid;
				// var strapline = results[i]['child-category'][x].products[y].strapline;
				if (results[i]['child-category'][x].products[y].keywords) {
					for (var z = 0; z < results[i]['child-category'][x].products[y].keywords.length; z++) {
						if (results[i]['child-category'][x].products[y].keywords[z] === filter) {
							// yeah, finally
							var name = results[i]['child-category'][x].products[y].title;
							var price = results[i]['child-category'][x].products[y].nid;
							var strapline = results[i]['child-category'][x].products[y].strapline;
							var colours = results[i]['child-category'][x].products[y].colours;
							products.push(productMarkup(name, price, strapline, colours));
						}
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

$(document).on('click', '.filter__feature', function(event) {
	event.preventDefault();
	var $this = $(this);
	var text = $this.text();
	if (!$this.hasClass('selected')) {
		$('.filter__feature').removeClass('selected');
		$this.addClass('selected')
		featuresFilter(text);
	} else {
		$('.filter__feature').removeClass('selected');
	}
	
});

var productMarkup = function(name, price, strapline, colours) {
	var back1 = 'img--dots';
	var back2 = 'img--blueprint';
	var back3 = 'img--cross';
	var back = back1;
	var colour = '';
	var colourString = '';
	// var num = Math.random();
	var random = Math.random();
	var num = parseInt(random * 1000);
	if (random > 0.3 && random < 0.7) {
		back = back2;
		num = parseInt(num + 1000);
	} else if (random > 0.7) {
		back = back3;
		num = parseInt(num / 10);
	}
	if (colours) {
		for (var i = 0; i < colours.length; i++) {
			colour += '<div class="product__colour product__colour--' + colours[i] + '"></div>';
		}
		colourString = '<div class="product__colours">' + colour + '</div>';
	}
 	return '<div class="result---product"><div class="box"><div class="dropdown__product--img"><div class="dropdown-img box ' + back + '"></div>' + colourString + '</div><div class="dropdown__product--heading"><div class="dropdown__product--title">' + name + '</div><div class="dropdown__product--price">£' + num + '</div></div><div class="dropdown__product--strapline">' + strapline + '</div></div></div>';
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


}); // END JQUERY