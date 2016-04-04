/**
 * Created by Mateo on 24/2/16.
 */

angular.module('ligabalonApp')
    .config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('p2ej1', {
                url: '/p2ej1',
                data: {
                    pageTitle: 'p2ej1'
                },
                views: {
                    'content@': {
                        templateUrl: 'p2ej1.html',
                        controller: 'canastasTopCtrl'
                    }
                },
                resolve: {
                    entity: ['$stateParams', 'Jugador', function($stateParams, Jugador) {

                    return Jugador.top();

                    }]
                }
            })
            .state('p2ej2', {
                url: '/p2ej2',
                data: {
                    pageTitle: 'p2ej2'
                },
                views: {
                    'content@': {
                        templateUrl: 'p2ej2.html',
                        controller: 'canastasTopteamCtrl'
                    }
                },
                resolve: {
                     entity: ['$stateParams', 'Equipo', function($stateParams, Equipo) {

                       return Equipo.query();

                     }]
                }
            })


    });
