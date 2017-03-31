'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('rvtk', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

app.controller('rvtkController', ['$window', function($scope) {
    $scope.initialise = function() {
        $window.alert('test');
        $scope.VisibleCamera = true;
    }
}]);
