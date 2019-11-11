console.log(document)

function sum(num1, num2) {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    result =  parseInt(num1) + parseInt(num2);
    document.getElementById("addResult").value = result
 }

var addbutton = document.getElementById("addbutton")
addbutton.addEventListener("click", sum)


function sub(num3, num4) {
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    subtractResult = parseInt(num3) - parseInt(num4);
    document.getElementById("subResult").value = subtractResult
}

var subButton = document.getElementById("subButton")
subButton.addEventListener("click", sub)

function mult(num5, num6) {
    var num5 = document.getElementById("num5").value;
    var num6 = document.getElementById("num6").value;
    multResult = parseInt(num5) * parseInt(num6);
    document.getElementById("multResult").value = multResult
}
var multButton = document.getElementById("multButton")
multButton.addEventListener("click", mult)

