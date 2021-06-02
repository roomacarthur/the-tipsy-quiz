let questions = [
    {
        question:"What is the world’s largest land mammal?",
        answer1:"Colossal Squid",
        answer2:"Blue Whale",
        answer3:"Elephant",
        answer4:"Hippopotamus",
        correctAnswer:"3",
  
    },
    {
        question:"Rio de Janeiro is a city in which South American country?",
        answer1:"Peru",
        answer2:"Brazil",
        answer3:"Argentina",
        answer4:"Colombia",
        correctAnswer:"2",
  
    },
    {
        question:"Which Middle Eastern city is also the name of a type of artichoke?",
        answer1:"Cyprus",
        answer2:"Yemen",
        answer3:"Jerusalem",
        answer4:"Qatar",
        correctAnswer:"3",
  
    },
    {
        question:"Nostradamus was famous for making what?",
        answer1:"Predictions",
        answer2:"Candles",
        answer3:"Poems",
        answer4:"Boats",
        correctAnswer:"1",
  
    },
    {
        question:"In mythology, romulus and Remus were brought up by which animal?",
        answer1:"Bear",
        answer2:"Dog",
        answer3:"Wolf",
        answer4:"Ape",
        correctAnswer:"3",
  
    },
    {
        question:"What is the main source of vitamin C?",
        answer1:"Fruit",
        answer2:"Sun Light",
        answer3:"Vegetables",
        answer4:"Coffee",
        correctAnswer:"1",
  
    },
]

const question = document.getElementById("question");
const scoreText = document.getElementById("score-count");
const answers = Array.from(document.getElementsByClassName("answer-text"));
const questionCountText = document.getElementById("question-count");


let questionCounter;
let score;
const correctScore = 5;
const MAX_QUESTIONS = 3;
console.log(questions)
let acceptingAnswers;

function getRandomQuestions(arr, n) {
    let len = arr.length;
    if (n > len){
        throw new RangeError("getRandomQuestions: more elements taken than available");//
    }

    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return (selected = shuffled.slice(0, n));
}
function getNewQuestion(){
    if(availableQuestions === 0){
        return window.location.assign("./game-over.html");
    }
    questionCounter++;
    questionCountText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
    
    let currentQuestion = availableQuestions[0];
    console.log(currentQuestion)
    question.innerText = currentQuestion.question;
    
    answers.forEach((answer) => {
        const number = answer.dataset.number;
        answer.innerText = currentQuestion["answer" + number];
    })
    //randomization of answers showing. 

    answers.forEach((answer)=> {
        answer.addEventListener("click", e=> {
            if(!acceptingAnswers)return;

            acceptingAnswers = false;
            const clickedAnswer = e.target;
            const selectedAnswer = clickedAnswer.dataset.number;
            let classToApply = "wrong-answer"
            if(selectedAnswer === currentQuestion.correctAnswer){
                score += correctScore
                scoreText.innerText = score;
                classToApply = "correct-answer"
                console.log("correct")   
            }

            clickedAnswer.parentElement.classList.add(classToApply)

            setTimeout(() =>{
                clickedAnswer.parentElement.classList.remove(classToApply)
                getNewQuestion();
                acceptingAnswers = true;
            }, 1000)
        })
    })
    availableQuestions.shift();

};








function startGame(){
    questionCounter = 0;
    score = 0;
    acceptingAnswers = true;
    availableQuestions = getRandomQuestions(questions, MAX_QUESTIONS);
    console.log(availableQuestions);
    getNewQuestion();
};

startGame();