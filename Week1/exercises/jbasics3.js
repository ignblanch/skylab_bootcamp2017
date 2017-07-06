// Pass an operand and two numbers and do the math
function calculator(op, num1, num2) {

    switch (op) {
        case 'sum':
            return num1 + num2;
            // break; not necessary because we return and that breaks the switch 
        case 'subtract':
            return num1 - num2;
            
        case 'multiply':
            return num1 * num2;
            
        case 'divide':
            return num1 / num2;
    }
}

// Same as before but with a non limited number of args
function calculator() {
	//ES6
    var nums = Array.from(arguments);
    //ES5.1:
    //var nums = Array.prototype.slice.call(arguments);

    switch (nums.shift()) {
        case 'sum':
            return nums.reduce((total, item) => total + item);
            break;
        case 'subtract':
            return nums.reduce((total, item) => total - item);
            break;
        case 'multiply':
            return nums.reduce((total, item) => total * item);
            break;
        case 'divide':
            return nums.reduce((total, item) => total / item, 1);
    }
}

// Given name and surname, combine them into a string
function getFullName(name, surname) {
    return ('Your full name is ' + name + ' ' + surname);
}

// Check if value passed is a number
function isNumber(value) {
    return !isNaN(value);
}

// Check if value passed is a string
function isString(value) {
    return typeof(value) === 'string';
}

// Check if value passed is a boolean
function isBoolean(value) {
    return typeof(value) === 'boolean';
}

// Enconde word substituting certain characters by numbers
function encodeWord(str) {
    var arr = str.split('');

    var newArr = arr.map(function(item) {
        if (item === 'T') return 7;
        else if (item === 'A') return 4;
        else if (item === 'S') return 5;
        else if (item === '0') return 0;
        else return item;
    });
    return newArr.join('');
}

// Same as previous but adding a random number every 7 chars
function encodeWordPlus(str) {
    var arr = str.split('');

    var newArr = arr.map(function(item) {
        if (item === 'T') return 7;
        else if (item === 'A') return 4;
        else if (item === 'S') return 5;
        else if (item === '0') return 0;
        else return item;
    });

    newArr = arr.map(function(item, index) {
        if (index > 0 && index % 7 === 0) {
            return item + Math.floor((Math.random() * 1000))
        } else {
            return item }
    });

    return newArr.join('');
}
