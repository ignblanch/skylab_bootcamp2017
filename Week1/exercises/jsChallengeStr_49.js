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

