// Solution 1
const fizzBuzz = (number) => {
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

//const fizzBuzz = fizzBuzz;

module.exports = fizzBuzz;