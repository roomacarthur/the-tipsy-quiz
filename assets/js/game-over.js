let endScore  = document.getElementById("end-score");
let currentRoundScore = localStorage.getItem("currentRoundScore");
let saveScore = document.getElementById("submit-score");
let playerName = document.getElementById("player-name");



//Set highScores to an 
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//Set final score to that of Current Round Score. 
endScore.innerText = currentRoundScore ;

//Look for data to be entered into the playerName text field before submit is allowed.
playerName.addEventListener('keyup', function allowSave(e) {
    e.preventDefault()
    saveScore.disabled = !playerName.value;
});

//populate score object with name and score, push score object to highScores, sort highScores by ascending order of score, splice highscores, store highScores in localStorage and return to homepage.
function logHighScore(e) {
    
    e.preventDefault();
    const score = {
        name: playerName.value,
        score: currentRoundScore
    };

    highScores.push(score);
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    highScores.sort(function compareScores(firstEl,secondEl){
        return secondEl.score - firstEl.score;
    })
    highScores.splice(5);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("./index.html");
};