
'use strict';

angular.module("rvtk").directive("buttonMenu", function() {
    return {
        restrict: 'E',
        scope: { VisibleCamera: '='},
        templateUrl: 'directives/buttonMenu.html',
        controller: 'navigation'
    };
});
