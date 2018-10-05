const cleanString = (str) => str.replace(/[^\w+]/g, '').toLowerCase(); // Helper function
const sortString = (str) => cleanString(str).split('').sort().join(''); // helper Function

// Solution 1
const buildCharMap = (str) => { // Helper Function
	const charMap = {};
	for (const char of cleanString(str)) charMap[char] = charMap[char] + 1 || 1;
	return charMap;
};
const anagrams = (stringA, stringB) => {
	const aCharMap = buildCharMap(stringA);
	const bCharMap = buildCharMap(stringB);
	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) return false;
	for (const char in aCharMap) if (aCharMap[char] !== bCharMap[char]) return false;
	return true;
}

// Solution 2
const anagrams2 = (stringA, stringB) => {
	return sortString(stringA) === sortString(stringB);
}

module.exports = anagrams2;