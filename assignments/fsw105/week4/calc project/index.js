const readline = require("readline-sync")

function add(num1 , num2) {
    return num1 + num2 
}

function mult(num1 , num2) {
    return num1 * num2
}

function div(num1 , num2) {
    return num1 / num2
}
function sub(num1 , num2) {
    return num1 - num2
}

var num1 = readline.question("Please enter your first number");
console.log(parseInt(num1))

var num2 = readline.question("Please enter your second number");
console.log(parseInt(num2))

var operation = readline.question("please enter operation to be performed: add, sub, mult, div");
console.log(operation)

if (operation === "add") {
    console.log(add(num1, num2))
}
else if (operation === "sub") {
    console.log(sub(num1, num2))
}
else if (operation === "mult") {
    console.log(mult(num1, num2))
}
else if (operation === "div") {
    console.log(div(num1, num2))
}
