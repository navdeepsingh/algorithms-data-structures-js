// Solution 1
const maxChar1 = (str) => {
  const charMap = {};
  let max = 0;
  let maxChar = '';
  // Break the string into array
  // Loop thru each character 
  // Add character and it count in new object
  str.split('').map(char => {  
    charMap[char] = charMap[char] + 1 || 1;
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  });
  return maxChar;
}

// Solution 1
const maxChar2 = (str) => {
  const charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
}
//maxChar1('navdeep');

const maxChar = maxChar1;

module.exports = maxChar;