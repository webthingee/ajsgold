'use strict';

describe('Service: mySerivcce', function () {

  // load the service's module
  beforeEach(module('myApp'));

  // instantiate service
  var mySerivcce;
  beforeEach(inject(function (_mySerivcce_) {
    mySerivcce = _mySerivcce_;
  }));

  it('should do something', function () {
    expect(!!mySerivcce).toBe(true);
  });

});
