let scoreHome = 0
let scoreAway = 0
let gameInfo = {}
draw()

//#region 

function reset() {
    console.log("wired up");
    scoreAway = 0
    scoreHome = 0
    console.log(scoreAway);
    console.log(scoreHome);
}

function addScoreHome() {
    scoreHome++
    console.log(scoreHome)
    draw()

}

function addScoreAway() {
    scoreAway++
    console.log(scoreAway);
    draw()
}

function subScoreHome() {
    scoreHome--
    draw()
}

function subScoreAway() {
    if (scoreAway > 0) {

        scoreAway--
    } else {
        console.log("cant go below 0")
        awayLoses()
    }
    draw()
}

function draw() {
    let homeScore = document.getElementById('home-score')
    let awayScore = document.getElementById('away-score')
    homeScore.innerText = scoreHome.toString()
    awayScore.innerText = scoreAway.toString()
}

function awayLoses() {
    window.alert("away loses! congrats home team!")
    reset()
}

//#endregion
function addPlayer() {

}
