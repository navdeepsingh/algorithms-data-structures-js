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
//steps(3)
const steps2 = (n, row = 0, stair = '') => {
	// Set base case
	if (n === row) return;

	if (n === stair.length) {
		console.log(stair);
		return steps2(n, row + 1);
	}

	const add = (stair.length <= row) ? '#' : ' ';

	steps2(n, row, stair + add);
}


module.exports = pyramid1;