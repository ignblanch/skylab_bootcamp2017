function Calculator() {

    this.checkNumber = function(a, b) {
        return (typeof(a) === 'number' && typeof(b) === 'number');
    }

    this.sum = function(a, b) {
        if (this.checkNumber(a, b)) {
            return a + b;
        } else {
            return ('ERROR');
        }

    }
    this.sub = function(a, b) {
        if (this.checkNumber(a, b)) {
            return a - b;
        } else {
            return ('ERROR');
        }
    }
    this.div = function(a, b) {
        if (this.checkNumber(a, b)) {
            return a / b;
        } else {
            return ('ERROR');
        }
    }
    this.mul = function(a, b) {
        if (this.checkNumber(a, b)) {
            return a * b;
        } else {
            return ('ERROR');
        }
    }
}
