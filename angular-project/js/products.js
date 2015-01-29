(function () {
	"use strict";
	
	var app = angular.module('store-products', []);
	
	app.directive('productTitle', function() {
		return {
			restrict: 'E',
			templateUrl: 'template-snippets/product-title.html'
		};
	});
	
	app.directive('productPanels', function() {
		return {
			restrict: 'E',
			templateUrl: 'template-snippets/product-panels.html',
			controller: 'PanelController',
			controllerAs: 'panel'
		};
	});
		
	app.directive('productReviews', function() {
		return {
			restrict: 'E',
			templateUrl: 'template-snippets/product-reviews.html',
			controller: 'ReviewController',
			controllerAs: 'reviewCtrl'
		};
	})
	
  app.directive("productSpecs", function() {
    return {
      restrict: 'A',
      templateUrl: 'template-snippets/product-specs.html'
    };
  });
	
})();