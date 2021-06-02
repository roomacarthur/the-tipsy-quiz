
const questionText = document.getElementById("question");
const scoreCount = document.getElementById("score-count");
const answers = Array.from(document.getElementsByClassName("answer-text"));
const progressCount = document.getElementById("question-count");
const progressBarFull = document.getElementById("progress-full");

let questionCounter = 0;
let score = 0;
let currentQuestion = {};
let availableQuestions = questionBank;
let acceptingAnswers = true;
const correctScore = 25;
const maxQuestions = 3;

//Speech Synthesis to read out questions and announce if correct or not.
const speak = function textToSpeech(text) {
    var msg = new SpeechSynthesisUtterance(text);
    msg.voice = window.speechSynthesis.default;
    msg.rate = 0.9;
    window.speechSynthesis.speak(msg);
};
//Function to generate new random question from the available questions, will update progress text and bar and splice in question. if you have completed all questions it will save score and take user to the game over page. This function is from Brian Design and has been edited to suit this application (Credit #1 in README.md)
function getNewQuestion(){
    //Code completion of quiz.
    if(questionCounter >= maxQuestions) {
        localStorage.setItem('currentRoundScore', score);
        return window.location.assign("./game-over.html");
    }
    //code to cycle through for next question.
    questionCounter ++;
    
    progressCount.innerText = `Question ${questionCounter} / ${maxQuestions}`;
    progressBarFull.style.width = `${(questionCounter/maxQuestions)* 100}%`;
    
    const questionPicker = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionPicker];
    questionText.innerText = currentQuestion.question;

    answers.forEach(answer => {
        const number = answer.dataset.number;
        answer.innerText = currentQuestion['answer' + number];
    });
    acceptingAnswers = true;
}

//function to increase score count and change the HTML. The "num" parameter will be populated during the foreach iteration of answers with "currentScore". 
function increaseScore(total){
    score += total;
    scoreCount.innerText = score;
}

//loop through the array answers, return if acceptingAnswers = false, but if acceptingAnswers = true continue through the function 
    answers.forEach(answer => {
        answer.addEventListener("click", function sortAnswer(e){
            if(!acceptingAnswers) return; //if not accepting answers, end the function.
    
            acceptingAnswers = false; // set accepting answers to false once an answer has been selected.
            const selectedOption = e.target;
            const selectedAnswer = selectedOption.dataset.number;
    
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
            //Set timeout for quiz to sort classToApply and give speech synthesis time to talk. 
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
    getNewQuestion();
    console.log("Don't be trying to cheat now, I'm watching you.");
}

//read out question function. called via onclick on quiz.html
function readQuestion() {
    speak(`${currentQuestion.question}`);
}

startQuiz();



