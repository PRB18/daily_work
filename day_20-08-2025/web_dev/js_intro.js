// Day 01 - JavaScript Intro & Variables

// Variables in JS
// old way
var oldSchool = "I am var (function-scoped)";
console.log(oldSchool);

// modern way
let modern = "I am let (block-scoped)";
const constantValue = 42; // can't be reassigned

console.log(modern);
console.log(constantValue);

// Example: sum of two numbers
let a = prompt("enter a number");

let b = 20;
let sum = a + b;

console.log("Sum =", sum);
console.log(a);



//object
let person = {
    "name" : "rishi",
    "age" : 20,
    "job" : "unemployed",
    "student" : true
}

console.log(person);

alert("hello world");

let istrue = confirm("are you sure about that?");
console.log(istrue);


