const highScoresList = document.getElementById("high-score-ranks")
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} <span class="score-count">${score.score}</span></li>`
}).join('')