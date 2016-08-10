'use strict';

angular.module('layawayProApp', ['layawayProApp.auth', 'layawayProApp.admin',
    'layawayProApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router',
    'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
