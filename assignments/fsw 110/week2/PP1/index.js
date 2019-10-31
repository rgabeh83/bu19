
console.log (document)
var h1 = document.createElement("h1")
h1.textContent = "Welcome to My JS Site"
var body = document.getElementById("body")
document.body.append(h1)
var newP = document.createElement("p")
newP.textContent = "All this was created with Javascript"
document.body.append(newP)
var newOl = document.createElement("newOl")
var li1 = document.createElement("li")
li1.textContent = "Number 1"
var li2 = document.createElement("li")
li2.textContent = "Number2"
var li3 = document.createElement("li")
li3.textContent = "Number 3"
document.body.append(newOl)
document.body.append(li1, li2, li3)

