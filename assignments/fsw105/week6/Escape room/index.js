
const readline = require("readline-sync");
let choice = readline.question("Please select 1 - Put hand in hole, 2 - Try to randomly find find Key, 3 - Open door MUST HAVE KEY")
console.log(choice)

function key() {
    Math.round(Math.random() * 20)
}



if (choice == 1) {
    console.log("Bye Felecia!!!")
} 
else if (choice == 2) {
     if (Math.round(Math.random() % 2) === 0) {
        console.log("YOU HAVE ESCAPED!!")
     }
    else (console.log("No Key"))  
}
else if (choce == 3) console.log("YOU MUST HAVE KEY!!!")
    

