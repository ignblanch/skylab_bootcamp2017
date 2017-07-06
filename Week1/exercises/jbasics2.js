/*Write a function translate() that will translate a text into "rövarspråket". 
/That is, double every consonant and place an occurrence of "o" in between. 
For example, translate("this is fun") should return the string "tothohisos isos fofunon".*/

function translate(word) {
    var arr = word.split('');
    var newArr = [];

    function isVowelorSpace(char) {
        return /[aeiou ]/.test(char);
    }

    for (var i = 0; i < arr.length; i++) {
        if (!isVowel(arr[i])) {
            newArr.push(arr[i], 'o', arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr.join('');
}

//function that sums all elements in array
function sum(arr) {
    return arr.reduce((total, item) => total + item); // no initial value : it is first element of array by default
}

// function that multiplies all elements in array
function mult(arr) {
    return arr.reduce((total, item) => total * item);
}

//reverses a string
function rev(str) {
    var arr = str.split('');
    return arr.reverse().join('');
}

// translates a string into a language provided by object
function translator(str) {

    var dic = {
        "merry": "god",
        "christmas": "jul",
        "and": "och",
        "happy": "gott",
        "new": "nytt",
        "year": "år"
    };

    var arr = str.split(' ');
    var newArr = [];

    arr.forEach(function(item) {
        newArr.push(dic[item]);
    });

    return newArr.join(' ');
}

//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(arr) {
    arr = arr.sort(function(a, b) {
        return (a.length - b.length);
    });

    return arr.pop().length;
}

//Write a function that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(arr, int) {
    return arr.filter(function(item) {
        return item.length > int;
    });
}

// gets a string and stores chars and their frequency in an object
function charFreq(str) {
    var obj = {};
    var arr = str.split('');

    arr.forEach(function(item) {
        if (Object.keys(obj).indexOf(item) < 0) {
            obj[item] = 1;
        } else {
            obj[item]++;
        }
    });

    return obj;
}
