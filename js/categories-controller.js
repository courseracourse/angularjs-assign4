(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['response'];

function CategoriesController(response) {
  var $ctrl = this;
  console.log(response.data);
  $ctrl.items = response.data;
}


})();
