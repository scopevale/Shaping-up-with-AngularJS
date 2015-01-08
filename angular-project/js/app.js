/**
* Created with CodeSchool-AngularJS-01.
* User: scopevale
* Date: 2015-01-05
* Time: 02:02 PM
* To change this template use Tools | Templates.
*/

(function () {
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function () {
		this.products = gems;
	});

	app.controller('PanelController', function () {
		this.tab = 1;
		
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
		
	});
	
	
	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'Some gemstones have qualities beyond their lustre, beyond their shine. Dodeca is such a gemstone.',
			shine: 8,
			canPurchase: true,
			soldOut: false,
			images: {
				full: 'images/apatite.jpg',
				thumb: 'images/apatite.jpg'
			}
		},
		{
			name: 'Pentagonal Gem',
			price: 6,
			description: 'A truly superb gemstone, Pentagonal is a real eye catcher!',
			shine: 4,
			canPurchase: true,
			soldOut: false,
			images: {
				full: 'images/peridot.jpg',
				thumb: 'images/peridot.jpg'
			}
		}
	];

})();
