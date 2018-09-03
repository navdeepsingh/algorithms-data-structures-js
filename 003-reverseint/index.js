const reverseInt = (int) => {
  return Math.sign(int) * parseInt(int.toString().split('').reverse().join(''));
}
module.exports = reverseInt;