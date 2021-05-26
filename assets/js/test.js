
const questionText = document.getElementById("question");
const scoreCount = document.getElementById("score-count");
const answers = Array.from(document.getElementsByClassName("answer-text"));
const progressCount = document.getElementById("question-count");
const progressBarFull = document.getElementById("progress-full");

let data = null;
let questionCounter = 0;
let score = 0;
let currentQuestion = {};
let questionBank = [];
let acceptingAnswers = true;

function loadJSON(callback) {
    //retrieve data from server without full page refresh
    let xobj = new XMLHttpRequest();

        xobj.overrideMimeType("application/json");
    xobj.open("GET", "./assets/js/questions.json", true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

loadJSON(function(response) {
    data = JSON.parse(response);
});
console.log(data) // prints null


setTimeout(function() {
    questionText.innerText = data.questionBank[1].question
    questionBank = data.questionBank
    console.log(questionBank[1])
    //pick random question from 
    const questionPicker = Math.floor(Math.random() * questionBank.length);
    currentQuestion = questionBank[questionPicker];
    console.log(currentQuestion)
}, 100);

console.log(currentQuestion) //prints []
