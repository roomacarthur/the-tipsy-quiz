const questionText = document.getElementById("question");
const scoreCount = document.getElementById("score-count");
const answers = Array.from(document.getElementsByClassName("answer-text"));
const progressCount = document.getElementById("question-count");
const progressBarFull = document.getElementById("progress-full");


let questionBank = [
    {
        question:"What is the world’s largest land mammal?",
        answer1:"Colossal Squid",
        answer2:"Blue Whale",
        answer3:"Elephant",
        answer4:"Hippopotamus",
        correctAnswer:"3",

    },
    {
        question:"Rio de Janeiro is a city in which South American country",
        answer1:"Peru",
        answer2:"Brazil",
        answer3:"Argentina",
        answer4:"Colombia",
        correctAnswer:"2",

    },
    {
        question:"Which Middle Eastern city is also the name of a type of artichoke",
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
    {
        question:"The first atom bomb was dropped on which Japanese City?",
        answer1:"Nagasaki",
        answer2:"Okinawa",
        answer3:"Fukuoka",
        answer4:"Hiroshima",
        correctAnswer:"4",

    },
    {
        question:"The Latin word 'Verbatim' means?",
        answer1:"Talk",
        answer2:"Word for word",
        answer3:"Active",
        answer4:"Overdue",
        correctAnswer:"2",

    },
    {
        question:"Who painted the ceiling of the Sistine Chapel?",
        answer1:"Michelangelo",
        answer2:"Leonardo da Vinci",
        answer3:"Raphael",
        answer4:"Vincent Van Gogh",
        correctAnswer:"1",

    },
    {
        question:"Who was 'The Iron Lady'?",
        answer1:"Elizabeth II",
        answer2:"Margaret Thatcher",
        answer3:"Theresa May",
        answer4:"Cristina Kirchner",
        correctAnswer:"2",

    },
    {
        question:"What colour are the seats in the House of Commons?",
        answer1:"Green",
        answer2:"Red",
        answer3:"Blue",
        answer4:"Brown",
        correctAnswer:"1",

    },
    {
        question:"What year did Elvis die?",
        answer1:"1975",
        answer2:"1969",
        answer3:"1977",
        answer4:"1979",
        correctAnswer:"3",

    },
    {
        question:"What colour is found on 75% of the world's flags?",
        answer1:"Green",
        answer2:"White",
        answer3:"Blue",
        answer4:"Red",
        correctAnswer:"4",

    },
    {
        question:"Which British military force was established in 1918?",
        answer1:"SAS",
        answer2:"RAF",
        answer3:"SBS",
        answer4:"No. 617 Squadron RAF",
        correctAnswer:"2",

    },
    {
        question:"What is the most spoken language in the world?",
        answer1:"Mandarin",
        answer2:"Spanish",
        answer3:"English",
        answer4:"Hindi",
        correctAnswer:"1",

    },
];
//
let questionCounter = 0 //questionCounter always starts at 0.
let score = 0 //Score always starts at 0.
let currentQuestion = {} //Empty object to be populated with data from questionBank.
let availableQuestions = []//equal to the number of objects in the questionBank array.
let acceptingAnswers = true

//Set score for correct answer and max number of questions.
const correctScore = 10 //10 points for a correct answer.
const maxQuestions = 2 //This is only set to 2 for testing purposes.


//Function to start quiz game. makes sure counter and score is set to 0.
function startQuiz() {
    questionCounter = 0
    score = 0
    availableQuestions = [...questionBank]
    getNewQuestion()
    console.log("Don't be trying to cheat now, I'm watching you.")
};

getNewQuestion = () => {
    if(availableQuestions === 0 || questionCounter >= maxQuestions) {
        localStorage.setItem('currentRoundScore', score);

        return window.location.assign("/game-over.html");
    }
    //Increase questionCounter by 1 for each iteration. 
    questionCounter ++
    //Code here for progress text and bar. 
    progressCount.innerText = `Question ${questionCounter} of ${maxQuestions}`
    progressBarFull.style.width = `${(questionCounter/maxQuestions)* 100}%`

    //Randomly select question from questionBank
    const questionPicker = Math.floor(Math.random() * availableQuestions.length);
    //set current question to the returned question from questionPicker.
    currentQuestion = availableQuestions[questionPicker];
    //set the inner text of question to 
    questionText.innerText = currentQuestion.question;

    answers.forEach(answer => {
        const number = answer.dataset["number"];
        answer.innerText = currentQuestion['answer' + number];
    });

    availableQuestions.splice(questionPicker, 1);

    acceptingAnswers = true;
}

answers.forEach(answer => {
    answer.addEventListener("click", e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedOption = e.target
        const selectedAnswer = selectedOption.dataset["number"]

        let classToApply = selectedAnswer == currentQuestion.correctAnswer ? "correct-answer" : "wrong-answer"

        if(classToApply === "correct-answer") {
            increaseScore(correctScore)
        }
        selectedOption.parentElement.classList.add(classToApply)
        
        setTimeout(() => {
            selectedOption.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

increaseScore = num => {
    score += num
    scoreCount.innerText = score
}

startQuiz()



