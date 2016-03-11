/**
 * Created by marcus on 10/03/16.
 */
(function () {
    'use strict';

    angular
        .module('MaterializeApp')
        .factory("Config", Config);

    function Config () {
        var constants = {
            APIURL: "https://api.github.com",
            ENDPOINT: {
                TOPSTARS: "/search/repositories?q=language:Java&sort=stars&page=1",
                MOREINFORMATION: "/repos"
            }
        };
        return constants;
    }
}) ();