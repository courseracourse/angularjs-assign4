(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'src/templates/categories-items.html',
  controller: ['MenuDataService', '$stateParams', ItemCategoriesController],
  bindings: {
    items: '<',
    category: '<'
  }
});

function ItemCategoriesController(MenuDataService, $stateParams) {
  var $ctrl = this;
  MenuDataService.getItemsForCategory($stateParams.itemId).then(function (response) {
  console.log(response.data.menu_items);  
  $ctrl.items = response.data.menu_items;
  $ctrl.category = response.data.category;
  })
}


})();
