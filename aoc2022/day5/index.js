const fs = require("fs");
const { join } = require("path");

fs.readFile(join(__dirname, "input"), "utf8", (err, data) => {
	if(err) {
		return console.log(err);
	}

	const allData = data.split("\n");
	
	let moves = allData.slice(10);
	if(moves[moves.length - 1] == "") moves.pop();
	moves = moves.map((move) => {
		const spl = move.split(" ");
		return [
			/*origin:*/ spl[3],
			/*destination:*/ spl[5],
			/*numberOfMoves:*/ spl[1]
		]
	});
	const cratesRaw = allData.slice(0, 9);
	const cratesP1 = {};	
	for(let num in cratesRaw[cratesRaw.length - 1]) {
		let chara = parseInt(cratesRaw[cratesRaw.length - 1][num]);
		if(!isNaN(chara)) {
			for(let strIndex = cratesRaw.length - 2; strIndex >= 0; strIndex--) {
				if(cratesP1[chara] == undefined) cratesP1[chara] = "";
				cratesP1[chara] += cratesRaw[strIndex].charAt(num) != ' ' ? cratesRaw[strIndex].charAt(num) : "";
			}
		}
	}

	const cratesP2 = JSON.parse(JSON.stringify(cratesP1));
	
	for(const move of moves) {
		for(let i = 0; i < move[2]; i++) {
			const crateToMove = cratesP1[move[0]].slice(-1);
			cratesP1[move[0]] = cratesP1[move[0]].slice(0, -1);
			cratesP1[move[1]] += crateToMove;
		}
	}
	let part1Answer = "";
	for(const ind in cratesP1) {
		part1Answer += cratesP1[ind].slice(-1);
	}

	for(const move of moves) {
		const cratesToMove = cratesP2[move[0]].slice(-move[2]);
		cratesP2[move[0]] = cratesP2[move[0]].slice(0, -move[2]);
		cratesP2[move[1]] += cratesToMove;
	}
	let part2Answer = "";
	for(const ind in cratesP2) {
		part2Answer += cratesP2[ind].slice(-1);
	}

	console.log("Part 1: " + part1Answer);
	console.log("Part 2: " + part2Answer);
	
});