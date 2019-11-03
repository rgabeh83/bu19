console.log(document)



var names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]


for (var i = 0; i < names.length; i++) {

var arrayOfNames = document.createElement("h1")
arrayOfNames.textContent = names[i]
document.body.append(arrayOfNames)

}
var h1Elements = document.getElementsByTagName("h1") 
for (var i = 0; i < h1Elements.length; i++) {
     h1Elements[i].style.color = "red";
}


