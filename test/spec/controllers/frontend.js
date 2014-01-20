'use strict';

describe('Controller: FrontendCtrl', function () {

  // load the controller's module
  beforeEach(module('angulardevApp'));

  var FrontendCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FrontendCtrl = $controller('FrontendCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
