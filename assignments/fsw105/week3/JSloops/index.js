/*var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
    
var count = 0;
for(var i = 0; officeItems.length; i++){
    if(officeItems[i] == "computer");
        count++;
}

*/

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },
    {
        name: "Madeline",
        age: 80,
        gender: "female"
    },
    {
        name: "Cheryl",
        age: 80,
        gender: "female"
    },
    {
        name: "Sam",
        age: 30,
        gender: "male"
    },
    {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]

for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is not allowed to go to the movie, you better not let him in!")
    }
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is not allowed to got to the movies, you better not let her in!")
    }
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is allowed to se1e the movie, so let him in!")
    }
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female"){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is allowed to go see the movie,so let her in!")
    }

        
}
var foo = new Array(100)

for (i = 0; i < 100; i++){
    if(i % 2) {
        console.log("even")
    }
    else console.log("odd")
}