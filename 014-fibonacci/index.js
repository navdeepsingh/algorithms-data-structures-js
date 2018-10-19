// Solution 1
// Iteration and Linear Runtime Complexity 
const fibonacci = (n) => {
	let results = [0,1];
	for(let i = 2; i <= n; i++ ){
		results.push((results[results.length - 1]) + (results[results.length - 2]));
	}
	return results[results.length - 1];
}

module.exports = fibonacci;