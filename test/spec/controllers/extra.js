'use strict';

describe('Controller: ExtraCtrl', function () {

  // load the controller's module
  beforeEach(module('angulardevApp'));

  var ExtraCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExtraCtrl = $controller('ExtraCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
