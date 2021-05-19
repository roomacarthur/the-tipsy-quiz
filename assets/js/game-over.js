let finalScore  = document.getElementById("end-score");
let totalScore = localStorage.getItem("currentRoundScore");
let saveScore = document.getElementById("submit-score");
let username = document.getElementById("player-name");


const MAX_HIGH_SCORES = 5

const highScores = JSON.parse(localStorage.getItem("highScores")) || []

finalScore.innerText = totalScore 

username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value
})

logHighScore = e => {
    
    e.preventDefault()
    //
    const score = {
        score: totalScore,
        name: username.value
    }
    highScores.push(score)
    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)
    //save highScores to local storage
    localStorage.setItem("highScores", JSON.stringify(highScores))
    //return to index.html
    window.location.assign("/index.html")
}