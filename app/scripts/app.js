'use strict';

/**
 * @ngdoc overview
 * @name mytodoApp
 * @description
 * # mytodoApp
 *
 * Main module of the application.
 */
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
      .when('/discuss', {
        templateUrl: 'app/views/construction.html'
      })
      .when('/about', {
        templateUrl: 'app/views/about.html'
      })
      .when('/contact', {
        templateUrl: 'app/views/construction.html'
      })
      .when('/trignometry', {
        templateUrl: 'app/views/trignometry.html'
      })
      .when('/construction', {
        templateUrl: 'app/views/construction.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
