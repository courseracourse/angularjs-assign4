(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Menu categories page
  .state('menuList', {
    url: '/menu-list',
    templateUrl: 'src/templates/menu-list.template.html'
  })

  // Menu items page
  .state('menuItem', {
    url: '/menu-item/{itemId}',
    templateUrl: 'src/templates/item-detail.template.html',
    params: {
      itemId: null
    }
  });

}

})();
