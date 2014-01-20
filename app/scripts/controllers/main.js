'use strict';

var app = angular.module('angulardevApp');

app.controller('MainCtrl', ['$scope',
  function($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
])
  .controller('TopbarCtrl', ['$scope',
    function($scope) {
      $scope.menus = [{
        link: '/settings',
        icon: 'fa fa-cog',
        title: 'Settings'
      }];
    }
  ])
  .controller('AsideCtrl', ['$scope', '$location',
    function($scope) {
      $scope.menus = [{
        link: '/',
        icon: 'fa fa-home',
        title: 'Dashboard'
      }, {
        link: '/examples',
        icon: 'fa fa-code',
        title: 'Examples'
      }, {
        link: '/email',
        icon: 'fa fa-envelope',
        title: 'Email'
      }, {
        link: '/frontend',
        icon: 'fa fa-flag',
        title: 'Frontend'
      }, {
        link: '/elements',
        icon: 'fa fa-bookmark',
        title: 'UI Elements'
      }, {
        link: '/forms',
        icon: 'fa fa-align-right',
        title: 'Forms'
      }, {
        link: '/grids',
        icon: 'fa fa-book',
        title: 'Grids'
      }, {
        link: '/tables',
        icon: 'fa fa-th-large',
        title: 'Tables'
      }, {
        link: '/maps',
        icon: 'fa fa-map-marker',
        title: 'Maps'
      }, {
        link: '/charts',
        icon: 'fa fa-bar-chart-o',
        title: 'Charts'
      }, {
        link: '/extra',
        icon: 'fa fa-gift',
        title: 'Extra'
      }];
    }
  ]);
