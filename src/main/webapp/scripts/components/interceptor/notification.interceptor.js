 'use strict';

angular.module('ligabalonApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-ligabalonApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-ligabalonApp-params')});
                }
                return response;
            }
        };
    });
