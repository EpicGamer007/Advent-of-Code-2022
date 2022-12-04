const fs = require("fs");
const { join } = require("path");

fs.readFile(join(__dirname, "input"), "utf8", (err, data) => {
	if(err) {
		return console.log(err);
	}
	
	const assignedPairs = data.split("\n").map((x) => [x.split(",")]);
	assignedPairs.pop();

	let pairsWhereOneFullyContainsAnother = 0;
	for(let i = 0; i < assignedPairs.length; i++) {
		const pair0 = assignedPairs[i][0][0].split("-").map((x) => parseInt(x));
		const pair1 = assignedPairs[i][0][1].split("-").map((x) => parseInt(x));

		if(pair0[0] == pair1[0]) {
			pairsWhereOneFullyContainsAnother++;
		} else if(pair0[1] == pair1[1]) {
			pairsWhereOneFullyContainsAnother++;
		} else if(pair0[0] < pair1[0] && pair0[1] > pair1[1]) {
			pairsWhereOneFullyContainsAnother++;
		} else if(pair0[0] > pair1[0] && pair0[1] < pair1[1]) {
			pairsWhereOneFullyContainsAnother++;
		}
		
	}

	let pairsWhereRangesOverlap = 0;
	O: for(let i = 0; i < assignedPairs.length; i++) {
		const pair0 = assignedPairs[i][0][0].split("-").map((x) => parseInt(x));
		const pair1 = assignedPairs[i][0][1].split("-").map((x) => parseInt(x));

		for(let i = pair0[0]; i <= pair0[1]; i++) {
			if(i >= pair1[0] && i <= pair1[1]) {
				pairsWhereRangesOverlap++;
				continue O;
			}
		}
			
	}
	

	console.log("Part 1: " + pairsWhereOneFullyContainsAnother);
	console.log("Part 2: " + pairsWhereRangesOverlap);
	
});