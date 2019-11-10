console.log(document)

var capsLower = "hello"

function capitalizeAndLowercase(string) {
    return string.toUpperCase() + string.toLowerCase()

}

var capsLower = capitalizeAndLowercase("hello")
console.log(capsLower)


function halfANumber(string) {
    return Math.floor(string.length / 2)
}

var halfOfHello = halfANumber("hello")
console.log(halfOfHello)

var halfOfHelloWorld = halfANumber("hello world")
console.log(halfOfHelloWorld)

var halfOfHello2 = halfString("hello")

var halfOfHelloWorld2 = halfString("hello world")

function halfString(string) {
    return string.slice(0 , string.length / 2)
}
console.log(halfOfHelloWorld2)
console.log(halfOfHello2)

function capsHalf(string) {
    if (string.length % 2 === 1)
    return string.toUpperCase() / 2
    }
var helloHalfCaps = capsHalf("hello")
console.log(helloHalfCaps)
var helloWorldHalfCaps = capsHalf("hello world")
console.log(helloWorldHalfCaps)