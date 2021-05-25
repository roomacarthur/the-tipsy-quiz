let finalScore  = document.getElementById("end-score");
let totalScore = localStorage.getItem("currentRoundScore");
let saveScore = document.getElementById("submit-score");
let username = document.getElementById("player-name");



//Retrieve highScores from local storage.
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//Set final score to that of Current Round Score. 
finalScore.innerText = totalScore ;

//Look for data to be entered into the username text field before submit is allowed.
username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value;
});

let logHighScore = e => {
    
    e.preventDefault();
    //create object for score. 
    const score = {
        score: totalScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a,b) => {
        return b.score - a.score;
    });
    //allow for 5 high scores.
    highScores.splice(5);
    //save highScores to local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));
    //return to index.html
    window.location.assign("./index.html");
};