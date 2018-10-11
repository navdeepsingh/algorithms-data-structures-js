// Solution 1
const vowels = (string) => {
	let vowelsCount = 0; 
	const vowelsArray = ['a','e','i','o','u'];
	string.toLowerCase().split('').map(char => {
		if(vowelsArray.includes(char)) {
			vowelsCount++;
		}
	});
	return vowelsCount;
}



module.exports = vowels;