// Solution 1
// Iteration & Linear Runtime Complexity => O(n)
const fibonacci1 = (n) => {
	let results = [0,1];
	for(let i = 2; i <= n; i++ ){
		results.push((results[results.length - 1]) + (results[results.length - 2]));
	}
	return results[results.length - 1];
}

// Solution 2
// Recursive Solution & Exponential => O(2 ** n)
const fibonacci2 = (n) => {
	// Set Base Case
	if (n < 2) return n;
	return fibonacci2(n - 1) + fibonacci2(n-2);
}

// Solution 3
// Linear Complexity
const memoize = (fn) => { // Utility Function
	const cache = {};
	return (...args) => {
		if (cache[args]) { return cache[args]; }
		cache[args] = fn.apply(this, args);
		return cache[args];
	};
};

let fibonacci3 = (n) => {
	if (n < 2) return n;
	return fibonacci3(n - 1) + fibonacci3(n - 2);
}
fibonacci3 = memoize(fibonacci3);

const fibonacci = fibonacci3;
module.exports = fibonacci;