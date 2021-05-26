const highScoresList = document.getElementById("high-score-ranks");
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

//Set high scores list inner html to that of user and score from local storage. 
highScoresList.innerHTML =
highScores.map(function setScore(score){
    return `<li class="high-score">${score.name} <span class="score-count">${score.score}</span></li>`;
}).join('');
