
const questionText = document.getElementById("question");
const scoreCount = document.getElementById("score-count");
const answers = Array.from(document.getElementsByClassName("answer-text"));
const progressCount = document.getElementById("question-count");
const progressBarFull = document.getElementById("progress-full");

let questionCounter = 0;
let score = 0;
let currentQuestion = {};
let availableQuestions = [];
let acceptingAnswers = true;

//Set score for correct answer and max number of questions.
const correctScore = 25;
const maxQuestions = 10;

//Speech Synthesis to read out questions and announce if correct or not.
const speak = (text) => {
    var msg = new SpeechSynthesisUtterance(text);
    msg.voice = window.speechSynthesis.default;
    window.speechSynthesis.speak(msg);
};

function getNewQuestion(){
    //Code completion of quiz.
    if(availableQuestions === 0 || questionCounter >= maxQuestions) {
        localStorage.setItem('currentRoundScore', score);
        return window.location.assign("./game-over.html");
    }
    //code to cycle through for next question.
    questionCounter ++;
    
    progressCount.innerText = `Question ${questionCounter} of ${maxQuestions}`;
    progressBarFull.style.width = `${(questionCounter/maxQuestions)* 100}%`;
    
    const questionPicker = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionPicker];
    questionText.innerText = currentQuestion.question;

    answers.forEach(answer => {
        const number = answer.dataset["number"];
        answer.innerText = currentQuestion['answer' + number];
    });

    availableQuestions.splice(questionPicker, 1);

    acceptingAnswers = true;
}
//function to increase score count and change the HTML.
function increaseScore(num){
    score += num;
    scoreCount.innerText = score;
}

answers.forEach(answer => {
    answer.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedOption = e.target;
        const selectedAnswer = selectedOption.dataset["number"];

        let classToApply = selectedAnswer == currentQuestion.correctAnswer ? "correct-answer" : "wrong-answer";

        if(classToApply === "correct-answer") {
            increaseScore(correctScore);
            speak(`Correct!`);
        } else {
            speak(`Incorrect!`);
        }
        e.preventDefault();
        //Add correct/incorrect class to selected answer.
        selectedOption.parentElement.classList.add(classToApply);
        selectedOption.parentElement.classList.add("answer-hover");
        //Set timeout for quiz to remove correct/incorrect class and move to next question.
        setTimeout(() => {
            selectedOption.parentElement.classList.remove(classToApply);
            selectedOption.parentElement.classList.remove("answer-hover");
            getNewQuestion();
       
        }, 1200);
    });
});

//Function to start quiz game, set starting values to 0, run getNewQuestion function.
function startQuiz() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questionBank];
    getNewQuestion();
    console.log("Don't be trying to cheat now, I'm watching you.");


}

//read out question function. called via onclick on quiz.html
function readQuestion() {
    speak(`${currentQuestion.question}`);
}

startQuiz();



