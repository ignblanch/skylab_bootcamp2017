describe("Calculator", function() {
    var calc;

    beforeEach(function() {
        calc = new Calculator();
    });

    function getRandomDiff0() {
        return Math.ceil(Math.random() * 10);
    }

    it("sums ok", function() {
      var n1 = getRandomDiff0();
      var n2 = getRandomDiff0();
      var result = n1 + n2;

        expect(calc.sum(n1, n2)).toBe(result);
    });

    it("subtracts ok", function() {
      var n1 = getRandomDiff0();
      var n2 = getRandomDiff0();
      var result = n1 - n2;

        expect(calc.sub(n1, n2)).toBe(result);
    });

    it("multiplies ok", function() {
      var n1 = getRandomDiff0();
      var n2 = getRandomDiff0();
      var result = n1 * n2;

        expect(calc.mul(n1, n2)).toBe(result);
    });

    it("divides ok", function() {
      var n1 = getRandomDiff0();
      var n2 = getRandomDiff0();
      var result = n1 / n2;

        expect(calc.div(n1, n2)).toBe(result);
    });

    it("checks numbers ok", function() {
      var n1 = getRandomDiff0();
      var n2 = getRandomDiff0();

        expect(calc.checkNumber(n1, n2)).toBe(true);
    });

});
