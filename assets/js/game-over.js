let finalScore  = document.getElementById("end-score");
let totalScore = localStorage.getItem("currentRoundScore");
let saveScore = document.getElementById("submit-score");
let username = document.getElementById("player-name");



const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//Set final score to that of Current Round Score. 
finalScore.innerText = totalScore ;

//allow user to save score only if username input has been populated.
username.addEventListener('keyup', function allowSave(e) {
    e.preventDefault();
    saveScore.disabled = !username.value;
});

//populate score object with name and score, push score object to highScores, sort highScores by ascending order of score, splice highScores max 5 indexes, store highScores in localStorage and return to homepage.
function logHighScore(e) {
    
    e.preventDefault();
    const score = {
        name: username.value,
        score: totalScore
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