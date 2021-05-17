//fetch data from question and answer JSON file. 
//Coded with help from w3 schools.(https://www.w3schools.com/xml/xml_http.asp)
const questionAndAnswers = new XMLHttpRequest();
questionAndAnswers.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(questionAndAnswers.responseText);
        let questions = response.questions;
        // return questions;
    }
};
questionAndAnswers.open("GET", "./assets/js/questions-answers/qa.JSON", true);

questionAndAnswers.send();

console.log(questionAndAnswers);


//fetch elements from quiz.html
const questionCounter = document.getElementById('question-count');
const fullProgressBar = document.getElementById('progress-full');
const scoreCount = document.getElementById('score-count');
const questionText = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName('answer-text'));
const progressCount = document.getElementById('question-count');

//set score and question counter to 0
let score = 0;
let questionCount = 0;
let currentQuestion = {};
let availableQuestions = [];
//set points for correct answer and max question count.
const correctScore = 10;
const maxQuestions = 20;

//Start new quiz game. 
function startQuiz() {
    score = 0;
    questionCount = 0;
    availableQuestions = [...questionAndAnswers];
    fetchNewQuestion();
}

//fetch new new question to display.
function fetchNewQuestion() {
    if(questionBank.length === 0 || questionCount > maxQuestions) {
        //store score in local storage
        localStorage.setItem('currentRoundScore', score);
        //return to game over page. 
        return window.location.assign('../../../game-over.html');
    }
    //Increase questions count by 1.
    questionCount ++;
    //Edit quiz question counter. 
    progressCount.innerText = `question ${questionCount} of ${maxQuestions}.`
    //Style the inner of progress bar with the the % value = to questionCount divided by maxQuestions and multiplied by 100 to get a whole % value. 
    fullProgressBar.style.width = `${(questionCount/maxQuestions)*100}%`
    




    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    answers.forEach(answer => {
        const number = answer.dataset['num']
        answer.innerText = currentQuestion['answer' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}