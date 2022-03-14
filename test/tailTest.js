const tail = require('../tail');
const assert = require('chai').assert;

// TEST CODE


describe ('#tail', () => {
  it("returns [8, 9] for [7, 8, 9]", () => {
    assert.deepEqual(tail([7, 8, 9]), [8, 9]);
  });
  it("returns ['123ABC', '345TCG'] for ['123ABC', '345TCG', 'DDR55']", () => {
    assert.deepEqual(tail(['123ABC', '345TCG', 'DDR55']), ['345TCG', 'DDR55']);
  });
  
});