// Solution 1
const chunk1 = (array, size) => {
  const chunked = [];

  for (let item of array) {
    const last = chunked[chunked.length - 1]; 
    
    if(!last || last.length === size) {
      chunked.push([item]);
    } else {
      last.push(item);
    }
  }

  return chunked;
}

// Solution 2
const chunk2 = (array, size) => {
  const chunked = [];
  for (let i = 0; i < array.length; i = i + size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
}

const chunk = chunk2;

module.exports = chunk;