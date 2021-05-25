//Global Variables.
const questionText = document.getElementById("question");
const scoreCount = document.getElementById("score-count");
//collect .answer-text and put them in an array.
const answers = Array.from(document.getElementsByClassName("answer-text"));
const progressCount = document.getElementById("question-count");
const progressBarFull = document.getElementById("progress-full");

//Question and answers for the quiz.
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
        answer3:"Joel Southgates",
        answer4:"Vincent Van Gogh",
        correctAnswer:"1",

    },
    {
        question:"Who was 'The Iron Lady'?",
        answer1:"John Sullivan",
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
    {
        question:"What is an axolotl?",
        answer1:"A nerve in the brain",
        answer2:"A multi-axled vehicle",
        answer3:"A type of mortice lock",
        answer4:"A species of salamander",
        correctAnswer:"4",

    },
    {
        question:"The Plaka is the oldest quarter of which city?",
        answer1:"Athens",
        answer2:"Prague",
        answer3:"Rome",
        answer4:"Vienna",
        correctAnswer:"1",

    },
    {
        question:"The Panama Canal was officially opened by which US president?",
        answer1:"Calvin Coolidge",
        answer2:"Herbert Hoover",
        answer3:"Theodore Roosevelt",
        answer4:"Woodrow Wilson",
        correctAnswer:"4",

    },
    {
        question:"In which opera did Maria Callas make her last appearance at Covent Garden?",
        answer1:"Carmen",
        answer2:"Tosca",
        answer3:"Madame Butterfly",
        answer4:"La Boheme",
        correctAnswer:"2",

    },
    {
        question:"What is a Kudzu?",
        answer1:"Antelope",
        answer2:"Bird",
        answer3:"Jewish settlement",
        answer4:"Climbing plant",
        correctAnswer:"1",

    },
    {
        question:"From which country does tennis player Andres Gomez, winner of the 1990 French Championships, come from?",
        answer1:"Ecuador",
        answer2:"Peru",
        answer3:"Portugal",
        answer4:"Spain",
        correctAnswer:"1",

    },
    {
        question:"In which ocean is Madagascar?",
        answer1:"Atlantic",
        answer2:"Pacific",
        answer3:"Indian",
        answer4:"Arctic",
        correctAnswer:"3",

    },
];

let questionCounter = 0; //questionCounter always starts at 0.
let score = 0; //Score always starts at 0.
let currentQuestion = {}; //Empty object to be populated with data from questionBank.
let availableQuestions = [];//Empty Array for questions. 
let acceptingAnswers = true;

//Set score for correct answer and max number of questions.
const correctScore = 25; //15 points for a correct answer.
const maxQuestions = 10; //This is only set to 2 for testing purposes.


//Speech Synthesis to read out questions and announce if correct or not.
const speak = (text) => {
    var msg = new SpeechSynthesisUtterance(text);
    msg.voice = window.speechSynthesis.default;
    window.speechSynthesis.speak(msg);
};

//read out question function.
function readQuestion() {
    speak(`${currentQuestion.question}`);
}


//Function to start quiz game.
function startQuiz() {
    questionCounter = 0; //set questionCounter to zero.
    score = 0;   //Score always starts at zero.
    availableQuestions = [...questionBank];  //available questions come from questionBank.
    getNewQuestion();    //Run getNewQuestion function.
    console.log("Don't be trying to cheat now, I'm watching you.");  //I see you cheating. 
}


getNewQuestion = () => {
    //Code for finishing quiz.
    if(availableQuestions === 0 || questionCounter >= maxQuestions) {
        //submit score to local storage.
        localStorage.setItem('currentRoundScore', score);
        //return to game-over.html page. 
        return window.location.assign("./game-over.html");
    }
    //if quiz isn't over do this: 

    //Increase questionCounter by 1 for each iteration. 
    questionCounter ++;
    //Code here for progress text and progress bar. 
    progressCount.innerText = `Question ${questionCounter} of ${maxQuestions}`;
    progressBarFull.style.width = `${(questionCounter/maxQuestions)* 100}%`;

    //Randomly select question from questionBank
    const questionPicker = Math.floor(Math.random() * availableQuestions.length);
    //set current question to the returned question from questionPicker.
    currentQuestion = availableQuestions[questionPicker];
    //set the inner text of question
    questionText.innerText = currentQuestion.question;
    //Read out current Question text.
    // setTimeout(() => {
    //     speak(`${currentQuestion.question}`)
    // }, 200)

    //Locate answers for currentQuestion and assign them to the correct location."using dataset"
    answers.forEach(answer => {

        const number = answer.dataset["number"];
        answer.innerText = currentQuestion['answer' + number];
    });

    availableQuestions.splice(questionPicker, 1);

    acceptingAnswers = true;
};

answers.forEach(answer => {
    answer.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedOption = e.target;
        const selectedAnswer = selectedOption.dataset["number"];

        let classToApply = selectedAnswer == currentQuestion.correctAnswer ? "correct-answer" : "wrong-answer";

        if(classToApply === "correct-answer") {
            increaseScore(correctScore);
            //speech for correct.
            speak(`Correct!`);
        } else {
            //speech for incorrect.
            speak(`Incorrect!`);
        }
        //Add correct/incorrect class to selected answer.
        selectedOption.parentElement.classList.add(classToApply);
        //Set timeout for quiz to remove correct/incorrect class and move to next question.
        setTimeout(() => {
            selectedOption.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1500);
    });
});
//Increase score and set score text to updated score.
increaseScore = num => {
    score += num;
    scoreCount.innerText = score;
};

startQuiz();



