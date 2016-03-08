/**
 * Created by marcus on 01/03/16.
 */
(function() {
    'use strict';

    angular.module('MaterializeApp',['ui.router'])
        .config(configApp)
        .run(runApp);

    configApp.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configApp ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/cards");

        $stateProvider
            .state('cards', {
                url: "/cards",
                views: {
                    'appContent': {
                        templateUrl: "views/cards.html",
                        controller: "TabsCtrl"
                    }
                }
            })
            .state('cards2', {
                url: "/cards2",
                views: {
                    'appContent': {
                        templateUrl: "views/cards2.html",
                        controller: "TabsCtrl"
                    }
                }
            });
    }

    function runApp() {
        var app = {
            // Application Constructor
            initialize: function() {
                this.bindEvents();
            },
            // Bind Event Listeners
            //
            // Bind any events that are required on startup. Common events are:
            // 'load', 'deviceready', 'offline', and 'online'.
            bindEvents: function() {
                document.addEventListener('deviceready', this.onDeviceReady, false);
            },
            // deviceready Event Handler
            //
            // The scope of 'this' is the event. In order to call the 'receivedEvent'
            // function, we must explicitly call 'app.receivedEvent(...);'
            onDeviceReady: function() {
                app.receivedEvent('deviceready');
                $('.button-collapse').sideNav();

                $(document).ready(function(){
                    $('ul.tabs').tabs();
                });
            },
            // Update DOM on a Received Event
            receivedEvent: function(id) {
                console.log('Received Event: ' + id);
            }
        };

        app.initialize();
    }
})();