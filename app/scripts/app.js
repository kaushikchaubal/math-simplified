'use strict';

angular
  .module('math-simplified', [
    'learn',
    'discuss',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html'
      })
      .when('/learn', {
        templateUrl: 'app/views/learn.html'
      })
      .when('/construction', {
        templateUrl: 'app/views/construction.html'
      })
      .when('/about', {
        templateUrl: 'app/views/about.html'
      })
      .when('/trignometry', {
        templateUrl: 'app/views/trignometry.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
