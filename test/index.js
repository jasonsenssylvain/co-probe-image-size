'use strict';
var coImage = require("../");
var co = require("co");
describe("test getSize", function() {
  it("$getSize", function (done) {
    co(function *() {
      var dimensions = yield coImage.getSize("123.jpg");
      console.log(dimensions);
      done();
    });
  });
});
    