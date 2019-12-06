const readline = require("readline-sync");


random = () => {
    console.log(Math.floor((Math.random() * 10)))
}

function randomWalk() {
    const number = (Math.floor((Math.random() * 10)))
  }  

enemy() {
    const enemyNumber = (Math.floor((Math.random() * 10)))
}
if (enemyNumber % 2 === 0) {
console.log("king Kumba")
}
if (enemyNumber % 3 === 3) {
console.log("Bob")

}
    var userName = readline.question("What is your name?");

console.log("Hi " + userName + "!, Welcome to Console RPG, made possible by our sponsor Readline-Syhc")


let readyToWalk = readline.keyIn(`Press "y" to keep going, "n" to take a break: `, { limit: '$<y, n>' });
if (readyToWalk === "y") {
console.log(randomWalk())
} 
if (number === 3) {
    console.log("works")
}