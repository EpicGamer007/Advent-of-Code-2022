const fs = require("fs");
fs.readFile("./input", "utf8", (err, data) => {
	if(err) {
		return console.log(err);
	}

	const games = data.split("\n");

	let runningTotal = 0;
	
	games.forEach((game) => {
		let opponent = game.charAt(0);
		let me = game.charAt(2);

		opponent = (opponent == 'A' ? 1 : (opponent == 'B' ? 2 : (opponent == 'C' ? 3 : 0)));
		me = (me == 'X' ? 1 : (me == 'Y' ? 2 : (me == 'Z' ? 3 : 0)));
		
		let myScore = 0;
		myScore += me;
		
		if(me == opponent) {
			myScore += 3;
		} else if(
			(me == 1 && opponent == 3) || 
			(me == 2 && opponent == 1) || 
			(me == 3 && opponent == 2)
		) {
			myScore += 6;
		}
		
		runningTotal += myScore;
		
	});

	console.log("Part 1: " + runningTotal);

	runningTotal = 0;

	games.forEach((game) => {
		let opponent = game.charAt(0);
		let me = game.charAt(2);

		opponent = (opponent == 'A' ? 1 : (opponent == 'B' ? 2 : (opponent == 'C' ? 3 : 0)));
		me = (me == 'X' ? 1 : (me == 'Y' ? 2 : (me == 'Z' ? 3 : 0)));

		let myScore = 0;

		if(me == 2) {
			myScore += opponent + 3;
		} else if(me == 1) {
			let myResponse = opponent - 1;
			if(myResponse == 0) myResponse = 3;
			myScore += myResponse;
		} else if(me == 3) {
			let myResponse = opponent + 1;
			if(myResponse == 4) myResponse = 1;
			myScore += myResponse + 6;
		}

		runningTotal += myScore;
		
	});

	console.log("Part 2: " + runningTotal);
	
});