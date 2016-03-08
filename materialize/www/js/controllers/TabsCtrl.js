/**
 * Created by marcus on 01/03/16.
 */
'use strict';

/**
 * @ngdoc function
 * @name sigaEscolaApp.controller:AgendaCtrl
 * @description
 * # AgendaCtrl
 * Controller of the sigaEscolaApp
 */
angular.module('MaterializeApp')
    .controller('TabsCtrl', function ($scope, $state) {

        $('.button-collapse').sideNav();

        $(document).ready(function(){
            $('ul.tabs').tabs();
        });

    });