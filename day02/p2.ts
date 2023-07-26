import fs from "fs"

function shouldWinOrLose(opp: string, strategy: string) {
    const playerStrategy = new Map<string, number>([["X", 0], ["Y", 3], ["Z", 6]]);

    const opponent = new Map<string, number>([["A", 1], ["B", 2], ["C", 3]]);
    
    const winningResponse = new Map<number, number>([[2,1],[3,2],[1,3]]);
   
    const losingResponse = new Map<number, number>([[1, 2], [2, 3], [3, 1]]);
    
    const opponentPlay = Number(opponent.get(opp))
    let points = 0
    if (strategy == "X"){
        const ply = Number(winningResponse.get(opponentPlay))
        points = ply + Number(playerStrategy.get("X"))
    }
    else if (strategy == "Z") {
        const ply = Number(losingResponse.get(opponentPlay))
        points = ply + Number(playerStrategy.get("Z"))
    }
    else {
        points = opponentPlay + Number(playerStrategy.get("Y"))
    }
    // console.log(points)
    return points
}


function rps(filename: fs.PathOrFileDescriptor) {
    const data = fs.readFileSync(filename, "utf-8");
    const input = data.split("\r\n")
    let totalScore = 0
    for (var game of input) {
        let [opp, ply] = game.split(" ");
        totalScore += shouldWinOrLose(opp, ply);
    }
    console.log(totalScore)
}


rps("day02/input.txt")