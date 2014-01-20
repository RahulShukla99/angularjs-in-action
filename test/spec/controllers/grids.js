'use strict';

describe('Controller: GridsCtrl', function () {

  // load the controller's module
  beforeEach(module('angulardevApp'));

  var GridsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GridsCtrl = $controller('GridsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
