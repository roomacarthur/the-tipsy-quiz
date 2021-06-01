const highScoresRank = document.getElementById("high-score-ranks");
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

//Set high scores list inner html to that of user and score from local storage. 
highScoresRank.innerHTML =
highScores.map(function setScore(score){
    return `<li class="high-score">${score.name} <span class="score-count">${score.score}</span></li>`;
}).join('');

//Clear high-scores from local storage, alert the user when clicked to confirm the action.
function clearScores() {
    if(confirm("Are you sure you want to clear the high scores?") == true) {
        localStorage.clear();
        return window.location.assign("./high-scores.html")
    } else {
        return
    }
}