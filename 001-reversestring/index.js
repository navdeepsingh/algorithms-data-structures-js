// Solution1
const reverse1 = (str) => str.split().reverse().join('');

// Solution 1a
// ES6 shorthand for solution 1
const reverse1a = (str) => [...str].reverse().join('');

// Solution 2
const reverse2 = (str) => {
  let reversed = '';
  debugger;
  for (let character of str) reversed = `${character}${reversed}`;
  return reversed;
}

// Solution 3
const reverse3 = (str) => {
  return str.split('').reduce((reversed, character) => reversed = `${character}${reversed}`, '');
}

const reverse = reverse3;
module.exports = reverse;
