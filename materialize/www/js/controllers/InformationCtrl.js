/**
 * Created by marcus on 10/03/16.
 */
(function () {
    'use strict';

    angular
        .module('MaterializeApp')
        .controller('InformationCtrl', InformationCtrl);

    InformationCtrl.$inject = [ '$stateParams', '$scope', 'RequestService', 'Config' ];

    function InformationCtrl ($stateParams, $scope) {

        $scope.idUser = "ID do Repositório: " + $stateParams.idUser;
    }

}) ();