// Solution 1
const fizzBuzz1 = (number) => {
  let print = '';
  for(let i = 1; i <= number; i++) {
    // Is the number mulpiple of 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      print = 'fizzbuzz';
    }
    else if (i % 3 === 0) {
      print = 'fizz';
    }
    else if (i % 5 === 0) {
      print = 'buzz';
    } else {
      print = i;
    }
    console.log(print);
  }
}

// Solution 2
//Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
const range = (count) => Array.from({length: count}, (v,i) => i + 1); // Helper function
const fizzBuzz2 = (number) => {
  for (i of range(number)) {
    if (i % (3 * 5) === 0) console.log('fizzbuzz');
    else if (i % 3 === 0) console.log('fizz');
    else if (i % 5 === 0) console.log('buzz');
    else console.log(i);
  }
}

const fizzBuzz = fizzBuzz2;

module.exports = fizzBuzz;