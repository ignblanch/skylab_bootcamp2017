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
    return typeof(value) === 'number';
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
        switch (item) {
            case 'T':
                return '7';
            case 'A':
                return '4';

            case 'S':
                return '5';
            case 'O':
                return '0';
            default:
                return item;
        }
    });

    return newArr.join('');
}

// Same as before with regex
function encodeWord(word){
	var wEncoded = word.replace(/T/gi,7).replace(/A/gi,4).replace(/S/gi,5).replace(/O/gi,0);
	return wEncoded;
}

// Same as previous but adding a random number every 7 chars
function encodeWordPlus(str) {
    var arr = str.split('');

    var newArr = arr.map(function(item, index) {

        switch (item) {
            case 'T':
                item = '7';
                break;
            case 'A':
                item = '4';
                break;
            case 'S':
                item = '5';
                break;
            case 'O':
                item = '0';
                break;
            default:
                item = item;
        }

        if (index > 0 && index % 6 === 0) {
            item += Math.floor((Math.random() * 1000));
        }

        return item;
    });

    return newArr.join('');
}
