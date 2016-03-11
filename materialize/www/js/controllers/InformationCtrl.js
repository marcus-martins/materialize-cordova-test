/**
 * Created by marcus on 10/03/16.
 */
(function () {
    'use strict';

    angular
        .module('MaterializeApp')
        .controller('InformationCtrl', InformationCtrl);

    InformationCtrl.$inject = [ '$scope', '$state', 'RequestService', '$stateParams', 'Config' ];

    function InformationCtrl ($stateParams) {
        console.log($stateParams.userId);
    }

}) ();