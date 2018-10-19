// Solution 1
// Iteration and Linear Runtime Complexity 
const fibonacci1 = (n) => {
	let results = [0,1];
	for(let i = 2; i <= n; i++ ){
		results.push((results[results.length - 1]) + (results[results.length - 2]));
	}
	return results[results.length - 1];
}

// Solution 2
// Recursive Solution
const fibonacci2 = (n) => {
	// Set Base Case
	if (n < 2) return n;

	return fibonacci2(n - 1) + fibonacci2(n-2);
}

module.exports = fibonacci2;