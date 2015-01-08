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

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'Some gemstones have qualities beyond their lustre, beyond their shine. Dodeca is such a gemstone.',
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
			canPurchase: true,
			soldOut: false,
			images: {
				full: 'images/peridot.jpg',
				thumb: 'images/peridot.jpg'
			}
		}
	];

})();
