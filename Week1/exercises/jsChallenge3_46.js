// A repurposable function for the rest of the exercise
function randomizer(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Randomizes three numbers in range (0.. 100) and prints the largest one
function randomLargest() {
    var num1 = randomizer(0, 100);
    var num2 = randomizer(0, 100);
    var num3 = randomizer(0, 100);

    console.log(`The largest number among ${num1} / ${num2} / ${num3}, is ${Math.max(num1, num2, num3)}`)

}

//Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized
function randomEven() {
    var limit = randomizer(0, 100);

    for (var i = 0; i < limit; i++) {
        if (i % 2 === 0) { console.log(i) }
    }
}

/*Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. 
If the number was smaller than 40 nothing should be printed*/
function randomOdd() {
    var limit = randomizer(0, 100);
    if (limit > 40) {
        for (var i = 40; i < limit; i++) {
            if (i % 2 !== 0) { console.log(i) }
        }
    }

}

/*Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. 
If the number was smaller than 40, print all the numbers down to the randomized one 
(i.e. if the result was 37, you should print: 40, 39, 38, 37)*/
function randomOddSmallers() {
    var limit = randomizer(0, 100);
    if (limit > 40) {
        for (var i = 40; i < limit; i++) {
            if (i % 2 !== 0) { console.log(i) }
        }
    } else {
        for (var i = 40; i > limit; i--) {
            if (i % 2 !== 0) { console.log(i) }
        }
    }
}

//Randomizes a number n in range 0..100. 
//Then randomizes n more numbers in that range, printing the largest of them
function randomRandom() {
    var largest = 0;
    var num;
    var rand = randomizer(0, 100);
    console.log(`We will get ${rand} numbers`);

    for (var i = 0; i < rand; i++) {
        num = randomizer(0, rand);
        console.log(num);
        if (num > largest) {

            largest = num;
            console.log(`The largest is ${largest}`);
        }
    }
    return largest;
}

//Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits. 
//For instance, if the randomized number was 1049, program should print 14
function randomSum() {
    return randomizer(1000, 9999)
        .toString()
        .split('')
        .map(Number) // reconvert all elements into numbers
        .reduce((a, b) => (a + b), 0);
}

//Randomizes (range 1000..9999) and calculate the sum of its digits repeatedly until you reach one digit only.
//For instance, if the randomized number was 1049, program should print 5
function randomOne() {
    var num = randomizer(1000, 9999);
    while (num > 10) {
        num = num.toString()
            .split('')
            .map(Number)
            .reduce((a, b) => (a + b), 0);
    }
    return num;
}

//Randomizes two numbers and prints the smallest number that is greater than one, such that both numbers are divided by it with no remainder. 
//For instance, for 9 and 6 you should print 3. If there isn't one a proper note should be printed.
function randomSmallest() {
    var num1 = randomizer(0, 100);
    var num2 = randomizer(0, 100);

    for (var i = 2; i < 100; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            return i;
        }
    }
    return ('No number found');
}

// Find least common multiple of two random numbers
function randomLeastCommon() {
    var num1 = randomizer(0, 100);
    var num2 = randomizer(0, 100);
    console.log(num1);
    console.log(num2);

    if(num1 > num2) {
        var temp = num2;
        num2 = num1;
        num1 = temp;
    }
    console.log(num1)
    console.log(num2)

    mult1 = [num1];
    mult2 = [num2];

    for (var i =1 ; i <= mult1.length; i++) {
        mult1.push(num1*i);
        mult2.push(num2*i);
        for(var j = 0; j<mult2.length; j++){
            console.log(mult1[j] + '/' + mult2[j]);
            if(mult1[i]===mult2[j]) {return mult2[j]};
        }
    }         
}




