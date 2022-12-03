const fs = require("fs");
const { join } = require("path");

fs.readFile(join(__dirname, "input"), "utf8", (err, data) => {
	if(err) {
		return console.log(err);
	}
	const reindeer = data.split("\n\n");

	const totals = [];
	
	reindeer.forEach((str) => {
		const nums = str.split("\n").map(x => Number(x));
		const totalLocal = nums.reduce((a, b) => { return +a + +b; });
		totals.push(totalLocal);		
	});

	totals.sort((a, b) => a - b);
	console.log("Part 1: " + totals[totals.length - 1]);
	console.log("Part 2: " + (totals.pop()+totals.pop()+totals.pop()));
	
});