let endScore  = document.getElementById("end-score");
let currentRoundScore = localStorage.getItem("currentRoundScore");
let saveScore = document.getElementById("submit-score");
let playerName = document.getElementById("player-name");

//Look for data to be entered into the playerName text field before submit is allowed.
//Help with this function has been logged as #4 in credit's of README.md
playerName.addEventListener('keyup', function allowSave(e) {
    e.preventDefault();
    saveScore.disabled = !playerName.value;
});

//Set final score to that of Current Round Score. 
endScore.innerText = currentRoundScore;

//populate score object with name and score, push score object to highScores, sort highScores by ascending order of score, splice highScores, store highScores in localStorage and return to homepage. This function is called onclick in game-over.html
function logHighScore() {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    const score = {
        name: playerName.value,
        score: currentRoundScore
    };

    highScores.push(score);

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    highScores.sort(function compareScores(firstEl,secondEl){
        return secondEl.score - firstEl.score;
    });
    highScores.splice(10);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("./high-scores.html");
};