const fs = require("fs");
const { join } = require("path");

fs.readFile(join(__dirname, "input"), "utf8", (err, data) => {
	if(err) {
		return console.log(err);
	}
	
	const rucksacks = data.split("\n");

	let runningTotal1 = 0;
	let chars1 = [];
	
	rucksacks.forEach((sack) => {
		const splitString = [sack.slice(0, sack.length/2), sack.slice(sack.length/2)];
		for(let char0 of splitString[0]) {
			for(let char1 of splitString[1]) {
				if(char0 == char1) {
					chars1.push(char0);
					return;
				}
			}
		}
	});
	for(let char of chars1) {
		let charNum = parseInt(char, 36) - 9;
		if(char == char.toUpperCase()) charNum += 26;
		runningTotal1 += charNum;
	}

	let runningTotal2 = 0;
	let chars2 = [];
	const groups = [];
	let currentGroup = [];
	
	for(i in rucksacks) {
		if(i % 3 == 0 && i != 0) {
			groups.push(currentGroup);
			currentGroup = [];
		}
		currentGroup.push(rucksacks[i]);
	}
	for(group of groups) {
		const groupChars = [];
		for(let char0 of group[0]) {
			for(let char1 of group[1]) {
				for(let char2 of group[2]) {
					if((char0 == char1) && (char1 == char2)) {
						groupChars.push(char0);
					}
				}
			}
		}
		chars2.push(groupChars[0]);
	}
	for(let char of chars2) {
		let charNum = parseInt(char, 36) - 9;
		if(char == char.toUpperCase()) charNum += 26;
		runningTotal2 += charNum;
	}

	console.log("Part 1: " + runningTotal1);
	console.log("Part 2: " + runningTotal2);
	
});