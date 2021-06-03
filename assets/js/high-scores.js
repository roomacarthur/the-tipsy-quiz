const highScoresRank = document.getElementById("high-score-ranks");
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

//access the JSON object saved in high-scores.js, populate the end of an array with a Li that includes the data from the JSON object to show in the high scores table. ---- Brian Design's Video helped with this section of code.(Credit #1 in README.)
highScoresRank.innerHTML = highScores.map(
    function setScore(score){
       return `<li class="high-score">${score.name} <span class="score-count">${score.score}</span></li>`;
    })
    .join('');
//end credit.

//Clear high-scores from local storage, alert the user when clicked to confirm the action. Called via onclick in high-scores.html
function clearScores() {
    if(confirm("Are you sure you want to clear the high scores?") == true) {
        localStorage.clear();
        return window.location.assign("./high-scores.html");
    } else {
        return;
    }
}

