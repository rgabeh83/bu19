function sum(num1, num2) {
   return (num1 + num2)
}
   var result = sum(1 , 2)
   console.log(result)



/*Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
*/

function largestOf3(a, b, c){
    return Math.max(a, b,c)
}
    var result = largestOf3(100, 3, 97)
    console.log(result)

function evenOrOdd(a) {
   if (a % 2 === 0)
   return "even";
   else return "false"
}

var result = evenOrOdd(10)
console.log(result)

function stringLengthCheck(string) {
    if (string.length <= 20)
    return string + " " + string;
    else if (string.length >= 21)
    return string.slice(0 , string.length / 2)
}
var result = stringLengthCheck("Javascript is making sense")
console.log(result)