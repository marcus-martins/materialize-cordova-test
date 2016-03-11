/**
 * Created by marcus on 11/03/16.
 */
(function () {
    'use strict';

    angular
        .module('MaterializeApp')
        .controller('MenuCtrl', DefaultCtrl);

    DefaultCtrl.$inject = [ '$scope', '$state' ];

    function DefaultCtrl ($scope, $state) {
        $('.button-collapse').sideNav();

        $(document).ready(function(){
            $('ul.tabs').tabs();
        });

        $scope.goToTab = function (name) {
            $state.go(name);
        };
    }
}) ();