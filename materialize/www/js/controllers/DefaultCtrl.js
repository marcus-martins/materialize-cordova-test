/**
 * Created by marcus on 01/03/16.
 */
(function () {
    'use strict';

    angular
        .module('MaterializeApp')
        .controller('DefaultCtrl', DefaultCtrl);

    DefaultCtrl.$inject = [ '$scope', '$state' ];

    function DefaultCtrl ($scope, $state) {
        $scope.showMenu = function () {
            if ($scope.current !== undefined) {
                return $scope.current.stateName !== 'app.information';
            } else {
                return true;
            }
        }
    }
}) ();