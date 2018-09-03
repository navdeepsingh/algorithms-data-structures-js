// Solution 1
const maxChar1 = (str) => {
  const charMap = {};
  str.split('').map(char => {
    console.log(char);    
    charMap[char] = charMap[char] + 1 || 1;
  });
  console.log(charMap);  
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