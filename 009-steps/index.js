// Solution 1
const steps1 = (n) => {
	for (let i = 1; i <= n; i++) { // For rows
		let log = '';
		for (let j = 1; j <= n; j++) { // For columns
			if (j <= i)	{
				log += '#';
			} else {
				log += ' ';			
			}			
		}
		// Log when row ready with all columns means when we finish for columns loop
		console.log(log);	
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


module.exports = steps2;