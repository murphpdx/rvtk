
'use strict';

angular.module("rvtk").directive("vehicle", function() {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'directives/vehicleAttitude.html'
    };
});

/*
angular.module("rvtk.vehicleAttitude", ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('directives/vehicleAttitude', {
    templateUrl: 'directives/vehicleAttitude/vehicleAttitude.html',
    controller: 'vehicleAttitudeCtrl'
  });
}])

.controller('vehicleAttitudeCtrl', [function() {

}]);
*/
