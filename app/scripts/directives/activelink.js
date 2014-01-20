'use strict';

angular.module('angulardevApp')
  .directive('activeLink', function($location) {
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
