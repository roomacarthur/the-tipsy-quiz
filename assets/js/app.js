/*
    When using the application on a mobile device, the hover effects arent needed,a dn in some cases would cause an error, like the hover effects to the answers when playing the quiz, the hover would still bhe visible after you submit your answer on the next question, so to get round this, I have moved the hover effects from CSS to JS and use the "onmouseover" and "onmouseleave" event listeners. 
*/

//hover effect for logo and footer github link.
function wobbleHover(){
    let elements = document.getElementsByClassName("wobble");
    for (let i = 0; i < elements.length; i++) {
        elements[i].onmouseover=function(){
            elements[i].classList.add("vibrate");
        };
        elements[i].onmouseleave=function(){
            elements[i].classList.remove("vibrate");
        };
    }
}
wobbleHover();

//nav links hover effect.
function navHover(){
    let nav = document.getElementsByClassName("link-hover");
    for (let i = 0; i < nav.length; i++) {
        nav[i].onmouseover=function(){
            nav[i].classList.add("hover-effect");
        };
        nav[i].onmouseleave=function(){
            nav[i].classList.remove("hover-effect");
        };
    }
}
navHover();

//.btn hover effect.
function buttonHover(){
    let button = document.getElementsByClassName("btn");
    for (let i = 0; i < button.length; i++) {
        button[i].onmouseover=function(){
            button[i].classList.add("btn-hvr");
        };
        button[i].onmouseleave=function(){
            button[i].classList.remove("btn-hvr");
        };
    }
}
buttonHover();
//hover effect for answers during the quiz.
function questionHover(e) {
    let qButton = document.getElementsByClassName("answer-container");
    for (let i = 0; i < qButton.length; i++) {
        qButton[i].onmouseover=function() {
            qButton[i].classList.add("answer-hover");
        };
        qButton[i].onmouseleave=function() {
            qButton[i].classList.remove("answer-hover");
        };
    }

}
questionHover();
