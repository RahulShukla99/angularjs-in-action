'use strict';

angular.module('angulardevApp')
  .directive('toggleAside', ['$cookieStore',
    function($cookieStore) {
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
    }
  ]);
