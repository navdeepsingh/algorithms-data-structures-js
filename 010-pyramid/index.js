// Solution 1
const pyramid1 = (n) => {
	const totalColumns = n + (n - 1);
	const midpoint = Math.floor(totalColumns / 2);
	for (let i = 0; i < n; i++) { // For rows
		let level = '';
		
		for (let j = 0; j < totalColumns; j++) { // For columns
			if (midpoint - i <= j && midpoint + i >= j)	{
				level += '#';
			} else {
				level += ' ';			
			}			
		}
		// Log when row ready with all columns means when we finish for columns loop
		console.log(level);	
	}	
}

// Solution 2
// Recursion Solution
const pyramid2 = (n, row = 0, level = '') => {
	const totalColumns = n + (n - 1);
	const midpoint = Math.floor(totalColumns / 2);
	// Set base case
	if (n === row) return;

	// Check when we need call function recursively or when end of row
	if (level.length === totalColumns) {
		console.log(level);
		return pyramid2(n, row + 1);
	}

	const add = (midpoint - row <= level.length && midpoint + row >= level.length) ? '#' : ' ';

	pyramid2(n, row, level + add);
}


module.exports = pyramid2;