//fetch data from question and answer JSON file. 
//Coded with help from w3 schools.(https://www.w3schools.com/xml/xml_http.asp)
const questionAndAnswers = new XMLHttpRequest();
questionAndAnswers.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(questionAndAnswers.responseText);
        let questions = response.questions;
        console.log(questions[1].question)
    }
};
questionAndAnswers.open("GET", "./assets/js/questions-answers/qa.JSON", true);
questionAndAnswers.send();

//fetch elements from quiz.html
const questionCount = document.getElementById('question-count');
const fullProgressBar = document.getElementById('progress-full');
const scoreCount = document.getElementById('score-count');
const questionText = document.getElementById('question');
const answers = document.getElementsByClassName('answer-text');


//set score and question count to 0
let score = 0;
let questionCount = 0;

//set points for correct answer and max question count.
const correctScore = 10;
const maxQuestions = 20;

//fetch new new question to display.
function fetchNewQuestion() {
    
}

//Start new quiz game. 
function startQuiz() {
    score = 0;
    questionCount = 0;
    questionBank = questionAndAnswers;
    fetchNewQuestion();
}
