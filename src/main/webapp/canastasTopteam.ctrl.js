/**
 * Created by Mateo on 7/3/16.
 */

'use strict'
angular.module('ligabalonApp')
    .controller('canastasTopteamCtrl', function($scope,Jugador,entity,Equipo) {
        $scope.topcanastas = [];
        $scope.equipos=entity;
        $scope.equiposel;

        $scope.orderByMe = function(x) {
            $scope.myOrderBy = x;
        }


            $scope.a = function (id, canastas) {
                Equipo.topbyEquipo({id: id, canastas: canastas}, function (result) {
                    $scope.topcanastas = result;


                });
            };


             }) ;

