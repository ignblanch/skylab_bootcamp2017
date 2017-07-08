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

    for (var i = 0; i > rand; i++) {
        num = randomizer(0, rand);
        if (num > largest) { largest = num }
    }

    return largest;
}
