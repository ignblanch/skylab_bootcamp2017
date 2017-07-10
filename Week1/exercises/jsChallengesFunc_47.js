//The function should return the nth number of the fibonacci sequence.
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

//add(1,2,3,4) // => 10
function add(input) {
    return Array.from(arguments)
        .reduce((a, b) => a + b, 0);
}

//Write a JavaScript function that reverse a number
function reverseNumber(num) {
    return num.toString()
        .split('')
        .reverse()
        .join('');
}

// checks if string is palindrome
function isPalindrome(str) {
	str = str.replace(/\s/g, ''); // remove spaces
	
    var arr = str.split('');
    var j = arr.length - 1;

    for (var i = 0; i <= j; i++) {
        if (arr[i] != arr[j]) {
            return false;
        }
        j--;
    }
    return true;
}

//Write a JavaScript function that generates all combinations of a string
function stringComb(str) {
	var arr = [];
	for (i=0; i<str.length; i++) {
		for(j=i+1; j<=str.length; j++) {
			arr.push(str.substring(i, j));
		}
	}
	return arr;
}

//Write a JavaScript function that returns a passed string with letters in alphabetical order
function sortString(str) {
	return str.split('').sort().join('');
}

//Function that accepts a string and converts the first letter of each word in upper case
function capitalizeStr(str) {
	return str.split(' ').map(a => a.charAt(0).toUpperCase()+ a.substring(1)).join(' ');
}

//Function that accepts a string as a parameter and find the longest word within the string
function longestWord(str) {
	var arr = str.split(' ').sort((a,b) => b.length -a.length);
	return arr[0];
}

// Funtion that counts the number of vowels within the string
function countVowels(str) {
	var counter =0;
	str.split('').forEach(function(char){
		if(/[aeiouAEIOU]/.test(char)){counter++};
	}); 
	return counter;
}

// Check if number is prime
function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return true;
}

// Return the type of the parameter
function whatType(x) {
	return typeof(x);
}
// Second lowest and second greatest in array
function secLowsecGreat(arr) {
	var sorted = arr.sort((a, b) => a-b);
	return sorted[1] + ', ' +  sorted[arr.length-2];
}

// Write a JavaScript function which says whether a number is perfect
function isPerfect(num) {
	var dividers = [];

	for (var i = 1; i < num; i++) {
		if (num % i === 0) {
			dividers.push(i);
		}
	}

	var sum = dividers.reduce((sum, item) => sum + item);

	return num === sum;
}
