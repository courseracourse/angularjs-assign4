(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/templates/categories-items.html',
  bindings: {
    items: '<',
    category: '<'
  }
});


})();
