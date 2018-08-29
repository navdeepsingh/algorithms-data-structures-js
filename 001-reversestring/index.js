// Solution1
const reverse1 = (str) => str.split().reverse().join('');

// Solution 1a
// ES6 shorthand for solution 1
const reverse1a = (str) => [...str].reverse().join('');

// Solution 2
const reverse2 = (str) => {
  let reversed = '';
  for (let character of str) {
    debugger;
    reversed = `${character}${reversed}`;
  }
  return reversed;
}

reverse2('navdeep');

// Solution 3
const reverse3 = (str) => {
  return str.split('').reduce((reversed, character) => reversed = `${character}${reversed}`, '');
}

const reverse = reverse2;
module.exports = reverse;
