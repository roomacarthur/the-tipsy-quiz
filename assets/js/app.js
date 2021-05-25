//remove hover effects from buttons on mobile devices

//vibrate effects for header and footer elements
let logo = document.getElementById("logo");
let devLink = document.getElementById("dev-link");

function addVibrate(el) {
    el.classList.add("vibrate")
}
function removeVibrate(el) {
    el.classList.remove("vibrate")
}
//logo mouse events
logo.onmouseover=function(){
    addVibrate(logo)
}
logo.onmouseleave=function() {
    removeVibrate(logo)
}
//dev-links mouse events
devLink.onmouseover=function(){
    addVibrate(devLink)
}
devLink.onmouseleave=function() {
    removeVibrate(devLink)
}
//nav links hover effect.
function navHover(){
    let nav = document.getElementsByClassName("nav-item")
    for (let i = 0; i < nav.length; i++) {
        nav[i].onmouseover=function(){
            nav[i].classList.add("nav-hover")
        }
        nav[i].onmouseleave=function(){
            nav[i].classList.remove("nav-hover")
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