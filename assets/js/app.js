//remove hover effects from buttons on mobile devices
 //website title
let button = document.getElementsByClassName("btn"); // all buttons

function fixHover() {
    button.addEventListener("touchStart")
}

//vibrate effects for header and footer elements
let logo = document.getElementById("logo");
let devLink = document.getElementById("dev-link");

logo.onmouseover=function(){
    logo.classList.add("vibrate")
}
logo.onmouseleave=function() {
    logo.classList.remove("vibrate")
}
