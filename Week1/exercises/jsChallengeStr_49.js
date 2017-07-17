//Write a JavaScript function to check whether an input is a string or not
function isString(a) {
	return typeof(a) === 'string';
}

//Write a JavaScript function to check whether a string is blank or not
function isBlank(str) {
	return str.length === 0;
}

//Write a JavaScript function to split a string and convert it into an array of words
function toArr(str) {
	return str.split(' ');
}

//Write a JavaScript function to remove specified number of characters from a string
function truncate(str, chars) {
	return str.substring(0, chars);
} 

//Write a JavaScript function to convert a string name in abbreviated form
function abbrevName(fullname) {
	var arr = fullname.split(' ');
	arr[1] = arr[1][0].toUpperCase();
	
	return arr.join(' ') + '.';
}

//Write a JavaScript function to hide email addresses to protect from unauthorized user
function protectEmail(address) {
	return address.substr(0, 4) + '...' + address.substr(address.indexOf('@'), address.length);
}

//Write a JavaScript function to parameterize a string
function parameterize(str) {
	return str.replace(/\./g, '').replace(/ /g, '-').toLowerCase();
}

//Write a JavaScript function to capitalize the first letter of a string
function capitalizeFirst(str) {
	return str.substring(0, 1).toUpperCase() + str.substring(1);
}

// capitalize first letter of each word
function capitalizeWords(str) {
	return str.split(' ')
			.map(word=>word.substring(0, 1).toUpperCase() + word.substring(1))
			.join(' ');
}

//converts upper case letters to lower case, and lower case letters to upper case
function swapCase(str) {
	var arr = str.split('');
	return (arr.map(function(item){
		if(/[a-z]/g.test(item)){return item.toUpperCase()}
			else{return item.toLowerCase()}
	})).join('');
}

function camelize(str) {
	//TODO
}
