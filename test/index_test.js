var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns 120 as the factorial of 5', ()=>{
      const expected = 120;
      const number = 5;
      const factorial = Calculate.factorial(number);
      assert.strictEqual(factorial, expected);
    });
    it('returns 5040 as the factorial of 7', ()=>{
      const expected = 5040;
      const number = 7;
      const factorial = Calculate.factorial(number); 
      assert.strictEqual(factorial, expected);
    });
    it('returns 1 as the factorial of 0', ()=>{
      const expected = 1;
      const number = 0;
      const factorial = Calculate.factorial(number); 
      assert.strictEqual(factorial, expected);
    });
  });
});