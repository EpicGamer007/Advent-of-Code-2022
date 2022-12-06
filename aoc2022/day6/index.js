const fs = require("fs");
const { join } = require("path");

fs.readFile(join(__dirname, "input"), "utf8", (err, data) => {
	if(err) {
		return console.log(err);
	}

	let ans1 = 0;
	
	for(let i = 0; i < data.length - 4; i++) {
		const lets = [];
		for(let j = i; j < i + 4; j++) {
			lets.push(data.charAt(j));
		}
		if((new Set(lets)).size === lets.length) {
			ans1 = i + 4;
			break;
		}
	}

	let ans2 = 0;

	for(let i = 0; i < data.length - 14; i++) {
		const lets = [];
		for(let j = i; j < i + 14; j++) {
			lets.push(data.charAt(j));
		}
		if((new Set(lets)).size === lets.length) {
			ans2 = i + 14;
			break;
		}
	}

	console.log("Part 1: " + ans1);
	console.log("Part 2: " + ans2);
	
});