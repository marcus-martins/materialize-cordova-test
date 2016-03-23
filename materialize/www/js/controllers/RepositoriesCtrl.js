/**
 * Created by marcus on 10/03/16.
 */
(function () {
    'use strict';

    angular
        .module('MaterializeApp')
        .controller('RepositoriesCtrl', RepositoriesCtrl);

    RepositoriesCtrl.$inject = [ '$scope', 'RequestService', 'Config' ];

    function RepositoriesCtrl ($scope, RequestService, Config) {
        $scope.showLoader = true;

        RequestService.getApiResults(Config.APIURL + Config.ENDPOINT.TOPSTARS) .then(function (data) {
                // do something with data
                $scope.stars = data;
                $scope.showLoader = false;
            },
            function (error) {
                //do something with error
            });
    }

}) ();