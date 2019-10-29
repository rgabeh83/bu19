
console.log(document)
var nav = document.createElementByTag(ul)
var liHome = document.createElementByTag(li)
liHome.textContent("Home")
var liContact = document.createElementByTag(li)
liContact.textContent("Contact")
var liAbout = document.createElementByTag(li)
liAbout.textContent("About")
var h1 = document.createElement("h1")
h1.textContent = ("Basic Website")
var paragraph = document.createElementByTag(p)
paragraph.textContent("this is the paragraph")
var list = document.createElementById(ol)
var item1 = document.createElementById(li)
var body = document.getElementByTagName(body)
document.body.append(h1, ul, li, p)



