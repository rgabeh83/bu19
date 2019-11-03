console.log(document)
var array = ["Javascript", "CSS", "HTML"]

for (var i = 0; i < array.length; i++) {
var headerArray = document.createElement("h1")
headerArray.textContent = array[i]
headerArray.style.backgroundColor = "burlywood"
headerArray.style.fontWeight = "lighter"
headerArray.style.fontFamily = "sans-serif"
headerArray.style.fontSize = "20px"

document.body.append(headerArray)

}
var paragraph = document.createElement("p")
paragraph.textContent = "I am practicing changing style with Javascript."
var header2 = document.createElement("h2")
header2.textContent = "More Javascript"
var paragraph2 = document.createElement("p")
paragraph2.textContent = "learning Javascript is challenging."
document.body.append( paragraph, header2, paragraph2)
var element = document.getElementById("body")
element.classList.add(border)
