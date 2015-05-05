var assert = require("assert");
var Generator = require('../roman-numeral-generator.js');

describe('Roman Numeral Generator', function(){
  describe('#getNumeral()', function(){

    it('should return I when passed 1', function(){
      var generator = new Generator();
      var result = generator.getNumeral(1);
      assert.equal(result, 'I');
    })

    it('should return II when passed 2', function(){
      var generator = new Generator();
      var result = generator.getNumeral(2);
      assert.equal(result, 'II');
    })

    it('should return III when passed 3', function(){
      var generator = new Generator();
      var result = generator.getNumeral(3);
      assert.equal(result, 'III');
    })

    it('should return IV when passed 4', function(){
      var generator = new Generator();
      var result = generator.getNumeral(4);
      assert.equal(result, 'IV');
    })
    
    it('should return V when passed 5', function(){
      var generator = new Generator();
      var result = generator.getNumeral(5);
      assert.equal(result, 'V');
    })

    it('should return VI when passed 6', function(){
      var generator = new Generator();
      var result = generator.getNumeral(6);
      assert.equal(result, 'VI');
    })

    it('should return VII when passed 7', function(){
      var generator = new Generator();
      var result = generator.getNumeral(7);
      assert.equal(result, 'VII');
    })

    it('should return IX when passed 9', function(){
      var generator = new Generator();
      var result = generator.getNumeral(9);
      assert.equal(result, 'IX');
    })

  })
});

