'use strict';

// Declare app level module which depends on views, and components
angular.module('DreamFactoryPOC', [
  'ngRoute',
  'DreamFactoryPOC.view1'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);