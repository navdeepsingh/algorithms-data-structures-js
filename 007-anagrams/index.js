// Solution 1
const anagrams = (str1, str2) => {
  // http://jsbin.com/zubawixime/edit?js,console
  str1 = str1.replace(/[^\w]/g, '').toLowerCase();
  str2 = str2.replace(/[^\w]/g, '').toLowerCase();
  charCount1 = [];
  [...str1].map(char => {
    charCount1[char] = charCount1[char] + 1 || 1;
  });
  //console.log(charCount1);
}


module.exports = anagrams;