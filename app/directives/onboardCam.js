'use strict';

angular.module("rvtk").directive("onboardCamera", function() {
    return {
        restrict: 'E',
        scope: { VisibleCamera: '=' },
        templateUrl: 'directives/onboardCam.html'
    };
});

