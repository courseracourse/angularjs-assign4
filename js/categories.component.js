(function () {
'use strict';

angular.module('data')
.component('categories', {
  templateUrl: 'src/templates/categories.html',
  controller: ['MenuDataService', CategoriesController],
  bindings: {
    items: '<'
  }
});

function CategoriesController(MenuDataService) {
  var $ctrl = this;
  MenuDataService.getAllCategories().then(function (response) {
	  $ctrl.items = response.data;
  })
}


})();
