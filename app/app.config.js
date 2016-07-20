'use strict';

angular.module('contactManager')
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider
        .when('/contacts', {
            template: '<contact-list></contact-list>'
        })
        .when('/contacts/:contactId', {
            template: '<contact-detail></contact-detail>'
        })
        .otherwise('/contacts');
    }]);
