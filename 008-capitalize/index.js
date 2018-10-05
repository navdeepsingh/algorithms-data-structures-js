// Solution 1
const capitalize = (string) => {
	let newString = [];
	for( let word of string.split(' ') ) {
		newString.push(word[0].toUpperCase() + word.slice(1));
	}
	return newString.join(' ');
}

// Solution 2
const range = (count) => Array.from({length: count}, (v,i) => i + 1); // Helper Function
const capitalize1 = (string) => {
	let result = string[0].toUpperCase();
	for(let index of range(string.length - 1)) {
		if (string[index-1] === ' ') {
			result += string[index].toUpperCase();
		} else {
			result += string[index];
		}
	}
	return result;
}

module.exports = capitalize1;