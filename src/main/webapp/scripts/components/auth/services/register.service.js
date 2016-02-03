'use strict';

angular.module('ligabalonApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


