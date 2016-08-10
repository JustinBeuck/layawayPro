'use strict';

angular.module('layawayProApp.auth', ['layawayProApp.constants', 'layawayProApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
