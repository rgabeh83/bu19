
console.log(document)
var navList = document.createElement("ul")
var liHome = document.createElement("li")
liHome.textContent = "home"
var liContact = document.createElement("li")
liContact.textContent = "Contact"
var liAbout = document.createElement("li")
liAbout.textContent = "About"
document.body.append(navList)
document.body.append(liHome, liContact, liAbout)
var h1 = document.createElement("h1")
h1.textContent = "Basic Website"
document.body.append("h1")
var paragraph = document.createElement("p")
paragraph.textContent = "this is the paragraph"
document.body.append(paragraph)
var list = document.createElement("ol")
var liOne = document.createElement("li")
liOne.textContent = "List item 1"
var liTwo = document.createElement("li")
liTwo.textContent = "list item 1"
var liThree = document.createElement("li")
liThree.textContent = "List item 3"
document.body.append(list)
document.body.append(liOne, liTwo, liThree)
var footer = document.createElement("footer")
document.body.append(footer)



