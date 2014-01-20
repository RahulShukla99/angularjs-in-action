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
      .otherwise({
        redirectTo: '/'
      });

    // $locationProvider
    //   .html5Mode(true)
    //   .hashPrefix('!');
  }
]);

app.directive('activeLink', function($location) {
  var link = function(scope, element) {
    scope.$watch(function() {
        return $location.path();
      },
      function(path) {
        var url = element.find('a').attr('href');
        if (url) {
          url = url.substring(1);
        }

        if (path === url) {
          element.addClass('active');
          element.append('<span class="selected"></span>');
        } else {
          element.removeClass('active');
          element.find('span.selected').remove();
        }
      });
  };

  return {
    restrict: 'A',
    link: link
  };
});

app.directive('toggleAside', ['$cookieStore', function($cookieStore) {
  var body = angular.element('body');

  var link = function(scope, element) {
    element.on('click', 'a', function(e) {
      e.preventDefault();

      body.toggleClass('mini');

      scope.$apply(function() {
        $cookieStore.put('toggle', body.hasClass('mini'));
      });
    });
  };

  if ($cookieStore.get('toggle') === true) {
    body.addClass('mini');
  }

  return {
    restrict: 'A',
    link: link
  };
}]);
