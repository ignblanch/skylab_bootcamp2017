// Tests
var counter = {
    total: 0,

    count: function() {
        this.total++;
    },

    getCount: function() {
        return this.total;
    }
}

// Test that focuses on our particular . We know counter is initialized at 0s
function testCounterCountsUp() {
    counter.count();

    if (counter.getCount() === 1) {
        console.log('Test OK!');
    } else {
        console.log('Test failed' + counter.getCount());
    }
}

// BDD - Based of behavior -  works no matter how we implement it
function testCounterCountsUp() {
    var initialCount = counter.getCount();
    counter.count();

    if (counter.getCount() === initialCount + 1) {
        console.log('Test OK!');
    } else {
        console.log('Test failed' + counter.getCount());
    }
}

testCounterCountsUp();



// - construir un calculator
// - que sume 2 numeros con la funcion sum()
// - que reste 2 numeros con la funcion sub()
// - que divida 2 numeros con la funcion div()
// - que multiplique dos numeros con la funcion mul()
// - los numeros solo pueden ser de tipo number, es decir, enteros y decimales
// - se espera que toda la implemetacion esté probada

function Calculator() {

    this.checkNumber = function (a, b) {
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

// UNIT TESTS
function testSum() {
    var calculator = new Calculator();
    var num1 = 5;
    var num2 = 4;
    var str = 'abc';


    testResult(num1, num2);
    testResult(str, str);


    function testResult(a, b) {
        console.log('Parameters passed:' + a + ' + ' + b);

        if (typeof(calculator.sum(a, b)) === 'number') {

            if (calculator.sum(a, b) === a + b) {
                console.log('SUM ok! ' + 'Test: ' + calculator.sum(a, b) + '/ Should be: ' + (a + b));
            } else {
                console.log('SUM failed: ' + calculator.sum(a, b) + '. Result should be ' + (a + b));
            }
        } else if (calculator.sum(a, b) === 'ERROR') {
            console.log('OK! Error detected: params were not numbers.');

        } else {
            console.log('Error detection failed! Function accepts NaN');
        }

    }
}



function testSub() {
    var calculator = new Calculator();
    var num1 = 5;
    var num2 = 4;
    var str = 'abc';


    testResult(num1, num2);
    testResult(str, str);


    function testResult(a, b) {
        console.log('Parameters passed: ' + a + ' - ' + b);

        if (typeof(calculator.sub(a, b)) === 'number') {

            if (calculator.sub(a, b) === a - b) {
                console.log('SUB ok! ' + 'Test: ' + calculator.sub(a, b) + '/ Should be: ' + (a - b));
            } else {
                console.log('SUB failed: ' + calculator.sub(a, b) + '. Result should be ' + (a - b));
            }
        } else if (calculator.sub(a, b) === 'ERROR') {
            console.log('OK! Error detected: params were not numbers.');

        } else {
            console.log('Error detection failed! Function accepts NaN');
        }

    }
}

function testDiv() {
    var calculator = new Calculator();
    var num1 = 5;
    var num2 = 4;
    var str = 'abc';


    testResult(num1, num2);
    testResult(str, str);


    function testResult(a, b) {
        console.log('Parameters passed: ' + a + ' / ' + b);

        if (typeof(calculator.div(a, b)) === 'number') {

            if (calculator.div(a, b) === a / b) {
                console.log('DIV ok! ' + 'Test: ' + calculator.div(a, b) + '/ Should be: ' + (a / b));
            } else {
                console.log('DIV failed: ' + calculator.div(a, b) + '. Result should be ' + (a / b));
            }
        } else if (calculator.div(a, b) === 'ERROR') {
            console.log('OK! Error detected: params were not numbers.');

        } else {
            console.log('Error detection failed! Function accepts NaN');
        }

    }
}

function testMul() {
    var calculator = new Calculator();
    var num1 = 5;
    var num2 = 4;
    var str = 'abc';


    testResult(num1, num2);
    testResult(str, str);


    function testResult(a, b) {
        console.log('Parameters passed: ' + a + ' * ' + b);

        if (typeof(calculator.mul(a, b)) === 'number') {

            if (calculator.mul(a, b) === a * b) {
                console.log('MUL ok! ' + 'Test: ' + calculator.mul(a, b) + '/ Should be: ' + (a * b));
            } else {
                console.log('MUL failed: ' + calculator.mul(a, b) + '. Result should be ' + (a * b));
            }
        } else if (calculator.mul(a, b) === 'ERROR') {
            console.log('OK! Error detected: params were not numbers.');

        } else {
            console.log('Error detection failed! Function accepts NaN');
        }

    }
}

testSum();
testSub();
testDiv();
testMul();

// TESTS ALL AT ONCE: NOT UNIT TEST
function testCalculator(a, b) {
    var calculator = new Calculator();

    if (typeof(calculator.sum(a, b)) === 'number') {
        console.log('Ok! chequea si son numeros');
        if (calculator.sum(a, b) === a + b) {
            console.log('SUM ok!' + 'Test: ' + calculator.sum(a, b) + '/ Should be: ' + (a + b));
        } else {
            console.log('SUM failed: ' + calculator.sum(a, b) + '. Result should be ' + (a + b));
        }

        if (calculator.sub(a, b) === a - b) {
            console.log('SUB ok!' + 'Test: ' + calculator.sub(a, b) + '/ Should be: ' + (a - b));
        } else {
            console.log('SUB failed: ' + calculator.sub(a, b) + '. Result should be ' + (a - b));
        }

        if (calculator.div(a, b) === a / b) {
            console.log('DIV ok!' + 'Test: ' + calculator.div(a, b) + '/ Should be: ' + (a / b));
        } else {
            console.log('DIV failed: ' + calculator.div(a, b) + '. Result should be ' + (a / b));
        }

        if (calculator.mul(a, b) === a * b) {
            console.log('MUL ok!' + 'Test: ' + calculator.mul(a, b) + '/ Should be: ' + (a * b));
        } else {
            console.log('MUL failed: ' + calculator.mul(a, b) + '. Result should be ' + (a * b));
        }
    } else if (calculator.sum(a, b) === 'ERROR') {
        console.log('El chequeo ha funcionado. Ha detectado el error');

    } else {
        console.log('El chequeo de numeros ha fallado! La funcion acepta NaN');
    }
}
