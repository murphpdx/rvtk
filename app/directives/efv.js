'use strict';

angular.module("rvtk").directive("efv", function() {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'directives/efv.html'
    };
});
/*
angular.module("rvtk.efv", ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('directives/efv', {
    //template: 'Hello world',
    template: '<img width="560" height="315" src="imgs/efv.png" / >',
    //templateUrl: 'directives/efv/efv.html',
    controller: 'efvCtrl'
  });
}])

.controller('efvCtrl', [function() {

}]);
*/

