// // premitive data types
// let name = "John"; // string
// let age = 30; // number
// let isStudent = true; // boolean
// let address = null; // null
// let phoneNumber; // undefined

// // non-primitive data types
// let person = { name: "John", age: 30 }; // object
// let numbers = [1, 2, 3, 4, 5]; // array
// function greet() { console.log("Hello!"); } // function

// // summary of data types
// console.log("Primitive Data Types:");
// console.log("String:", typeof name);
// console.log("Number:", typeof age);
// console.log("Boolean:", typeof isStudent);
// console.log("Null:", typeof address);
// console.log("Undefined:", typeof phoneNumber);

// console.log("\nNon-Primitive Data Types:");
// console.log("Object:", typeof person);
// console.log("Array:", Array.isArray(numbers) ? "array" : typeof numbers);
// console.log("Function:", typeof greet);

// const id = Symbol("id"); // symbol
// const anotherId = Symbol("id"); // another symbol

// console.log("Symbol:", typeof id);
// console.log("Are symbols equal?", id === anotherId); // false, because each symbol is unique
// javascript is a dynamically typed language, which means that you don't have to 
// specify the data type of a variable when you declare it. 
// The data type is determined automatically based on the value assigned to the variable.   

/**
 * Non primitive data types are also known as reference types. 
 * They are more complex than primitive data types and can hold multiple values. 
 * Non-primitive data types include objects, arrays, and functions.
 * 
 * Array = [1, 2, 3, 4, 5] // An array is a collection of values that can be of any data type.
 * Object = { name: "John", age: 30 } // An object is a collection of key-value pairs, where each key is a string and the value can be of any data type.
 * Function = function greet() { console.log("Hello!"); } // A function is a block of code that can be executed when called. It can take parameters and return a value.
 */

/**
 * typeOf undefined = undefined
 * typeOf null = object
 * typeOf boolean = boolean
 * typeOf number = number
 * typeOf string = string
 * typeOf symbol = symbol
 * typeOf function = function
 * typeOf object = object
 */