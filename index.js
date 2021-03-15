
function superbowlWin(wins) {
   let winningYear
    wins.find(function(e) { 
        if (e.result === "W") {
            console.log(e.year)
            winningYear = e.year
        }
    })
    return winningYear
}

