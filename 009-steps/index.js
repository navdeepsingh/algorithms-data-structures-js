// Solution 1
const steps = (n) => {
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


module.exports = steps;