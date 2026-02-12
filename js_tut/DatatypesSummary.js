// Primitive DataTypes (goes into Stack->we get a copy)

// 7 types:
// String, Number, Boolean, Null, Symbol, undefined, BigInt
// (Note: JavaScript is Dynamically Typed)

const id = Symbol("123");

/*******************************************************/

// Non-primitive / Reference Data Types(goes into heap ->we get a reference)
// Array, Objects, Functions

const heroes = ["shaktiman", "SpiderMAN", "CaptainAmerica"]; // Array

// Object
let myObj = {
    name: "Vaagisha",
    course: "Btech",
    cgpa: 10
};

// Function in JS can be treated as a variable
const myFunction = function () {
    console.log("Hello JavaScript");
};

// Checking types
console.log(typeof id);              // symbol
console.log(typeof heroes);         // object
console.log(typeof myObj);          // object
console.log(typeof myFunction);     // function
console.log(typeof (BigInt));       //function
console.log(typeof (BigInt(10)));    //BigInt