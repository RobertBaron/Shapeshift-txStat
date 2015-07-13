(function() {
  'use strict';

  angular
    .module('shiftGui')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/:address?', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
