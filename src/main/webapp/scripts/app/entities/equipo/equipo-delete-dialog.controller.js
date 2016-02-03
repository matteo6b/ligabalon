'use strict';

angular.module('ligabalonApp')
	.controller('EquipoDeleteController', function($scope, $modalInstance, entity, Equipo) {

        $scope.equipo = entity;
        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Equipo.delete({id: id},
                function () {
                    $modalInstance.close(true);
                });
        };

    });