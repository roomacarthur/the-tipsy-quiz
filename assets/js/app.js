//remove hover effects from buttons on mobile devices
 //website title
let button = document.getElementsByClassName("btn"); // all buttons

function fixHover() {
    button.addEventListener("touchStart")
}

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
logo.touchstart=function(){
    addVibrate(logo)
}
//logo mobile events.
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
