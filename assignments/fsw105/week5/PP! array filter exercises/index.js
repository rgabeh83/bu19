// console.log(document)

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*const result = 
    array.filter(fiveAndGreaterOnly(number) {
    return number >= 5
console.log(result)*/
const result = array.filter(function(num){
    return num >= 5
})

console.log(result)

const es6Result = array.filter(num => {
    return num >= 5
})

console.log(es6Result)

const evensOnly = array.filter(function(num){
    if (num % 2 === 0)
    return true
})
console.log(evensOnly)

const words = ["dog", "wolf", "by", "family", "eaten", "camping"]

const fiveCharOrFewer = words.filter(function(string) {
    if (string.length <= 5)
    return true
})
console.log(fiveCharOrFewer)

const illuminatiPeople = ([
    {name: "Angelina Jolie", member: true},
    {name: "Eric Jones", member: false},
    {name: "Paris Hilton", member: true},
    {name: "Kanye West", member: false},
    {name: "Bob Ziroll", member: true}
])

const belongIlluminati = illuminatiPeople.filter(function(isAMember) {
    if (isAMember.member = true)
    return illuminatiPeople
}
)
console.log(belongIlluminati)

const people = ([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kanye West", age: 16},
    {name: "Bob Ziroll", age: 100}
])

const oldEnoughForMatrix = people.filter(function(ofAge) {
    if (ofAge.age <= 18)
    return people
}
)
console.log(oldEnoughForMatrix)


const doubleArray = array.map(function(num) {
    return num * 2
})

console.log(doubleArray)

const numToStrings = array.map(function(num) {
    return num.toString()
}
)
console.log(numToStrings)

const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

const capNames = names.map(function(upperCaseName) {
    return upperCaseName.toUpperCase()
}
)
console.log(capNames)



const namesOnly = people.map(function(num) {
    return num.name

}
)
console.log(namesOnly)

const matrixMessage = people.map(function(num) {
    if (num.age >= 18)
    return num.name + " can go to The Matrix"
    else return num.name + " cannot go to the movie"
})
console.log(matrixMessage)

const namesH1sAgesH2s = people.map(function(num, array) {
    return people.push(num.age)
})

console.log(namesH1sAgesH2s)

// const total = array.reduce(function(num) {
//     final += num
//     return final
// }



// const stringConcat = array.reduce(function(num) {
//     return num + " "
// }
// )
// console.log(stringConcat)


const voters = [
    {name: "Bob" , age: "30", voted: true},
    {name: "Jake", age: "32", voted: true},
    {name: "Kate", age: "25", voted: false},
    {name: "Sam", age: "20", voted: false},
    {name: "Phil", age: "21", voted: true},
    {name: "Ed", age: "55", voted: true},
    {name: "Tami", age: "54", voted: true},
    {name: "Mary", age: "31", voted: false},
    {name: "Becky", age: "43", voted: false},
    {name: "Joey", age: "41", voted: true}, 
    {name: "Jeff", age: "30", voted: true},
    {name: "Zack", age: "19", voted: false}
];


const totalVotes = voters.reduce(function(final, num) {
    if (num.voted) {
    final++
    }
    return final++
}, 0)
console.log(totalVotes)

const wishlist = [
    { title: "Tesla Model S", price: 90000},
    { title: "4 carat diamond ring", price: 45000},
    { title: "Fancy hacky sack", price: 5},
    { title: "Gold fidgit spinner", price: 2000},
    { title: "A Second Tesla Model S", price: 90000}
]

const allItems = wishlist.reduce(function(final, num) {
    
})