// Solution 1
const anagrams = (str1, str2) => {
  const regex = new RegExp("/[\s|\!|,]/", 'g');

  // http://jsbin.com/zubawixime/edit?js,console
  // Check str1
  const str1Length = [...str1].filter((elem) => elem.match(regex)).length;
  console.log(str1Length);
}


module.exports = anagrams;