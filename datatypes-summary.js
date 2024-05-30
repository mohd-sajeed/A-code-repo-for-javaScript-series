// Primitives

// 7 types : String, Number, Boolean,null, undefined,symbol, BigInt 

// Reference (Non primitive)

// Array, Objects, Functions

let score = 100
let scoreValue = 100.3

const isLogged = false
const outsideTemp = null

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);

const bigNumber = 15384679254562n

const heroes = ["shaktimaan", "anpanman", "doraman"]

let myObj = {
    name : "Sajid",
    age : 22
}

const myFunction = function(){
    // console.log("Hello World!");
}

// console.log(typeof anotherId);

// Stack (Primitive),  Heap(Non-Primitive)

let myYoutubeName = "Sajid-Technical"

let anotherName = myYoutubeName
anotherName = "ChaiaurCode"

console.log(myYoutubeName);
console.log(anotherName)

let userOne = {
    email:"user@gmail.com",
    upi:"xyz@axl"
}
let userTwo = userOne
userTwo.email = "Sajid@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);