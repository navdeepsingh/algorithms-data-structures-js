// Solution 1
const palindrome1 = (str) => {
  const reversed = [...str].reverse().join('');
  return reversed === str;
}

// Solution 2
// Going to use this Array.prototype.every()
const palindrome2 = (str) => {
    return[...str].every((character, i) => {
      return character === str[str.length - i - 1];
    });
}
palindrome2('navdeep');

const palindrome = palindrome2;
module.exports = palindrome;