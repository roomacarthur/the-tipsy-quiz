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

const questionText = document.getElementById('question');

function getNewQuestion() {
    
}