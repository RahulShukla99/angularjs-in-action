'use strict';

var app = angular.module('angulardevApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/forms', {
        templateUrl: 'views/forms.html',
        controller: 'FormsCtrl'
      })
      .when('/grids', {
        templateUrl: 'views/grids.html',
        controller: 'GridsCtrl'
      })
      .when('/maps', {
        templateUrl: 'views/maps.html',
        controller: 'MapsCtrl'
      })
      .when('/charts', {
        templateUrl: 'views/charts.html',
        controller: 'ChartsCtrl'
      })
      .when('/tables', {
        templateUrl: 'views/tables.html',
        controller: 'TablesCtrl'
      })
      .when('/extra', {
        templateUrl: 'views/extra.html',
        controller: 'ExtraCtrl'
      })
      .when('/email', {
        templateUrl: 'views/email.html',
        controller: 'EmailCtrl'
      })
      .when('/elements', {
        templateUrl: 'views/elements.html',
        controller: 'ElementsCtrl'
      })
      .when('/frontend', {
        templateUrl: 'views/frontend.html',
        controller: 'FrontendCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/messages', {
        templateUrl: 'views/messages.html',
        controller: 'MessagesCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/examples', {
        templateUrl: 'views/examples.html',
        controller: 'ExamplesCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/project', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    // $locationProvider
    //   .html5Mode(true)
    //   .hashPrefix('!');
  }
]);
