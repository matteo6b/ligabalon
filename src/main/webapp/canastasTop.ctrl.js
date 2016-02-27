/**
 * Created by Mateo on 24/2/16.
 */
'use strict'
angular.module('ligabalonApp')
    .controller('canastasTopCtrl', function($scope,Jugador) {
        $scope.topcanastas = [];

        $scope.a = function(numero){
        Jugador.top({numero: numero},function(result){
            $scope.topcanastas=result;

        }

        );


    };

});
