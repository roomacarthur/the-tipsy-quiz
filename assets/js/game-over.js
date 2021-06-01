let endScore  = document.getElementById("end-score");
let currentRoundScore = localStorage.getItem("currentRoundScore");
let saveScore = document.getElementById("submit-score");
let playerName = document.getElementById("player-name");

//Look for data to be entered into the playerName text field before submit is allowed and change the buttons title once input has been made. The implementation of keyup to enable the button is thanks to https://www.youtube.com/watch?v=f4fB9Xg2JEY
playerName.addEventListener('keyup', function allowSave(e) {
    e.preventDefault();
    saveScore.disabled = !playerName.value;
    saveScore.setAttribute("title", "Click to save!")
});

if (saveScore.disabled = false && window.event.keyCode == 13) {
    submitHighScore()
}

//Set final score to that of Current Round Score. 
endScore.innerText = currentRoundScore;

//populate score object with name and score, push score object to highScores, sort highScores by ascending order of score, splice highScores, store highScores in localStorage and return to homepage. This function is called onclick in game-over.html
function submitHighScore() {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    const score = {
        name: playerName.value,
        score: currentRoundScore
    };

    highScores.push(score);
    //Credit for help with this section of code -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    highScores.sort(function compareScores(firstEl,secondEl){
        return secondEl.score - firstEl.score;
    });
    //end credit
    highScores.splice(10);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("./high-scores.html");
}