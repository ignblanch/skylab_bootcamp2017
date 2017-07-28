// returns all numbers between an interval, if first is lower returns -1
function interval (x1, x2) {
    var arr = [];
    if (x1 > x2) {
        return -1
    }

    while (x1 <= x2) {
        arr.push(x1);
        x1++;
    }
    return arr;
}

// mult table
function multTable() {
    var num = 1;
    while (num <= 10) {
        var arr = [];
        for (var i = 1; i <= 10; i++) {
            arr.push(num * i);
        }
        console.log(arr.join('\t'));
        num++;
    }
}

// same as before in a single string
function multiplicar() {
    var result = '';
    for (var i = 1; i <= 10; ++i) {
        for (var j = 1; j <= 10; ++j) {
            result += i * j;
            if (j < 10) {
                result += '\t';
            }
        }
        if (i < 10) {
            result += '\n';
        }
    }
    return result;
}

// mult of 23 up until 500 and print sum of all
function multof23() {
    var sum = 0;
    var num = 0;
    while (num < 500) {
        if (num % 23 === 0) {
            sum += num;
            console.log(num);
        }
        num++;
    }
    console.log('The total sum is : ' + sum)
}

//max between two numbers
function max(num1, num2) {
    if (num1 > num2) { console.log('First is the greatest') } else if (num1 < num2) { console.log('Second is the greatest') } else { console.log('Both are equal') }
}

//max between three numbers
function maxOf3(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) { console.log('They are all the same') } else {
        var arr = [num1, num2, num3];
        arr.sort((a, b) => (a - b));
        console.log('The greatest is ' + arr[arr.length - 1])
    }
}

// check if char is vowel
function isVowel(char) {
    return /[aeiou]/.test(char);

    //return(char==='a'||char==='e'||char==='i'||char==='o'||char==='u');
}

//transform RGB code for blue
function getBlueRGB(code) {
    code = code.slice(1);
    var str = 'rgb(';
    var arr = code.split('');

    for (var i = 0; i < arr.length - 1; i += 2) {
        if (arr[i] === '0') {
            str = str.concat('0')
        } else if (arr[i] === 'F') {
            str = str.concat(', 255, ')
        }
    }
    str = str.concat(')')
    console.log(str);
}

//transform RGB code for a basic set of colors previously given
function getBasicRGBB(code) {
    var color = '';
    if (code === '#000000') {
        color = 'black';
    } else if (code === '#FFFFFF') {
        color = 'white';
    } else if (code === '#FF0000') {
        color = 'red';
    } else if (code === '#00FF00') {
        color = 'green';
    } else if (code === '#0000FF') {
        color = 'blue';
    }
    code = code.slice(1);

    var str = 'rgb(';
    var arr = code.split('');
    for (var i = 0; i < arr.length - 1; i += 2) {
        if (arr[i] === '0') {
            str += '0,';
        } else if (arr[i] === 'F') {
            str += '255,';

        }
    }

    //str = str.substring(0, str.length - 1);
    str = str.slice(0, str.length - 1);

    str += ')   ';
    console.log(str + color);
}

// same as befor but valid for any color given
function getRGB(color) {
    var rr = color.slice(1, 3); // we get rid of position 0: #
    var gg = color.slice(3, 5);
    var bb = color.slice(5, 7);

    var r10 = parseInt(rr, 16);
    var g10 = parseInt(gg, 16);
    var b10 = parseInt(bb, 16);

    return ('rgb (' + r10 + ', ' + g10 + ', ' + b10 + ')');
}
