/**
 * Created by marcus on 10/03/16.
 */
(function() {
    'use strict';

    angular
        .module('MaterializeApp')
        .factory('RequestService', RequestService);

    RequestService.$inject = ['$http', '$q'];

    function RequestService ($http, $q) {

        var RequestService = {
            getApiResults: getApiResults
        };

        return RequestService;

        function getApiResults(url) {
            var deferred = $q.defer();

            $http.get(url)
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }

}) ();