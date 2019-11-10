console.log(document)
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
console.log("vegetables: ", vegetables);
fruit.shift() 
console.log("fruit: ", fruit)

var indexOfOrange = fruit.indexOf("orange")
console.log(indexOfOrange)

fruit.push("1")
console.log("fruit: ", fruit)

console.log(vegetables.length)

vegetables.push("3")
console.log("vegetables: ", vegetables)

var food = vegetables.concat(fruit)
console.log("food: ", food)

var newFood = food.slice(4, 6)
console.log("newFood: ", newFood)
console.log("food:", food)
var newArray = food.splice(2 , 3)
console.log("newArray:" , newArray)

newArray.reverse()
console.log("newArray:", newArray)
var joinedArray = newArray.join()
console.log("joinedArray:" , joinedArray)