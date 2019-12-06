const readline = require("readline-sync");

random = () => {
    console.log(Math.floor((Math.random() * 10)))
}
enemy = () => {
    const whichEnemy = random();
    if (whichEnemy === 2) {
        console.log("King Kumba")
    }
    if (whichEnemy % 2 === 0){
        console.log("godzilla")
    }
    else {
        console.log("bob")
    }
}
randomWalk = () => {
    return (Math.floor((Math.random() * 10)))

}
weapons = ["bat", "glassware", 'silly string'],
index = readlineSync.keyInSelect(weapons, "which weapon?");
console.log("Ok, " + weapons[index] + 'to help you fight enemy');

var userName = readline.question("What is your name?");

console.log("Hi " + userName + "!, Welcome to Console RPG, made possible by our sponsor Readline-Syhc")

let walking = readline.keyIn("Press 'y' to keep going, 'n' to take a break: ", {limit: '$<y, n>' });
        
    if  (walking === "y") {
        const num = randomWalk();
        if (num % 2 === 0) {
            enemy()
        } else {
            randomWalk()
        }
    };
    if (num % 2 === 0) {
        console.log(index)
    }

