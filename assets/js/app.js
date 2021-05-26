//hover effect for logo and footer github link.
function wobbleHover(){
    let elements = document.getElementsByClassName("wobble")
    for (let i = 0; i < elements.length; i++) {
        elements[i].onmouseover=function(){
            elements[i].classList.add("vibrate")
        }
        elements[i].onmouseleave=function(){
            elements[i].classList.remove("vibrate")
        }
    }
}
wobbleHover()

//nav links hover effect.
function navHover(){
    let nav = document.getElementsByClassName("link-hover")
    for (let i = 0; i < nav.length; i++) {
        nav[i].onmouseover=function(){
            nav[i].classList.add("hover-effect")
        }
        nav[i].onmouseleave=function(){
            nav[i].classList.remove("hover-effect")
        }
    }
}
navHover()

//.btn hover effect.
function buttonHover(){
    let button = document.getElementsByClassName("btn")
    for (let i = 0; i < button.length; i++) {
        button[i].onmouseover=function(){
            button[i].classList.add("btn-hvr")
        }
        button[i].onmouseleave=function(){
            button[i].classList.remove("btn-hvr")
        }
    }
}
buttonHover()

function questionHover(e) {
    let qButton = document.getElementsByClassName("answer-container")
    for (let i = 0; i < qButton.length; i++) {
        qButton[i].onmouseover=function() {
            qButton[i].classList.add("answer-hover")
        }
        qButton[i].onmouseleave=function() {
            qButton[i].classList.remove("answer-hover")
        }
        qButton[i].touchstart=function(){
            qButton[i].classList.add("answer-hover")
        }
        qButton[i].touchend=function(){
            qButton[i].classList.remove("answer-hover")
        }
    }

}
questionHover()