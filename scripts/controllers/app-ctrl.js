app.controller('AppCtrl', ['$scope', '$rootScope', '$timeout',
    function($scope, $rootScope, $timeout) {
        'use strict';

        $rootScope.loggedInStatus = false;

        $rootScope.notification = "";
        $rootScope.notificationType = "";
        $rootScope.notificationHidden = "hidden";

        $scope.$on("notification", function(event, data, timeoutNeeded) {
            $rootScope.notification = data.message;
            $rootScope.notificationType = data.type;
            $rootScope.notificationHidden = "";
            if (timeoutNeeded) {
                $timeout(function() {
                    $rootScope.notification = "";
                    $rootScope.notificationType = "";
                    $rootScope.notificationHidden = "hidden";
                }, 5000);
            }

        });

        $scope.$on("hideNotification", function(event) {
            $rootScope.notification = "";
            $rootScope.notificationType = "";
            $rootScope.notificationHidden = "hidden";
        });
    }
]);