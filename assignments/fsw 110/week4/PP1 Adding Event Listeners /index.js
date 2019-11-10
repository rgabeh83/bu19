console.log(document)
var square = document.getElementById("square")

function mouseOverBlue() {
    square.style.backgroundColor = "blue"
}

square.addEventListener("mouseover", mouseOverBlue)

function mouseDownRed() {
    square.style.backgroundColor = "red"
}

square.addEventListener("mousedown", mouseDownRed)

function mouseUpYellow() {
    square.style.backgroundColor = "yellow"
}

square.addEventListener("mouseup", mouseUpYellow)

function mouseDoubleClick() {
    square.style.backgroundColor= "green"
}

square.addEventListener("dblclick", mouseDoubleClick)

function mouseScrollOrange() {
    square.style.backgroundColor = "orange"
}

square.addEventListener("scroll", mouseScrollOrange)