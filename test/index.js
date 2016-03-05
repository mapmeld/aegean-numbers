var assert = require('assert');
var aegean = require('../aegean-numbers');

describe('to Aegean numerals', function() {
  it('should return 𐄐 when the value is 10', function() {
    var ret = aegean(10);
    assert.equal(ret, '𐄐');
  });

  it('should replace numbers in strings', function() {
    var ret = aegean('2 steps forward, 3 steps back');
    assert.equal(ret, '𐄈 steps forward, 𐄉 steps back');
  });

  it('should reject negative numbers', function() {
    try {
      var a = aegean(-110);
      assert.equal(a, 'fail');
    } catch(e) {
      assert.equal(e, 'negative numbers not supported');
    }
  });
});

describe('from Aegean numerals', function() {
  it('should return 10 when the value is 𐄐', function() {
    var ret = aegean('𐄐', true);
    assert.equal(ret, 10);
  });

  it('should return 321 when the value is 𐄛𐄑𐄇', function() {
    var ret = aegean('𐄛𐄑𐄇', true);
    assert.equal(ret, 321);
  });

  it('should replace numbers in strings', function() {
    var ret = aegean('take 𐄈 steps forward, 𐄉 steps back', true);
    assert.equal(ret, 'take 2 steps forward, 3 steps back');
  });

  it('should reject repeated place value', function() {
    try {
      var a = aegean('𐄈𐄉', true);
      assert.equal(a, 'fail');
    } catch(e) {
      assert.equal(e, 'place value repeats');
    }
  });
});
