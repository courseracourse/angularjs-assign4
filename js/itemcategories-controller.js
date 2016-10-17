(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemCategoriesController', ItemCategoriesController);

ItemCategoriesController.$inject = ['response'];

function ItemCategoriesController(response) {
  var $ctrl = this;
  $ctrl.items = response.data.menu_items;
  $ctrl.category = response.data.category;
}


})();
