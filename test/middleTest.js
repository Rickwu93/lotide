const middle = require('../middle.js');
const assert = require('chai').assert;



describe ('#middle', () => {
  it("returns [8] for [7, 8, 9]", () => {
    assert.deepEqual(middle([7, 8, 9]), [8]);
  });
  it("returns [7] for [5, 6, 7, 8, 9]", () => {
    assert.deepEqual(middle([5, 6, 7, 8, 9]), [7]);
  });
  it("returns [7] for [5, 6, 7, 8, 9, 10]", () => {
    assert.deepEqual(middle([5, 6, 7, 8, 9, 10]), [7, 8]);
  });
});