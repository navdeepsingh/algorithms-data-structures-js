// Solution 1
const vowels1 = (string) => {
	let vowelsCount = 0; 
	const vowelsChecker = 'aieou';
	string.toLowerCase().split('').map(char => {
		if (vowelsChecker.includes(char)) {
			vowelsCount++;
		}
	});
	return vowelsCount;
}

// Solution 2
const vowels2 = (string) => {
	const matches = string.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}



module.exports = vowels2;