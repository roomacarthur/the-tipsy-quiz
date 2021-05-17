//game-over.html
const endScore = document.getElementById('end-score');
const username = document.getElementById('player-name');
const submitScore = document.getElementById('submit-score');

//Save the score from that round to localStorage.
const roundScore = localStorage.getItem('currentRoundScore')

submitScore.innerText = roundScore;

username.addEventListener('keyup', () => {
    submitScore.disabled = !username.value;
})

function saveScore() {
    e.preventDefault()
    const score = {
        score: roundScore,
        name: username.value
    }

}