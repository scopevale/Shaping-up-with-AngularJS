/**
* Created with CodeSchool-AngularJS-01.
* User: scopevale
* Date: 2015-01-05
* Time: 02:02 PM
* To change this template use Tools | Templates.
*/

(function () {
	var app = angular.module('gemStore', ['store-products']);

	app.controller('StoreController', [ '$http', function ($http) {		
		var store = this;
		
		store.products = [ ];
		
		$http.get('js/products.json').success(function(data) {
			store.products = data;			
		});
																					
	}]);

	app.controller('PanelController', function () {
		this.tab = 1;
		
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};		
	});
	
  app.controller('GalleryController', function() {
    this.current = 0;
    
    this.setCurrent = function(currentValue) {
      this.current = currentValue || 0;
    };
  });
	
	app.controller('ReviewController', function() {
		this.review = {};
		
		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
		
	});
                 	

// 	var gems = [
// 		{
// 			name: 'Dodecahedron',
// 			price: 2.95,
// 			description: 'Some gemstones have qualities beyond their lustre, beyond their shine. Dodeca is such a gemstone.',
// 			shine: 8,
// 			canPurchase: true,
// 			soldOut: false,
// 			images: {
// 				full: 'images/apatite.jpg',
// 				thumb: 'images/apatite.jpg'
// 			},
// 			reviews: [
// 				{
// 					stars: 5,
// 					body: "I love this product",
// 					author: 'joe@gmail.com'
// 				},
// 				{
// 					stars: 1,
// 					body: "This sucks!",
// 					author: 'tim@gmail.com'
// 				},				
// 			]
// 		},
// 		{
// 			name: 'Pentagonal Gem',
// 			price: 6,
// 			description: 'A truly superb gemstone, Pentagonal is a real eye catcher!',
// 			shine: 4,
// 			canPurchase: true,
// 			soldOut: false,
// 			images: {
// 				full: 'images/peridot.jpg',
// 				thumb: 'images/peridot.jpg'
// 			},
// 			reviews: [
// 				{
// 					stars: 5,
// 					body: "WOW what a great Gem!",
// 					author: 'jane@gmail.com'
// 				},
// 				{
// 					stars: 1,
// 					body: "This Gem is AWESOME!",
// 					author: 'tony@gmail.com'
// 				},				
// 			]
// 		}
// 	];

})();
