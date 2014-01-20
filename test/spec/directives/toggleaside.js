'use strict';

describe('Directive: toggleAside', function () {

  // load the directive's module
  beforeEach(module('angulardevApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<toggle-aside></toggle-aside>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the toggleAside directive');
  }));
});
