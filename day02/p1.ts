import fs from "fs"

function isLosingOrWinning(opp: string, ply: string) {
    const player = new Map<string, number>([["X", 1], ["Y", 2], ["Z", 3]]);

    const opponent = new Map<string, number>([["A", 1], ["B", 2], ["C", 3]]);
    
    const winningResponse = new Map<number, number>([[2,1],[3,2],[1,3]]);
   
    const losingResponse = new Map<number, number>([[1,2], [2,3], [3,1]]);
    
    let points: number = 0
    const playerStrategy: number = Number(player.get(ply))
    if (winningResponse.get(playerStrategy) == Number(opponent.get(opp))) {
        points += 6
    }
    else if (losingResponse.get(playerStrategy) == Number(opponent.get(opp))) {
        points += 0
    }
    else {
        points += 3
    }
    return points + playerStrategy
}

function rps(filename: fs.PathOrFileDescriptor) {
    const data = fs.readFileSync(filename, "utf-8");
    const input = data.split("\r\n")
    let totalScore = 0
    for (var game of input) {
        let [opp, ply] = game.split(" ");
        totalScore += isLosingOrWinning(opp, ply);
    }
    console.log(totalScore)
}

rps("day02/input.txt")